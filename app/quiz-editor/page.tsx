'use client';

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

// Defina o modo para 'dark' ou 'light' conforme necessário
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
        editIndex,
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
                                bgcolor: 'background.paper', // Cor do fundo
                                border: '2px solid #ccc', // Borda opcional
                            }}
                        >
                            <button type='submit' >salvar</button>

                            <Header
                                title="Nova Pagina"
                                icon={AutoStories}
                                onClose={closeModal}
                            />

                            <Box sx={{
                                paddingInline: 2,
                                height: '85%',
                                display: 'flex',
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start'
                            }}>
                                <SidebarModels
                                    onModelSelect={handleModelSelect}
                                />
                                <ModelPreview
                                    modelsPerQuestion={modelsPerQuestion}
                                />


                            </Box>
                        </Box>
                    </form>

                </Modal>
            </div>
        </ThemeProvider>
    );
}
