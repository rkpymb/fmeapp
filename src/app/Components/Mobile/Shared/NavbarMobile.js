"use client"
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import styles from '@/app/page.module.css'
import { UseLoginContext } from '@/app/context/auth/CheckLogin'
import { useRouter } from 'next/navigation'
import { FiSearch } from "react-icons/fi";
import { BiMobileVibration } from "react-icons/bi";
import LoginModalMobile from '../../Login/LoginModalMobile'
import { BiUserCircle } from "react-icons/bi";


import SideMenu from './SideMenu'
const Navbar = () => {
    const router = useRouter()
    const [AppUrl, setAppUrl] = useState('https://play.google.com/store/apps/details?id=com.Flairmyevent');
    const { IsLogin, Data } = UseLoginContext();


    const clickApp = async () => {
        window.open(AppUrl, '_blank')
    }

    return (
        <div className={styles.Mobile_Navbar}>
            <div className={styles.Mobile_NavbarBox}>

                <div className={styles.Mobile_NavbarA}>

                    <Link href='/' style={{ textDecoration: 'none' }} className={styles.Mobile_NavbarALogo}>
                        <img src="/fmelogo-dark.svg" alt="logo" />
                    </Link>

                </div>
                <div className={styles.Mobile_NavbarB}>
                    <div className={styles.Mobile_NavbarBItems}>

                        {IsLogin &&
                            <div className={styles.Mobile_NavbarBItems} >
                                <Link href='/myaccount' style={{ textDecoration: 'none', color:'black' }}  className={styles.Mobile_NavbarBUser}>
                                    <span className={styles.Menubtn}><BiUserCircle size={30} /></span>
                                </Link>

                                <div className={styles.Mobile_NavbarBUser}>
                                    <SideMenu />
                                </div>
                            </div>
                        }

                        {!IsLogin &&
                            <LoginModalMobile OpenType={true} />
                        }
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Navbar
