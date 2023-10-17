"use client"
import { useState, useEffect, useContext } from 'react';
import styles from '@/app/page.module.css'
import { UseLoginContext } from '../../context/auth/CheckLogin'
import { useRouter } from 'next/navigation'
import PostModal from '../Enquiry/PostModal'
const PostBox = () => {
    const { IsLogin, Data } = UseLoginContext();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
       
        if (IsLogin == true) {
            setIsLoading(false);
        }
    });
    return (
        <>
            {!isLoading &&
            
                <div className={styles.PostBox}>
                    <div className={styles.UserNameText}>
                        <span>👋 Hey {Data.name}</span>
                    </div>
                    <PostModal />



                </div>
            }
           
        </>
    )
}

export default PostBox
