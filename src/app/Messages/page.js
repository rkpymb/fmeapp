"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../Data/config'
import { FiChevronRight } from "react-icons/fi";
import Image from 'next/image'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavbarMobileTitle from '../Components/Mobile/Shared/NavbarMobileTitle'
import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'
const page = () => {
    const { IsLogin, Data, LogoutBtn } = UseLoginContext();
    const [Retdata, setRetdata] = useState();
    const [IsLoading, setIsLoading] = useState(true);
    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

    useEffect(() => {
        window.scrollTo(0, 0);
        if (IsLogin == true) {
            GetData()
        }
    }, [])

    const GetData = async () => {

        const sendUM = { UserMobile: Data.mobile }
        const data = await fetch("/api/Inbox/UserInboxList", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(sendUM)
        }).then((a) => {
            return a.json();
        })
            .then((parsedMsgList) => {
                console.log(parsedMsgList);
                if (parsedMsgList.Statusdata == true) {
                    setRetdata(parsedMsgList.FinalData)
                    setIsLoading(false)
                }

            })
    }


    return (
        <>
      <BrowserView>
                <div className={styles.InboxBoxContainer}>
                    {IsLoading &&

                        <div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                        </div>

                    }

                    {!IsLoading &&
                        <div className={styles.InboxBox}>

                            {Retdata.map((item) => {
                                return <Link
                                    href={`/Messages/${item.username}`} style={{ textDecoration: 'none', color: 'black' }}
                                    className={styles.InboxBoxItem}>
                                    <div className={styles.InboxBoxItemA}>
                                        <Image
                                            placeholder='blur'
                                            blurDataURL={blurredImageData}
                                            src={`${StorageURl}/panel/Vendorsdp/${item.dp}`}
                                            alt="dp"
                                            width={40}
                                            height={40}
                                            quality={25}
                                            className={styles.DpCercle}
                                        />
                                    </div>
                                    <div className={styles.InboxBoxItemB}>
                                        <div className={styles.InboxBoxItemAName}>
                                            <span>{item.Fullname}</span>
                                            <small>sent to @{item.username}</small>

                                        </div>
                                        <div className={styles.InboxBoxItemBtn}>
                                            <FiChevronRight />

                                        </div>
                                    </div>
                                </Link>



                            }

                            )}



                        </div>
                    }

                </div>
      </BrowserView>
      {/* mobile View Start */}
            <MobileView>
                <NavbarMobileTitle Title={'Messages'} />
                <div className={styles.container}>
                    {IsLoading &&

                        <div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                            <div className={styles.InboxBoxLoader}>
                                <Skeleton variant="circular" width={30} height={30} />
                                <div style={{ minWidth: '10px' }}>
                                </div>
                                <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'100%'} />
                            </div>
                        </div>

                    }

                    {!IsLoading &&
                        <div className={styles.InboxBox}>

                            {Retdata.map((item) => {
                                return <Link
                                    href={`/Messages/${item.username}`} style={{ textDecoration: 'none', color: 'black' }}
                                    className={styles.InboxBoxItem}>
                                    <div className={styles.InboxBoxItemA}>
                                        <Image
                                            placeholder='blur'
                                            blurDataURL={blurredImageData}
                                            src={`${StorageURl}/panel/Vendorsdp/${item.dp}`}
                                            alt="dp"
                                            width={40}
                                            height={40}
                                            quality={25}
                                            className={styles.DpCercle}
                                        />
                                    </div>
                                    <div className={styles.InboxBoxItemB}>
                                        <div className={styles.InboxBoxItemAName}>
                                            <span>{item.Fullname}</span>
                                            <small>sent to @{item.username}</small>

                                        </div>
                                        <div className={styles.InboxBoxItemBtn}>
                                            <FiChevronRight />

                                        </div>
                                    </div>
                                </Link>



                            }

                            )}



                        </div>
                    }

                </div>
                <MobileFooter />
      </MobileView>
    </>
       
    )
}

export default page
