import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styles from '@/app/page.module.css'
import { FiShare2 } from "react-icons/fi";
import { ShareSocial } from 'react-share-social'
import { DomainURLMain } from '../../../../Data/config'
import SendToUser from './SendToUser'
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
                        url={`${DomainURLMain}/post/${itemdata.PostID}`}
                        socialTypes={['facebook', 'twitter', 'whatsapp', 'telegram']}
                        style={style}

                    />
                    <div className={styles.SocialShareUser}>
                        <SendToUser POSTID={itemdata.PostID} VendorUserName={itemdata.username} />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
