import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { addEdge, useEdgesState, useNodesState, Edge, Node, Connection } from 'reactflow';
import { Models, QuizData } from '../@types/types';

const useModelManager = (): any => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalNodeId, setModalNodeId] = useState<string | null>(null);  // ID do nó que está em edição
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [modelPreview, setModelPreview] = useState<any[]>([]);
    const [modelsPerQuestion, setModelsPerQuestion] = useState<Models[]>([]);
    const [selectedModel, setSelectedModel] = useState<string | null>(null); // string para armazenar o modelo
    const [modelIndex, setModelIndex] = useState<number | null>(null); // número para armazenar o index do modelo

    const { register, control, handleSubmit, reset, watch, setValue } = useForm<QuizData>({
        defaultValues: {
            id: '',  // ID inicial
            title: '',
            description: '',
            quizLink: '',
            quizId: '',
            userId: '',
            createdAt: null, // ou new Date() conforme sua necessidade
            color: '',
            pages: []
        }
    });

    // Monitore os dados do formulário em tempo real
    const watchedData = watch();

    const { fields: pages, append: appendPage, update: updatePage } = useFieldArray({
        control,
        name: 'pages',
    });

    const handleModelSelect = (model: string, isFullWidth: boolean) => {
        if (modalNodeId === null) {
            console.log("modalNodeId é nulo, nada a ser feito.");
            return; // Verifica se existe um nó aberto
        }

        // Obtém o índice da página a partir do modalNodeId
        const pageIndex = parseInt(modalNodeId);
        console.log("Índice da página (pageIndex):", modalNodeId);

        // Verifica se o índice da página é válido
        if (!watchedData.pages || !watchedData.pages[pageIndex]) {
            console.log("Índice da página é inválido ou a página não existe:", pageIndex);
            return;
        }

        // Pega os modelos atuais do formulário para essa página
        const currentModels = watchedData.pages[pageIndex].models || [];
        console.log("Modelos atuais para a página:", currentModels);

        // Cria um novo modelo com as propriedades necessárias
        const newModel: Models = {
            model,
            isFullWidth,
            options: {
                option: '', // Inicialização do valor
                description: '',
                image: null,
                video: '',
            },
        };

        // Adiciona o novo modelo ao array existente de modelos
        const updatedModels = [...currentModels, newModel];

        // Atualiza o campo "models" no formulário com o array atualizado
        setValue(`pages.${pageIndex}.models`, updatedModels);

        // Atualiza o estado local para refletir a nova lista de modelos
        setModelsPerQuestion(updatedModels);

        console.log("Modelos atualizados para a página:", updatedModels);
    };

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const addQuestion = () => {
        appendPage({
            question: '',
            header: '',
            footer: '',
            progress: '',
            correctOption: '',
            link: '',
            titleLink: '',
            title: '',
            description: '',
            image: '',
            models: [],
        });

        const newNodeId = nodes.length.toString();
        const lastNodePosition = nodes[nodes.length - 1]?.position || { x: 50, y: 50 };

        const newNode: Node = {
            id: newNodeId,
            type: 'questionCard',
            position: {
                x: lastNodePosition.x + 200,
                y: lastNodePosition.y,
            },
            data: {
                id: newNodeId,
                question: `Pergunta ${newNodeId}`,
                options: [
                    { id: '2', label: 'Opção A' },
                    { id: '3', label: 'Opção B' },
                    { id: '4', label: 'Opção C' },
                ],
                model: '',
            },
        };

        setNodes((nds) => [...nds, newNode]);

        // Conecta o novo nó ao startNode, mas só para o primeiro nó criado
        if (nodes.length === 1) {
            setEdges((eds) => [
                ...eds,
                {
                    id: `start-to-${newNodeId}`,
                    source: 'start',
                    target: newNodeId,
                },
            ]);
        }
    };

    const onSubmit: SubmitHandler<QuizData> = async (data) => {
        const filteredEdges = edges.filter(edge => edge.source !== 'start' && edge.target !== 'start');
        const filteredNodes = nodes.filter(node => node.id !== 'start');

        const edgesWithPages = filteredEdges.map((edge) => {
            const sourceIndex = parseInt(edge.source);
            const targetIndex = parseInt(edge.target);

            const sourcePage = data.pages[sourceIndex];
            const targetPage = data.pages[targetIndex];

            return {
                ...edge,
                sourcePage: sourcePage || null,
                targetPage: targetPage || null,
            };
        });

        const combinedData = {
            edges: edgesWithPages,
            nodes: filteredNodes,
            title: data.title,
            description: data.description,
            quizLink: data.quizLink,
            quizId: data.quizId,
        };

        console.log('Dados do Quiz salvos como JSON:', combinedData);
    };

    const openModal = (nodeId: string) => {
        const node = nodes.find((node) => node.id === nodeId);
        if (node && node.data.isStartNode) {
            return; // Não abre o modal se for o startNode
        }

        // Armazena o ID do nó - 1 para usar como índice direto da página
        setModalNodeId((parseInt(nodeId) - 1).toString());
    };

    const closeModal = () => {
        setModalNodeId(null);  // Reseta o ID ao fechar o modal
        setSelectedModel(null)
    };

    // Função para selecionar o modelo e definir o índice
    const handleModelSelection = (model: string, index: number) => {
        setSelectedModel(model); // define o modelo selecionado
        setModelIndex(index); // define o índice do modelo
    };

    useEffect(() => {
        const startNode: Node = {
            id: 'start',
            type: 'startCard',
            position: { x: 50, y: 50 },
            data: { isStartNode: true },
        };

        setNodes((nds) => {
            // Verifica se o startNode já foi adicionado, para evitar duplicação
            const existingStartNode = nds.find((node) => node.id === 'start');
            if (!existingStartNode) {
                return [startNode, ...nds];
            }
            return nds;
        });
    }, [setNodes]);

    return {
        selectedModel,
        handleModelSelection,
        modelIndex,
        setSelectedModel,
        control,
        pages,
        handleSubmit,
        onSubmit,
        register,
        reset,
        setValue,
        modelPreview,
        edges,
        setNodes,
        setModelPreview,
        modalNodeId,
        textInputModalOpen,
        nodes,
        setTextInputModalOpen,
        onConnect,
        onEdgesChange,
        onNodesChange,
        addQuestion,
        openModal,
        closeModal,
        handleModelSelect,
        watchedData,
        modelsPerQuestion
    };
};

export default useModelManager;
// const handleNext = () => {
//     const nextEdge = edgesWithPages.find(edge => edge.source === currentEdge.target);
//     if (nextEdge) {
//         setCurrentEdge(nextEdge);
//         setCurrentPage(nextEdge.targetPage); // Agora você pode usar o targetPage diretamente
//     }
// };
