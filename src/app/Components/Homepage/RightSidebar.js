import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'
import CatSlider from '../Addons/Sliders/CatSlider'
import HomeSlider from '../Addons/Sliders/HomeSlider'
const RightSidebar = () => {
  return (
    <>
    
      
      <div className={styles.RightSidebar}>
        <div style={{ minHeight: '10px' }}></div>
        <HomeSlider/>
        <div style={{ minHeight: '20px' }}></div>
        <CatSlider />
        <div style={{ minHeight: '100px' }}></div>
       
      </div>
    </>
  )
}

export default RightSidebar
