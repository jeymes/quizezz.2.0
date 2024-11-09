"use client";

import { usePathname } from 'next/navigation';
import { chartsCustomizations } from '../shared-theme/customizations/custom-dashboard/charts';
import { dataGridCustomizations } from '../shared-theme/customizations/custom-dashboard/dataGrid';
import { datePickersCustomizations } from '../shared-theme/customizations/custom-dashboard/datePickers';
import { treeViewCustomizations } from '../shared-theme/customizations/custom-dashboard/treeView';
import AppTheme from '../shared-theme/appTheme';
import AppNavbar from './components/appNavbar/page';
import SideMenu from './components/sideMenu/page';
import { Box, CssBaseline, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Header from './components/header/page';

const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};

const routeTitles = {
    '/dashboard': 'Dashboard',
    '/dashboard/quizezz': 'Quizezz',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}, props: { disableCustomTheme?: boolean }) {
    const pathname = usePathname(); // Captura a rota atual
    const title = routeTitles[pathname as keyof typeof routeTitles] || 'Default Title'; // Define o título

    return (
        <AppTheme {...props} themeComponents={xThemeComponents}>
            <CssBaseline enableColorScheme />
            <Box sx={{ display: 'flex' }}>
                <SideMenu />
                <AppNavbar />

                <Box
                    component="main"
                    sx={(theme) => ({
                        flexGrow: 1,
                        backgroundColor: theme.cssVariables
                            ? `rgba(${theme.palette} / 1)`
                            : alpha(theme.palette.background.default, 1),
                        overflow: 'auto',
                    })}
                >
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center',
                            mx: 3,
                            pb: 5,
                            mt: { xs: 8, md: 0 },
                        }}
                    >
                        <Header title={title} />

                        {children}
                    </Stack>
                </Box>
            </Box>
        </AppTheme>
    );
}
