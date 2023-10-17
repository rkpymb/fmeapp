import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document';

const HeadData = () => {
  return (
      <Head>
          <title>Next App</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
      </Head>
  )
}

export default HeadData
