"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl } from '../../../../Data/config'
import { FiList } from "react-icons/fi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image'
const MenuCatlist = () => {

  const [Retdata, setRetdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [IsSelected, setIsSelected] = useState(false);

  const CickCatlist = async (e) => {
    console.log(e)
    document.getElementById("SelectedCat").setAttribute('value', e);
    setIsSelected(true)
  }

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
    <div>
     
     

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
          <div className={styles.IconTitle}>
            <FiList size={20} />
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>Select Event Category</span>
          </div>
          <div style={{ minHeight: 10 }}></div>
          {!isLoading &&
            <div className={styles.MenuCatlistItemBox}>
              {Retdata.map((item) => {
                return <div style={{ textDecoration: 'none' }} className={styles.MenuCatlistItem}
                  onClick={() => CickCatlist(`${item.Catid}`)}
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
          }

        </div>

      }
      
      

    </div>
  )
}

export default MenuCatlist
