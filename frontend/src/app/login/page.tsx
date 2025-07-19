'use client';

import styles from './Login.module.css';
import { Paper, Typography, Box, TextField, Button } from '@mui/material';

export default function Login() {
    return (
    <div className={styles.pageWrapper}>
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
