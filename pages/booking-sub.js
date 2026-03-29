import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

const BookingSub = (props) => {
  return (
    <>
      <div className="booking-sub-container">
        <Head>
          <title>BookingSub - R & B Travels</title>
          <meta property="og:title" content="BookingSub - R &amp;  B Travels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/booking-sub"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/booking-sub"
          />
        </Head>
      </div>
      <style jsx>
        {`
          .booking-sub-container {
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

export default BookingSub
