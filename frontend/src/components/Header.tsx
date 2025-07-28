// components/Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import NextLink from 'next/link';
import { Collapse, List, ListItem, ListItemText, Paper } from '@mui/material';
import { useState } from 'react';

type HeaderProps = {
    breadcrumbItems: { label: string; href?: string }[];
    user: {
        id: string;
        name: string;
    };
};


const Header: React.FC<HeaderProps> = ({ breadcrumbItems, user }) => {
    // ハンバーガーメニューの状態を追加
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
        <AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* 左側：メニュー + ロゴ */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton color="inherit" edge="start" sx={{ mr: 2 }} onClick={toggleMenu}>
                        <MenuIcon />
                    </IconButton>

                    {/* ハンバーガーメニューの中身 */}
                    <Collapse in={menuOpen} timeout={300}>
                        <Paper
                        elevation={3}
                        sx={{
                            position: 'absolute',
                            top: 64,
                            left: 0,
                            width: '100%',
                            zIndex: 1000,
                            backgroundColor: '#111',
                            color: 'white',
                        }}
                        >
                        <List>
                            <NextLink href="/create" passHref legacyBehavior>
                            <ListItem button component="a" onClick={() => setMenuOpen(false)}>
                                <ListItemText primary="アンケート作成" />
                            </ListItem>
                            </NextLink>
                        </List>
                        </Paper>
                    </Collapse>

                    <Typography variant="h6" noWrap component="div">
                        <NextLink href="/" passHref legacyBehavior>
                            <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                <Image src="/images/logo.png" alt="サイトロゴ" width={40} height={40} />
                            </a>
                        </NextLink>
                    </Typography>
                </Box>

                {/* 中央：パンくずリスト */}
                <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', '& a': { color: '#fff' } }}>
                    {breadcrumbItems.map((item, index) => (
                        <Link
                            key={index}
                            color={index === breadcrumbItems.length - 1 ? 'textPrimary' : 'inherit'}
                            underline="hover"
                            href={item.href || '#'}
                            sx={{ fontWeight: index === breadcrumbItems.length - 1 ? 'bold' : 'normal' }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </Breadcrumbs>

                {/* 右側：ユーザー情報 */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1 }}>{user.name[0]}</Avatar>
                    <Typography variant="body2">{user.id} | {user.name}</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
