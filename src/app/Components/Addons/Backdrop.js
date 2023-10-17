import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { UseLoginContext } from '@/app/context/auth/CheckLogin'
export default function SimpleBackdrop() {
    const { BackDropData } = UseLoginContext();
    
    return (
        <div>

            <Backdrop
                sx={{ color: '#fff', zIndex: 9999}}
                open={BackDropData}
                
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
