import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook';
import styles from '@/app/page.module.css'

const FbComents = ({ ItemSlug }) => {
  return (
      <div className={styles.FBCOMT} >
          <FacebookProvider appId="3504225606562569" >
              <Comments href={`https://www.flairmyevent.com/post/${ItemSlug}`} />
          </FacebookProvider>
    </div>
  )
}

export default FbComents
