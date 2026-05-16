import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const BookConsultation = (props) => {
  return (
    <>
      <div className="book-consultation-container1">
        <Head>
          <title>Book-Consultation - rnvtravels</title>
          <meta property="og:title" content="Book-Consultation - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/book-consultation"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/book-consultation"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-section__container">
            <div className="hero-section__media">
              <img
                src="https://images.pexels.com/photos/5302804/pexels-photo-5302804.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Voyanta Travel Planning"
                className="hero-section__image"
              />
              <div className="hero-section__overlay"></div>
            </div>
            <div className="hero-section__content">
              <h1 className="hero-title">Choose the date suitable for you</h1>
              <p className="hero-subtitle">
                Secure your personalized travel consultation with Voyanta. Our
                experts are ready to transform your travel dreams into
                effortless, expertly planned realities.
              </p>
            </div>
          </div>
        </section>
        <section className="consultation-booking-section">
          <div className="consultation-booking-section__wrapper">
            <div
              id="my-cal-inline-consultation"
              className="book-consultation-container2"
            ></div>
          </div>
        </section>
        <section className="service-overview">
          <div className="service-overview__container">
            <div className="service-overview__header">
              <h2 className="section-title">The Voyanta Advantage</h2>
              <p className="section-content">
                Comprehensive support from the first spark of inspiration until
                you return home.
              </p>
            </div>
            <div className="service-overview__grid">
              <div className="service-overview__card">
                <div className="service-overview__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Visa &amp; Documentation</h3>
                <p className="section-content">
                  We handle complex visa applications and essential travel
                  documentation, ensuring you are ready for departure without
                  the paperwork stress.
                </p>
              </div>
              <div className="service-overview__card">
                <div className="service-overview__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Flights &amp; Stays</h3>
                <p className="section-content">
                  Strategic booking of premium flights and hand-picked
                  accommodations that align with your personal preferences and
                  budget requirements.
                </p>
              </div>
              <div className="service-overview__card">
                <div className="service-overview__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Local Partnerships</h3>
                <p className="section-content">
                  Gain access to authentic experiences through our network of
                  vetted local partners, providing unique insights and fair
                  pricing globally.
                </p>
              </div>
              <div className="service-overview__card">
                <div className="service-overview__icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">End-to-End Support</h3>
                <p className="section-content">
                  Travel with confidence knowing you have professional support
                  from the initial planning stages until your safe return home.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="book-consultation-container3">
          <div className="book-consultation-container4">
            <Script
              html={`<script defer data-name="voyanta-booking-init">
(function(){
  ;(function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar)
    }
    let d = C.document
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal
        let ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement("script")).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments)
          }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ["initNamespace", namespace])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
  })(window, "https://app.cal.com/embed/embed.js", "init")

  Cal("init", "consultation", { origin: "https://app.cal.com" })

  Cal.ns.consultation("inline", {
    elementOrSelector: "#my-cal-inline-consultation",
    config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
    calLink: "r-btravels/consultation",
  })

  Cal.ns.consultation("ui", {
    cssVarsPerTheme: {
      light: { "cal-brand": "#ffffff" },
      dark: { "cal-brand": "#121212" },
    },
    hideEventTypeDetails: false,
    layout: "month_view",
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .book-consultation-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .book-consultation-container2 {
            width: 100%;
            height: 100%;
            overflow: scroll;
          }
          .book-consultation-container3 {
            display: none;
          }
          .book-consultation-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default BookConsultation
