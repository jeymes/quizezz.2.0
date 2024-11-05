'use client'
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import ModelModal from './components/modelModal';

const darkTheme = createTheme(getDesignTokens('dark'));

const nodeTypes = {
    questionCard: ({ id, data }: any) => <QuestionCard id={id} data={data} />,
    startCard: StartCard,
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
