import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '@/app/Components/Navbar'
import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
export default function Home() {
    return (
        <main className={styles.main}>
            <p>Contact us</p>
            <div className={styles.contactBox}>
                <div className={styles.contactBoxitem}>
                    <span><BiHomeAlt2 /></span>
                    <small>Apex Golf Noida UP, IN.</small>
                </div>
                <div className={styles.contactBoxitem}>
                    <span><HiOutlineMail /></span>
                    <small>reeshab@flairmyevent.com</small>
                </div>
                <div className={styles.contactBoxitem}>
                    <span><IoCallOutline /></span>
                    <small>+91 971704150</small>
                </div>
            </div>
            
        </main>
    )
}
