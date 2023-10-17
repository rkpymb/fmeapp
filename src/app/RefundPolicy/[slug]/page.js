"use client"
import React, { useRef, useState, useEffect } from "react";
import GetVendorbyCat from '../../Components/List/GetVendorbyCat'
import styles from '@/app/page.module.css'
const page = ({ params }) => {
  const { slug } = params;
  

  useEffect(() => {
    window.scrollTo(0, 0);
   
  })

  return (
    <div className={styles.GetVendorbyCat}>
     
      <GetVendorbyCat catId={slug} />
      
    </div>
  )
}

export default page
