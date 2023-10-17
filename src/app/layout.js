"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import './globals.css'

import { Inter } from 'next/font/google'

import styles from "./sidebar.module.css";

import Navbar from '../app/Components/Navbar'
import MenuItems from "../app/Components/SideMenu/MenuItems"
import { LoginProvider } from './context/auth/CheckLogin'

import VendorCard from "../app/Components/SideMenu/VendorCard"
import Linklist from "../app/Components/SideMenu/Linklist"
import Backdrop from '../app/Components/Addons/Backdrop'
import FirstLoader from '../app/Components/Addons/FirstLoader'
import { UseLoginContext } from '@/app/context/auth/CheckLogin'

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { IsLogin, Data } = UseLoginContext();
  useEffect(() => {
    // window.scrollTo(0, 0);
    setIsLoading(false)

  }, [])

  return (
    <html>
    
      <link rel="icon" href="/fevicon.png" />
      <body>
        <LoginProvider>
          <Backdrop />
          <div>
            {!isLoading &&
              <MobileView>
                <div>
                  {children}
                </div>
              </MobileView>
            }

            <div>

              {!isLoading &&
                <BrowserView>
                  <Navbar />
                  <div className={`${styles.sidebar}`}>
                    <MenuItems />
                    <VendorCard />
                    <Linklist />

                  </div>
                  <div className={`${styles.content}`}>
                    {children}
                  </div>
                </BrowserView>
              }
            </div>

            <div>
              {isLoading &&
                <FirstLoader />
              }

            </div>
          </div>

        </LoginProvider>


      </body>
    </html>
  )
}


