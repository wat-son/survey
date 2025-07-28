"use client";
import { useState } from 'react';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SurveyAccordion({ title, content }: { title: string; content: string }) {
    return (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>{content}</Typography>
        </AccordionDetails>
    </Accordion>
    );
}

function AnswerTabPanel() {
    const categories = ['アンケート受付中', 'アンケート回答中', 'アンケート回答済'];
    return (
    <Box
        sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        }}
    >
        {categories.map((category) => (
        <Paper
            key={category}
            elevation={3}
            sx={{
            flex: '1 1 30%', // 幅は30%前後、余白があれば横並び。画面狭い時は折り返す。
            p: 2,
            minWidth: 250,
            }}
        >
            <Typography variant="h6" gutterBottom>
            {category}
            </Typography>
            <SurveyAccordion title="アンケートタイトルA" content="アンケート内容A" />
            <SurveyAccordion title="アンケートタイトルB" content="アンケート内容B" />
        </Paper>
        ))}
    </Box>
    );
}

function CreateTabPanel() {
    const categories = ['作成中のアンケート', '作成済アンケート'];
    return (
    <Box
        sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap',
        }}
    >
        {categories.map((category) => (
        <Paper
            key={category}
            elevation={3}
            sx={{
            flex: '1 1 45%', // 幅は約45%、2カラム
            p: 2,
            minWidth: 250,
            }}
        >
            <Typography variant="h6" gutterBottom>
            {category}
            </Typography>
            <SurveyAccordion title="アンケートタイトルC" content="アンケート内容C" />
            <SurveyAccordion title="アンケートタイトルD" content="アンケート内容D" />
        </Paper>
        ))}
    </Box>
    );
}

export default function TopPage() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
    <Box sx={{ width: '100%', p: 3 }}>
        <Tabs value={tabIndex} onChange={(e, newVal) => setTabIndex(newVal)} centered>
        <Tab label="アンケート回答" />
        <Tab label="アンケート作成" />
        </Tabs>
        <Box sx={{ mt: 4 }}>
        {tabIndex === 0 && <AnswerTabPanel />}
        {tabIndex === 1 && <CreateTabPanel />}
        </Box>
    </Box>
    );
}
