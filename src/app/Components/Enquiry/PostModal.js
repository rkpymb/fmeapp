"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import { FiList } from "react-icons/fi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import { TbEdit } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import Typewriter from '../Addons/Typewriter'
import { UseLoginContext } from '../../context/auth/CheckLogin'
import { FiX } from "react-icons/fi";
export default function MaxWidthDialog() {
    const { IsLogin, Data, BackDropControll } = UseLoginContext();
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [IsSelected, setIsSelected] = useState(false);
    const [CurrentCat, setCurrentCat] = useState('');
    const [CurrentCatImg, setCurrentCatImg] = useState('');
    const [CurrentCity, setCurrentCity] = useState('New Delhi');
    const [CurrentText, setCurrentText] = useState('');

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');


    useEffect(() => {
        // window.scrollTo(0, 0);
        setIsLoading(true)
        const GetData = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/List/Catlist", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendUM)
            }).then((a) => {
                return a.json();
            })
                .then((parsed) => {
                    if (parsed.statusdata == true) {
                        console.log(parsed)
                        setRetdata(parsed.RetData)
                        setIsLoading(false)
                    }

                })
        }
        GetData()


    }, [])

    const CickCatlist = async (e) => {
        console.log(e)
        setCurrentCat(e.CatID)
        setIsSelected(true)
        setCurrentCatImg(e.img)
    }
    const HandlePostSub = async (e) => {
        if (CurrentCat !== '' && CurrentCity !== '' && CurrentText !== '') {
            SendPost()
            BackDropControll(true)

        } else {
            alert(' Please Post a Valid Requirement')
        }
    }



    const handleClickOpen = () => {
        setOpen(true);
    };
    const Done = () => {
        setOpen(false);
        setIsSelected(false)
        setCurrentText('')
        setCurrentCity('')
        setCurrentCat('')
    };
    const handleClose = () => {
        setOpen(false);
    };
    const EditCat = () => {
        setIsSelected(false);
        
    };

    const SendPost = async () => {

        const sendUM = { UserMobile: Data.mobile, CurrentCat: CurrentCat, CurrentText: CurrentText, CurrentCity: CurrentCity }
        const data = await fetch("/api/Enq/SendPost", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedPost) => {
                BackDropControll(false)
            
                if (parsedPost.statusdata == true) {
                    Done()
                    alert('Post Submited Succesfully')
                } else {
                    alert('Something Went Wrong')
                }
            })
    }

    return (
        <React.Fragment>
            <div variant="outlined" onClick={handleClickOpen}>
                <div className={styles.PostBoxText}>
                    <div>
                        <BiSolidUserCircle size={50} />
                    </div>
                    <div className={styles.PostBoxTextPlaceholder}>
                        <span>What are you planning ?</span>
                        <small className={styles.TypingTest}><Typewriter text={`Post Your Requirement`} /></small>
                    </div>

                </div>
            </div>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >

                <DialogContent>
                    <div>
                        <div className={styles.EnqTextBoxHeader}>
                            <div className={styles.EnqTextBoxHeaderText}>
                                <span>Post Your Requirement</span>
                            </div>
                            <div className={styles.EnqTextBoxHeaderIcon}>
                                <FiX size={20} />
                            </div>
                        </div>
                        <div style={{ minHeight: '20px' }}></div>
                        <div className={styles.deviderEnqpost}></div>
                        <div style={{ minHeight: '20px' }}></div>
                    </div>


                    {isLoading &&
                        <div>

                            <div className={styles.MenuCatlistItemLoader}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div style={{ marginLeft: 10 }}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
                                </div>
                            </div>
                            <div className={styles.MenuCatlistItemLoader}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div style={{ marginLeft: 10 }}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
                                </div>
                            </div>
                            <div className={styles.MenuCatlistItemLoader}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div style={{ marginLeft: 10 }}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
                                </div>
                            </div>
                            <div className={styles.MenuCatlistItemLoader}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div style={{ marginLeft: 10 }}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
                                </div>
                            </div>
                            <div className={styles.MenuCatlistItemLoader}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div style={{ marginLeft: 10 }}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} />
                                </div>
                            </div>


                        </div>
                    }

                    {!IsSelected &&
                        <div>
                            
                            <div style={{ minHeight: 10 }}></div>
                            {!isLoading &&

                                <div>
                                    <div className={styles.IconTitle}>
                                        <FiList size={20} />
                                        <span style={{ fontSize: 14, fontWeight: 'bold' }}>Select Event Category</span>
                                    </div>
                                    <div className={styles.MenuCatlistItemBox}>
                                        {Retdata.map((item) => {
                                            return <div style={{ textDecoration: 'none' }} className={styles.MenuCatlistItem}
                                                onClick={() => CickCatlist({ CatID: item.Catid, img: item.img })}
                                            >

                                                <Image
                                                    src={`${StorageURl}/panel/Catimg/${item.img}`}
                                                    alt="Picture of the author"
                                                    width={30}
                                                    height={30}
                                                    quality={100}
                                                />
                                                <div> <span>{item.title}</span></div>

                                            </div>

                                        }

                                        )}

                                    </div>
                                </div>

                            }

                        </div>

                    }

                    {IsSelected &&
                        <div className={styles.EnqTextBox}>

                            <div >
                                <input type="text" autoFocus className={styles.TextFieldCss} placeholder="What are you planning ?" value={CurrentText}
                                 
                                    onInput={e => setCurrentText(e.target.value)} />
                            </div>
                            <div style={{ minHeight: '20px' }}></div>

                            <div>

                            </div>
                            <div style={{ minHeight: '10px' }}></div>


                        </div>

                    }

                </DialogContent>
                {IsSelected &&
                    <div className={styles.EnqTextBoxFooter}>

                        <div className={styles.EnqTextBoxFooterA}>
                            <div className={styles.SelecttedBox}>
                                <div className={styles.SelecttedBoxA}>
                                    <Image
                                        src={`${StorageURl}/panel/Catimg/${CurrentCatImg}`}
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        quality={100}
                                    />
                                </div>
                                <div className={styles.SelecttedBoxB}>
                                    <div className={styles.EnqTextBoxFooterASmall}>
                                        <small>Category</small>
                                    </div>
                                    <div>
                                        <span>{CurrentCat}</span>
                                        <span className={styles.EditIcon} onClick={EditCat}><TbEdit /></span>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.SelecttedBox}>
                                <div className={styles.SelecttedBoxA}>
                                    <Image
                                        src={`/google-maps.png`}
                                        alt="Picture of the author"
                                        width={30}
                                        height={30}
                                        quality={100}
                                    />
                                </div>
                                <div className={styles.SelecttedBoxB}>
                                    <div className={styles.EnqTextBoxFooterASmall}>
                                        <small>City</small>
                                    </div>
                                    <div>
                                        <input type="text" value={CurrentCity}

                                            onInput={e => setCurrentCity(e.target.value)}
                                        />
                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.EnqTextBoxFooterB}>
                            <Button variant="contained" style={{minWidth:'100%'}} onClick={HandlePostSub}>Post</Button>
                        </div>
                    </div>
                }

            </Dialog>
        </React.Fragment>
    );
}
