import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const HowItWorks = (props) => {
  return (
    <>
      <div className="how-it-works-container1">
        <section
          aria-labelledby="how-it-works-title"
          className="how-it-works-section"
        >
          <div className="how-it-works-how-it-works-container">
            <div className="how-it-works-how-it-works-header">
              <h2 id="how-it-works-title" className="section-title">
                Your Journey Begins Here
              </h2>
              <p className="section-subtitle">
                A seamless three-step process to transform your travel dreams
                into a perfectly curated reality.
              </p>
            </div>
            <div className="how-it-works-grid">
              <div className="how-it-works-card">
                <div className="how-it-works-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="how-it-works-icon"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span aria-hidden="true" className="how-it-works-number">
                    01
                  </span>
                </div>
                <div className="how-it-works-content">
                  <h3 className="how-it-works-step-title">Schedule</h3>
                  <p className="section-content">
                    Pick a time that works for you
                  </p>
                </div>
              </div>
              <div className="how-it-works-card">
                <div className="how-it-works-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="how-it-works-icon"
                  >
                    <path d="m15.75 10.5l4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25"></path>
                  </svg>
                  <span aria-hidden="true" className="how-it-works-number">
                    02
                  </span>
                </div>
                <div className="how-it-works-content">
                  <h3 className="how-it-works-step-title">Consult</h3>
                  <p className="section-content">
                    Meet your travel expert over a video call
                  </p>
                </div>
              </div>
              <div className="how-it-works-card">
                <div className="how-it-works-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="how-it-works-icon"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path>
                  </svg>
                  <span aria-hidden="true" className="how-it-works-number">
                    03
                  </span>
                </div>
                <div className="how-it-works-content">
                  <h3 className="how-it-works-step-title">Explore</h3>
                  <p className="section-content">
                    Receive a personalized itinerary and next steps
                  </p>
                </div>
              </div>
            </div>
            <div className="how-it-works-cta">
              <Link href="/booking-documentation">
                <a>
                  <div className="btn btn-primary btn-lg">
                    <span>Start Planning Your Trip</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="how-it-works-container2">
          <div className="how-it-works-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.how-it-works-card {
  transition: none;
}
.how-it-works-card:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="how-it-works-container4">
          <div className="how-it-works-container5">
            <Script
              html={`<script defer data-name="how-it-works-logic">
(function(){
  const cards = document.querySelectorAll(".how-it-works-card")

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 150)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    observer.observe(card)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .how-it-works-container1 {
            display: contents;
          }
          .how-it-works-container2 {
            display: none;
          }
          .how-it-works-container3 {
            display: contents;
          }
          .how-it-works-container4 {
            display: none;
          }
          .how-it-works-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HowItWorks
