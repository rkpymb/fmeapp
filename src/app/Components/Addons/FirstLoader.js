import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Lottie from 'react-lottie';
import { UseLoginContext } from '@/app/context/auth/CheckLogin'
import styles from '@/app/page.module.css'
import * as animationData from '../../../../Data/Lottie/animation_ll96ez1u.json'
export default function SimpleBackdrop() {
    const { FirstLoader } = UseLoginContext();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return (
        <div className={styles.FirstLoader}>

            <Backdrop
                sx={{ color: '#fff', zIndex: 9999}}
                open={true}
                
            >
                <div>
                    <Lottie options={defaultOptions}
                        width='100%'
                        height={400}
                        isStopped={false}
                        isPaused={false} />
                </div>
            </Backdrop>
            
        </div>
    );
}
