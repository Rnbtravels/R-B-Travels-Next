import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const StudyAbroad = (props) => {
  return (
    <>
      <div className="study-abroad-container1">
        <section className="study-abroad-section">
          <div className="study-abroad-container">
            <header className="study-abroad-header">
              <div className="study-abroad-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
                <span>Educational Excellence</span>
              </div>
              <h2 className="section-title">
                Study in Top International Destinations
              </h2>
              <p className="section-subtitle">
                Unlock world-class education opportunities with our expert
                guidance.
              </p>
            </header>
            <div className="study-abroad-grid-wrapper">
              <div className="study-abroad-grid">
                <article className="study-abroad-card">
                  <div className="study-abroad-image-container">
                    <img
                      src="https://images.pexels.com/photos/22039129/pexels-photo-22039129.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="University campus in Canada"
                      className="study-abroad-image"
                    />
                    <div className="study-abroad-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>North America</span>
                    </div>
                  </div>
                  <div className="study-abroad-content">
                    <h3 className="study-abroad-country">Canada</h3>
                    <p className="study-abroad-description">
                      World-renowned universities and a welcoming environment
                      for international students.
                    </p>
                    <Link href="/services">
                      <a>
                        <div className="study-abroad-cta btn btn-primary btn-sm">
                          <span>Explore Options</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </article>
                <article className="study-abroad-card">
                  <div className="study-abroad-image-container">
                    <img
                      src="https://images.pexels.com/photos/30529324/pexels-photo-30529324.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Historic university in UK"
                      className="study-abroad-image"
                    />
                    <div className="study-abroad-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Europe</span>
                    </div>
                  </div>
                  <div className="study-abroad-content">
                    <h3 className="study-abroad-country">United Kingdom</h3>
                    <p className="study-abroad-description">
                      Historic institutions and diverse academic programs across
                      England, Scotland, and Wales.
                    </p>
                    <Link href="/services">
                      <a>
                        <div className="study-abroad-cta btn btn-primary btn-sm">
                          <span>Explore Options</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </article>
                <article className="study-abroad-card">
                  <div className="study-abroad-image-container">
                    <img
                      src="https://images.pexels.com/photos/5604180/pexels-photo-5604180.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Modern campus in USA"
                      className="study-abroad-image"
                    />
                    <div className="study-abroad-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>North America</span>
                    </div>
                  </div>
                  <div className="study-abroad-content">
                    <h3 className="study-abroad-country">United States</h3>
                    <p className="study-abroad-description">
                      Top-ranked universities and extensive research
                      opportunities in every field.
                    </p>
                    <Link href="/services">
                      <a>
                        <div className="study-abroad-cta btn btn-primary btn-sm">
                          <span>Explore Options</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </article>
                <article className="study-abroad-card">
                  <div className="study-abroad-image-container">
                    <img
                      src="https://images.pexels.com/photos/31070772/pexels-photo-31070772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="University campus in Australia"
                      className="study-abroad-image"
                    />
                    <div className="study-abroad-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Oceania</span>
                    </div>
                  </div>
                  <div className="study-abroad-content">
                    <h3 className="study-abroad-country">Australia</h3>
                    <p className="study-abroad-description">
                      High-quality education with excellent post-study work
                      opportunities.
                    </p>
                    <Link href="/services">
                      <a>
                        <div className="study-abroad-cta btn btn-primary btn-sm">
                          <span>Explore Options</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </article>
                <article className="study-abroad-card">
                  <div className="study-abroad-image-container">
                    <img
                      src="https://images.pexels.com/photos/28167325/pexels-photo-28167325.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
                      alt="Technical university in Germany"
                      className="study-abroad-image"
                    />
                    <div className="study-abroad-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>Europe</span>
                    </div>
                  </div>
                  <div className="study-abroad-content">
                    <h3 className="study-abroad-country">Germany</h3>
                    <p className="study-abroad-description">
                      Tuition-free programs at world-class technical and
                      research universities.
                    </p>
                    <Link href="/services">
                      <a>
                        <div className="study-abroad-cta btn btn-primary btn-sm">
                          <span>Explore Options</span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <div className="study-abroad-container2">
          <div className="study-abroad-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.study-abroad-card, .study-abroad-image {
  transition: none;
  transform: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="study-abroad-container4">
          <div className="study-abroad-container5">
            <Script
              html={`<script defer data-name="study-abroad-scroll">
(function(){
  const gridWrapper = document.querySelector(".study-abroad-grid-wrapper")
  let isDown = false
  let startX
  let scrollLeft

  if (gridWrapper) {
    gridWrapper.addEventListener("mousedown", (e) => {
      isDown = true
      gridWrapper.classList.add("active")
      startX = e.pageX - gridWrapper.offsetLeft
      scrollLeft = gridWrapper.scrollLeft
    })

    gridWrapper.addEventListener("mouseleave", () => {
      isDown = false
      gridWrapper.classList.remove("active")
    })

    gridWrapper.addEventListener("mouseup", () => {
      isDown = false
      gridWrapper.classList.remove("active")
    })

    gridWrapper.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - gridWrapper.offsetLeft
      const walk = (x - startX) * 2
      gridWrapper.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .study-abroad-container1 {
            display: contents;
          }
          .study-abroad-container2 {
            display: none;
          }
          .study-abroad-container3 {
            display: contents;
          }
          .study-abroad-container4 {
            display: none;
          }
          .study-abroad-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default StudyAbroad
