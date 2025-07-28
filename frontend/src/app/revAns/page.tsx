'use client';

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Paper,
    Grid,
    GridProps,
    List,
    ListItemButton,
    ListItemText
} from '@mui/material';
import AnsSurvey from '../../components/AnsSurvey';
import BackButton from '@/components/BackButton';
import VirtIndicator from '@/components/VirtIndicator';

const surveyData = [
    {
        id: 'q1',
        type: 'text',
        question: 'Q1. サービスの満足度について',
        answer: 'とても満足している',
    },
    {
        id: 'q2',
        type: 'text',
        question: 'Q2. 担当者の対応について',
        answer: '丁寧で信頼できた',
    },
    {
        id: 'q3',
        type: 'text',
        question: 'Q3. 改善してほしい点',
        answer: '特にありません',
    },
];

export default function RevAns() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            {/* タイトル */}
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

            <Grid container spacing={4}>
                {/* 設問エリア */}
                <Grid item xs={9} sx={{width: '70%'}}>
                {/* <Grid item xs={12} md={9}> */}
                    <Box>
                        {surveyData.map((item) => (
                            <div key={item.id} id={item.id}>
                                <AnsSurvey
                                    type={item.type}
                                    question={item.question}
                                    answer={item.answer}
                                />
                            </div>
                        ))}
                    </Box>
                </Grid>

                {/* インジケーター */}
                <Grid item xs={3} sx={{width: '25%'}}>
                    <VirtIndicator surveyData={surveyData}/>
                    {/* <Paper
                        elevation={1}
                        sx={{
                            position: 'sticky',
                            top: 100,
                            maxHeight: '70vh',
                            overflowY: 'auto',
                            p: 2,
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            質問ナビ
                        </Typography>
                        <List dense>
                            {surveyData.map((item, index) => (
                                <ListItemButton key={item.id} onClick={() => scrollTo(item.id)}>
                                    <ListItemText primary={`Q${index + 1}`} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Paper> */}
                </Grid>
            </Grid>

            {/* 戻るボタン */}
            <Box sx={{ mt: 4 }}>
                <BackButton />
            </Box>
        </Container>
    );
}
