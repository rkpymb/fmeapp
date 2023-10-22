"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl, MediaFilesFolder, MediaFilesUrl } from '../../../../Data/config'
import PostComents from '../../Components/Addons/PostComents'
import { HiOutlineMapPin, HiOutlineUserCircle } from "react-icons/hi2";
import Image from 'next/image'
import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'
import NavbarMobile from '@/app/Components/Mobile/Shared/NavbarMobile'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { FiTrendingUp, FiMoreHorizontal } from "react-icons/fi";

const page = ({ params }) => {
  const { slug } = params;
  const { IsLogin, Data } = UseLoginContext();
  const [VendorData, setVendorData] = useState();
  const [Postdata, setPostData] = useState();
  const [IsLoading, setIsLoading] = useState(true);
  const [UserMobile, setUserMobile] = useState(null);
  
  const [VideoURI, setVideoURI] = useState('https://fmenew.sgp1.cdn.digitaloceanspaces.com/fmereelsvides/');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.table(Data.mobile)
    if (IsLogin == true) {
      setUserMobile(Data.mobile)
    }
  
    const handleSubmit = async () => {
      // console.log(slug)
      const uToken = localStorage.getItem('utoken')
      const sendUM = { uToken: uToken, PostID: slug }
      const data = await fetch("/api/Post/GetPostData", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'  
        },
        body: JSON.stringify(sendUM)
      }).then((a) => {
        return a.json();
      })
        .then((parsed) => {
          console.log(parsed)
          
          if (parsed.statusdata == true) {
            setVendorData(parsed.VendorData)
            setPostData(parsed.PostData)
            setIsLoading(false)

          }
          
        })
    }
    handleSubmit()


  }, [])
  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';
  return (
    <>
      <BrowserView>
        <div>
          {IsLoading &&



            <div className={styles.PostLoader}>
              <Skeleton variant="text" width={1000} height={140} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />

            </div>

          }

          {!IsLoading &&
            <div className={styles.PostDetailsBox}>

              <div className={styles.PostDetailsBoxLeft}>
                <div className={styles.PostedBybox}>
                  <div className={styles.FeedHeader}>
                    <Link href={`/Vendor/${VendorData.username}`} className={styles.FeedIProfile} style={{ textDecoration: 'none' }}>
                      <Image
                        placeholder='blur'
                        blurDataURL={blurredImageData}
                        src={`${StorageURl}/panel/Vendorsdp/${VendorData.dp}`}
                        alt="dp"
                        width={40}
                        height={40}
                        quality={25}
                        className={styles.DpCercle}
                      />
                      <div className={styles.FeedIProfileText}>
                        <div><span>{VendorData.name}</span></div>
                        <div style={{ marginTop: -5 }}><small>{VendorData.mainCategory}</small></div>
                      </div>

                    </Link>

                    <div>

                      <FiMoreHorizontal className={styles.Dotbtn} />

                    </div>
                  </div>
                </div>
                {Postdata.PType == 1 &&
                  <div className={styles.PostDetailsBoxLeftImg}>
                    <div className={styles.PostDetailsBoxLimgBox}>
                      <Image src={`${MediaFilesUrl}${MediaFilesFolder}/${Postdata.ContentData}`} alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={10}
                        height={1}
                        quality={100}
                        blurDataURL={blurredImageData}
                      />
                    </div>
                  </div>

                }

                {Postdata.PType == 2 &&
                  <div className={styles.PostDetailsBoxLeftImg}>
                    <div className={styles.videobox}>
                      <video
                        src={`${MediaFilesUrl}${MediaFilesFolder}/${Postdata.ContentData}`}
                        autoPlay
                        type={'video/mp4'}
                        loop
                        controls
                        className={styles.videoboxPlayer}
                        onLoadStart={() => {


                        }}
                        onLoadedData={() => {


                        }}
                      />
                    </div>
                  </div>

                }


              </div>
              <div className={styles.PostDetailsBoxRight}>

                <PostComents Postdata={Postdata} VendorData={VendorData} />
              </div>
            </div>

          }
        </div>
    </BrowserView>

      <MobileView>
        <NavbarMobile/>
          <div>
          {IsLoading &&
            <div className={styles.PostLoader}>
              <Skeleton variant="text" width={1000} height={140} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />
              <div style={{ minHeight: '2px' }}></div>
              <Skeleton variant="text" width={1000} height={30} />

            </div>

          }

          {!IsLoading &&
            <div className={styles.PostDetailsBox}>
             
              <div className={styles.PostDetailsBoxLeft}>
                <div className={styles.PostedBybox}>
                  <div className={styles.FeedHeader}>
                    <Link href={`/Vendor/${VendorData.username}`} className={styles.FeedIProfile} style={{ textDecoration: 'none' }}>
                      <Image
                        placeholder='blur'
                        blurDataURL={blurredImageData}
                        src={`${StorageURl}/panel/Vendorsdp/${VendorData.dp}`}
                        alt="dp"
                        width={40}
                        height={40}
                        quality={25}
                        className={styles.DpCercle}
                      />
                      <div className={styles.FeedIProfileText}>
                        <div><span>{VendorData.name}</span></div>
                        <div style={{ marginTop: -5 }}><small>{VendorData.mainCategory}</small></div>
                      </div>

                    </Link>

                    <div>

                      <FiMoreHorizontal className={styles.Dotbtn} />

                    </div>
                  </div>
                </div>
                {Postdata.PType == 1 &&
                  <div className={styles.PostDetailsBoxLeftImg}>
                    <div className={styles.PostDetailsBoxLimgBox}>
                      <Image src={`${MediaFilesUrl}${MediaFilesFolder}/${Postdata.ContentData}`} alt="image"
                        layout="responsive"
                        placeholder='blur'
                        width={10}
                        height={1}
                        quality={100}
                        blurDataURL={blurredImageData}
                      />
                    </div>
                  </div>

                }

                {Postdata.PType == 2 &&
                  <div className={styles.PostDetailsBoxLeftImg}>
                   
                    <div className={styles.videobox}>
                     
                      <video
                       
                        src={`${MediaFilesUrl}${MediaFilesFolder}/${Postdata.ContentData}`}
                        autoPlay
                        type={'video/mp4'}
                        loop
                        controls
                        className={styles.videoboxPlayer}
                        onLoadStart={() => {


                        }}
                        onLoadedData={() => {


                        }}
                      />
                    </div>
                  </div>

                }

              
              </div>
              <div className={styles.PostDetailsBoxRightM}>
                ygg
                <PostComents Postdata={Postdata} VendorData={VendorData} />
              </div>
            </div>

          }
        </div>
       
      </MobileView>
    
      
    </>
  )
}

export default page
