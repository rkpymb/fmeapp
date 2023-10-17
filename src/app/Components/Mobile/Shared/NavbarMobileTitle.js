"use client"
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import styles from '@/app/page.module.css'
import { UseLoginContext } from '@/app/context/auth/CheckLogin'
import { useRouter } from 'next/navigation'
import { FiArrowLeft } from "react-icons/fi";
import { BiMobileVibration } from "react-icons/bi";
import LoginModal from '../../Login/LoginModal'
import { BiUserCircle } from "react-icons/bi";
import SideMenu from './SideMenu'
const Navbar = ({ Title }) => {
    const router = useRouter()
    const [AppUrl, setAppUrl] = useState('https://play.google.com/store/apps/details?id=com.Flairmyevent');
    const { IsLogin, Data } = UseLoginContext();


    const clickApp = async () => {
        window.open(AppUrl, '_blank')
    }

    const handleGoBack = () => {
        router.back();
    };
    return (
        <div className={styles.Mobile_NavbarTitle}>
            <div className={styles.Mobile_NavbarBoxTitle}>

                <div className={styles.Mobile_NavbarBoxTitleA}>
                    <span><FiArrowLeft size={25} onClick={handleGoBack} /></span>
                    <span className={styles.Mobile_NavbarText}>{Title}</span>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
