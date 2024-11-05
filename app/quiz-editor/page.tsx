'use client'
import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Modal, Button, Box, createTheme, ThemeProvider } from '@mui/material';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import { AutoStories } from '@mui/icons-material';
import Header from './components/header';
import ModelPreview from './components/modelPreview';
import SidebarModels from './components/sidebarModels';
import Modelo01Edit from './models/models01/model01-edit';

const darkTheme = createTheme(getDesignTokens('dark'));

const nodeTypes = {
    questionCard: ({ id, data }: any) => <QuestionCard id={id} data={data} />,
    startCard: StartCard,
};

export default function QuizEditor() {
    const {
        modelsPerQuestion,
        edges,
        textInputModalOpen,
        pages,
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
        handleModelSelect,
        control,
        handleSubmit,
        onSubmit,
        nodes,
        modalNodeId,
        watchedData
    } = useModelManager();

    const [selectedModel, setSelectedModel] = useState<string | null>(null); // string para armazenar o modelo
    const [modelIndex, setModelIndex] = useState<number | null>(null); // número para armazenar o index do modelo

    // Função para selecionar o modelo e definir o índice
    const handleModelSelection = (model: string, index: number) => {
        setSelectedModel(model); // define o modelo selecionado
        setModelIndex(index); // define o índice do modelo
    };

    return (
        <ThemeProvider theme={darkTheme}>
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
                <Modal open={Boolean(modalNodeId)} onClose={closeModal}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '2%',
                                width: '60%',
                                height: '95%',
                                borderRadius: 2,
                                boxShadow: 24,
                                overflowY: 'auto',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                                gap: 2,
                                bgcolor: 'background.paper',
                                border: '2px solid #ccc',
                            }}
                        >
                            <Header
                                title="Nova Página"
                                icon={AutoStories}
                                onClose={closeModal}
                            />

                            <Box
                                sx={{
                                    paddingInline: 2,
                                    height: '85%',
                                    display: 'flex',
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                }}
                            >
                                {selectedModel ? (
                                    <Box sx={{ width: '30%' }}>
                                        {selectedModel === 'model01' && modelIndex !== null && (
                                            <Modelo01Edit
                                                index={modelIndex} // Passa o índice gerado dinamicamente
                                                onClose={() => setSelectedModel(null)}
                                                control={control}
                                                activePageIndex={modalNodeId}
                                            />
                                        )}
                                    </Box>
                                ) : (
                                    <SidebarModels onModelSelect={handleModelSelect} />
                                )}

                                <ModelPreview
                                    handleModelSelection={handleModelSelection}
                                    activePageIndex={modalNodeId}
                                    watchedData={watchedData}
                                />
                            </Box>
                        </Box>
                    </form>
                </Modal>
            </div>
        </ThemeProvider>
    );
}
