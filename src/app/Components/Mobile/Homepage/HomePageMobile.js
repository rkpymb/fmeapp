"use client"
import { useState, useEffect, useContext } from 'react';
import styles from '@/app/page.module.css'
import FeedlistHome from '@/app/Components/List/FeedlistHome'
import CategoryListHomeMobile from './CategoryListHomeMobile'
import PostBox from '@/app/Components/Enquiry/PostBox'
import HomeSlider from '@/app/Components/Addons/Sliders/HomeSlider'
const HomePageMobile = ({ Type }) => {

    return (
        <div className={styles.MobileContainer}>
            <HomeSlider />
            <div style={{ minHeight: 15 }}></div>
            <PostBox />
            <div style={{ minHeight: 15 }}></div>
            <CategoryListHomeMobile />
            <div style={{ minHeight: 15 }}></div>
            <FeedlistHome Type={Type} />
        </div>
    )
}

export default HomePageMobile
