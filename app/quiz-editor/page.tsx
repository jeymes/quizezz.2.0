'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Modal, Button, Box, Typography } from '@mui/material';
import Modelo02 from './models/modelo02';
import Modelo03 from './models/modelo03';
import Modelo01 from './models/modelos01/modelo01';
import Modelo01Cliente from './models/modelos01/modelo01Client';

const nodeTypes = {
    questionCard: ({ id, data }) => <QuestionCard id={id} data={data} />,
    startCard: StartCard,
};

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

    useEffect(() => {
        const startNode = {
            id: 'start',
            type: 'startCard',
            position: { x: 50, y: 50 },
            data: {},
        };
        setNodes((nds) => [startNode, ...nds]);
    }, [setNodes]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
        setModelPreview((prev) => [
            ...prev,
            { id: Date.now(), component: model.component, props: model.props },
        ]);
    };

    const handleModelClick = (index) => {
        setEditIndex(index);
        setTextInputModalOpen(true);
    };

    const handleImageUpload = (file) => {
        setImage(URL.createObjectURL(file));
        console.log('Imagem carregada:', file);
    };

    const handleDuplicateModel = (index) => {
        const modelToDuplicate = modelPreview[index];
        setModelPreview((prev) => [
            ...prev,
            { id: Date.now(), component: modelToDuplicate.component, props: modelToDuplicate.props },
        ]);
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
                        width: '50%',
                        height: '90%',
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{ flex: 1, paddingRight: 2 }}>
                        <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                            Modelos
                        </Typography>
                        {[{ name: 'Modelo 01', component: Modelo01, props: { imageUrl: image || 'https://via.placeholder.com/150' } },
                        { name: 'Modelo 02', component: Modelo02, props: { text: 'Texto Modelo 02' } },
                        { name: 'Modelo 03', component: Modelo03, props: { buttonText: 'Clique Aqui' } }].map((model, index) => (
                            <Button
                                key={index}
                                variant="outlined"
                                onClick={() => handleModelSelect(model)}
                                fullWidth
                                sx={{ marginBottom: 1 }}
                            >
                                {model.name}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flex: 1, paddingLeft: 2, textAlign: 'center' }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            Pré-visualização
                        </Typography>
                        <Box sx={{ border: '1px solid #ccc', padding: 2, borderRadius: 2, marginBottom: 1 }}>
                            {modelPreview.map((model, index) => (
                                <div key={model.id} style={{ marginBottom: '10px', position: 'relative' }}>
                                    <model.component {...model.props} />
                                    <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => handleModelClick(index)} // Editar
                                            sx={{ marginRight: 1 }}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => handleDuplicateModel(index)} // Duplicar
                                            sx={{ marginRight: 1 }}
                                        >
                                            Duplicar
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={() => handleDeleteModel(index)} // Deletar
                                        >
                                            Deletar
                                        </Button>
                                    </Box>
                                </div>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Modal>

            {/* Modal para o Upload de Imagem */}
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
                    {modelPreview[editIndex]?.component && modelPreview[editIndex]?.component === Modelo01 && (
                        <Modelo01Cliente onUpload={handleImageUpload} />
                    )}
                </Box>
            </Modal>
        </div>
    );
}

export default QuizEditor;
