"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../Data/config'
import { FiChevronRight } from "react-icons/fi";
import Image from 'next/image'
import Sent from '../Components/Share/Sent'
import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'
import Received from '../Components/Share/Received'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavbarMobileTitle from '../Components/Mobile/Shared/NavbarMobileTitle'
const page = () => {
    const { IsLogin, Data, LogoutBtn } = UseLoginContext();
    const [Retdata, setRetdata] = useState();
    const [IsLoading, setIsLoading] = useState(true);
   

    useEffect(() => {
        window.scrollTo(0, 0);
        if (IsLogin == true) {
            GetData()
        }
    }, [])

    const GetData = async () => {

        const sendUM = { UserMobile: Data.mobile }
        const data = await fetch("/api/MyShare/ShareList", {
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
                        <div>

                            {Retdata.map((item) => {
                                return <div>
                                    {(item.UserSender == Data.mobile)
                                        ?
                                        <Sent itemdata={item} />
                                        : <Received itemdata={item} />
                                    }
                                </div>
                            }

                            )}

                        </div>
                    }

                </div>
      </BrowserView>
      {/* mobile View Start */}
            <MobileView>
                <NavbarMobileTitle Title={'My Share'} />
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
                        <div>

                            {Retdata.map((item) => {
                                return <div>
                                    {(item.UserSender == Data.mobile)
                                        ?
                                        <Sent itemdata={item} />
                                        : <Received itemdata={item} />
                                    }
                                </div>
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
