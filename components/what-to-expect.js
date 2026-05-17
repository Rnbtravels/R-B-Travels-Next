import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const WhatToExpect = (props) => {
  return (
    <>
      <div className="what-to-expect-container1">
        <section
          aria-labelledby="what-to-expect-title"
          className="what-to-expect"
        >
          <div className="what-to-expect-container">
            <div className="what-to-expect-header">
              <h2 id="what-to-expect-title" className="section-title">
                What to Expect
              </h2>
              <p className="section-subtitle">
                Effortless journeys designed around you, from first spark to the
                flight home.
              </p>
            </div>
            <div className="what-to-expect-grid">
              <div data-index="1" className="what-to-expect-card">
                <div className="what-to-expect-icon-wrapper">
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
                    className="what-to-expect-icon"
                  >
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  </svg>
                </div>
                <div className="what-to-expect-content">
                  <h3 className="what-to-expect-name">
                    Personalized Trip Planning
                  </h3>
                  <p className="section-content">
                    Tailored itineraries that match your pace, interests, and
                    budget perfectly.
                  </p>
                </div>
              </div>
              <div data-index="2" className="what-to-expect-card">
                <div className="what-to-expect-icon-wrapper">
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
                    className="what-to-expect-icon"
                  >
                    <path d="M2 22h20M6.36 17.4L4 17l-2-4l1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12L5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>
                  </svg>
                </div>
                <div className="what-to-expect-content">
                  <h3 className="what-to-expect-name">
                    Flight &amp; Stay Recommendations
                  </h3>
                  <p className="section-content">
                    Vetted accommodation and flight routes that prioritize
                    comfort and fair pricing.
                  </p>
                </div>
              </div>
              <div
                data-index="3"
                className="what-to-expect-card what-to-expect-card-featured"
              >
                <div className="what-to-expect-card-bg">
                  <img
                    alt="Luxury tropical island resort"
                    src="https://images.pexels.com/photos/9482127/pexels-photo-9482127.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                    loading="lazy"
                  />
                  <div className="what-to-expect-overlay"></div>
                </div>
                <div className="what-to-expect-content">
                  <div className="what-to-expect-icon-wrapper">
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
                      className="what-to-expect-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3 className="what-to-expect-name">
                    Curated Local Experiences
                  </h3>
                  <p className="section-content">
                    Authentic encounters with local partners that go beyond the
                    usual tourist paths.
                  </p>
                </div>
              </div>
              <div data-index="4" className="what-to-expect-card">
                <div className="what-to-expect-icon-wrapper">
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
                    className="what-to-expect-icon"
                  >
                    <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                  </svg>
                </div>
                <div className="what-to-expect-content">
                  <h3 className="what-to-expect-name">
                    Visa &amp; Documentation Guidance
                  </h3>
                  <h3 className="what-to-expect-name">
                    Visa &amp; Documentation Guidance
                  </h3>
                  <p className="section-content">
                    Step-by-step support for visa applications and essential
                    travel documentation.
                  </p>
                </div>
              </div>
              <div data-index="5" className="what-to-expect-card">
                <div className="what-to-expect-icon-wrapper">
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
                    className="what-to-expect-icon"
                  >
                    <circle
                      r="10"
                      cx="12"
                      cy="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                </div>
                <div className="what-to-expect-content">
                  <h3 className="what-to-expect-name">Ongoing Support</h3>
                  <p className="section-content">
                    Peace of mind with dedicated assistance from planning until
                    you return home.
                  </p>
                </div>
              </div>
            </div>
            <div className="what-to-expect-cta">
              <Link href="/itineraries-experiences">
                <a>
                  <div className="btn-lg btn-primary btn">
                    <span>Explore Experiences</span>
                  </div>
                </a>
              </Link>
              <Link href="/booking-documentation">
                <a>
                  <div className="btn-lg btn btn-outline">
                    <span>Start Planning</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="what-to-expect-container2">
          <div className="what-to-expect-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.what-to-expect-card, .what-to-expect-card-bg img, .what-to-expect-icon-wrapper {
  transition: none !important;
  transform: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="what-to-expect-container4">
          <div className="what-to-expect-container5">
            <Script
              html={`<script defer data-name="what-to-expect-animation">
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const cards = document.querySelectorAll(".what-to-expect-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = \`all 0.6s cubic-bezier(0.2, 1, 0.3, 1) \${index * 0.1}s\`
    revealObserver.observe(card)
  })

  const header = document.querySelector(".what-to-expect-header")
  if (header) {
    header.style.opacity = "0"
    header.style.transform = "translateY(20px)"
    header.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)"
    revealObserver.observe(header)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .what-to-expect-container1 {
            display: contents;
          }
          .what-to-expect-container2 {
            display: none;
          }
          .what-to-expect-container3 {
            display: contents;
          }
          .what-to-expect-container4 {
            display: none;
          }
          .what-to-expect-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default WhatToExpect
