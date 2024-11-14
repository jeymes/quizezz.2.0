import { useCallback, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { addEdge, useEdgesState, useNodesState, Edge, Node, Connection } from 'reactflow';
import { Models, QuizData } from '../../@types/types';
import { useQuizStore } from '../zustand/StoreQuiz/store';
import { v4 as uuidv4 } from 'uuid';
import { useAuthStore } from '../zustand/StoreAuth/store';
import { useStoreCardFlowQuiz } from '../zustand/StoreCardFlowQuiz/store';

const useModelManager = (): any => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalNodeId, setModalNodeId] = useState<string | null>(null);  // ID do nó que está em edição
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [modelPreview, setModelPreview] = useState<any[]>([]);
    const [modelsPerQuestion, setModelsPerQuestion] = useState<Models[]>([]);
    const [selectedModel, setSelectedModel] = useState<string | null>(null); // string para armazenar o modelo
    const [modelIndex, setModelIndex] = useState<number | null>(null); // número para armazenar o index do modelo

    const { setQuizData } = useQuizStore();
    const { userInfo } = useAuthStore();

    const { register, control, handleSubmit, reset, watch, setValue } = useForm<QuizData>({
        defaultValues: {
            id: uuidv4(),
            title: '',
            quizLink: '',
            createdAt: new Date(),
            color: '',
            pages: []
        }
    });

    // Monitore os dados do formulário em tempo real
    const { setQuizFlowData } = useStoreCardFlowQuiz();

    const watchedData = watch();

    useEffect(() => {
        setQuizFlowData(watchedData as any); // você pode tipar o `watchedData` conforme necessário
    }, [watch]);

    // console.log('watchedData', watchedData)

    const { fields: pages, append: appendPage, update: updatePage, remove } = useFieldArray({
        control,
        name: 'pages',
    });

    // Função para seleciona um modelo
    const handleModelSelect = (model: string, isFullWidth: boolean) => {
        if (modalNodeId === null) {
            console.log("modalNodeId é nulo, nada a ser feito.");
            return; // Verifica se existe um nó aberto
        }

        // Obtém o índice da página a partir do modalNodeId
        const pageIndex = parseInt(modalNodeId);
        // console.log("Índice da página (pageIndex):", modalNodeId);

        // Verifica se o índice da página é válido
        if (!watchedData.pages || !watchedData.pages[pageIndex]) {
            console.log("Índice da página é inválido ou a página não existe:", pageIndex);
            return;
        }

        // Pega os modelos atuais do formulário para essa página
        const currentModels = watchedData.pages[pageIndex].models || [];
        // console.log("Modelos atuais para a página:", currentModels);

        // Cria um novo modelo com as propriedades necessárias
        const newModel: Models = {
            model,
            isFullWidth,
            options: {
                option: '', // Inicialização do valor
                description: '',
                image: null,
                video: '',
                totalPages: ''
            },
        };

        // Adiciona o novo modelo ao array existente de modelos
        const updatedModels = [...currentModels, newModel];

        // Atualiza o campo "models" no formulário com o array atualizado
        setValue(`pages.${pageIndex}.models`, updatedModels);

        // Atualiza o estado local para refletir a nova lista de modelos
        setModelsPerQuestion(updatedModels);

        // console.log("Modelos atualizados para a página:", updatedModels);
    };

    // Função para conectar as perguntas
    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    // Função para criar uma nova pergunta
    const addQuestion = () => {
        appendPage({
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
            type: 'PagesCard',
            position: {
                x: lastNodePosition.x + 400,
                y: lastNodePosition.y,
            },
            data: {
                id: newNodeId,
                page: `Página ${newNodeId}`,
                data: watchedData,
                model: '',
                deletePage,
                openModal
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

    // Função para deletar uma página inteira
    const deletePage = (nodeId: any) => {
        console.log(nodeId);

        // Remove a página do formulário
        remove(nodeId - 1);

        // Atualiza os nós removendo o nó correspondente à página excluída
        setNodes((currentNodes) =>
            currentNodes.filter((node) => node.id !== String(nodeId)) // Corrige a comparação de id
        );

        // Remove as arestas associadas ao nó removido
        setEdges((currentEdges) =>
            currentEdges.filter(
                (edge) => edge.source !== String(nodeId) && edge.target !== String(nodeId)
            )
        );

        console.log(`Página no índice ${nodeId} foi removida com sucesso.`);
    };

    // Função para abrir o modal
    const openModal = (nodeId: string) => {
        const node = nodes.find((node) => node.id === nodeId);
        if (node && node.data.isStartNode) {
            return; // Não abre o modal se for o startNode
        }

        // Armazena o ID do nó - 1 para usar como índice direto da página
        setModalNodeId((parseInt(nodeId) - 1).toString());
    };

    // Função para fecha o modal
    const closeModal = () => {
        setModalNodeId(null);  // Reseta o ID ao fechar o modal
        setSelectedModel(null)
    };

    // Função para selecionar o modelo e abrir o edit modelo
    const handleModelSelection = (model: string, index: number) => {
        setSelectedModel(model); // define o modelo selecionado
        setModelIndex(index); // define o índice do modelo
    };

    // Função para deletar o modelo pelo index
    const deleteModel = (index: number) => {
        // Obtém o índice da página a partir do modalNodeId
        const pageIndex = parseInt(modalNodeId as any);

        // Verifica se o índice é válido
        if (!watchedData.pages || !watchedData.pages[pageIndex]?.models) {
            console.log("Índice da página é inválido ou não existem modelos para deletar:", pageIndex);
            return;
        }

        // Obtém os modelos atuais da página
        const currentModels = watchedData.pages[pageIndex].models;

        // Remove o modelo pelo índice
        const updatedModels = currentModels.filter((_, i) => i !== index);

        // Atualiza o campo "models" no formulário com o array atualizado
        setValue(`pages.${pageIndex}.models`, updatedModels);
        setModelsPerQuestion(updatedModels); // Atualiza o estado local
        // console.log("Modelo deletado. Modelos atualizados:", updatedModels);
    };

    // Função para adicionar um modelo vazio com a mesma estrutura após o índice fornecido
    const duplicateModel = (index: number) => {
        // Obtém o índice da página a partir do modalNodeId
        const pageIndex = parseInt(modalNodeId as any);

        // Verifica se o índice é válido
        if (!watchedData.pages || !watchedData.pages[pageIndex]?.models) {
            console.log("Índice da página é inválido ou não existem modelos para duplicar:", pageIndex);
            return;
        }

        // Obtém os modelos atuais da página
        const currentModels = watchedData.pages[pageIndex].models;

        // Verifica se o modelo existe no índice fornecido
        if (currentModels.length <= index) {
            console.log("Modelo não encontrado no índice:", index);
            return;
        }

        // Duplica a estrutura do modelo com valores vazios
        const modelToDuplicate = currentModels[index];
        const newModel = {
            ...modelToDuplicate,
            model: modelToDuplicate.model || '', // Mantém a chave mas limpa o conteúdo
            isFullWidth: modelToDuplicate.isFullWidth || false, // Usa valor padrão se não existir
            options: {
                option: '', // Limpa as opções, se existirem
                description: '',
                image: null,
                video: '',
                totalPages: ''
            },
        };

        // Adiciona o novo modelo vazio após o modelo atual
        const updatedModels = [
            ...currentModels.slice(0, index + 1),
            newModel,
            ...currentModels.slice(index + 1)
        ];

        // Atualiza o campo "models" no formulário com o array atualizado
        setValue(`pages.${pageIndex}.models`, updatedModels);
        setModelsPerQuestion(updatedModels); // Atualiza o estado local
        console.log("Novo modelo vazio adicionado após o índice fornecido. Modelos atualizados:", updatedModels);
    };

    const generateQuizUrl = (userId: string, quizId: string) => {
        return `${window.location.origin}/quiz/${userId}/${quizId}`;
    };

    // Função para gerar uma URL de visualização a partir de um File ou Blob
    const createImageURL = (fileOrBlob: any) => {
        return URL.createObjectURL(fileOrBlob);
    };

    // Função para processar todas as imagens no watchedData e converter para URLs
    const convertImagesToURLs = async (data: any) => {
        const updatedData = { ...data };
        for (const page of updatedData.pages) {
            for (const model of page.models) {
                if (model.options.image) {
                    if (model.options.image instanceof File || model.options.image instanceof Blob) {
                        // Converte File ou Blob para uma URL
                        model.options.image = createImageURL(model.options.image);
                    } else if (typeof model.options.image === 'string') {
                        // Se já for uma URL, mantenha-a como está
                        console.log("Imagem já está no formato de URL:", model.options.image);
                    }
                }
            }
        }
        return updatedData;
    };

    // Função para salvar o form
    const onSubmit: SubmitHandler<QuizData> = async () => {
        try {
            // Filtra arestas inválidas
            const filteredEdges = edges.filter(edge => edge.source !== 'start' && edge.target !== 'start');
            const edgesWithPages = filteredEdges.map((edge) => ({ ...edge }));

            const userId = userInfo?.uid ? String(userInfo.uid) : '';
            const quizId = watchedData.id;

            if (!userId || !quizId) {
                throw new Error("User ID ou Quiz ID não estão definidos corretamente.");
            }

            const quizUrl = generateQuizUrl(userId, quizId);

            // Converte as imagens em blobs antes de criar o combinedData
            const updatedWatchedData = await convertImagesToURLs(watchedData);

            // Cria o objeto final combinedData usando o watchedData com blobs
            const combinedData = {
                edges: edgesWithPages,
                ...updatedWatchedData,
                quizLink: quizUrl
            };

            setQuizData(combinedData);  // Armazena o estado do quiz atualizado com blobs de imagens
            console.log('Dados do Quiz salvos como JSON com blobs de imagens:', combinedData);

        } catch (error) {
            console.error('Erro ao salvar dados do quiz:', error);
        }
    };

    useEffect(() => {
        const startNode: Node = {
            id: 'start',
            type: 'StartCard',
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
        deletePage,
        deleteModel,
        duplicateModel,
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

