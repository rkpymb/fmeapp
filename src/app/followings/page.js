"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../Data/config'
import { HiOutlineMapPin, HiOutlineUserCircle } from "react-icons/hi2";
import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import Image from 'next/image'
import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'
import { AiOutlineHeart, AiOutlineMessage, AiOutlineLogout } from "react-icons/ai";
import NavbarMobileTitle from '../Components/Mobile/Shared/NavbarMobileTitle'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import VendorTab from '@/app/Components/Addons/VendorTab'
const page = () => {

    const { IsLogin, Data, LogoutBtn } = UseLoginContext();
    const [Retdata, setRetdata] = useState();
    const [TotalBookings, setTotalBookings] = useState(0);
    const [TotalFollowing, setTotalFollowing] = useState('');
    const [TotalVisits, setTotalVisits] = useState(0);
    const [TotalReviews, setTotalReviews] = useState(0);
    const [TotalFollowers, setTotalFollowers] = useState(0);
    const [IsLoading, setIsLoading] = useState(true);
    const [UserMobile, setUserMobile] = useState('');
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

    useEffect(() => {
        window.scrollTo(0, 0);
        console.table(Data.mobile)
        if (IsLogin == true) {
            setUserMobile(Data.mobile)
            const GetData = async () => {
                const sendUM = { UserMobile: Data.mobile }
                const data = await fetch("/api/List/MyFollowings", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(sendUM)
                }).then((a) => {
                    return a.json();
                })
                    .then((parsed) => {
                        if (parsed.Statusdata == true) {
                            console.log(parsed.FinalData)
                            setRetdata(parsed.FinalData)
                            setTotalFollowing(parsed.FinalData.length)
                            setIsLoading(false)
                        }

                    })
            }
            GetData()
        }



    }, [])





    return (
        <>

            <BrowserView>
                <div className={styles.ProfileList}>


                    {IsLoading &&

                        <div className={styles.ListLoaderProfile}>
                            <div className={styles.ListLoaderProfileItem}>
                                <div>
                                    <span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} /></span>
                                    <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'50%'} /></small>
                                    <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'70%'} /></small>
                                </div>
                            </div>
                        </div>

                    }

                    {!IsLoading &&
                        <div>
                            <div style={{ minHeight: 10 }}></div>
                            <div className={styles.IconTitle}>
                                <AiFillHeart size={20} />
                                <span style={{ fontSize: 14, fontWeight: 'bold' }}>My Followings ({Retdata.length})</span>
                            </div>
                            <div style={{ minHeight: 10 }}></div>
                            <div
                                className={styles.VendorList}

                            >

                                {Retdata.map((item) => {

                                    return <Link href={`/Vendor/${item.data[0].username}`} key={item.data[0].id} style={{ textDecoration: 'none' }}>
                                        <div className={styles.VendorListItem}>
                                            <div className={styles.VendorListItemA}>
                                                <div className={styles.VendorListSp}>
                                                    <Image
                                                        src={`${StorageURl}/panel/Vendorsdp/${item.data[0].dp}`}
                                                        alt="image"
                                                        layout="responsive"
                                                        placeholder='blur'
                                                        width={100}
                                                        height={100}
                                                        quality={5}
                                                        blurDataURL={blurredImageData}

                                                    />

                                                </div>
                                            </div>
                                            <div className={styles.VendorListItemB}>
                                                <div className={styles.VendorName}>
                                                    <span>{item.data[0].name}</span>
                                                    <small>@{item.data[0].username}</small>
                                                </div>
                                                <div className={styles.VendorIconMenu}>
                                                    <div style={{ minHeight: 10 }}></div>
                                                    <div className={styles.VendorIconMenuItem}>
                                                        <div className={styles.VendorIconMenuItemIcon}><HiOutlineUserCircle /></div>
                                                        <div className={styles.VendorIconMenuItemText}><span>{item.data[0].Profession}, {item.data[0].mainCategory}</span></div>
                                                    </div>

                                                    <div className={styles.VendorIconMenuItem}>
                                                        <div className={styles.VendorIconMenuItemIcon}><HiOutlineMapPin /></div>
                                                        <div className={styles.VendorIconMenuItemText}><span>{item.data[0].city}, {item.data[0].state}</span></div>
                                                    </div>
                                                </div>
                                                <div style={{ minHeight: 10 }}></div>

                                                <div className={styles.ViewProfileBtn}>
                                                    <span>View Profile</span>
                                                </div>


                                            </div>
                                        </div>
                                    </Link>


                                }

                                )}


                            </div>
                        </div>
                    }

                </div>
            </BrowserView>
            {/* mobile View Start */}
            <MobileView>
                <NavbarMobileTitle Title={`My Followings ${TotalFollowing}`} />
                <div className={styles.ProfileList}>


                    {IsLoading &&

                        <div className={styles.ListLoaderProfile}>
                            <div className={styles.ListLoaderProfileItem}>
                                <div>
                                    <span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} /></span>
                                    <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'50%'} /></small>
                                    <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'70%'} /></small>
                                </div>
                            </div>
                        </div>

                    }

                    {!IsLoading &&
                        <div>
                            <div style={{ minHeight: 10 }}></div>

                            <div
                                className={styles.VendorList}

                            >

                                {Retdata.map((item) => {

                                    return <Link href={`/Vendor/${item.data[0].username}`} key={item.data[0].id} style={{ textDecoration: 'none' }}>
                                        <div className={styles.VendorListItem}>
                                            <div className={styles.VendorListItemA}>
                                                <div className={styles.VendorListSp}>
                                                    <Image
                                                        src={`${StorageURl}/panel/Vendorsdp/${item.data[0].dp}`}
                                                        alt="image"
                                                        layout="responsive"
                                                        placeholder='blur'
                                                        width={100}
                                                        height={100}
                                                        quality={5}
                                                        blurDataURL={blurredImageData}

                                                    />

                                                </div>
                                            </div>
                                            <div className={styles.VendorListItemB}>
                                                <div className={styles.VendorName}>
                                                    <span>{item.data[0].name}</span>
                                                    <small>@{item.data[0].username}</small>
                                                </div>
                                                <div className={styles.VendorIconMenu}>
                                                    <div style={{ minHeight: 10 }}></div>
                                                    <div className={styles.VendorIconMenuItem}>
                                                        <div className={styles.VendorIconMenuItemIcon}><HiOutlineUserCircle /></div>
                                                        <div className={styles.VendorIconMenuItemText}><span>{item.data[0].Profession}, {item.data[0].mainCategory}</span></div>
                                                    </div>

                                                    <div className={styles.VendorIconMenuItem}>
                                                        <div className={styles.VendorIconMenuItemIcon}><HiOutlineMapPin /></div>
                                                        <div className={styles.VendorIconMenuItemText}><span>{item.data[0].city}, {item.data[0].state}</span></div>
                                                    </div>
                                                </div>
                                                <div style={{ minHeight: 10 }}></div>

                                                <div className={styles.ViewProfileBtn}>
                                                    <span>View Profile</span>
                                                </div>


                                            </div>
                                        </div>
                                    </Link>


                                }

                                )}


                            </div>
                        </div>
                    }

                </div>
                <MobileFooter />
            </MobileView>
        </>

    )
}

export default page
