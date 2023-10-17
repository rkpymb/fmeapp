"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../Data/config'
import { HiOutlineMapPin, HiOutlineUserCircle } from "react-icons/hi2";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BsBookmarkCheck } from "react-icons/bs";
import Image from 'next/image'
import NavbarMobile from '@/app/Components/Mobile/Shared/NavbarMobile'

import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'

import { AiOutlineHeart, AiOutlineMessage, AiOutlineLogout } from "react-icons/ai";

const page = () => {
   
    const { IsLogin, Data, LogoutBtn } = UseLoginContext();
    const [Retdata, setRetdata] = useState();
    const [TotalBookings, setTotalBookings] = useState(0);
    const [TotalVisits, setTotalVisits] = useState(0);
    const [TotalReviews, setTotalReviews] = useState(0);
    const [TotalFollowers, setTotalFollowers] = useState(0);
    const [IsLoading, setIsLoading] = useState(true);
    const [UserMobile, setUserMobile] = useState('');
   

    useEffect(() => {
        window.scrollTo(0, 0);
        console.table(Data.mobile)
        if (IsLogin == true) {
            setUserMobile(Data.mobile)
            setIsLoading(false)
        }
    


    },[])

 
    return (
        <>

            <BrowserView>
                {IsLoading &&

                    <div className={styles.VendorProfileBoxMain}>
                        <div className={styles.VendorProfileBoxData}>
                            <div className={styles.VendorProfileBoxDataIMG}>
                                <Skeleton variant="circular" width={200} height={200} />
                            </div>
                            <div className={styles.VendorProfileBoxDataContent}>
                                <div className={styles.VendorNameBox}>
                                    <div className={styles.VendorName}>
                                        <span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} /></span>
                                        <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} /></small>
                                    </div>
                                    <div style={{ minWidth: 25 }}></div>
                                    <div className={styles.VendorButtonBox}>
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={105} />
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={105} style={{ marginLeft: 10 }} />
                                    </div>
                                </div>
                                <div style={{ minHeight: 5 }}></div>
                                <div className={styles.VendorShortbio}>
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={500} />
                                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={400} />
                                </div>
                                <div className={styles.VendorIconMenu}>
                                    <div style={{ minHeight: 10 }}></div>
                                    <div className={styles.VendorIconMenuItem}>

                                        <div className={styles.VendorIconMenuItemText}><span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} /></span></div>
                                    </div>
                                    <div style={{ minHeight: 10 }}></div>
                                    <div className={styles.VendorIconMenuItem}>

                                        <div className={styles.VendorIconMenuItemText}><span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} /></span></div>
                                    </div>
                                </div>

                                <div style={{ minHeight: 10 }}></div>

                                <div className={styles.VendorCounterBox}>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <Skeleton variant="text" height={10} width={50} />
                                        <Skeleton variant="text" height={10} width={70} />
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <Skeleton variant="text" height={10} width={50} />
                                        <Skeleton variant="text" height={10} width={70} />
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <Skeleton variant="text" height={10} width={50} />
                                        <Skeleton variant="text" height={10} width={70} />
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <Skeleton variant="text" height={10} width={50} />
                                        <Skeleton variant="text" height={10} width={70} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                }

                {!IsLoading &&
                    <div className={styles.VendorProfileBoxMain}>
                        <div className={styles.VendorProfileBoxData}>
                            <div className={styles.VendorProfileBoxDataIMG}>
                                <Image
                                    src={`${StorageURl}/panel/userdp/${Data.dp}`}
                                    alt="dp"
                                    width={200}
                                    height={200}
                                    quality={50}
                                    className={styles.DpCercleVendor}
                                />
                            </div>
                            <div className={styles.VendorProfileBoxDataContent}>
                                <div className={styles.VendorNameBox}>
                                    <div className={styles.VendorName}>
                                        <span>{Data.name}</span>
                                        <small>{Data.mobile}</small>

                                    </div>
                                    <div style={{ minWidth: 25 }}></div>


                                </div>


                                <div style={{ minHeight: 10 }}></div>

                                <div className={styles.VendorCounterBox}>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <span>{TotalFollowers}</span>
                                        <small>followers</small>
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <span>{TotalBookings}</span>
                                        <small>Booked</small>
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <span>{TotalVisits}</span>
                                        <small>Profile visits</small>
                                    </div>
                                    <div className={styles.VendorCounterBoxItem} >
                                        <span>{TotalReviews}</span>
                                        <small>Reviews</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ minHeight: 20 }}></div>
                        <div className={styles.UserMenuBox}>
                            <Link
                                href={`/followings`} style={{ textDecoration: 'none', color: 'black' }}
                                className={styles.UserMenuBoxItem}>
                                <div className={styles.UserMenuBoxItemIcon}>
                                    <AiOutlineHeart size={20} />
                                </div>
                                <div className={styles.UserMenuBoxItemText}>
                                    <span>Followings</span>
                                </div>
                            </Link>
                            <Link
                                href={`/bookings`} style={{ textDecoration: 'none', color: 'black' }}
                                className={styles.UserMenuBoxItem}>
                                <div className={styles.UserMenuBoxItemIcon}>
                                    <BsBookmarkCheck size={20} />
                                </div>
                                <div className={styles.UserMenuBoxItemText}>
                                    <span>Bookings</span>
                                </div>
                            </Link>
                            <Link
                                href={`/messages`} style={{ textDecoration: 'none', color: 'black' }}
                                className={styles.UserMenuBoxItem}>
                                <div className={styles.UserMenuBoxItemIcon}>
                                    <AiOutlineMessage size={20} />
                                </div>
                                <div className={styles.UserMenuBoxItemText}>
                                    <span>Messages</span>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.LogoutBox} onClick={LogoutBtn}>

                            <AiOutlineLogout size={15} /> <span>Logout</span>
                        </div>

                    </div>
                }
            </BrowserView>

            <MobileView>
                <NavbarMobile/>
                <div style={{ minHeight: 20 }}></div>
                <div style={{minHeight:'100vh'}}>
                    {IsLoading &&

                        <div className={styles.gyutfty}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} />

                        </div>

                    }

                    {!IsLoading &&
                        <div className={styles.UserAccountBox}>

                            <div className={styles.UserAccountBoxA}>
                                <div className={styles.UserAccountBoxAProfileBoxData}>
                                    <div className={styles.VendorProfileBoxDataIMG}>
                                        <Image
                                            src={`${StorageURl}/panel/userdp/${Data.dp}`}
                                            alt="dp"
                                            width={70}
                                            height={70}
                                            quality={50}
                                            className={styles.DpCercleVendor}
                                        />
                                    </div>
                                    <div className={styles.VendorProfileBoxDataContent}>
                                        <div className={styles.VendorNameBox}>
                                            <div className={styles.VendorName}>
                                                <span>{Data.name}</span>
                                                <small>{Data.mobile}</small>

                                            </div>
                                            <div style={{ minWidth: 25 }}></div>


                                        </div>


                                        <div style={{ minHeight: 10 }}></div>


                                    </div>
                                </div>
                            </div>
                            <div className={styles.VendorCounterBox}>
                                <div className={styles.VendorCounterBoxItem} >
                                    <span>{TotalFollowers}</span>
                                    <small>followers</small>
                                </div>
                                <div className={styles.VendorCounterBoxItem} >
                                    <span>{TotalBookings}</span>
                                    <small>Booked</small>
                                </div>
                                <div className={styles.VendorCounterBoxItem} >
                                    <span>{TotalVisits}</span>
                                    <small>Profile visits</small>
                                </div>
                                <div className={styles.VendorCounterBoxItem} >
                                    <span>{TotalReviews}</span>
                                    <small>Reviews</small>
                                </div>
                            </div>

                            <div style={{ minHeight: 20 }}></div>
                            <div className={styles.UserMenuBox}>
                                <Link
                                    href={`/followings`} style={{ textDecoration: 'none', color: 'black' }}
                                    className={styles.UserMenuBoxItem}>
                                    <div className={styles.UserMenuBoxItemIcon}>
                                        <AiOutlineHeart size={20} />
                                    </div>
                                    <div className={styles.UserMenuBoxItemText}>
                                        <span>Followings</span>
                                    </div>
                                </Link>
                                <Link
                                    href={`/bookings`} style={{ textDecoration: 'none', color: 'black' }}
                                    className={styles.UserMenuBoxItem}>
                                    <div className={styles.UserMenuBoxItemIcon}>
                                        <BsBookmarkCheck size={20} />
                                    </div>
                                    <div className={styles.UserMenuBoxItemText}>
                                        <span>Bookings</span>
                                    </div>
                                </Link>
                                <Link
                                    href={`/messages`} style={{ textDecoration: 'none', color: 'black' }}
                                    className={styles.UserMenuBoxItem}>
                                    <div className={styles.UserMenuBoxItemIcon}>
                                        <AiOutlineMessage size={20} />
                                    </div>
                                    <div className={styles.UserMenuBoxItemText}>
                                        <span>Messages</span>
                                    </div>
                                </Link>
                            </div>

                            <div className={styles.LogoutBox} onClick={LogoutBtn}>

                                <AiOutlineLogout size={15} /> <span>Logout</span>
                            </div>

                        </div>
                    }
                </div>

                <MobileFooter/>
            </MobileView>
            

           

        </>
    )
}

export default page
