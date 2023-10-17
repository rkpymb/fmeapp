"use client"
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import styles from '../page.module.css'
import { UseLoginContext } from '../context/auth/CheckLogin'
import { useRouter } from 'next/navigation'
import { FiSearch } from "react-icons/fi";
import { BiMobileVibration } from "react-icons/bi";
import LoginModal from './Login/LoginModal'

const Navbar = () => {
    const router = useRouter()
    const [AppUrl, setAppUrl] = useState('https://play.google.com/store/apps/details?id=com.Flairmyevent');
    const { IsLogin ,Data} = UseLoginContext();
    // useEffect(() => {
        
    //     console.table(Data)
    // });

    const clickApp = async () => {
        window.open(AppUrl, '_blank')
    }
       
    return (
        <div className={styles.NavbarBox}>
            
            <div className={styles.NavbarItem}>
                <div className={styles.NavbarItemA}>
                    <div className={styles.NavLogo}>
                        <img src="/fmelogo-dark.svg" alt="logo" />
                    </div>                   
                </div>
                <div className={styles.NavbarItemB}>
                    <div className={styles.NavSearchBox}>
                        <FiSearch /> <span>Search for Talents</span>
                    </div> 
                    <div className={styles.NavBTNBox}>
                        <div onClick={clickApp} className={styles.LoginBtn}>
                            <BiMobileVibration size={20} />
                               <span>GET APP</span>
                        </div>
                        {!IsLogin &&
                        
                            <LoginModal OpenType={true} />
                        }
                        {IsLogin &&
                            <Link href='/myaccount' className={styles.LoginBtn}>
                                <BiMobileVibration size={20} />
                                <span>My Profile</span>
                            </Link>
                        }
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
