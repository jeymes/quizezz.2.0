'use client'
import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import PagesCard from './components/pagesCard';
import StartCard from './components/startCard';
import { Box, Button, createTheme, IconButton, ThemeProvider } from '@mui/material';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import ModelModal from './components/modelModal';
import { AutoAwesome, Delete, Edit } from '@mui/icons-material';
import HeaderDefault from './components/headerDefault';

const darkTheme = createTheme(getDesignTokens('dark'));

const nodeTypes = {
    PagesCard: ({ id, data }) => <OverlayCard id={id} data={data} />,
    StartCard: StartCard,
};
// Componente de overlay com botões de ação
const OverlayCard = ({ id, data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = () => {
        console.log(`Excluir cartão com ID: ${id}`);
        // Lógica para excluir o cartão
    };

    const handleEdit = () => {
        console.log(`Editar cartão com ID: ${id}`);
        // Lógica para editar o cartão
    };

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                position: 'relative',
            }}
        >
            {/* Faixa acima do card com botões */}
            {isHovered && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: -40, // Ajuste a posição para aparecer acima do card
                        left: 0,
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Cor de fundo da faixa
                        color: 'white',
                        padding: '5px 10px',
                        display: 'flex',
                        justifyContent: 'space-between', // Espaçamento entre os botões
                        alignItems: 'center',
                        zIndex: 2,
                    }}
                >
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={handleEdit}
                        startIcon={<Edit />}
                    >
                        Editar
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={handleDelete}
                        startIcon={<Delete />}
                    >
                        Excluir
                    </Button>
                </Box>
            )}

            {/* Componente principal do card */}
            <PagesCard id={id} data={data} />
        </Box>
    );
};

export default function QuizEditor() {

    const {
        edges,
        onConnect,
        onEdgesChange,
        onNodesChange,
        addQuestion,
        openModal,
        closeModal,
        handleDuplicateModel,
        handleModelClick,
        handleDeleteModel,
        handleModelSelect,
        control,
        handleSubmit,
        onSubmit,
        nodes,
        modalNodeId,
        watchedData,
        selectedModel,
        handleModelSelection,
        modelIndex,
        setSelectedModel,
        deleteModel,
        duplicateModel,
    } = useModelManager();

    return (
        <ThemeProvider theme={darkTheme}>

            <HeaderDefault
                control={control}
                onClose={() => { }}
                onPreview={() => { }}
                onPublish={() => { }}
            />

            <div style={{ height: '100vh', position: 'relative' }}>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={addQuestion}
                    startIcon={<AutoAwesome />}
                    style={{
                        position: 'absolute',
                        zIndex: 10,
                        padding: '10px',
                        top: 10,
                        left: 20,
                    }}
                >
                    Criar Página
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
                <ModelModal
                    handleModelSelection={handleModelSelection}
                    closeModal={closeModal}
                    control={control}
                    deleteModel={deleteModel}
                    duplicateModel={duplicateModel}
                    handleModelSelect={handleModelSelect}
                    handleSubmit={handleSubmit}
                    modalNodeId={modalNodeId}
                    modelIndex={modelIndex}
                    onSubmit={onSubmit}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                    watchedData={watchedData}
                />

            </div>
        </ThemeProvider>
    );
}
