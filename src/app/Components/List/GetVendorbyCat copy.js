"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import { FiTrendingUp, FiMoreHorizontal } from "react-icons/fi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import ShareModal from '../Share/ShareModal'
import { BiComment } from "react-icons/bi";

const FeedlistHome = ({ catId }) => {

    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(true)
        const GetData = async () => {
            const sendUM = { catId: catId }
            const data = await fetch("/api/List/GetVendorbyCat", {
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
                        setRetdata(parsed.RetData)
                        console.log(parsed)
                    }

                })
        }
        GetData()


    }, [])



    return (
        <div>

            <div style={{ minHeight: 10 }}></div>

            <div className={styles.IconTitle}>
                <FiTrendingUp size={20} />
                <span style={{ fontSize: 14, fontWeight: 'bold' }}>Vendor Profile in<span style={{color:'blue'}}>{catId}</span></span>
            </div>
            <div style={{ minHeight: 10 }}></div>

            {isLoading &&
                <div>

                    <div>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={30} />

                    </div>

                </div>
            }


            {!isLoading &&
                <div>
                    {Retdata.map((item) => {
                        return <div className={styles.FeedItem}>
                            <div className={styles.FeedHeader}>
                                <Link href={`/Vendor/${item.username}`} className={styles.FeedIProfile} style={{textDecoration:'none'}}>
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

                                </Link>

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
                            <div style={{ minHeight: 10 }}></div>
                            <div className={styles.PostCap}>
                                <span> {item.PostText}</span>
                            </div>
                            <div style={{ minHeight: 10 }}></div>
                            <div className={styles.FeedBootom}>
                                <ShareModal itemData={item} />
                                <Link href={`post/${item.id}`} style={{ textDecoration: 'none' }} className={styles.iconbtn}>
                                    <span> <BiComment /></span>
                                    <small>Coments</small>
                                </Link>

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
