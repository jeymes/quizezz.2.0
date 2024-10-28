import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import NavbarBreadcrumbs from './navbarBreadcrumbs';
import Search from './search';
import CustomDatePicker from './customDatePicker';
import MenuButton from '../menuButton';
import ColorModeIconDropdown from '@/app/shared-theme/colorModeIconDropdown';

export default function Header() {
    return (
        <Stack
            direction="row"
            sx={{
                display: { xs: 'none', md: 'flex' },
                width: '100%',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                maxWidth: { sm: '100%', md: '1700px' },
                pt: 1.5,
            }}
            spacing={2}
        >
            <NavbarBreadcrumbs />
            <Stack direction="row" sx={{ gap: 1 }}>
                <Search />
                <CustomDatePicker />
                <MenuButton showBadge aria-label="Open notifications">
                    <NotificationsRoundedIcon />
                </MenuButton>
                <ColorModeIconDropdown />
            </Stack>
        </Stack>
    );
}