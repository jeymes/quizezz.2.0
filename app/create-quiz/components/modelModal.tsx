import React from 'react';
import { Box, Modal } from '@mui/material';
import { AutoStories } from '@mui/icons-material';
import Header from './header';
import Modelo01Edit from '../models/models01/model01-edit';
import Modelo02Edit from '../models/models02/model02-edit';
import Modelo03Edit from '../models/models03/model03-edit';
import Modelo04Edit from '../models/models04/model04-edit';
import ModelPreview from './modelPreview';
import SidebarModels from './sidebarModels';
import Modelo05Edit from '../models/models05/model05-edit';

interface ModelModalProps {
    modalNodeId: string | null; // ID do nó do modal
    closeModal: () => void; // Função para fechar o modal
    handleSubmit: (callback: (data: any) => void) => (event?: React.FormEvent<HTMLFormElement>) => void; // Tipagem da função handleSubmit
    onSubmit: (data: any) => void; // Função que será chamada ao submeter o formulário
    selectedModel: string | null; // Modelo selecionado
    setSelectedModel: (model: string | null) => void; // Função para definir o modelo selecionado
    control: any;
    watchedData: any; // Dados observados do formulário
    handleModelSelect: (model: string, isFullWidth: boolean) => void; // Função para selecionar o modelo
    deleteModel: (index: number) => void; // Função para deletar um modelo
    duplicateModel: (index: number) => void; // Função para duplicar um modelo
    modelIndex: number | null; // Índice do modelo atual
    handleModelSelection: any
}

const ModelModal: React.FC<ModelModalProps> = ({
    modalNodeId,
    closeModal,
    handleSubmit,
    onSubmit,
    selectedModel,
    setSelectedModel,
    control,
    watchedData,
    handleModelSelect,
    deleteModel,
    duplicateModel,
    modelIndex,
    handleModelSelection
}) => {
    return (
        <Modal open={Boolean(modalNodeId)} onClose={closeModal}>
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
                        overflowY: 'auto',
                    }}
                >
                    {selectedModel ? (
                        <Box
                            sx={{
                                width: '50%',
                                border: '2px solid #ccc',
                                borderRadius: 2,
                                overflowY: 'auto',
                            }}
                        >
                            {selectedModel === 'model01' && modelIndex !== null && (
                                <Modelo01Edit
                                    index={modelIndex}
                                    onClose={() => setSelectedModel(null)}
                                    control={control}
                                    activePageIndex={modalNodeId as any}
                                />
                            )}
                            {selectedModel === 'model02' && modelIndex !== null && (
                                <Modelo02Edit
                                    index={modelIndex}
                                    onClose={() => setSelectedModel(null)}
                                    control={control}
                                    activePageIndex={modalNodeId as any}
                                />
                            )}
                            {selectedModel === 'model03' && modelIndex !== null && (
                                <Modelo03Edit
                                    index={modelIndex}
                                    onClose={() => setSelectedModel(null)}
                                    control={control}
                                    activePageIndex={modalNodeId as any}
                                />
                            )}
                            {selectedModel === 'model04' && modelIndex !== null && (
                                <Modelo04Edit
                                    index={modelIndex}
                                    onClose={() => setSelectedModel(null)}
                                    control={control}
                                    activePageIndex={modalNodeId as any}
                                />
                            )}
                            {selectedModel === 'model05' && modelIndex !== null && (
                                <Modelo05Edit
                                    index={modelIndex}
                                    onClose={() => setSelectedModel(null)}
                                    control={control}
                                    activePageIndex={modalNodeId as any}
                                />
                            )}
                        </Box>
                    ) : (
                        <SidebarModels onModelSelect={handleModelSelect} />
                    )}

                    <ModelPreview
                        handleModelSelection={handleModelSelection}
                        activePageIndex={modalNodeId as any}
                        watchedData={watchedData}
                        deleteModel={deleteModel}
                        duplicateModel={duplicateModel}
                    />
                </Box>
            </Box>
        </Modal>
    );
};

export default ModelModal;
