'use client'

import * as React from 'react';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-data-grid/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';
import Box from '@mui/material/Box';
import MainGrid from './components/mainGrid/page';

export default function Dashboard() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>

            <MainGrid />

        </Box>

    );
}