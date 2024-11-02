import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { addEdge, useEdgesState, useNodesState, Edge, Node, Connection } from 'reactflow';
import { QuizData } from '../@types/types';

const useModelManager = (): any => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalNodeId, setModalNodeId] = useState<string | null>(null);  // Novo estado para o ID do nó
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [modelPreview, setModelPreview] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [modelsPerQuestion, setModelsPerQuestion] = useState<string[]>([]);

    const { register, control, handleSubmit, reset, watch, setValue } = useForm({
        defaultValues: {
            title: '',
            quizLink: '',
            quizId: '',
            userId: '',
            color: '',
            pages: [{
                question: '',
                header: '',
                footer: '',
                progress: '',
                correctOption: '',
                link: '',
                titleLink: '',
                title: '',
                description: '',
                options: [{
                    option: '',
                    description: '',
                    image: null,
                    video: '',
                }],
                modelo: '',
            }]
        }
    });

    const { fields: pages, append: appendPage } = useFieldArray({
        control,
        name: 'pages',
    });

    const handleModelSelect = (modelo: any) => {
        setModelsPerQuestion((prevModels) => {
            const updatedModels = [...prevModels];
            updatedModels[currentQuestionIndex] = modelo; // Atualiza o modelo da pergunta atual
            return updatedModels;
        });

        // Limpar opções ao selecionar novo modelo
        setValue(`pages.${currentQuestionIndex}.options`, [
            {
                option: '',
                description: '',
                image: null,
                video: '',
            }
        ]);

        // Atualiza o valor do campo "modelo" da pergunta atual no formulário
        setValue(`pages.${currentQuestionIndex}.modelo`, modelo); // Corrigido para atualizar o campo 'modelo'
    };

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const addQuestion = () => {
        const newNodeId = nodes.length.toString();
        const lastNodePosition = nodes[nodes.length - 1]?.position || { x: 50, y: 50 };

        // Criação do novo nó
        const newNode: Node = {
            id: newNodeId,
            type: 'questionCard',
            position: {
                x: lastNodePosition.x + 200,
                y: lastNodePosition.y,
            },
            data: {
                question: `Nova Pergunta ${newNodeId}`, // Texto da nova pergunta
                options: ['Opção A', 'Opção B', 'Opção C'], // Opções iniciais
                modelo: '', // Inicializa o modelo vazio
            },
        };

        // Atualiza o estado dos nós, incluindo o novo nó
        setNodes((nds) => [...nds, newNode]);

        // Adiciona a nova página somente se já existir uma página anterior
        if (nodes.length > 1) {
            appendPage({
                question: '', // A pergunta do novo nó
                header: '', // Campo inicial
                footer: '', // Campo inicial
                progress: '', // Campo inicial
                correctOption: '', // Campo inicial
                link: '', // Campo inicial
                titleLink: '', // Campo inicial
                title: '', // Campo inicial
                description: '', // Campo inicial
                options: [{
                    option: '',
                    description: '',
                    image: null,
                    video: '',
                }],
                modelo: '', // Campo modelo vazio
            });
        }

        // Se é o primeiro nó, adiciona a conexão com o nó inicial
        if (nodes.length === 1) {
            setEdges((eds) => [
                ...eds,
                {
                    id: `start-${newNodeId}`,
                    source: 'start',
                    target: newNodeId,
                },
            ]);
        }
    };

    const onSubmit: SubmitHandler<QuizData> = async (data) => {
        // Montar a estrutura quizData
        const quizData = {
            edges: edges.map((edge) => ({
                id: edge.id,
                source: edge.source,
                target: edge.target,
                data: data
            })),
        };

        console.log('Dados do Quiz:', quizData);
    };

    console.log(watch)

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
        watch
    };
};

export default useModelManager;
