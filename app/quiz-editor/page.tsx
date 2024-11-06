'use client'
import React from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { AppBar, Box, Button, createTheme, IconButton, InputAdornment, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import ModelModal from './components/modelModal';
import { AppRegistration, ArrowBack, ArrowLeft, AutoAwesome, AutoFixNormal, Cloud, EditAttributes, EditNote, PlayArrow, Polyline, Search } from '@mui/icons-material';
import { ArrowLeftIcon } from '@mui/x-date-pickers';
import { Play } from 'next/font/google';
import { Controller } from 'react-hook-form';

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

            <AppBar position="static">
                <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>

                    {/* Botão de Voltar e Campo de Entrada */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => { }}
                        >
                            <ArrowLeftIcon sx={{ fontSize: '30px' }} />
                        </IconButton>

                        <Controller
                            name={`title`}
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    name={`defaultValues.title`}
                                    variant="outlined"
                                    placeholder="Título do Quiz"
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AppRegistration />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Box>

                    {/* Botões de Ação à Direita */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            color="inherit"
                            variant="outlined"
                            startIcon={<PlayArrow />}
                            onClick={() => { }}
                        >
                            Visualizar
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            startIcon={<Cloud />}
                            onClick={() => { }}
                        >
                            Publicar
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

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
