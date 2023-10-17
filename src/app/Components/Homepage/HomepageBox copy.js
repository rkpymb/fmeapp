"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import { FiTrendingUp, FiMoreHorizontal } from "react-icons/fi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import PostBox from '../Enquiry/PostBox'
const FeedlistHome = () => {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true)
        const GetData = async () => {
            const dataid = '08c5th4rh86ht57h6g';
            const sendUM = { dataid }
            const data = await fetch("/api/List/FeedlistHome", {
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
                        setIsLoading(false)
                    }

                })
        }
        GetData()


    }, [])



    return (
        <div>
          
            <div className={styles.IconTitle}>
                <FiTrendingUp size={20} />
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>Latest Feeds</span>
            </div>
            <div style={{ minHeight: 10 }}></div>

            {isLoading &&
                <div>
                    <div className={styles.FeedItem}>
                        <div className={styles.FeedHeader}>
                            <div className={styles.FeedIProfile}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div className={styles.FeedIProfileText}>
                                    <div><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} /></div>
                                    <div style={{ marginTop: -5 }}><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50} /></div>
                                </div>

                            </div>

                            <div>

                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={30} />

                            </div>
                        </div>


                        <div style={{ marginTop: -20 }}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={`100%`} height={300} />
                        </div>
                    </div>
                    <div className={styles.FeedItem}>
                        <div className={styles.FeedHeader}>
                            <div className={styles.FeedIProfile}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div className={styles.FeedIProfileText}>
                                    <div><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} /></div>
                                    <div style={{ marginTop: -5 }}><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50} /></div>
                                </div>

                            </div>

                            <div>

                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={30} />

                            </div>
                        </div>


                        <div style={{ marginTop: -20 }}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={`100%`} height={300} />
                        </div>
                    </div>
                    <div className={styles.FeedItem}>
                        <div className={styles.FeedHeader}>
                            <div className={styles.FeedIProfile}>
                                <Skeleton variant="circular" width={40} height={40} />
                                <div className={styles.FeedIProfileText}>
                                    <div><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} /></div>
                                    <div style={{ marginTop: -5 }}><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={50} /></div>
                                </div>

                            </div>

                            <div>

                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={30} />

                            </div>
                        </div>


                        <div style={{ marginTop: -20 }}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={`100%`} height={300} />
                        </div>
                    </div>

                </div>
            }


            {!isLoading &&
                <div>
                    {Retdata.map((item) => {
                        return <div className={styles.FeedItem}>
                            <div className={styles.FeedHeader}>
                                <div className={styles.FeedIProfile}>
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
                                    <div className={styles.FeedIProfileText}>
                                        <div><span>{item.Fullname}</span></div>
                                        <div style={{ marginTop: -5 }}><small>{item.mainCategory}</small></div>
                                    </div>

                                </div>

                                <div>

                                    <FiMoreHorizontal className={styles.Dotbtn} />

                                </div>
                            </div>

                            <div style={{ minHeight: 10 }}></div>
                            <div>
                                <Image src={`${StorageURl}/panel/Vendorphotos/${item.ContentData}`} alt="image" layout="responsive"
                                    placeholder='blur'
                                    width={500}
                                    height={300}
                                    quality={5}
                                    blurDataURL={blurredImageData}

                                />

                            </div>
                        </div>

                    }

                    )}

                </div>
            }


        </div>
    )
}

export default FeedlistHome
