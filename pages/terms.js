import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Terms = (props) => {
  return (
    <>
      <div className="terms-container1">
        <Head>
          <title>Terms - rnvtravels</title>
          <meta property="og:title" content="Terms - rnvtravels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/terms" />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/terms"
          />
        </Head>
        <Navigation></Navigation>
        <section className="tos-hero">
          <div className="tos-hero-bg">
            <img
              src="https://images.pexels.com/photos/12932352/pexels-photo-12932352.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="R&amp;B Travels Hero Background"
              loading="lazy"
            />
            <div className="tos-hero-overlay"></div>
          </div>
          <div className="tos-hero-container">
            <div className="tos-hero-content">
              <h1 className="hero-title">Terms of Service</h1>
              <p className="hero-subtitle">
                These Terms of Service govern your access to and use of R&amp;B
                Travels services, including travel bookings, visa assistance,
                documentation support and related travel solutions.
              </p>
              <div className="tos-hero-grid">
                <div className="tos-hero-feature">
                  <div className="tos-hero-icon-box">
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
                  <span className="section-content">
                    Transparent Service Policies
                  </span>
                </div>
                <div className="tos-hero-feature">
                  <div className="tos-hero-icon-box">
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
                  <span className="section-content">
                    Trusted Travel Assistance
                  </span>
                </div>
                <div className="tos-hero-feature">
                  <div className="tos-hero-icon-box">
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
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="section-content">
                    Secure Booking Process
                  </span>
                </div>
                <div className="tos-hero-feature">
                  <div className="tos-hero-icon-box">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="10" r="3"></circle>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="section-content">
                    Customer Protection &amp; Responsibilities
                  </span>
                </div>
              </div>
              <div className="tos-hero-actions">
                <a href="#contact">
                  <div className="btn btn-primary btn-lg">
                    <span>Contact Support</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="btn btn-lg btn-outline">
                    <span>Explore Services</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="tos-main">
          <div className="tos-main-container">
            <div className="tos-main-grid">
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        strokeWidth="1.5"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">1. Introduction</h2>
                </div>
                <p className="section-content">
                  By accessing or using R&amp;B Travels services, you
                  acknowledge that you have read, understood, and agree to
                  comply with these Terms of Service. These terms constitute a
                  legally binding agreement between you and R&amp;B Travels
                  regarding your travel bookings and consultancy.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="m21 15l-1-6l-2.5 6M9 15l1-6M3 9h1v6h.5L7 9m9 .5a.5.5 0 0 0-.5-.5h-.75c-.721 0-1.337.521-1.455 1.233l-.09.534A1.06 1.06 0 0 0 14.25 12a1.06 1.06 0 0 1 1.045 1.233l-.09.534A1.476 1.476 0 0 1 13.75 15H13a.5.5 0 0 1-.5-.5M18 14h2.7"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">2. Services Offered</h2>
                </div>
                <ul className="tos-list">
                  <li className="section-content">
                    <span>Visa appointment booking</span>
                  </li>
                  <li className="section-content">
                    <span>Travel documentation</span>
                  </li>
                  <li className="section-content">
                    <span>Flight assistance</span>
                  </li>
                  <li className="section-content">
                    <span>Hotel reservations</span>
                  </li>
                  <li className="section-content">
                    <span>Tour packages</span>
                  </li>
                  <li className="section-content">
                    <span>Study abroad support</span>
                  </li>
                  <li className="section-content">
                    <span>Travel consultation</span>
                  </li>
                  <li className="section-content">
                    <span>Airport transfer arrangements</span>
                  </li>
                  <li className="section-content">
                    <span>Travel insurance assistance</span>
                  </li>
                </ul>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="10" r="3"></circle>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-title">3. User Responsibilities</h2>
                </div>
                <p className="section-content">
                  Users must provide accurate personal information, submit valid
                  travel documents, and follow all embassy and immigration
                  requirements. It is your responsibility to comply with
                  applicable laws and keep your account details secure at all
                  times.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">4. Booking &amp; Payment</h2>
                </div>
                <p className="section-content">
                  Payments may be required in advance. Prices are subject to
                  change based on third-party providers. Booking confirmation
                  depends on availability, and additional service charges may
                  apply in specific processing cases.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-8-5v4m0 4h.01"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">5. Visa Disclaimer</h2>
                </div>
                <p className="section-content">
                  Visa approval decisions are made solely by embassies or
                  immigration authorities. R&amp;B Travels does not guarantee
                  visa approval. Processing times are estimates and may vary
                  based on government policies.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m15.364-6.364L5.636 18.364"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">
                    6. Cancellation &amp; Refund
                  </h2>
                </div>
                <p className="section-content">
                  Cancellation requests may attract administrative charges. Some
                  specialized services are strictly non-refundable. Refund
                  timelines depend on third-party provider policies and the
                  current processing stage.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="m2 2l20 20M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71M9.309 3.652A12.3 12.3 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a10 10 0 0 1-.08 1.264"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">7. Limitation of Liability</h2>
                </div>
                <p className="section-content">
                  R&amp;B Travels is not responsible for delays caused by
                  airlines, embassies, government policy changes, travel
                  restrictions, or force majeure events. We are not liable for
                  losses resulting from incorrect user information.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M16 5H3m8 7H3m13 7H3M18 9v6m3-3h-6"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">8. Third-Party Services</h2>
                </div>
                <p className="section-content">
                  We collaborate with airlines, hotels, and tour operators who
                  maintain separate terms. By using these services, you agree to
                  abide by the specific conditions set forth by these
                  third-party providers.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-title">9. Intellectual Property</h2>
                </div>
                <p className="section-content">
                  All website content, branding, and proprietary materials
                  belong exclusively to R&amp;B Travels. Unauthorized copying,
                  reproduction, or distribution of these assets is strictly
                  prohibited.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        <path d="M19 16v-2a2 2 0 0 0-4 0v2m-5.5-1H7a4 4 0 0 0-4 4v2"></path>
                        <circle cx="10" cy="7" r="4"></circle>
                        <rect
                          width="8"
                          height="5"
                          x="13"
                          y="16"
                          rx=".899"
                        ></rect>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-title">10. Privacy Reference</h2>
                </div>
                <p className="section-content">
                  Your personal data and privacy are paramount. All user data
                  handling and processing are governed by our comprehensive
                  Privacy Policy, accessible on our website.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M10.268 21a2 2 0 0 0 3.464 0M15 8h6m-3-3v6m2.002 3.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">11. Updates to Terms</h2>
                </div>
                <p className="section-content">
                  These terms may be modified periodically to reflect service
                  changes. Continued use of our travel solutions implies
                  acceptance of the most current version of our Terms of
                  Service.
                </p>
              </article>
              <article className="tos-card">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="section-title">12. Governing Law</h2>
                </div>
                <p className="section-content">
                  Our services and these terms are governed by and construed in
                  accordance with the applicable laws and regulations of the
                  jurisdiction in which R&amp;B Travels operates.
                </p>
              </article>
              <article id="contact" className="tos-card tos-card-contact">
                <div className="tos-card-header">
                  <div className="tos-card-icon">
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
                        <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"></path>
                        <path d="m7 18l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 13l6 6"></path>
                      </g>
                    </svg>
                  </div>
                  <h2 className="section-title">13. Contact Information</h2>
                </div>
                <div className="tos-contact-details">
                  <p className="section-content">
                    <span className="terms-text21">Company:</span>
                    <span>
                      {' '}
                      R&amp;B Travels
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p className="section-content">
                    <span className="terms-text23">Email:</span>
                    <span>
                      {' '}
                      support@rbtravels.com
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p className="section-content">
                    <span className="terms-text25">Phone:</span>
                    <span>
                      {' '}
                      +1 (555) 123-4567
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <p className="section-content">
                    <span className="terms-text27">Office:</span>
                    <span>
                      {' '}
                      123 Global Way, Suite 400, Travel District
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <button className="btn btn-primary">Contact Support</button>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="tos-faq">
          <div className="tos-faq-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="tos-faq-list">
              <details className="tos-faq-item">
                <summary className="section-subtitle">
                  <span>
                    {' '}
                    How long does visa processing usually take?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="tos-faq-toggle"></span>
                </summary>
                <p className="section-content">
                  Processing times vary significantly by country and visa type.
                  Generally, it can range from 15 to 45 business days. R&amp;B
                  Travels provides estimates but cannot guarantee specific
                  timelines.
                </p>
              </details>
              <details className="tos-faq-item">
                <summary className="section-subtitle">
                  <span>
                    {' '}
                    What happens if my visa application is denied?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="tos-faq-toggle"></span>
                </summary>
                <p className="section-content">
                  Embassy decisions are final. In case of denial, our team can
                  help review the reasons and advise on a re-application
                  strategy, though service fees for the initial process remain
                  non-refundable.
                </p>
              </details>
              <details className="tos-faq-item">
                <summary className="section-subtitle">
                  <span>
                    {' '}
                    Can I change my flight booking after payment?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="tos-faq-toggle"></span>
                </summary>
                <p className="section-content">
                  Changes are subject to airline policies and availability. Most
                  changes incur a processing fee from R&amp;B Travels plus any
                  fare difference or penalties charged by the airline.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="tos-why">
          <div className="tos-why-container">
            <div className="tos-why-bento">
              <div className="tos-why-main">
                <h2 className="section-title">Why Choose R&amp;B Travels</h2>
                <p className="section-content">
                  We are committed to making your global journey effortless.
                  With vetted local partners and a team of expert consultants,
                  we bridge the gap between your travel dreams and reality.
                </p>
                <div className="tos-why-stats">
                  <div className="tos-why-stat">
                    <span className="hero-title">10k+</span>
                    <span className="section-content">Visas Approved</span>
                  </div>
                  <div className="tos-why-stat">
                    <span className="hero-title">50+</span>
                    <span className="section-content">Countries Served</span>
                  </div>
                </div>
              </div>
              <div className="tos-why-side">
                <div className="tos-why-card">
                  <div className="tos-why-icon">
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
                  <h3 className="section-subtitle">Fair Pricing</h3>
                  <p className="section-content">
                    Transparent costs with no hidden fees at any stage of your
                    journey.
                  </p>
                </div>
                <div className="tos-why-card">
                  <div className="tos-why-icon">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">24/7 Support</h3>
                  <p className="section-content">
                    Dedicated assistance from planning through your safe return
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tos-trust">
          <div className="tos-trust-container">
            <div className="tos-trust-grid">
              <div className="tos-trust-badge">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
                <span className="section-subtitle">Secure Booking</span>
              </div>
              <div className="tos-trust-badge">
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
                    d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76M12 8v8m-4-4h8"
                  ></path>
                </svg>
                <span className="section-subtitle">Expert Assistance</span>
              </div>
              <div className="tos-trust-badge">
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
                    d="M12 7v6m-8 6.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20M9 10h6"
                  ></path>
                </svg>
                <span className="section-subtitle">Data Privacy</span>
              </div>
              <div className="tos-trust-badge">
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
                <span className="section-subtitle">Service Guarantee</span>
              </div>
            </div>
          </div>
        </section>
        <div className="terms-container2">
          <div className="terms-container3">
            <Script
              html={`<style>
* {
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="terms-container4">
          <div className="terms-container5">
            <Script
              html={`<script defer data-name="tos-interactions">
(function(){
  // Simple scroll reveal effect for cards
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

  document.querySelectorAll(".tos-card, .tos-why-card, .tos-faq-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    revealObserver.observe(el)
  })

  // Accordion accessibility enhancement
  document.querySelectorAll(".tos-faq-item").forEach((item) => {
    item.addEventListener("toggle", (e) => {
      if (item.open) {
        document.querySelectorAll(".tos-faq-item").forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) {
            otherItem.open = false
          }
        })
      }
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
          .terms-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .terms-text21 {
            font-weight: 700;
          }
          .terms-text23 {
            font-weight: 700;
          }
          .terms-text25 {
            font-weight: 700;
          }
          .terms-text27 {
            font-weight: 700;
          }
          .terms-container2 {
            display: none;
          }
          .terms-container3 {
            display: contents;
          }
          .terms-container4 {
            display: none;
          }
          .terms-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Terms
