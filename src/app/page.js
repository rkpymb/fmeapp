"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css'
import RightSidebar from '@/app/Components/Homepage/RightSidebar'
import HomepageBox from '@/app/Components/Homepage/HomepageBox'
import PostBox from '@/app/Components/Enquiry/PostBox'
import NavbarMobile from '../app/Components/Mobile/Shared/NavbarMobile'
import HomePageMobile from './Components/Mobile/Homepage/HomePageMobile'
import MobileFooter from '../app/Components/Mobile/Shared/MobileFooter'
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
            <HomepageBox />
          </div>
          <div className={styles.RightSidebar}>
            <RightSidebar />
          </div>
        </div>
      </BrowserView>
      {/* mobile View Start */}
      <MobileView>
        <NavbarMobile />
        <HomePageMobile />
        <MobileFooter/>
      </MobileView>
    </>
  )
}
