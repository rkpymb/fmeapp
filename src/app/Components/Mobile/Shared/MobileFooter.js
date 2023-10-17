import React from 'react'
import styles from '@/app/page.module.css'
import { BiHomeAlt2 } from "react-icons/bi";
import { FiList, FiMessageCircle, FiSend, FiHeart } from "react-icons/fi";
import Link from 'next/link'
const MobileFooter = () => {
    return (
        <div className={styles.mobileFooter}>
            <div className={styles.mobileFooterMenuBox}>
                <Link href={'/'} style={{ textDecoration: 'none', color:'black' }} className={styles.mobileFooterMenuItem}>
                    <div className={styles.mobileFooterMenuItemIcon}>
                        <span><BiHomeAlt2 /></span>
                    </div>
                    <div className={styles.mobileFooterMenuItemText}>
                        <span>Home</span>
                    </div>
                </Link>
                <Link href={'/categories'} style={{ textDecoration: 'none', color:'black' }} className={styles.mobileFooterMenuItem}>
                    <div className={styles.mobileFooterMenuItemIcon}>
                        <span><FiList /></span>
                    </div>
                    <div className={styles.mobileFooterMenuItemText}>
                        <span>Category</span>
                    </div>
                </Link>
                <Link href={'/Messages'} style={{ textDecoration: 'none', color:'black' }} className={styles.mobileFooterMenuItem}>
                    <div className={styles.mobileFooterMenuItemIcon}>
                        <span><FiMessageCircle /></span>
                    </div>
                    <div className={styles.mobileFooterMenuItemText}>
                        <span>Messages</span>
                    </div>
                </Link>
                <Link href={'/MyShare'} style={{ textDecoration: 'none', color:'black' }} className={styles.mobileFooterMenuItem}>
                    <div className={styles.mobileFooterMenuItemIcon}>
                        <span><FiSend /></span>
                    </div>
                    <div className={styles.mobileFooterMenuItemText}>
                        <span>My Share</span>
                    </div>
                </Link>
                <Link href={'/followings'} style={{ textDecoration: 'none', color:'black' }} className={styles.mobileFooterMenuItem}>
                    <div className={styles.mobileFooterMenuItemIcon}>
                        <span><FiHeart /></span>
                    </div>
                    <div className={styles.mobileFooterMenuItemText}>
                        <span>Followings</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MobileFooter
