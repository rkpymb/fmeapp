"use client"
import { useState, useEffect, useContext } from 'react';
import styles from '@/app/page.module.css'
import FeedlistHomeMobile from './FeedlistHomeMobile'
import CategoryListHomeMobile from './CategoryListHomeMobile'
import PostBox from '@/app/Components/Enquiry/PostBox'
import HomeSlider from '@/app/Components/Addons/Sliders/HomeSlider'
const HomePageMobile = () => {

    return (
        <div className={styles.MobileContainer}>
            <HomeSlider />
            <div style={{ minHeight: 15 }}></div>
            <PostBox />
            <div style={{ minHeight: 15 }}></div>
            <CategoryListHomeMobile />
            <div style={{ minHeight: 15 }}></div>
            <FeedlistHomeMobile />
        </div>
    )
}

export default HomePageMobile
