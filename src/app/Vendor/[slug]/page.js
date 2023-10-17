"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../../Data/config'
import { HiOutlineMapPin, HiOutlineUserCircle } from "react-icons/hi2";
import Image from 'next/image'
import NavbarMobile from '@/app/Components/Mobile/Shared/NavbarMobile'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import VendorTab from '@/app/Components/Addons/VendorTab'
const page = ({ params }) => {
  const { slug } = params;
  const { IsLogin, Data } = UseLoginContext();
  const [Retdata, setRetdata] = useState();
  const [TotalBookings, setTotalBookings] = useState(0);
  const [TotalVisits, setTotalVisits] = useState(0);
  const [TotalReviews, setTotalReviews] = useState(0);
  const [TotalFollowers, setTotalFollowers] = useState(0);
  const [IsLoading, setIsLoading] = useState(true);
  const [IFollow, setIFollow] = useState(false);
  const [UserMobile, setUserMobile] = useState(null);

  useEffect(() => {
    console.table(Data.mobile)
    if (IsLogin == true) {
      setUserMobile(Data.mobile)
    }
    window.scrollTo(0, 0);
    const handleSubmit = async () => {
      // console.log(slug)
      const uToken = localStorage.getItem('utoken')
      const sendUM = { uToken: uToken, UserName: slug }
      const data = await fetch("/api/Vendor/VendorProfileData", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(sendUM)
      }).then((a) => {
        return a.json();
      })
        .then((parsed) => {
          // console.log(parsed)
          if (parsed.statusdata == true) {
            setRetdata(parsed.RetData)
            setTotalBookings(parsed.TotalBookings)
            setTotalReviews(parsed.VendorReviews)
            setTotalVisits(parsed.count_VisitsProfile)
            setTotalFollowers(parsed.FavoritelistAll)

            if (parsed.MYFavoritelist == 1) {
              setIFollow(true)
              
            }

            setIsLoading(false)
          
          } else {
            alert('url not found')
          }

        })
    }
    handleSubmit()


  }, [])

  const FollowBtn = async () => {
    setIFollow(false)
    const uToken = localStorage.getItem('utoken')
    const sendUM = { uToken: uToken, UserName: slug }
    const data = await fetch("/api/Vendor/FollowBtn", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(sendUM)
    }).then((a) => {
      return a.json();
    })
      .then((parsed) => {
        if(parsed.statusdata == true){
          if (parsed.iSFollow == 1) {
            setIFollow(true)
            setTotalFollowers(TotalFollowers+1)
          } else {
            setIFollow(false)
            setTotalFollowers(TotalFollowers - 1)
          }
        } else {
          alert('Something Went Wrong')
        }
      })
  }

  return (
    <>
     <BrowserView>
        {IsLoading &&

          <div className={styles.VendorProfileBoxMain}>
            <div className={styles.VendorProfileBoxData}>
              <div className={styles.VendorProfileBoxDataIMG}>
                <Skeleton variant="circular" width={200} height={200} />
              </div>
              <div className={styles.VendorProfileBoxDataContent}>
                <div className={styles.VendorNameBox}>
                  <div className={styles.VendorName}>
                    <span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} /></span>
                    <small><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={150} /></small>
                  </div>
                  <div style={{ minWidth: 25 }}></div>
                  <div className={styles.VendorButtonBox}>
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={105} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={105} style={{ marginLeft: 10 }} />
                  </div>
                </div>
                <div style={{ minHeight: 5 }}></div>
                <div className={styles.VendorShortbio}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={500} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={400} />
                </div>
                <div className={styles.VendorIconMenu}>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>

                    <div className={styles.VendorIconMenuItemText}><span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} /></span></div>
                  </div>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>

                    <div className={styles.VendorIconMenuItemText}><span><Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100} /></span></div>
                  </div>
                </div>

                <div style={{ minHeight: 10 }}></div>

                <div className={styles.VendorCounterBox}>
                  <div className={styles.VendorCounterBoxItem} >
                    <Skeleton variant="text" height={10} width={50} />
                    <Skeleton variant="text" height={10} width={70} />
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <Skeleton variant="text" height={10} width={50} />
                    <Skeleton variant="text" height={10} width={70} />
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <Skeleton variant="text" height={10} width={50} />
                    <Skeleton variant="text" height={10} width={70} />
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <Skeleton variant="text" height={10} width={50} />
                    <Skeleton variant="text" height={10} width={70} />
                  </div>
                </div>
              </div>
            </div>


          </div>

        }

        {!IsLoading &&
          <div className={styles.VendorProfileBoxMain}>
            <div className={styles.VendorProfileBoxData}>
              <div className={styles.VendorProfileBoxDataIMG}>
                <Image
                  src={`${StorageURl}/panel/Vendorsdp/${Retdata.dp}`}
                  alt="dp"
                  width={200}
                  height={200}
                  quality={50}
                  className={styles.DpCercleVendor}
                />
              </div>
              <div className={styles.VendorProfileBoxDataContent}>
                <div className={styles.VendorNameBox}>
                  <div className={styles.VendorName}>
                    <span>{Retdata.name}</span>
                    <small>{Retdata.username}</small>
                  </div>
                  <div style={{ minWidth: 25 }}></div>

                  {IsLogin &&

                    <div className={styles.VendorButtonBox}>

                      {!IFollow &&

                        <div className={styles.FollowBtn} onClick={FollowBtn}>
                          <span>Follow</span>
                        </div>
                      }
                      {IFollow &&
                        <div className={styles.FollowBtn} onClick={FollowBtn}>
                          <span>Unfollow</span>
                        </div>
                      }

                      <Link href={`/Messages/${Retdata.username}`} style={{ textDecoration: 'none' }} className={styles.FollowBtn}>
                        <span>Message</span>
                      </Link>
                      <div className={styles.FollowBtn} style={{ backgroundColor: 'black' }}>
                        <span>Book Now</span>
                      </div>
                    </div>
                  }

                </div>
                <div style={{ minHeight: 5 }}></div>
                <div className={styles.VendorShortbio}>
                  <span>
                    {Retdata.shortbio}
                  </span>
                </div>
                <div className={styles.VendorIconMenu}>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>
                    <div className={styles.VendorIconMenuItemIcon}><HiOutlineUserCircle /></div>
                    <div className={styles.VendorIconMenuItemText}><span>{Retdata.Profession}, {Retdata.mainCategory}</span></div>
                  </div>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>
                    <div className={styles.VendorIconMenuItemIcon}><HiOutlineMapPin /></div>
                    <div className={styles.VendorIconMenuItemText}><span>{Retdata.city}, {Retdata.state}</span></div>
                  </div>
                </div>

                <div style={{ minHeight: 10 }}></div>

                <div className={styles.VendorCounterBox}>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalFollowers}</span>
                    <small>followers</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalBookings}</span>
                    <small>Booked</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalVisits}</span>
                    <small>Profile visits</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalReviews}</span>
                    <small>Reviews</small>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ minHeight: 20 }}></div>
            <div>
              <VendorTab VendorID={slug} />
            </div>
          </div>
        }
     </BrowserView>
      <MobileView>
        <NavbarMobile />
        {IsLoading &&
          <div>
            <div className={styles.VendorMobileLoader}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} />
            </div>
             <div className={styles.VendorMobileLoader}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} />
          </div>
            <div className={styles.VendorMobileLoader}>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'100%'} />
            </div>
          </div>

        }

        {!IsLoading &&
          
          <div className={styles.VendorProfileBoxMain}>
            <div className={styles.VendorProfileBoxDataMobilex}>
              <div className={styles.VendorPDatamob}>
                <Image
                    src={`${StorageURl}/panel/Vendorsdp/${Retdata.dp}`}
                    alt="dp"
                    width={70}
                    height={70}
                    quality={50}
                    className={styles.DpCercleVendor}
                  />
                  <div>
                  <div className={styles.VendorName}>
                    <span>{Retdata.name}</span>
                    <small>{Retdata.username}</small>
                  </div>
                  {IsLogin &&
                    <div className={styles.VendorButtonBox}>

                      {!IFollow &&

                        <div className={styles.FollowBtn} onClick={FollowBtn}>
                          <span>Follow</span>
                        </div>
                      }
                      {IFollow &&
                        <div className={styles.FollowBtn} onClick={FollowBtn}>
                          <span>Unfollow</span>
                        </div>
                      }

                      <Link href={`/Messages/${Retdata.username}`} style={{ textDecoration: 'none' }} className={styles.FollowBtn}>
                        <span>Message</span>
                      </Link>
                      <div className={styles.FollowBtn} style={{ backgroundColor: 'black' }}>
                        <span>Book Now</span>
                      </div>
                    </div>
                  }
                  </div>
                 
              </div>
             
              <div className={styles.VendorProfileBoxDataContent}>
                
                <div style={{ minHeight: 5 }}></div>
                <div className={styles.VendorShortbio}>
                  <span>
                    {Retdata.shortbio}
                  </span>
                </div>
                <div className={styles.VendorIconMenu}>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>
                    <div className={styles.VendorIconMenuItemIcon}><HiOutlineUserCircle /></div>
                    <div className={styles.VendorIconMenuItemText}><span>{Retdata.Profession}, {Retdata.mainCategory}</span></div>
                  </div>
                  <div style={{ minHeight: 10 }}></div>
                  <div className={styles.VendorIconMenuItem}>
                    <div className={styles.VendorIconMenuItemIcon}><HiOutlineMapPin /></div>
                    <div className={styles.VendorIconMenuItemText}><span>{Retdata.city}, {Retdata.state}</span></div>
                  </div>
                </div>

                <div style={{ minHeight: 10 }}></div>

                <div className={styles.VendorCounterBox}>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalFollowers}</span>
                    <small>followers</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalBookings}</span>
                    <small>Booked</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalVisits}</span>
                    <small>Profile visits</small>
                  </div>
                  <div className={styles.VendorCounterBoxItem} >
                    <span>{TotalReviews}</span>
                    <small>Reviews</small>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ minHeight: 20 }}></div>
            <div>
              <VendorTab VendorID={slug} />
            </div>
          </div>
        }
      </MobileView>
      
    </>
    
  )
}

export default page
