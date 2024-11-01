'use client';

import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import QuestionCard from './components/questionCard';
import StartCard from './components/startCard';
import { Modal, Button, Box, Typography, Card, createTheme, ThemeProvider } from '@mui/material';
import Modelo01Edit from './models/models01/model01-edit';
import Modelo01Preview from './models/models01/model01-preview';
import ImageIcon from '@mui/icons-material/Image';
import ModelIcon from '@mui/icons-material/Widgets';
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
import { useFormController } from '../controller/useFormController';
import { getDesignTokens } from '../shared-theme/themePrimitives';

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
        icon: ImageIcon,
        isFullWidth: true,
        model: 'modelo01'
    },
    {
        name: 'Progress',
        component: Modelo02Preview,
        icon: ImageIcon,
        isFullWidth: true,
        model: 'modelo02'
    },
    {
        name: 'Titulo',
        component: Modelo03Preview,
        icon: ModelIcon,
        isFullWidth: true,
        model: 'modelo03'
    },
    {
        name: 'Image',
        component: Modelo04Preview,
        icon: ModelIcon,
        isFullWidth: false,
        model: 'modelo04'
    }
];

export default function QuizEditor() {
    const {
        modelPreview,
        edges,
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
        handleModelSelect
    } = useModelManager();

    const {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        addNewQuestion,
        onSubmit,
    } = useFormController();

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
                <Modal open={modalIsOpen} onClose={closeModal}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: '5%',
                                width: '60%',
                                height: '90%',
                                borderRadius: 2,
                                boxShadow: 24,
                                p: 3,
                                overflowY: 'auto',
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 2,
                                bgcolor: 'background.paper', // Cor do fundo
                                border: '2px solid #ccc', // Borda opcional
                            }}
                        >
                            {/* Modo de Seleção de Modelos */}
                            {!textInputModalOpen ? (
                                <Box sx={{ flex: 1, paddingRight: 2 }}>
                                    {modelOptions.map((model, index) => {
                                        const IconComponent = model.icon;
                                        return (
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
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                <IconComponent sx={{ marginRight: 1 }} />
                                                <Typography sx={{ fontSize: 15 }} variant="subtitle1">
                                                    {model.name}
                                                </Typography>
                                            </Card>
                                        );
                                    })}
                                </Box>
                            ) : (
                                // Modo de Edição
                                <Card
                                    sx={{
                                        width: '50%',
                                        padding: 2,
                                        position: 'relative',
                                    }}
                                >
                                    {/* Botão de Fechar */}
                                    <Button
                                        onClick={() => setTextInputModalOpen(false)}
                                        sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 8,
                                            minWidth: 'auto',
                                            padding: 0,
                                        }}
                                    >
                                        X
                                    </Button>

                                    {/* Renderização Condicional dos Componentes de Edição */}
                                    {modelPreview[editIndex]?.component === Modelo01Preview && (
                                        <Modelo01Edit control={control} index={nodes.length} optionIndex={editIndex} key={editIndex} />
                                    )}
                                    {modelPreview[editIndex]?.component === Modelo02Preview && <Modelo02Edit />}
                                    {modelPreview[editIndex]?.component === Modelo03Preview && <Modelo03Edit />}
                                    {modelPreview[editIndex]?.component === Modelo04Preview && <Modelo04Edit />}
                                </Card>
                            )}

                            {/* Seção de pré-visualização dos modelos */}
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    width: 360,
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        width: '100%',
                                        gap: 1,
                                    }}
                                >
                                    {modelPreview.map((model, index) => {
                                        const ModelComponent = model.component;
                                        return (
                                            <div
                                                key={model.model}
                                                style={{
                                                    borderRadius: 8,
                                                    marginBottom: '10px',
                                                    position: 'relative',
                                                    padding: 5,
                                                    width: model.isFullWidth ? '100%' : 'calc(50% - 10px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'darkgray', // Cor de fundo
                                                    transition: 'background-color 0.3s ease', // Efeito de transição
                                                }}
                                                onMouseEnter={(e: any) => {
                                                    e.currentTarget.querySelector('.icon-buttons').style.display = 'flex';
                                                    e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Muda a cor do fundo ao passar o mouse
                                                }}
                                                onMouseLeave={(e: any) => {
                                                    e.currentTarget.querySelector('.icon-buttons').style.display = 'none';
                                                    e.currentTarget.style.backgroundColor = 'darkgray'; // Retorna à cor original
                                                }}
                                            >
                                                <ModelComponent {...model.props} />

                                                <Box
                                                    className="icon-buttons"
                                                    sx={{
                                                        display: 'none',
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%, -50%)',
                                                        flexDirection: 'row',
                                                        gap: 1,
                                                        borderRadius: 2,
                                                        padding: 1,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Cor de fundo dos ícones
                                                        boxShadow: 2, // Sombra para destaque
                                                    }}
                                                >
                                                    <Button onClick={() => handleModelClick(index)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                                        <EditIcon />
                                                    </Button>
                                                    <Button onClick={() => handleDuplicateModel(index)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                                        <DuplicateIcon />
                                                    </Button>
                                                    <Button onClick={() => handleDeleteModel(index)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                                        <DeleteIcon />
                                                    </Button>
                                                </Box>
                                            </div>
                                        );
                                    })}
                                </Box>

                            </Card>
                        </Box>
                    </form>
                </Modal>
            </div>
        </ThemeProvider>
    );
}
