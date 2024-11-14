'use client'
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import PagesCard from './components/pagesCard';
import StartCard from './components/startCard';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import ModelModal from './components/modelModal';
import { AutoAwesome } from '@mui/icons-material';
import HeaderDefault from './components/headerDefault';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '../zustand/StoreQuiz/store';

const darkTheme = createTheme(getDesignTokens('dark'));

const nodeTypes = {
    PagesCard: ({ id, data }: any) => <PagesCard id={id} data={data} />,
    StartCard: StartCard,
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

    const router = useRouter();
    const { quizData } = useQuizStore();

    return (
        <ThemeProvider theme={darkTheme}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <HeaderDefault
                    control={control}
                    onClose={() => router.back()}
                    onPreview={() => window.open(quizData.quizLink)}
                />

                <div style={{ height: '90vh', position: 'relative' }}>

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
            </form>
        </ThemeProvider>
    );
}
