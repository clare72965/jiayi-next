
import React from 'react'
import Head from 'next/head';

import Home from './Home'

export default function Index({ topBtn }) {
  return (
    <>
      <Head>
        <title>嘉藝造霧工程行</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="嘉藝造霧服務項目: 畜牧消毒降溫、溫室加濕降溫、車輛消毒系統。責任施工，專業設計" />
        <meta name="google-site-verification" content="9N9oYTdJ275JTcfxNPjbSDD50557LRp5yzz-0J9sjSw" />
      </Head>
      <Home topBtn={topBtn}></Home>
    </>
  )
}
