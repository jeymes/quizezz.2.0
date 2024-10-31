'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Modal, Button, Box, Typography, Avatar, Card } from '@mui/material';
import Modelo01Edit from './models/models01/model01-edit';
import Modelo01Preview from './models/models01/model01-preview';
import ImageIcon from '@mui/icons-material/Image';
import ModelIcon from '@mui/icons-material/Widgets';
import Modelo04Preview from './models/models04/model04-preview';
import Modelo04Edit from './models/models04/model04-edit';
import EditIcon from '@mui/icons-material/Edit';
import DuplicateIcon from '@mui/icons-material/ContentCopy'; // Você pode escolher outro ícone apropriado
import DeleteIcon from '@mui/icons-material/Delete';
import Modelo02Preview from './models/models02/model02-preview';
import Modelo02Edit from './models/models02/model02-edit';
import Modelo03Preview from './models/models03/model03-preview';
import Modelo03Edit from './models/models03/model03-edit';

const nodeTypes = {
    questionCard: ({ id, data }) => <QuestionCard id={id} data={data} />,
    startCard: StartCard,
};

const modelOptions = [
    {
        name: 'Cabeçalho',
        component: Modelo01Preview,
        icon: ImageIcon,
        isFullWidth: true
    },
    {
        name: 'Progress',
        component: Modelo02Preview,
        icon: ImageIcon,
        isFullWidth: true
    },
    {
        name: 'Titulo',
        component: Modelo03Preview,
        icon: ModelIcon,
        isFullWidth: true
    },
    {
        name: 'Image',
        component: Modelo04Preview,
        icon: ModelIcon,
        isFullWidth: false
    }
];

