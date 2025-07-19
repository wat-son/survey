'use client';
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import AnsSurvey from '@/components/AnsSurvey';

export default function RevAns() {
    return (
    <Container maxWidth="md" sx={{ py: 5 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
            顧客満足度調査2025
        </Typography>
        <Typography variant="body1" color="textSecondary">
            日時: 2025/07/01 09:00
        </Typography>
        <Typography variant="body1" color="textSecondary">
            回答日時: 2025/07/18 20:45
        </Typography>
        </Paper>

        <Box>
        <AnsSurvey
            type='text'
            question="Q1. サービスの満足度について"
            answer="とても満足している"
        />
        <AnsSurvey
            type='text'
            question="Q2. 担当者の対応について"
            answer="丁寧で信頼できた"
        />
        <AnsSurvey
            type='text'
            question="Q3. 改善してほしい点"
            answer="特にありません"
        />
        </Box>
    </Container>
    );
};
