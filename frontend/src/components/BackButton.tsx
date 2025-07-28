'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type BackButtonProps = {
    label?: string; // ボタンに表示するテキスト（省略可能）
};

export default function BackButton({ label = '戻る' }: BackButtonProps) {
    const router = useRouter();

    return (
        <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
            sx={{ mt: 2 }}
        >
            {label}
        </Button>
    );
}
