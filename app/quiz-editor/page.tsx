'use client';

import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Modal, Button, Box, Typography, Card, createTheme, ThemeProvider } from '@mui/material';
import Modelo01Edit from './models/models01/model01-edit';
import Modelo01Preview from './models/models01/model01-preview';
import Modelo04Preview from './models/models04/model04-preview';
import Modelo04Edit from './models/models04/model04-edit';
import EditIcon from '@mui/icons-material/Edit';
import DuplicateIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import Modelo02Preview from './models/models02/model02-preview';
import Modelo02Edit from './models/models02/model02-edit';
import Modelo03Preview from './models/models03/model03-preview';
import Modelo03Edit from './models/models03/model03-edit';
import useModelManager from '../controller/useModelManagerController';
import { getDesignTokens } from '../shared-theme/themePrimitives';
import { AutoStories, Commit, Photo, PhotoLibrary, Title } from '@mui/icons-material';
import Header from './components/header';
import ModelModal from './components/modelModal';

// Defina o modo para 'dark' ou 'light' conforme necessário
const darkTheme = createTheme(getDesignTokens('dark'));

const nodeTypes = {
    questionCard: ({ id, data }: any) => <QuestionCard id={id} data={data} />,
    startCard: StartCard,
};

const modelOptions = [
    {
        name: 'Cabeçalho',
        component: Modelo01Preview,
        icon: PhotoLibrary,
        isFullWidth: true,
        model: 'modelo01'
    },
    {
        name: 'Progress',
        component: Modelo02Preview,
        icon: Commit,
        isFullWidth: true,
        model: 'modelo02'
    },
    {
        name: 'Titulo',
        component: Modelo03Preview,
        icon: Title,
        isFullWidth: true,
        model: 'modelo03'
    },
    {
        name: 'Image',
        component: Modelo04Preview,
        icon: Photo,
        isFullWidth: false,
        model: 'modelo04'
    }
];

export default function QuizEditor() {
    const {
        modelPreview,
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
                {/* < AppBar position="static" >
                            <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ gap: 5, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                    <PhotoLibrary />
                                    <Typography variant="body2">Pagina</Typography>
                                </div>
                                <IconButton edge="end" color="inherit" onClick={() => { }}>
                                    <Close />
                                </IconButton>
                            </Toolbar>
                        </ AppBar> */}
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
                    modalNodeId={modalNodeId}
                    closeModal={closeModal}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    modelOptions={modelOptions}
                    modelPreview={modelPreview}
                    handleModelSelect={handleModelSelect}
                    textInputModalOpen={textInputModalOpen}
                    setTextInputModalOpen={setTextInputModalOpen}
                    handleModelClick={handleModelClick}
                    handleDuplicateModel={handleDuplicateModel}
                    handleDeleteModel={handleDeleteModel}
                    editIndex={editIndex}
                    control={control}
                    pages={pages}
                />

            </div>
        </ThemeProvider>
    );
}