function QuizEditor() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [textInputModalOpen, setTextInputModalOpen] = useState(false);
    const [currentNodeId, setCurrentNodeId] = useState(null);
    const [modelPreview, setModelPreview] = useState([]);
    const [userInput, setUserInput] = useState({});
    const [image, setImage] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    useEffect(() => {
        const startNode = {
            id: 'start',
            type: 'startCard',
            position: { x: 50, y: 50 },
            data: {},
        };
        setNodes((nds) => [startNode, ...nds]);
    }, [setNodes]);

    const addQuestion = () => {
        const newNodeId = (nodes.length + 1).toString();
        const lastNodePosition = nodes[nodes.length - 1]?.position || { x: 50, y: 50 };

        const newNode = {
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

    const openModal = (nodeId) => {
        setCurrentNodeId(nodeId);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setUserInput({});
        setEditIndex(null);
        setModelPreview([]);
    };

    const handleModelSelect = (model) => {
        const props = model.props || {};
        setModelPreview((prev) => [
            ...prev,
            {
                id: Date.now(),
                component: model.component,
                props: { ...props, imageUrl: image || 'https://via.placeholder.com/150' },
                isFullWidth: model.isFullWidth, // Adicionando a propriedade isFullWidth aqui

            },
        ]);
    };

    const handleDuplicateModel = (index) => {
        const modelToDuplicate = modelPreview[index];
        setModelPreview((prev) => [
            ...prev,
            {
                id: Date.now(),
                component: modelToDuplicate.component,
                props: { ...modelToDuplicate.props },
                isFullWidth: modelToDuplicate.isFullWidth // Duplicando a propriedade isFullWidth também
            },
        ]);
    };

    const handleModelClick = (index) => {
        setEditIndex(index);
        setTextInputModalOpen(true);
    };

    const handleDeleteModel = (index) => {
        setModelPreview((prev) => prev.filter((_, idx) => idx !== index));
    };

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <Button
                variant="contained"
                onClick={addQuestion}
                style={{
                    position: 'absolute',
                    zIndex: 10,
                    padding: '10px',
                    top: 10,
                    left: 10,
                }}
            >
                Adicionar Pergunta
            </Button>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                snapToGrid={true}
                snapGrid={[15, 15]}
                onNodeClick={(event, node) => openModal(node.id)}
            >
                <Controls />
                <Background />
            </ReactFlow>

            {/* Modal Principal */}
            <Modal open={modalIsOpen} onClose={closeModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: '5%',
                        width: '60%',
                        height: '90%',
                        bgcolor: 'Background',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 2,
                        overflowY: 'auto',
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{ flex: 1, paddingRight: 2 }}
                    >

                        {modelOptions.map((model, index) => {
                            const IconComponent = model.icon;

                            return (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Card
                                        key={index}
                                        onClick={() => handleModelSelect(model)}
                                        sx={{
                                            marginBottom: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            padding: 1,
                                            width: 150,
                                            bgcolor: 'GrayText',
                                        }}
                                    >
                                        <IconComponent sx={{ color: 'white', marginRight: 1 }} />
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{ fontSize: 15, color: 'white' }}
                                                variant="subtitle1">{model.name}</Typography>
                                        </Box>
                                    </Card>
                                </div>
                            );
                        })}
                    </Box>

                    <Card
                        sx={{
                            justifyContent: 'space-between',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            width: 360,
                            bgcolor: 'GrayText',
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'transparent',
                                padding: 1,
                                borderRadius: 2,
                                marginBottom: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                width: '100%',
                            }}
                        >
                            {modelPreview.map((model, index) => {
                                const ModelComponent = model.component;

                                return (
                                    <div
                                        key={model.id}
                                        style={{
                                            borderRadius: 8,
                                            marginBottom: '10px',
                                            position: 'relative',
                                            backgroundColor: 'darkgray',
                                            padding: 5,
                                            overflow: 'hidden',
                                            // Define a largura com base na propriedade do modelo
                                            width: model.isFullWidth ? '100%' : 'calc(50% - 10px)', // Ajuste para garantir que não ultrapasse 100%
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.querySelector('.icon-buttons').style.display = 'flex')}
                                        onMouseLeave={(e) => (e.currentTarget.querySelector('.icon-buttons').style.display = 'none')}
                                    >
                                        <ModelComponent {...model.props} />

                                        <Box
                                            className="icon-buttons"
                                            sx={{
                                                display: 'none', // Oculta por padrão
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                flexDirection: 'row',
                                                gap: 1,
                                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                borderRadius: 2,
                                                padding: 1,
                                            }}
                                        >
                                            <Button
                                                onClick={() => handleModelClick(index)}
                                                sx={{ minWidth: 0, padding: 1, color: 'white' }}
                                            >
                                                <EditIcon />
                                            </Button>
                                            <Button
                                                onClick={() => handleDuplicateModel(index)}
                                                sx={{ minWidth: 0, padding: 1, color: 'white' }}
                                            >
                                                <DuplicateIcon />
                                            </Button>
                                            <Button
                                                onClick={() => handleDeleteModel(index)}
                                                sx={{ minWidth: 0, padding: 1, color: 'white' }}
                                            >
                                                <DeleteIcon />
                                            </Button>
                                        </Box>
                                    </div>
                                );
                            })}
                        </Box>
                    </Card>



                </Box>
            </Modal>

            {/* Modal edit */}
            <Modal open={textInputModalOpen} onClose={() => setTextInputModalOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {modelPreview[editIndex]?.component && modelPreview[editIndex]?.component === Modelo01Preview && (
                        <Modelo01Edit />
                    )}
                    {modelPreview[editIndex]?.component && modelPreview[editIndex]?.component === Modelo02Preview && (
                        <Modelo02Edit />
                    )}
                    {modelPreview[editIndex]?.component && modelPreview[editIndex]?.component === Modelo03Preview && (
                        <Modelo03Edit />
                    )}
                    {modelPreview[editIndex]?.component && modelPreview[editIndex]?.component === Modelo04Preview && (
                        <Modelo04Edit />
                    )}

                </Box>
            </Modal>
        </div>
    );
}

export default QuizEditor;
