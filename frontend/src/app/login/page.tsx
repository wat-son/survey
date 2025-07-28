'use client';

import { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';

const backgroundImages = [
    '/images/bg-login-1.jpg',
    '/images/bg-login-2.jpg',
    '/images/bg-login-3.jpg',
];

export default function Login() {
    const [bgIndex, setBgIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // フェードアウト開始
            setTimeout(() => {
                setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
                setFade(true); //フェードイン開始
            }, 100); // CSSのtransition時間と合わせる
        }, 5000); // 5秒ごとに切り替え

        return () => clearInterval(interval);
    }, []);

    return (
    <div className={styles.pageWrapper}>
        {backgroundImages.map((src, index) => (
            <div
                key={index}
                className={`${styles.bgImage} ${index === bgIndex && fade ? styles.visible : ''}`}
                style={{ backgroundImage: `url(${src})` }}
            />
        ))}
        <Paper elevation={6} className={styles.paperContainer}>
        <Typography variant="h4" gutterBottom align="center">ログイン</Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="ユーザー名" fullWidth />
            <TextField label="パスワード" type="password" fullWidth />
            <Button variant="contained" color="primary">ログイン</Button>
        </Box>
        </Paper>
    </div>
    );
}
