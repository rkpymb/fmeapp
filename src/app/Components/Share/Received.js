"use client"
import React, { useRef, useState, useEffect, useContext } from "react";
import Link from "next/link"
import styles from "@/app/page.module.css"
import { UseLoginContext } from '../../context/auth/CheckLogin'
import Skeleton from '@mui/material/Skeleton';
import { StorageURl } from '../../../../Data/config'
import { FiChevronRight } from "react-icons/fi";
import Image from 'next/image'
import { FiArrowLeft } from "react-icons/fi";

const Sent = ({ itemdata }) => {

  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';

  return (
    <div>
      <Link
        href={`/post/${itemdata.content}`} style={{ textDecoration: 'none', color: 'black', backgroundColor: '#FFEBBA' }}
        className={styles.InboxBoxItem}>
        <div className={styles.InboxBoxItemA}>
          <Image
            placeholder='blur'
            blurDataURL={blurredImageData}
            src={`${StorageURl}/panel/userdp/${itemdata.ReceiverDp}`}
            alt="dp"
            width={40}
            height={40}
            quality={25}
            className={styles.DpCercle}
          />
        </div>
        <div className={styles.InboxBoxItemB}>
          <div className={styles.InboxBoxItemAName}>
            <div className={styles.MyshareFlex}>
              <span>{itemdata.ReceiverName}</span>
             
              <span><FiArrowLeft /></span>
              <span>{itemdata.SenderName}</span>
            </div>
            <small>Received {itemdata.VendorName}'s Post from {itemdata.UserSender}</small>
            <small style={{ fontSize: '8px' }}>{itemdata.date}</small>

          </div>
          <div className={styles.InboxBoxItemBtn}>
            <FiChevronRight />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Sent
