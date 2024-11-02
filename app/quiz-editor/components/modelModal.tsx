// ModelModal.tsx
import React from 'react';
import { Box, Modal, Button, Card, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DuplicateIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import { AutoStories } from '@mui/icons-material';
import Header from './header';
import Modelo01Preview from '../models/models01/model01-preview';
import Modelo01Edit from '../models/models01/model01-edit';
import Modelo02Preview from '../models/models02/model02-preview';
import Modelo02Edit from '../models/models02/model02-edit';
import Modelo03Preview from '../models/models03/model03-preview';
import Modelo04Preview from '../models/models04/model04-preview';
import Modelo03Edit from '../models/models03/model03-edit';
import Modelo04Edit from '../models/models04/model04-edit';

const ModelModal = ({
    modalNodeId,
    closeModal,
    handleSubmit,
    onSubmit,
    modelOptions,
    modelPreview,
    handleModelSelect,
    textInputModalOpen,
    setTextInputModalOpen,
    handleModelClick,
    handleDuplicateModel,
    handleDeleteModel,
    editIndex,
    control,
    pages,
}: any) => {
    return (
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
                    <button type="submit">Salvar</button>

                    <Header
                        title="Nova Pagina"
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
                        {/* Modo de Seleção de Modelos */}
                        {!textInputModalOpen ? (
                            <Box sx={{ flex: 1, paddingRight: 2 }}>
                                {modelOptions.map((model: any, index: any) => {
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
                                    width: '52%',
                                    position: 'relative',
                                    boxShadow: 'none',
                                }}
                            >
                                {/* Renderização Condicional dos Componentes de Edição */}
                                {modelPreview[editIndex]?.component === Modelo01Preview && (
                                    <Modelo01Edit
                                        onClose={() => setTextInputModalOpen(false)}
                                        control={control}
                                        index={editIndex}
                                        pageIndex={pages.length}
                                        key={editIndex}
                                    />
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
                                border: 8,
                                borderRadius: 2,
                                borderColor: 'gray',
                                boxShadow: 'none',
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
                                {modelPreview.map((model: any, index: any) => {

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
                                                backgroundColor: 'darkgray',
                                                transition: 'background-color 0.3s ease',
                                            }}
                                            onMouseEnter={(e: any) => {
                                                e.currentTarget.querySelector('.icon-buttons').style.display = 'flex';
                                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                                            }}
                                            onMouseLeave={(e: any) => {
                                                e.currentTarget.querySelector('.icon-buttons').style.display = 'none';
                                                e.currentTarget.style.backgroundColor = 'darkgray';
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
                                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                                    boxShadow: 2,
                                                }}
                                            >
                                                <Button onClick={() => handleModelClick(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: 'gray' }}>
                                                    <EditIcon fontSize="small" />
                                                </Button>
                                                <Button onClick={() => handleDuplicateModel(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: '#1976d2' }}>
                                                    <DuplicateIcon fontSize="small" />
                                                </Button>
                                                <Button onClick={() => handleDeleteModel(index, modalNodeId)} sx={{ minWidth: 0, padding: 1, color: 'red' }}>
                                                    <DeleteIcon fontSize="small" />
                                                </Button>
                                            </Box>
                                        </div>
                                    );
                                })}
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </form>
        </Modal>
    );
};

export default ModelModal;
