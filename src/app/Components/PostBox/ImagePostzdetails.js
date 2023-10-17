import React from 'react'
import styles from "@/app/page.module.css";
import { StorageURl, MediaFilesFolder, MediaFilesUrl } from '../../../../Data/config'
import Image from 'next/image'
const ImagePost = ({ itemdata }) => {

  const blurredImageData = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88enTfwAJYwPNteQx0wAAAABJRU5ErkJggg==';


  return (
    <div>
      <div>
        <Image src={`${MediaFilesUrl}${MediaFilesFolder}/${itemdata.ContentData}`} alt="image" layout="responsive"
          placeholder='blur'
          width={500}
          height={300}
          quality={5}  
          blurDataURL={blurredImageData}

        />

      </div>
      <div style={{ minHeight: 10 }}></div>
      <div className={styles.PostCap}>
        <span> {itemdata.PostText}</span>
      </div>
    </div>
  )
}

export default ImagePost
