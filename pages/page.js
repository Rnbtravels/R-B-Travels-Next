import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - R & B Travels</title>
          <meta property="og:title" content="Page - R &amp;  B Travels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/page" />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/page"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Page
