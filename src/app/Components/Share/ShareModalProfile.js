import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styles from '@/app/page.module.css'
import { FiShare2 } from "react-icons/fi";
import { ShareSocial } from 'react-share-social'
import { DomainURLMain } from '../../../../Data/config'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ itemdata }) {
    console.log(itemdata)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        root: {
            background: 'white',
            borderRadius: 3,
            border: 0,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',

        },
        copyContainer: {
            border: '1px solid blue',
            background: 'rgb(0,0,0,0.7)'
        },
        title: {
            color: 'aquamarine',
            fontStyle: 'italic'
        }
    };



    return (
        <div>

          
            <div className={styles.iconbtn} onClick={handleClickOpen}>
                <span> <FiShare2 /></span>
                <small>Share</small>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <div className={styles.ShareModal}>
                    
                    
                    <ShareSocial
                        url={`${DomainURLMain}/post/${itemdata.id}`}
                        socialTypes={['facebook', 'twitter', 'whatsapp','telegram']}
                        style={style}
                       
                    />

                </div>
            </Dialog>
        </div>
    );
}
