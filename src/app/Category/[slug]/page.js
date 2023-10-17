"use client"
import React, { useRef, useState, useEffect } from "react";
import GetVendorbyCat from '../../Components/List/GetVendorbyCat'
import styles from '@/app/page.module.css'
import NavbarMobileTitle from '@/app/Components/Mobile/Shared/NavbarMobileTitle'
import MobileFooter from '@/app/Components/Mobile/Shared/MobileFooter'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const page = ({ params }) => {
  
  const { slug } = params;


  useEffect(() => {
    window.scrollTo(0, 0);

  })

  return (<>
    <BrowserView>
      <div className={styles.container}>

        <div className={styles.ProfileList}>
          <GetVendorbyCat catId={slug} />
        </div>

      </div>
    </BrowserView>
    <NavbarMobileTitle Title={slug} />
    <MobileView>
      <div className={styles.Mobcontainer}>

        <div className={styles.ProfileList}>
          <GetVendorbyCat catId={slug} />
        </div>

      </div>
      <MobileFooter/>
    </MobileView>
  </>

  )
}

export default page
