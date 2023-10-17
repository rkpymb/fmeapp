import React from 'react'
import Link from "next/link"
import { BiHomeAlt2, BiMessageSquare } from "react-icons/bi";
import { FiUsers, FiPercent, FiUser, FiList, FiStar, FiSend } from "react-icons/fi";

import styles from '@/app/sidebar.module.css'
import { AiOutlineHeart } from "react-icons/ai";



const MenuItems = () => {
  return (
    <div>
      <Link href="/" className={styles.Menulist}>
        <BiHomeAlt2 size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>Home</span>
      </Link>
      <Link href="/categories" className={styles.Menulist}>
        <FiList size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>Categories</span>
      </Link>
      <Link href="/Messages" className={styles.Menulist}>
        <BiMessageSquare size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>Messages</span>
      </Link>
      {/* <Link href="/offers" className={styles.Menulist}>
        <FiPercent size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>Best Offers</span>
      </Link> */}
      <Link href="/myaccount" className={styles.Menulist}>
        <FiUser size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>My Account</span>
      </Link>
      <Link href="/followings" className={styles.Menulist}>
        <AiOutlineHeart size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>My Followings</span>
      </Link>
      <Link href="/MyShare" className={styles.Menulist}>
        <FiSend size={20} /> <span style={{ marginLeft: 10, fontSize: 15 }}>My Share</span>
      </Link>
     

    </div>
  )
}

export default MenuItems
