import React from 'react'
import styles from '@/app/page.module.css'
import Image from 'next/image'

const VendorCard = () => {
  return (
    <div>
      <div style={{ minHeight: 20 }}></div>
      <div className={styles.VendorCard}>

        <Image src={`https://storage.flairmyevent.com/images/1697512931213-137994077.jpg`} alt="image"
          layout="responsive"
          width={200}
          height={100}
        />
      </div>
      
    </div>
  )
}

export default VendorCard
