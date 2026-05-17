import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Consultation = (props) => {
  return (
    <>
      <div className="consultation-container1">
        <Head>
          <title>Consultation - rnvtravels</title>
          <meta property="og:title" content="Consultation - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/consultation"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/consultation"
          />
        </Head>
        <Navigation rootClassName="navigationroot-class-name1"></Navigation>
        <section
          data-section="consultation-hero"
          className="consultation-thq-consultation-hero-elm"
        >
          <div className="consultation-thq-consultation-hero-content-elm">
            <h1 className="consultation-thq-consultation-hero-title-elm">
              Plan Your Perfect Journey
            </h1>
            <p className="consultation-thq-consultation-hero-subtitle-elm">
              Book a free 30-minute consultation with our travel experts to
              design your custom itinerary.
            </p>
          </div>
        </section>
        <section data-section="how-it-works" className="how-it-works">
          <div className="how-it-works-container">
            <h2 className="consultation-thq-how-it-works-title-elm">
              How It Works
            </h2>
            <div className="how-it-works-grid">
              <div data-step="1" className="step-card">
                <div className="step-number-circle">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="step-number">1</span>
                </div>
                <h3 className="step-heading">Book Your Slot</h3>
                <p className="step-description">
                  Choose a time that works for you
                </p>
              </div>
              <div data-step="2" className="step-card">
                <div className="step-number-circle">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"></path>
                  </svg>
                  <span className="step-number">2</span>
                </div>
                <h3 className="step-heading">Share Your Vision</h3>
                <p className="step-description">
                  Tell us your destinations, budget, and travel style
                </p>
              </div>
              <div data-step="3" className="step-card">
                <div className="step-number-circle">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"></path>
                  </svg>
                  <span className="step-number">3</span>
                </div>
                <h3 className="step-heading">Receive Your Plan</h3>
                <p className="step-description">
                  Get a tailored itinerary within 48 hours
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-section="what-to-expect" className="what-to-expect">
          <div className="what-to-expect-container">
            <div className="what-to-expect-content">
              <div>
                <h2 className="consultation-thq-what-to-expect-title-elm">
                  What Happens During Your Consultation?
                </h2>
                <ul className="consultation-thq-what-to-expect-list-elm list">
                  <li className="what-to-expect-item list-item">
                    <span className="what-to-expect-bullet"></span>
                    <span>
                      Personalized destination recommendations based on your
                      preferences
                    </span>
                  </li>
                  <li className="what-to-expect-item list-item">
                    <span className="what-to-expect-bullet"></span>
                    <span>Clear pricing breakdown with no hidden fees</span>
                  </li>
                  <li className="what-to-expect-item list-item">
                    <span className="what-to-expect-bullet"></span>
                    <span>
                      Expert advice on visas, flights, accommodations, and
                      insurance
                    </span>
                  </li>
                  <li className="what-to-expect-item list-item">
                    <span className="what-to-expect-bullet"></span>
                    <span>A draft itinerary you can refine before booking</span>
                  </li>
                </ul>
              </div>
              <div className="consultation-thq-what-to-expect-visual-elm">
                <div className="travel-icon-wrapper">
                  <svg
                    fill="none"
                    width="80"
                    xmlns="http://www.w3.org/2000/svg"
                    height="80"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="consultation-thq-plan-a-consultation-elm">
          <div>
            <div className="consultation-container3">
              <Script
                html={`<div id="my-cal-inline-consultation" style="width: 100%; min-height: 60vh; overflow: auto"></div><script>
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
            calLink: "r-btravels/consultation",
            config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" },
          })
          Cal.ns.consultation("ui", {
            theme: "light",
            layout: "month_view",
            hideEventTypeDetails: false,
            cssVarsPerTheme: {
              light: {
                "cal-brand": "#db2929",
              },
            },
          })
        </script>`}
              ></Script>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="consultation-container5">
            <Script
              html={`<style>
@keyframes gradientShift {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .consultation-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-theme-accent2);
          }
          .consultation-thq-consultation-hero-elm {
            width: 100%;
            display: flex;
            padding: var(--spacing-4xl) var(--spacing-lg);
            overflow: hidden;
            position: relative;
            animation: gradientShift 20s ease infinite;
            background: linear-gradient(
              135deg,
              #0b3d91 0%,
              #1a1a4e 25%,
              #2d1b69 50%,
              #0b3d91 75%,
              #1a1a4e 100%
            );
            min-height: 50vh;
            align-items: center;
            background-size: 400% 400%;
            justify-content: center;
          }
          .consultation-thq-consultation-hero-content-elm {
            padding: var(--spacing-2xl);
            z-index: 1;
            max-width: var(--content-max-width);
            text-align: center;
          }
          .consultation-thq-consultation-hero-title-elm {
            color: #ffffff;
            font-size: var(--font-size-4xl);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
            margin-bottom: var(--spacing-lg);
            letter-spacing: var(--letter-spacing-heading);
          }
          .consultation-thq-consultation-hero-subtitle-elm {
            color: rgba(255, 255, 255, 0.85);
            margin: 0 auto;
            font-size: var(--font-size-lg);
            max-width: 600px;
            font-family: var(--font-family-body);
            font-weight: var(--font-weight-body);
            line-height: var(--line-height-body);
            letter-spacing: var(--letter-spacing-body);
          }
          .consultation-thq-how-it-works-title-elm {
            color: var(--color-on-surface-light);
            font-size: var(--font-size-3xl);
            text-align: center;
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
            margin-bottom: var(--spacing-3xl);
            letter-spacing: var(--letter-spacing-heading);
          }
          .consultation-thq-what-to-expect-title-elm {
            color: var(--color-on-surface-light);
            font-size: var(--font-size-2xl);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
            margin-bottom: var(--spacing-xl);
            letter-spacing: var(--letter-spacing-heading);
          }
          .consultation-thq-what-to-expect-list-elm {
            gap: var(--spacing-md);
            margin: 0;
            display: flex;
            padding: 0;
            list-style: none;
            flex-direction: column;
          }
          .consultation-thq-what-to-expect-visual-elm {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .consultation-thq-plan-a-consultation-elm {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            margin-top: var(--dl-layout-space-fourunits);
            min-height: 80vh;
            align-items: center;
            padding-top: 4rem;
            margin-bottom: var(--dl-layout-space-twounits);
            flex-direction: column;
            padding-bottom: 4rem;
            justify-content: center;
            background-color: #050505;
          }
          .consultation-container3 {
            display: contents;
          }
          .consultation-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .consultation-container1 {
              background-color: var(--dl-color-theme-accent2);
            }
            .consultation-thq-plan-a-consultation-elm {
              background-color: #050505;
            }
          }
          @media (max-width: 767px) {
            .consultation-container1 {
              background-color: var(--dl-color-theme-accent2);
            }
            .consultation-thq-consultation-hero-elm {
              padding: var(--spacing-3xl) var(--spacing-lg);
              min-height: 40vh;
            }
            .consultation-thq-plan-a-consultation-elm {
              width: 100%;
              align-self: center;
              margin-top: var(--dl-layout-space-twounits);
              min-height: 80vh;
              align-items: center;
              padding-top: 4rem;
              padding-bottom: 4rem;
              justify-content: center;
              background-color: #050505;
            }
          }
          @media (max-width: 479px) {
            .consultation-container1 {
              background-color: var(--dl-color-theme-accent2);
            }
            .consultation-thq-consultation-hero-elm {
              padding: var(--spacing-2xl) var(--spacing-md);
            }
            .consultation-thq-consultation-hero-content-elm {
              padding: var(--spacing-lg);
            }
            .consultation-thq-plan-a-consultation-elm {
              width: 100%;
              margin-top: var(--dl-layout-space-fourunits);
              min-height: 65vh;
              padding-top: 4rem;
              margin-bottom: var(--dl-layout-space-twounits);
              padding-bottom: 4rem;
              background-color: #050505;
            }
          }
        `}
      </style>
    </>
  )
}

export default Consultation
