import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'

const Plan = (props) => {
  return (
    <>
      <div className="plan-container1">
        <Head>
          <title>Plan - rnvtravels</title>
          <meta property="og:title" content="Plan - rnvtravels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/plan" />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/plan"
          />
        </Head>
        <Navigation rootClassName="navigationroot-class-name"></Navigation>
        <div className="plan-thq-plan-a-trip-elm">
          <div>
            <div className="plan-container3">
              <Script
                html={`<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <title>R&B Trip Planning</title>
  <script async src="https://tally.so/widgets/embed.js"></script>
  <style type="text/css">
    html {
      margin: 0;
      height: 100%;
      overflow: hidden;
    }

    iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 0;
    }
  </style>
</head>

<body>
  <iframe data-tally-src="https://tally.so/r/zxJDZa" width="100%" height="100%" frameborder="0" marginheight="0"
    marginwidth="0" title="R&B Trip Planning"></iframe>
</body>

</html>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .plan-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .plan-thq-plan-a-trip-elm {
            flex: 0 0 auto;
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .plan-container3 {
            display: contents;
          }
          @media (max-width: 767px) {
            .plan-thq-plan-a-trip-elm {
              width: 100%;
              height: 80vh;
              align-self: center;
              margin-top: var(--dl-layout-space-twounits);
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .plan-thq-plan-a-trip-elm {
              width: 100%;
              height: 65vh;
              margin-top: var(--dl-layout-space-threeunits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Plan
