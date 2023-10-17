"use client"
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link"
import { StorageURl, DomainURLMain , MediaFilesFolder, MediaFilesUrl } from '../../../../Data/config'

import { BiComment } from "react-icons/bi";
import styles from "@/app/page.module.css";
import Skeleton from '@mui/material/Skeleton';
import ShareModalProfile from '../Share/ShareModalProfile'
import Image from 'next/image'

const VendorPhotos = ({ VendorID }) => {

  const [Retdata, setRetdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true)
    const GetData = async () => {
   
      const sendUM = { VendorID: VendorID }
      const data = await fetch("/api/List/VendorPhotos", {
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
            console.log(parsed.dataret)
            setRetdata(parsed.dataret)
            setIsLoading(false)
          }

        })
    }
    GetData()


  }, [])



  return (
    <div>
      {isLoading &&
        <div className={styles.FeedItemLoader}>
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
        <div className={styles.VendorProfileFeed}>
          {Retdata.map((item) => {
            return <div className={styles.FeedItem}>
            
              <div style={{ minHeight: 10 }}></div>
              <div>
                <Image src={`${MediaFilesUrl}${MediaFilesFolder}/${item.ContentData}`} alt="image" layout="responsive"
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
                <ShareModalProfile itemdata={item} />
                <Link href={`${DomainURLMain}/post/${item.id}`} style={{textDecoration:'none'}} className={styles.iconbtn}>
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

export default VendorPhotos
