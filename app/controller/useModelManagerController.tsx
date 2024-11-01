import { useCallback, useEffect, useState } from 'react';
import { addEdge, useEdgesState, useNodesState, Edge, Node, Connection, EdgeChange, NodeChange } from 'reactflow';

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
    modalIsOpen: boolean;
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
    handleDuplicateModel: (index: number) => void;
    handleModelClick: (index: number) => void;
    handleDeleteModel: (index: number) => void;
}

const useModelManager = (): UseModelManager => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [modelPreview, setModelPreview] = useState<any[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [image, setImage] = useState<string | null>(null);

    const onConnect = useCallback(
        (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const addQuestion = () => {
        const newNodeId = (nodes.length + 1).toString();
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
        setEdges((eds) => [
            ...eds,
            {
                id: `start-${newNodeId}`,
                source: 'start',
                target: newNodeId,
            },
        ]);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setEditIndex(null);
        setModelPreview([]);
    };

    const handleDuplicateModel = (index: number) => {
        const modelToDuplicate = modelPreview[index];
        setModelPreview((prev) => [
            ...prev,
            {
                id: Date.now(),
                component: modelToDuplicate.component,
                props: { ...modelToDuplicate.props },
                isFullWidth: modelToDuplicate.isFullWidth,
                model: modelToDuplicate.model,
            },
        ]);
    };

    const handleModelClick = (index: number) => {
        const modelToEdit = modelPreview[index];
        setEditIndex(index);
        setTextInputModalOpen(true);
    };

    const handleDeleteModel = (index: number) => {
        setModelPreview((prev) => prev.filter((_, idx) => idx !== index));
        setTextInputModalOpen(false)
    };

    const handleModelSelect = (model: ModelPreview) => {
        const props = model.props || {};
        setModelPreview((prev) => [
            ...prev,
            {
                component: model.component,
                props: { ...props, imageUrl: image || 'https://via.placeholder.com/150' },
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
            data: {},
        };
        setNodes((nds) => [startNode, ...nds]);
    }, [setNodes]);

    return {
        modelPreview,
        handleModelSelect,
        edges,
        setNodes,
        setModelPreview,
        modalIsOpen,
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
