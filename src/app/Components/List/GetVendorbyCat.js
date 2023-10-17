"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
import { HiOutlineMapPin, HiOutlineUserCircle } from "react-icons/hi2";

export default function App({ catId }) {
    const [Retdata, setRetdata] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
    useEffect(() => {
        // window.scrollTo(0, 0);
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
                        console.log(parsed)
                        setRetdata(parsed.RetData)
                        setIsLoading(false)
                    }

                })
        }
        GetData()


    }, [])



    return (
        <div>

            {isLoading &&

                <div>
                    <p>Loading...</p>
                </div>
            }
            {!isLoading &&

                <div>
                    <div
                        className={styles.VendorList}

                    >

                        {Retdata.map((item) => {
                            return <Link href={`/Vendor/${item.username}`} key={item.id} style={{ textDecoration: 'none' }}>
                                <div className={styles.VendorListItem}>
                                    <div className={styles.VendorListItemA}>
                                        <div className={styles.VendorListSp}>
                                            <Image
                                                src={`${StorageURl}/panel/Vendorsdp/${item.dp}`}
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
                                            <span>{item.name}</span>
                                            <small>@{item.username}</small>
                                        </div>
                                        <div className={styles.VendorIconMenu}>
                                            <div style={{ minHeight: 10 }}></div>
                                            <div className={styles.VendorIconMenuItem}>
                                                <div className={styles.VendorIconMenuItemIcon}><HiOutlineUserCircle /></div>
                                                <div className={styles.VendorIconMenuItemText}><span>{item.Profession}, {item.mainCategory}</span></div>
                                            </div>
                                            
                                            <div className={styles.VendorIconMenuItem}>
                                                <div className={styles.VendorIconMenuItemIcon}><HiOutlineMapPin /></div>
                                                <div className={styles.VendorIconMenuItemText}><span>{item.city}, {item.state}</span></div>
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
    );
}
