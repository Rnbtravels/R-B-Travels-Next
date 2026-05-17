import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const TourExperience = (props) => {
  return (
    <>
      <div className="tour-experience-container1">
        <section
          aria-labelledby="tour-experience-title"
          className="tour-experience"
        >
          <div className="tour-experience-container">
            <header className="tour-experience-header">
              <h2 id="tour-experience-title" className="section-title">
                Unforgettable Travel Experiences
              </h2>
              <p className="section-subtitle">
                From curated tours to seamless airport transfers, we handle
                every detail.
              </p>
            </header>
            <div className="tour-experience-grid">
              <div className="item-large tour-experience-item">
                <img
                  alt="Serene tropical beach with palm trees"
                  src="https://images.pexels.com/photos/16055206/pexels-photo-16055206.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Vacation Destinations</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Tropical Bliss</span>
                  </div>
                </div>
              </div>
              <div className="tour-experience-item">
                <img
                  alt="Guided city tour group"
                  src="https://images.pexels.com/photos/33661381/pexels-photo-33661381.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Guided Tours</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Hidden Gems</span>
                  </div>
                </div>
              </div>
              <div className="tour-experience-item">
                <img
                  alt="Luxury airport lounge experience"
                  src="https://images.pexels.com/photos/35026952/pexels-photo-35026952.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Airport Experiences</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Seamless Comfort</span>
                  </div>
                </div>
              </div>
              <div className="tour-experience-item">
                <img
                  alt="Happy travelers at sunset seaside café"
                  src="https://images.pexels.com/photos/27046983/pexels-photo-27046983.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Happy Travelers</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Shared Moments</span>
                  </div>
                </div>
              </div>
              <div className="item-tall tour-experience-item">
                <img
                  alt="Airplane flying over tropical landscape"
                  src="https://images.pexels.com/photos/20656446/pexels-photo-20656446.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Flights</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Effortless Journeys</span>
                  </div>
                </div>
              </div>
              <div className="tour-experience-item">
                <img
                  alt="Cultural city tour experience"
                  src="https://images.pexels.com/photos/29180030/pexels-photo-29180030.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                  loading="lazy"
                  className="tour-experience-img"
                />
                <div className="tour-experience-overlay">
                  <div className="tour-experience-tag">
                    <span>Cultural Moments</span>
                  </div>
                  <div className="tour-experience-location">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>Local Heritage</span>
                  </div>
                </div>
              </div>
            </div>
            <footer className="tour-experience-footer">
              <Link href="/plan">
                <a>
                  <div className="btn-primary btn tour-experience-cta btn-xl">
                    <span>Plan Your Next Trip</span>
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
                      <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                    </svg>
                  </div>
                </a>
              </Link>
            </footer>
          </div>
        </section>
        <div className="tour-experience-container2">
          <div className="tour-experience-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.tour-experience-item, .tour-experience-img, .tour-experience-tag, .tour-experience-location, .tour-experience-cta {
  transition: none !important;
  transform: none !important;
  animation: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="tour-experience-container4">
          <div className="tour-experience-container5">
            <Script
              html={`<script defer data-name="tour-experience-enhancements">
(function(){
  const galleryItems = document.querySelectorAll(".tour-experience-item")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        galleryObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  galleryItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)"
    galleryObserver.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tour-experience-container1 {
            display: contents;
          }
          .tour-experience-container2 {
            display: none;
          }
          .tour-experience-container3 {
            display: contents;
          }
          .tour-experience-container4 {
            display: none;
          }
          .tour-experience-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TourExperience
