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
            pages: [{
                question: '',
                correctOption: '',
                link: '',
                titleLink: '',
                title: '',
                description: '',
                image: '', // ou null
                header: '',
                footer: '',
                progress: '',
                models: [{
                    model: '', // Inicialização do modelo
                    isFullWidth: false, // Valor padrão
                    options: {
                        option: '', // Inicialização com valor padrão
                        description: '',
                        image: null,
                        video: '',
                    },
                }],
            }]
        }
    });
    // Monitore os dados do formulário em tempo real
    const watchedData = watch();

    const { fields: pages, append: appendPage, update: updatePage } = useFieldArray({
        control,
        name: 'pages',
    });

    const handleModelSelect = (model: string, isFullWidth: boolean) => {
        if (modalNodeId === null) return; // Verifica se existe um nó aberto

        setModelsPerQuestion((prevModels) => {
            const updatedModels: Models[] = [...prevModels];

            // Criação de um novo modelo com todas as propriedades necessárias
            const newModel: Models = {
                model,
                isFullWidth,
                options: {
                    option: '',      // Inicialização do valor
                    description: '',
                    image: null,
                    video: '',
                },
            };

            updatedModels.push(newModel);

            const pageIndex = parseInt(modalNodeId);
            setValue(`pages.${pageIndex}.models`, updatedModels); // Atualiza o campo "models" no formulário

            return updatedModels;
        });

        // Atualiza o campo "modelo" no formulário
        setValue(`pages.${parseInt(modalNodeId)}.models`, model as any);
    };

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const addQuestion = () => {
        // Cria uma nova pergunta com dados iniciais
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
            image: '', // Adicione se necessário
            models: [{
                model: '', // Inicialização do modelo
                isFullWidth: false, // Valor padrão
                options: {
                    option: '',
                    description: '',
                    image: null,
                    video: '',
                },
            }],
        });

        // Cria um novo nó para o React Flow
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
                model: '', // Ajuste se necessário
            },
        };

        setNodes((nds) => [...nds, newNode]);

        // Adiciona a conexão entre o nó inicial e o novo nó
        if (nodes.length === 1) {
            setEdges((eds) => [
                ...eds,
                {
                    id: `start`,
                    source: 'start',
                    target: newNodeId,
                },
            ]);
        }
    };

    const onSubmit: SubmitHandler<QuizData> = async (data) => {
        console.log('Dados do Quiz:', data);
        // Aqui você pode processar os dados do quiz conforme necessário
    };

    const openModal = (nodeId: string) => {
        const node = nodes.find((node) => node.id === nodeId);
        if (node && node.data.isStartNode) {
            return; // Não abre o modal se for o startNode
        }
        setModalNodeId(nodeId);  // Armazena o ID do nó que está sendo editado
    };

    const closeModal = () => {
        setModalNodeId(null);  // Reseta o ID ao fechar o modal
    };

    useEffect(() => {
        const startNode: Node = {
            id: 'start',
            type: 'startCard',
            position: { x: 50, y: 50 },
            data: { isStartNode: true },
        };
        setNodes((nds) => [startNode, ...nds.filter(node => node.id !== 'start')]);
    }, [setNodes]);

    return {
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
