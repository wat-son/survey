// AnsAccordion.tsx
import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AnswerType = 'text' | 'singleChoice';

type Props = {
    type: AnswerType;
    question: string;
    answer: string;
    choices?: string[];
};

const AnsSurvey: React.FC<Props> = ({ type, question, answer, choices = [] }) => {
    return (
    <Accordion
        sx={{
        backgroundColor: '#e3f2fd', // 全体の背景色：薄い青
        boxShadow: 'none',
        border: '1px solid #ccc',
        borderRadius: 2,
        mb: 2,
        }}
    >
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: '#eeeeee', // summary部分：グレー
        }}
        >
        <Typography fontWeight="bold">{question}</Typography>
        </AccordionSummary>
        <AccordionDetails
        sx={{
          backgroundColor: '#f5f5f5', // details部分：薄いグレー
        }}
        >
        {type === 'text' ? (
            <Typography>{answer}</Typography>
        ) : (
            <FormControl component="fieldset">
            <RadioGroup value={answer}>
                {choices.map((choice, index) => (
                <FormControlLabel
                    key={index}
                    value={choice}
                    control={<Radio disabled />}
                    label={choice}
                />
                ))}
            </RadioGroup>
            </FormControl>
        )}
        </AccordionDetails>
    </Accordion>
    );
};

export default AnsSurvey;
