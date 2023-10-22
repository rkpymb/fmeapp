"use client"
import React, { useEffect, useState } from 'react';
import styles from '@/app/page.module.css'
import RightSidebar from '@/app/Components/Homepage/RightSidebar'
import HomepageBox from '@/app/Components/Homepage/HomepageBox'
import PostBox from '@/app/Components/Enquiry/PostBox'
import NavbarMobile from '../Components/Mobile/Shared/NavbarMobile'
import HomePageMobile from '../Components/Mobile/Homepage/HomePageMobile'
import MobileFooter from '../Components/Mobile/Shared/MobileFooter'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Home() {

  return (
    <>

      <BrowserView>
        <div className={styles.HomePageContainer}>
          <div className={styles.HomePageContainerFeedBox}>
            <div style={{ minHeight: 15 }}></div>
            <PostBox />
            <div style={{ minHeight: 15 }}></div>
            <HomepageBox Type={1} />
          </div>
          <div className={styles.RightSidebar}>
            <RightSidebar />
          </div>
        </div>
      </BrowserView>
      {/* mobile View Start now */}
      <MobileView>
        <NavbarMobile />
        <HomePageMobile Type={1} />
        <MobileFooter />
      </MobileView>
    </>
  )
}
