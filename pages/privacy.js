import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Privacy = (props) => {
  return (
    <>
      <div className="privacy-container1">
        <Head>
          <title>Privacy - rnvtravels</title>
          <meta property="og:title" content="Privacy - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/privacy"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/privacy"
          />
        </Head>
        <Navigation></Navigation>
        <div className="privacy-container2">
          <div className="privacy-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="header-section">
          <div className="header-section-bg">
            <img
              alt="Modern airport terminal"
              src="https://images.pexels.com/photos/4401167/pexels-photo-4401167.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="header-section-image"
            />
            <div className="header-section-overlay"></div>
          </div>
          <div className="header-section-content">
            <div className="header-section-container">
              <h1 className="page-hero-title hero-title">Privacy Policy</h1>
              <p className="page-hero-subtitle hero-subtitle">
                At R&amp;B Travels, we value your privacy and are committed to
                protecting your personal information while providing trusted
                travel and visa-related services.
              </p>
              <div className="header-section-features">
                <div className="header-feature-item">
                  <div className="header-feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                          width="18"
                          height="11"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="header-feature-text">
                    Secure Data Handling
                  </span>
                </div>
                <div className="header-feature-item">
                  <div className="header-feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="header-feature-text">
                    Trusted Travel Services
                  </span>
                </div>
                <div className="header-feature-item">
                  <div className="header-feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="header-feature-text">
                    Transparent Information Usage
                  </span>
                </div>
                <div className="header-feature-item">
                  <div className="header-feature-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="header-feature-text">
                    Customer Privacy Protection
                  </span>
                </div>
              </div>
              <div className="header-section-actions">
                <a href="#contact">
                  <div className="btn-lg btn-primary btn">
                    <span>Contact Support</span>
                  </div>
                </a>
                <Link href="/">
                  <a>
                    <div className="btn-lg btn btn-outline">
                      <span>Back to Home</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="privacy-content">
          <div className="privacy-content-container">
            <div className="privacy-grid">
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">1. Introduction</h2>
                </div>
                <p className="section-content">
                  R&amp;B Travels collects customer information to provide
                  travel-related services efficiently and securely. We are
                  dedicated to maintaining the highest standards of data
                  integrity and protection for every traveler.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 16v-2a2 2 0 0 0-4 0v2m-5.5-1H7a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="10" cy="7"></circle>
                        <rect
                          x="13"
                          y="16"
                          rx=".899"
                          width="8"
                          height="5"
                        ></rect>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">
                    2. Information We Collect
                  </h2>
                </div>
                <ul className="privacy-list">
                  <li className="section-content">
                    <span>Full name &amp; Contact details (Phone, Email)</span>
                  </li>
                  <li className="section-content">
                    <span>Passport information &amp; Travel details</span>
                  </li>
                  <li className="section-content">
                    <span>Visa application &amp; Payment information</span>
                  </li>
                  <li className="section-content">
                    <span>Device/browser &amp; Usage information</span>
                  </li>
                </ul>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20a10 10 0 1 0 9.542 13M2 12h8.5M20 6V4a2 2 0 1 0-4 0v2"></path>
                        <rect x="14" y="6" rx="1" width="8" height="5"></rect>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">
                    3. How We Use Information
                  </h2>
                </div>
                <p className="section-content">
                  Information is used for: Flight and hotel bookings, Visa
                  processing assistance, Customer support, Travel documentation,
                  Appointment scheduling, Notifications and updates, Service
                  improvement, and Security/fraud prevention.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                          width="18"
                          height="11"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">
                    4. Data Protection &amp; Security
                  </h2>
                </div>
                <p className="section-content">
                  Customer data is securely stored using industry-standard
                  encryption. Sensitive information is protected by reasonable
                  security measures implemented to prevent unauthorized access,
                  alteration, or disclosure.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8 9V2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">
                    5. Sharing of Information
                  </h2>
                </div>
                <p className="section-content">
                  Information may be shared with: Airlines, Embassies, Visa
                  centers, Hotels, Payment providers, and Government authorities
                  when legally required. We strictly never sell customer
                  information to third parties.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M12 2a7 7 0 0 1 7 7c0 2.3-1.3 4.3-3.2 5.3c-.6.3-1.1.8-1.4 1.4c-.4.6-.4 1.3-.4 2.3v1"></path>
                        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2m-17.1 7.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">
                    6. Cookies &amp; Tracking
                  </h2>
                </div>
                <p className="section-content">
                  We use cookies for: Improving browsing experience, Analytics,
                  Performance optimization, and Remembering user preferences to
                  ensure a personalized travel planning journey.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">7. User Rights</h2>
                </div>
                <p className="section-content">
                  Users may: Request access to their data, Request correction of
                  information, Request deletion where applicable, and Withdraw
                  consent for marketing communication at any time.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">8. Third-Party Services</h2>
                </div>
                <p className="section-content">
                  External platforms or payment systems integrated with our
                  services may have independent privacy policies. We encourage
                  users to review the policies of these partners separately.
                </p>
              </article>
              <article className="privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5m8 4.2V9a3 3 0 0 0-3-3H9"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">9. Policy Updates</h2>
                </div>
                <p className="section-content">
                  Our privacy policy may be updated periodically to reflect
                  changes in our practices or legal requirements. Users should
                  review this page occasionally for the latest information.
                </p>
              </article>
              <article className="privacy-card-highlight privacy-card">
                <div className="privacy-card-header">
                  <div className="privacy-card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-subtitle">10. Contact Information</h2>
                </div>
                <div className="contact-details">
                  <p className="section-content">
                    <span className="privacy-text16">
                      R&amp;B Travels Support
                    </span>
                  </p>
                  <p className="section-content">
                    <span>Email: Info@myR</span>
                    <span className="privacy-text18">n</span>
                    <span>BTravels.com</span>
                  </p>
                  <p className="section-content">Phone: +2348062163748</p>
                  <p className="section-content">
                    Address: Nicon Plaza, Plot 242, Muhammadu Buhari Way,
                    Central Area, Federal Capital Territory.
                  </p>
                  <button className="privacy-thq-btn-elm3 btn-primary btn btn-sm">
                    Message Support
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="faq-container">
            <h2 className="section-title">Privacy Concerns &amp; FAQs</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="section-subtitle">
                  <span>How long is my personal data stored?</span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    We retain your information for as long as necessary to
                    fulfill the travel services requested and to comply with
                    legal, accounting, or reporting requirements. Typically,
                    this spans the duration of your trip planning and
                    completion.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="section-subtitle">
                  <span>Is my payment information encrypted?</span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Yes, all payment transactions are processed through secure,
                    PCI-compliant payment gateways. We do not store full credit
                    card details on our local servers.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="section-subtitle">
                  <span>Can I opt-out of marketing emails?</span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Absolutely. Every marketing communication we send includes
                    an &apos;unsubscribe&apos; link at the bottom. You can also
                    contact our support team to be removed from our mailing
                    lists manually.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="section-subtitle">
                  <span>Who has access to my passport details?</span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Only authorized personnel involved in your visa processing
                    or flight booking have access to sensitive documents. These
                    details are shared only with the relevant embassies or
                    airlines required for your journey.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="trust-badges">
          <div className="trust-container">
            <div className="trust-grid">
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">GDPR Compliant</span>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">SSL Secured</span>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                  </svg>
                </div>
                <span className="section-content">Vetted Partners</span>
              </div>
              <div className="trust-badge-item">
                <div className="trust-badge-icon">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12l2 2 4-4"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">Verified Security</span>
              </div>
            </div>
          </div>
        </section>
        <section className="why-trust">
          <div className="why-trust-container">
            <h2 className="section-title">Why Customers Trust Us</h2>
            <div className="why-trust-grid">
              <div className="why-trust-card">
                <div className="why-trust-number">
                  <span>01</span>
                </div>
                <h3 className="section-subtitle">Uncompromising Security</h3>
                <p className="section-content">
                  We use the same high-level encryption as major financial
                  institutions to ensure your travel documents and personal data
                  remain private and protected.
                </p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-number">
                  <span>02</span>
                </div>
                <h3 className="section-subtitle">Transparency First</h3>
                <p className="section-content">
                  No hidden clauses. We are clear about what data we collect and
                  exactly how it helps us provide you with a better, more
                  personalized travel experience.
                </p>
              </div>
              <div className="why-trust-card">
                <div className="why-trust-number">
                  <span>03</span>
                </div>
                <h3 className="section-subtitle">Global Support</h3>
                <p className="section-content">
                  Our dedicated privacy and support team is available 24/7 to
                  address any concerns you have regarding your data or travel
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="privacy-container4">
          <div className="privacy-container5">
            <Script
              html={`<style>
        @keyframes fadeInDown {from {opacity: 0;
transform: translateY(-30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeInUp {from {opacity: 0;
transform: translateY(30px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes fadeIn {from {opacity: 0;}
to {opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="privacy-container6">
          <div className="privacy-container7">
            <Script
              html={`<script defer data-name="privacy-page-interactions">
(function(){
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Initialize reveal elements
  document.querySelectorAll(".privacy-card, .why-trust-card, .faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    revealOnScroll.observe(el)
  })

  // Smooth reveal for FAQ answers
  document.querySelectorAll("details.faq-item").forEach((details) => {
    details.addEventListener("toggle", (e) => {
      if (details.open) {
        const answer = details.querySelector(".faq-answer")
        answer.style.opacity = "0"
        answer.style.transform = "translateY(-10px)"
        setTimeout(() => {
          answer.style.transition = "all 0.3s ease"
          answer.style.opacity = "1"
          answer.style.transform = "translateY(0)"
        }, 10)
      }
    })
  })

  // Trust Badge Hover Effect Enhancement
  document.querySelectorAll(".trust-badge-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.querySelector("svg").style.transform = "scale(1.1) rotate(5deg)"
      item.querySelector("svg").style.transition = "transform 0.3s ease"
    })
    item.addEventListener("mouseleave", () => {
      item.querySelector("svg").style.transform = "scale(1) rotate(0)"
    })
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
          .privacy-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .privacy-container2 {
            display: none;
          }
          .privacy-container3 {
            display: contents;
          }
          .privacy-text16 {
            font-weight: 700;
          }
          .privacy-thq-btn-elm3 {
            margin-top: var(--spacing-md);
          }
          .privacy-container4 {
            display: none;
          }
          .privacy-container5 {
            display: contents;
          }
          .privacy-container6 {
            display: none;
          }
          .privacy-container7 {
            display: contents;
          }
          @media (max-width: 479px) {
            .privacy-text18 {
              color: var(--color-accent-light);
            }
          }
        `}
      </style>
    </>
  )
}

export default Privacy
