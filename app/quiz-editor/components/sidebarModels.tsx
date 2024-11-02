import React from 'react';
import { Box, Card } from '@mui/material';
import { Commit, PhotoLibrary } from '@mui/icons-material';

interface SidebarProps {
    onModelSelect: (modelo: string, isFullWidth: boolean) => void;
}

export default function SidebarModels({ onModelSelect }: SidebarProps) {
    return (
        <Box>
            <Box>
                <Card onClick={() => onModelSelect('model01', true)}>
                    <PhotoLibrary />
                    Header
                </Card>
                <Card onClick={() => onModelSelect('model02', true)}>
                    <Commit />
                    Progress
                </Card>
            </Box>
        </Box>
    );
}
