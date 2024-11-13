import * as React from 'react';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { AccountTree } from '@mui/icons-material';

const mainListItems = [
    { text: 'Dashboard', icon: <HomeRoundedIcon />, href: '/dashboard' },
    { text: 'Quizezz', icon: <AccountTree />, href: '/dashboard/quizezz' },
];

const secondaryListItems = [
    { text: 'Configurações', icon: <SettingsRoundedIcon />, href: '/settings' },
    { text: 'Sobre', icon: <InfoRoundedIcon />, href: '/about' },
];

export default function MenuContent() {
    // Estado para armazenar o índice do item selecionado
    const [selectedIndex, setSelectedIndex] = React.useState<string | null>(null);

    // Função para atualizar o item selecionado
    const handleListItemClick = (href: string) => {
        setSelectedIndex(href);
    };

    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item) => (
                    <ListItem key={item.href} disablePadding sx={{ display: 'block' }}>
                        <Link href={item.href} passHref>
                            <ListItemButton
                                selected={selectedIndex === item.href}
                                onClick={() => handleListItemClick(item.href)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item) => (
                    <ListItem key={item.href} disablePadding sx={{ display: 'block' }}>
                        <Link href={item.href} passHref>
                            <ListItemButton
                                selected={selectedIndex === item.href}
                                onClick={() => handleListItemClick(item.href)}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
