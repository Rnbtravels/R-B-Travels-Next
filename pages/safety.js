import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Safety = (props) => {
  return (
    <>
      <div className="safety-container1">
        <Head>
          <title>Safety - rnvtravels</title>
          <meta property="og:title" content="Safety - rnvtravels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/safety" />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/safety"
          />
        </Head>
        <Navigation></Navigation>
        <header className="hero-wrapper">
          <div className="hero-bg-container">
            <img
              src="https://images.pexels.com/photos/4401167/pexels-photo-4401167.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Modern airport terminal"
              className="page-hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-container">
            <div className="page-hero-text-block">
              <h1 className="page-hero-title1 hero-title">
                Travel Safety Guidelines
              </h1>
              <p className="page-hero-subtitle1 hero-subtitle">
                At R&amp;B Travels, your safety and comfort are our priority.
                Please review our travel safety recommendations and important
                guidelines before your journey.
              </p>
              <div className="hero-features-grid">
                <div className="hero-feature-item">
                  <div className="hero-feature-icon">
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
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <span className="section-content">Safe Travel Planning</span>
                </div>
                <div className="hero-feature-item">
                  <div className="hero-feature-icon">
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
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="section-content">
                    Secure Documentation Assistance
                  </span>
                </div>
                <div className="hero-feature-item">
                  <div className="hero-feature-icon">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="section-content">
                    Emergency Support Guidance
                  </span>
                </div>
                <div className="hero-feature-item">
                  <div className="hero-feature-icon">
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
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span className="section-content">
                    Trusted International Travel Services
                  </span>
                </div>
              </div>
              <div className="page-hero-cta-group">
                <a href="#contact">
                  <div className="btn btn-primary btn-lg">
                    <span>Contact Support</span>
                  </div>
                </a>
                <a href="#services">
                  <div className="hero-btn-secondary btn btn-lg btn-outline">
                    <span>Explore Travel Services</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
        <section className="guidelines-section">
          <div className="container">
            <h2 className="text-center section-title">
              Comprehensive Safety Protocols
            </h2>
            <div className="guidelines-grid">
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h3 className="section-subtitle">1. General Travel Safety</h3>
                <p className="section-content">
                  Travelers should remain aware of local laws and customs, keep
                  valuables secure, stay informed about destination conditions,
                  and follow all airport and airline regulations.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  2. Passport &amp; Documentation
                </h3>
                <p className="section-content">
                  Keep passport and travel documents safe. Make photocopies or
                  digital backups, verify visa validity before departure, and
                  avoid sharing sensitive information publicly.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  3. Health &amp; Medical Precautions
                </h3>
                <p className="section-content">
                  Carry necessary medications, check vaccination requirements,
                  maintain comprehensive travel insurance coverage, and stay
                  hydrated while following health advisories.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  4. Financial &amp; Payment Safety
                </h3>
                <p className="section-content">
                  Use secure payment methods, avoid sharing banking details
                  publicly, notify banks before international travel, and be
                  cautious of travel scams or fraudulent offers.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  5. Online &amp; Cyber Safety
                </h3>
                <p className="section-content">
                  Avoid unsecured public Wi-Fi for sensitive transactions,
                  protect personal info online, beware of phishing, and use
                  strong passwords for travel accounts.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                    <path d="M3 9h18"></path>
                    <path d="M3 15h18"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  6. Transportation &amp; Lodging
                </h3>
                <p className="section-content">
                  Use trusted transportation providers, verify hotel bookings
                  before arrival, keep emergency contacts accessible, and share
                  your itinerary with trusted family or friends.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="section-subtitle">7. Emergency Situations</h3>
                <p className="section-content">
                  In cases of lost passports, medical emergencies, flight
                  cancellations, or theft, follow our protocol and contact
                  R&amp;B Travels support immediately.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" y1="8" x2="19" y2="14"></line>
                    <line x1="22" y1="11" x2="16" y2="11"></line>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  8. Visa &amp; Immigration Compliance
                </h3>
                <p className="section-content">
                  Travelers must comply with immigration laws. False information
                  can result in denial or deportation. Always follow Embassy
                  rules and regulations.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  9. Insurance Recommendations
                </h3>
                <p className="section-content">
                  We strongly encourage travelers to obtain medical coverage,
                  trip cancellation protection, emergency evacuation coverage,
                  and baggage protection.
                </p>
              </article>
              <article className="guideline-card">
                <div className="guideline-icon-box">
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
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  10. COVID-19 &amp; Health Notice
                </h3>
                <p className="section-content">
                  Check destination-specific health requirements regularly.
                  Regulations may change without notice. Follow airline and
                  government advisories strictly.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="commitment-section">
          <div className="container commitment-inner">
            <div className="commitment-featured">
              <div className="commitment-visual">
                <img
                  src="https://images.pexels.com/photos/29152262/pexels-photo-29152262.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Professional travel assistance"
                  className="commitment-image"
                />
                <div className="commitment-badge">
                  <span className="section-content">Trusted Choice</span>
                </div>
              </div>
            </div>
            <div className="commitment-content">
              <h2 className="section-title">
                R&amp;B Travels Commitment to Safety
              </h2>
              <p className="section-content">
                At R&amp;B Travels, your peace of mind is our benchmark for
                success. We don&apos;t just plan trips; we architect safe
                journeys. Our commitment is built on three core pillars:
              </p>
              <ul className="commitment-list">
                <li className="commitment-item">
                  <div className="commitment-icon">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="commitment-text">
                    <h4 className="section-subtitle">Proactive Guidance</h4>
                    <p className="section-content">
                      We prioritize customer safety by providing professional
                      travel guidance tailored to your specific destination and
                      travel style.
                    </p>
                  </div>
                </li>
                <li className="commitment-item">
                  <div className="commitment-icon">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="commitment-text">
                    <h4 className="section-subtitle">Accurate Information</h4>
                    <p className="section-content">
                      We assist customers with accurate travel information,
                      ensuring you are never caught off guard by changing
                      regulations or local conditions.
                    </p>
                  </div>
                </li>
                <li className="commitment-item">
                  <div className="commitment-icon">
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
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="commitment-text">
                    <h4 className="section-subtitle">End-to-End Support</h4>
                    <p className="section-content">
                      Our team offers continuous support throughout your travel
                      process, from initial documentation to your safe return
                      home.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="confidence-section">
          <div className="container">
            <h2 className="text-center section-title">
              Why Travel With Confidence
            </h2>
            <div className="confidence-bento">
              <div className="bento-main">
                <div className="bento-card bento-card-primary">
                  <h3 className="section-subtitle">Verified Local Partners</h3>
                  <p className="section-content">
                    Every partner in our network undergoes a rigorous vetting
                    process. We only work with local agencies that meet our high
                    standards for safety, reliability, and ethical practices.
                  </p>
                  <div className="trust-badge-group">
                    <div className="trust-badge">
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
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span>Vetted Partners</span>
                    </div>
                    <div className="trust-badge">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bento-side">
                <div className="bento-card bento-card-secondary">
                  <div className="bento-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Global Safety Indicators</h3>
                  <p className="section-content">
                    We monitor real-time travel alerts and health advisories
                    globally.
                  </p>
                </div>
                <div className="bento-card bento-card-accent">
                  <h3 className="section-subtitle">Effortless Journey</h3>
                  <p className="section-content">
                    We handle the complexity so you can enjoy the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tips-section">
          <div className="container">
            <h2 className="text-center section-title">Essential Travel Tips</h2>
            <div className="tips-masonry">
              <div className="tip-card">
                <h3 className="section-subtitle">Pack Smarter</h3>
                <p className="section-content">
                  Keep a small &quot;emergency kit&quot; in your carry-on with
                  essential medications, a portable charger, and physical copies
                  of your travel insurance policy.
                </p>
              </div>
              <div className="tip-card tip-card-highlight">
                <h3 className="section-subtitle">Stay Connected</h3>
                <p className="section-content">
                  Download offline maps for your destination before you arrive.
                  This ensures you can navigate even without a data connection
                  or in areas with poor signal.
                </p>
              </div>
              <div className="tip-card">
                <h3 className="section-subtitle">Local Etiquette</h3>
                <p className="section-content">
                  Research basic greeting gestures and dress codes. Respecting
                  local culture is the first step toward a safe and immersive
                  travel experience.
                </p>
              </div>
              <div className="tip-card tip-card-outline">
                <h3 className="section-subtitle">Health First</h3>
                <p className="section-content">
                  Avoid tap water in regions where it&apos;s not certified safe.
                  Stick to bottled or filtered water, even for brushing your
                  teeth.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-faq-section">
          <div className="container">
            <h2 className="text-center section-title">
              Safety Frequently Asked Questions
            </h2>
            <div className="faq-accordion">
              <details className="faq-item">
                <summary className="faq-summary">
                  <span className="section-subtitle">
                    What should I do if I lose my passport abroad?
                  </span>
                  <div className="faq-icon">
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
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Immediately report the loss to local police and obtain a
                    police report. Contact the nearest embassy or consulate of
                    your home country and notify R&amp;B Travels support so we
                    can assist with re-booking and documentation guidance.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  <span className="section-subtitle">
                    Does my standard health insurance cover me internationally?
                  </span>
                  <div className="faq-icon">
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
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Most domestic health insurance plans offer limited or no
                    coverage outside your home country. We strongly recommend
                    purchasing a dedicated travel medical insurance policy that
                    includes emergency evacuation coverage.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-summary">
                  <span className="section-subtitle">
                    How do I stay updated on travel restrictions?
                  </span>
                  <div className="faq-icon">
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
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    R&amp;B Travels provides real-time updates to all our
                    clients. You can also monitor official government travel
                    websites and the World Health Organization (WHO) for the
                    latest health advisories.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-card-header">
                <h2 className="section-title">
                  Contact &amp; Emergency Support
                </h2>
                <p className="section-content">
                  Voyanta - R&amp;B Travels Support Team
                </p>
              </div>
              <div className="contact-grid">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="section-subtitle">Emergency Hotline</h4>
                    <p className="section-content">+1 (800) SAFE-TRAVEL</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
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
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="section-subtitle">Email Support</h4>
                    <p className="section-content">
                      safety@voyanta-travels.com
                    </p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
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
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="section-subtitle">Office Address</h4>
                    <p className="section-content">
                      123 Travel Plaza, Suite 500, Global City
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-action">
                <button className="btn btn-primary btn-xl">Get Support</button>
              </div>
            </div>
          </div>
        </section>
        <div className="safety-container5">
          <div className="safety-container6">
            <Script
              html={`<script defer data-name="safety-guidelines-interactions">
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

  // Apply initial styles and observe elements
  document.querySelectorAll(".guideline-card, .commitment-item, .bento-card, .tip-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    revealOnScroll.observe(el)
  })

  // Smooth reveal for hero content
  const heroContent = document.querySelector(".hero-text-block")
  if (heroContent) {
    heroContent.style.opacity = "0"
    heroContent.style.transform = "translateY(20px)"
    heroContent.style.transition = "opacity 1s ease-out, transform 1s ease-out"

    setTimeout(() => {
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateY(0)"
    }, 300)
  }

  // Handle FAQ exclusive opening (optional accordion behavior improvement)
  const faqs = document.querySelectorAll(".faq-item")
  faqs.forEach((faq) => {
    faq.addEventListener("toggle", (e) => {
      if (faq.open) {
        faqs.forEach((otherFaq) => {
          if (otherFaq !== faq && otherFaq.open) {
            otherFaq.open = false
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
          .safety-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .safety-container5 {
            display: none;
          }
          .safety-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Safety
