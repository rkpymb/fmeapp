"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../../Data/config'
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'

export default function App() {
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
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


    
    return (
        <>
            
            {isLoading &&
                <div className={styles.CatGrid}>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>
                    <div className={styles.CatGridItem} style={{ padding: 5 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} />
                    </div>

                </div>
            }
            {!isLoading  &&
            
                <div>
                    <div
                        className={styles.CatGrid} 
                        
                    >

                        {Retdata.map((item) => {
                            return <Link href={`/Category/${item.Catid}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <div className={styles.CatGridItem}>
                                    <div className={styles.CatGridItemImageBox}>
                                        <div className={styles.CatGridItemImage}>
                                            <Image src={`${StorageURl}/panel/Catimg/${item.img}`} alt="image" layout="responsive"
                                                placeholder='blur'
                                                width={100}
                                                height={100}
                                                quality={5}
                                                blurDataURL={blurredImageData}

                                            />

                                        </div>
                                    </div>
                                    <div className={styles.CatGridData}>
                                        <span>{item.title}</span>

                                    </div>
                                </div>
                            </Link>


                        }

                        )}
                       

                    </div>
            </div>
            }
            
        </>
    );
}
