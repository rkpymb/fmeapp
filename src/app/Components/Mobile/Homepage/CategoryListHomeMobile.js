"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../../Data/config'
import { FiTrendingUp } from "react-icons/fi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
const MenuCatlist = () => {

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
            // console.log(parsed)
            setRetdata(parsed.RetData)
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
        <span style={{ fontSize: 14, fontWeight: 'bold' }}>Browes by Category</span>
      </div>
      <div style={{ minHeight: 10 }}></div>

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
      
      
      {!isLoading &&
        <div className={styles.CategoryListHomeMobile}>
          {Retdata.map((item) => {
            return <Link href={`/Category/${item.Catid}`} key={item.id} style={{ textDecoration: 'none' }} className={styles.CategoryListHomeMobileItem}>

              <div className={styles.CatIMGMobile}>
                <Image
                  src={`${StorageURl}/panel/Catimg/${item.img}`}
                  alt="image"
                  layout="responsive"
                  placeholder='blur'
                  width={100}
                  height={100}
                  quality={100}
                  blurDataURL={blurredImageData}
                />
             </div>
              <div className={styles.TextCat}>
                
                <span>{item.title}</span>
              </div>

            </Link>

          }

          )}

        </div> 
      }
      

    </div>
  )
}

export default MenuCatlist
