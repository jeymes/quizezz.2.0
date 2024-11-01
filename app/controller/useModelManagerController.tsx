import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';
import { addEdge, useEdgesState, useNodesState, Edge, Node, Connection, EdgeChange, NodeChange } from 'reactflow';
import { QuizData } from '../@types/types';

interface ModelPreview {
    component: React.FC<any>;
    isFullWidth: boolean;
    props?: any;
    model: string;
}

interface UseModelManager {
    modelPreview: ModelPreview[];
    handleModelSelect: (model: any) => void;
    edges: Edge[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setModelPreview: React.Dispatch<React.SetStateAction<ModelPreview[]>>;
    modalNodeId: string | null;  // Armazenar o ID do nó que está sendo editado
    textInputModalOpen: boolean;
    editIndex: any;
    nodes: Node[];
    setTextInputModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onConnect: (params: Edge | Connection) => void;
    onEdgesChange: (changes: EdgeChange[]) => void;
    onNodesChange: (changes: NodeChange[]) => void;
    addQuestion: () => void;
    openModal: (nodeId: string) => void;
    closeModal: () => void;
    handleDuplicateModel: any;
    handleModelClick: any;
    handleDeleteModel: any;
    register: UseFormRegister<QuizData>;
    control: any;
    handleSubmit: any;
    reset: any;
    setValue: any;
    onSubmit: any;
    pages: any;
}

const useModelManager = (): UseModelManager => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalNodeId, setModalNodeId] = useState<string | null>(null);  // Novo estado para o ID do nó
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [modelPreview, setModelPreview] = useState<any[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [image, setImage] = useState<string | null>(null);

    const { register, control, handleSubmit, reset, setValue, watch } = useForm<QuizData>({
        defaultValues: {
            title: '',
            quizLink: '',
            quizId: '',
            userId: '',
            color: '',
            pages: [],
        },
    });

    const { fields: pages, append: appendPage } = useFieldArray({
        control,
        name: 'pages',
    });

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const addQuestion = () => {
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
                question: `Nova Pergunta ${newNodeId}`,
                options: ['Opção A', 'Opção B', 'Opção C'],
            },
        };

        setNodes((nds) => [...nds, newNode]);

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

    const handleDuplicateModel = (index: number, modalNodeId: string) => {
        const modelToDuplicate = modelPreview[index];
        setModelPreview((prev) => [
            ...prev,
            {
                id: Date.now(), // Um novo ID para o modelo duplicado
                component: modelToDuplicate.component,
                props: { ...modelToDuplicate.props },
                isFullWidth: modelToDuplicate.isFullWidth,
                model: modelToDuplicate.model,
                modalNodeId, // Armazena o modalNodeId
            },
        ]);
    };

    const handleModelClick = (index: number, modalNodeId: string) => {
        const modelToEdit = modelPreview[index];
        setEditIndex(index);
        setModalNodeId(modalNodeId); // Armazena o modalNodeId
        setTextInputModalOpen(true);
    };

    const handleDeleteModel = (index: number, modalNodeId: string) => {
        setModelPreview((prev) => prev.filter((_, idx) => idx !== index));
        setTextInputModalOpen(false);
    };

    const handleModelSelect = (model: ModelPreview) => {
        setModelPreview((prev) => [
            ...prev,
            {
                component: model.component,
                props: { ...(model.props || {}), imageUrl: image || 'https://via.placeholder.com/150' },
                isFullWidth: model.isFullWidth,
                model: model.model
            },
        ]);
    };

    useEffect(() => {
        const startNode: Node = {
            id: 'start',
            type: 'startCard',
            position: { x: 50, y: 50 },
            data: { isStartNode: true },
        };
        setNodes((nds) => [startNode, ...nds]);
    }, [setNodes]);

    const saveElementsInOrder = (data: QuizData) => {
        const updatedElements = data.pages.map((page) => ({
            ...page,
            elements: page.elements.map((element) => ({
                ...element,
                // Adicione lógica adicional conforme necessário
            })),
        }));

        console.log({ ...data, pages: updatedElements });
    };

    const onSubmit: SubmitHandler<QuizData> = async (data) => {
        await saveElementsInOrder(data);
        console.log(data);
    };

    return {
        control,
        pages,
        handleSubmit,
        onSubmit,
        register,
        reset,
        setValue,
        modelPreview,
        handleModelSelect,
        edges,
        setNodes,
        setModelPreview,
        modalNodeId,  // Retorna o ID do nó para o modal
        textInputModalOpen,
        editIndex,
        nodes,
        setTextInputModalOpen,
        onConnect,
        onEdgesChange,
        onNodesChange,
        addQuestion,
        openModal,
        closeModal,
        handleDuplicateModel,
        handleModelClick,
        handleDeleteModel,
    };
};

export default useModelManager;
