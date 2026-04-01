import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container1 ${props.rootClassName} `}>
        <footer className="footer-section">
          <div className="footer-wave-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="footer-wave-svg"
            >
              <path
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                fill="var(--color-surface-elevated)"
              ></path>
            </svg>
          </div>
          <div className="footer-main-wrapper">
            <div className="footer-content-grid">
              <div className="footer-brand-column">
                <div className="footer-logo-group">
                  <div className="footer-icon-circle">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </svg>
                  </div>
                  <span className="footer-brand-name">
                    <span>R</span>
                    <span className="footer-text11">&amp;</span>
                    <span>B Travels</span>
                  </span>
                </div>
                <p className="footer-brand-desc section-content">
                  Charting effortless journeys with vetted local partners. From
                  custom itineraries to visa support, we handle the details so
                  you can embrace the adventure.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
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
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/rnbtravels?igsh=NnU0NjZwb3J2cnpl"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="Instagram"
                      className="footer-thq-footer-social-icon-elm2 footer-social-icon"
                    >
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
                        <rect
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                          width="20"
                          height="20"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-icon">
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <nav
                aria-labelledby="footer-nav-explore"
                className="footer-nav-column"
              >
                <h2
                  id="footer-nav-explore"
                  className="section-subtitle footer-column-title"
                >
                  Explore
                </h2>
                <ul className="footer-link-list">
                  <Link href="/">
                    <a>
                      <li className="footer-li10">
                        <div className="footer-link">
                          <span>Homepage</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/services">
                    <a>
                      <li className="footer-li11">
                        <div className="footer-link">
                          <span>Consultancy Services</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/itineraries-experiences">
                    <a>
                      <li className="footer-li12">
                        <div className="footer-link">
                          <span>Tours &amp; Itineraries</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/pricing-packages">
                    <a>
                      <li className="footer-li13">
                        <div className="footer-link">
                          <span>Pricing &amp; Packages</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/booking-documentation">
                    <a>
                      <li className="footer-li14">
                        <div className="footer-link">
                          <span>Booking &amp; Visas</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/booking-sub">
                    <a>
                      <li className="footer-li15">
                        <div className="footer-link">
                          <span>BookingSub</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/page">
                    <a>
                      <li className="footer-li16">
                        <div className="footer-link">
                          <span>Page</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/plan">
                    <a>
                      <li className="footer-li17">
                        <div className="footer-link">
                          <span>Plan</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                  <Link href="/consultation">
                    <a>
                      <li className="footer-li18">
                        <div className="footer-link">
                          <span>Consultation</span>
                        </div>
                      </li>
                    </a>
                  </Link>
                </ul>
              </nav>
              <div className="footer-nav-column">
                <h2 className="section-subtitle footer-column-title">
                  Support
                </h2>
                <ul className="footer-link-list">
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Help Center</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Travel Insurance</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Safety Guidelines</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Terms of Service</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link">
                        <span>Privacy Policy</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-contact-column">
                <h2 className="section-subtitle footer-column-title">
                  Get in Touch
                </h2>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
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
                    </div>
                    <h1 className="footer-text27">
                      Mohammadu Buhari Wy, Central Business Dis, Abuja 900103,
                      Federal Capital Territory
                    </h1>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
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
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </svg>
                    </div>
                    <span className="section-content">
                      <span>hello@MyR</span>
                      <span className="footer-text29">n</span>
                      <span>BTravels.com</span>
                    </span>
                  </li>
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <a
                        href="https://+2348062163748"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
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
                          className="footer-icon28"
                        >
                          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                        </svg>
                      </a>
                    </div>
                    <a
                      href="tel:+2348062163748"
                      className="footer-thq-section-content-elm3 section-content"
                    >
                      08062163748
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-legal-container">
                <p className="section-content footer-copyright">
                  2026 R&amp;B Travels. All rights reserved.
                </p>
                <a
                  href="https://www.volues.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="footer-thq-section-content-elm5 section-content footer-copyright">
                    <span className="footer-text31">Developed by</span>
                    <span> www.volues.com</span>
                  </p>
                </a>
                <div className="footer-trust-badges">
                  <div className="footer-badge">
                    <span>Vetted Partners</span>
                  </div>
                  <div className="footer-badge">
                    <span>Secure Booking</span>
                  </div>
                  <div className="footer-badge">
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-icon-circle, .footer-social-icon, .footer-link {
  transition: none !important;
  transform: none !important;
  animation: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  const footerIcons = document.querySelectorAll(".footer-social-icon")

  footerIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })
  })

  const currentYear = new Date().getFullYear()
  const copyrightText = document.querySelector(".footer-copyright")
  if (copyrightText) {
    copyrightText.innerHTML = copyrightText.innerHTML.replace("2026", currentYear)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-text11 {
            color: var(--color-accent-dark);
          }
          .footer-thq-footer-social-icon-elm2 {
            text-decoration: none;
          }
          .footer-li10 {
            text-decoration: none;
          }
          .footer-li11 {
            text-decoration: none;
          }
          .footer-li12 {
            text-decoration: none;
          }
          .footer-li13 {
            text-decoration: none;
          }
          .footer-li14 {
            text-decoration: none;
          }
          .footer-li15 {
            text-decoration: none;
          }
          .footer-li16 {
            text-decoration: none;
          }
          .footer-li17 {
            text-decoration: none;
          }
          .footer-li18 {
            text-decoration: none;
          }
          .footer-text27 {
            font-size: 16px;
            font-style: normal;
            font-family: 'Inter';
            font-weight: 300;
          }
          .footer-text29 {
            color: var(--color-accent-dark);
          }
          .footer-icon28 {
            text-decoration: none;
          }
          .footer-thq-section-content-elm3 {
            text-decoration: none;
          }
          .footer-thq-section-content-elm5 {
            color: var(--color-primary-light);
            font-style: normal;
            font-family: 'Inter';
            font-weight: 600;
            text-decoration: none;
          }
          .footer-text31 {
            color: var(--color-scrim-light);
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .footer-text27 {
              font-size: 14px;
              font-style: normal;
              font-family: Inter;
              font-weight: 300;
            }
            .footer-thq-section-content-elm5 {
              color: var(--color-primary-light);
            }
          }
          @media (max-width: 479px) {
            .footer-text27 {
              font-size: 16px;
              font-style: normal;
              font-family: Inter;
              font-weight: 200;
            }
            .footer-thq-section-content-elm5 {
              color: var(--color-primary-light);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
