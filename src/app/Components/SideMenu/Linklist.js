import React from 'react'
import styles from '@/app/sidebar.module.css'
import { BsFillRecord2Fill } from "react-icons/bs";
import Link from 'next/link'

const Linklist = () => {
  return (
    <div>
      <div style={{ minHeight: 10 }}></div>
      <div className={styles.Linklist}>
        <Link href='https://vendor.flairmyevent.com/pages/login/' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>Vendor Login</span></Link>
        <Link href='about' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>About us</span></Link>
        <Link href='contact' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>Contact us</span></Link>
        <Link href='PrivacyPolicy' style={{textDecoration:'none'}}className={styles.LinklistItem}> <span><BsFillRecord2Fill /> </span><span>Privacy Policy</span></Link>
        <Link href='TermsConditions' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>Terms and Conditions</span></Link>
        {/* <Link href='Pricing' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>Pricing</span></Link> */}
        {/* <Link href=' ' style={{textDecoration:'none'}}className={styles.LinklistItem}><span><BsFillRecord2Fill /> </span><span>Refund Policy</span></Link> */}
        
      </div>
      <div style={{ minHeight: 10 }}></div>
      <div className={styles.copyrightText}>
        <span>© 2022 - {new Date().getFullYear()} flairmyevent.com - All rights reserved.</span>
      </div>
      <div style={{ minHeight: 250 }}></div>
      
    </div>
  )
}

export default Linklist
