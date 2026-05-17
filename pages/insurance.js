import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Insurance = (props) => {
  return (
    <>
      <div className="insurance-container1">
        <Head>
          <title>Insurance - rnvtravels</title>
          <meta property="og:title" content="Insurance - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/insurance"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/insurance"
          />
        </Head>
        <Navigation></Navigation>
        <div className="insurance-container2">
          <div className="insurance-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="page-hero-section">
          <div className="hero-bg-wrapper">
            <img
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Travel Insurance Services"
              className="hero-bg-img"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="page-hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Travel Insurance Services</h1>
              <p className="hero-subtitle">
                Protect your journey with reliable travel insurance solutions
                designed to provide peace of mind before and during your
                travels.
              </p>
              <div className="page-hero-features-grid">
                <div className="page-hero-feature-item">
                  <div className="feature-icon-wrapper">
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
                      <path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                  </div>
                  <span>Medical Emergency Coverage</span>
                </div>
                <div className="page-hero-feature-item">
                  <div className="feature-icon-wrapper">
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
                        width="18"
                        height="18"
                        x="3"
                        y="3"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="m15 9l-6 6m0-6l6 6"></path>
                    </svg>
                  </div>
                  <span>Trip Cancellation Protection</span>
                </div>
                <div className="page-hero-feature-item">
                  <div className="feature-icon-wrapper">
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
                      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"></path>
                    </svg>
                  </div>
                  <span>International Travel Assistance</span>
                </div>
                <div className="page-hero-feature-item">
                  <div className="feature-icon-wrapper">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                  </div>
                  <span>Secure &amp; Reliable Coverage Options</span>
                </div>
              </div>
              <div className="page-hero-cta-group1">
                <Link href="/enquiry-form">
                  <a>
                    <div className="insurance-thq-btn-primary-elm1 btn-primary btn-lg">
                      <span>Get Insurance Support</span>
                    </div>
                  </a>
                </Link>
                <Link href="/services">
                  <a>
                    <div className="insurance-thq-btn-outline-elm btn-lg btn-outline">
                      <span>Explore Travel Services</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-badges-section">
          <div className="page-trust-container">
            <div className="trust-row">
              <div className="trust-item">
                <span className="trust-label">ISO Certified</span>
              </div>
              <div className="trust-item">
                <span className="trust-label">Global Partners</span>
              </div>
              <div className="trust-item">
                <span className="trust-label">24/7 Support</span>
              </div>
              <div className="trust-item">
                <span className="trust-label">Trusted Documentation</span>
              </div>
              <div className="trust-item">
                <span className="trust-label">Verified Provider</span>
              </div>
            </div>
          </div>
        </section>
        <section className="intro-section">
          <div className="intro-container">
            <div className="intro-layout">
              <aside className="intro-sidebar">
                <div className="sidebar-card">
                  <div className="sidebar-icon">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Secure Your Journey</h3>
                  <p className="section-content">
                    Voyanta ensures your global adventures are backed by robust
                    financial and medical protection.
                  </p>
                </div>
              </aside>
              <div className="intro-main">
                <h2 className="section-title">
                  Introduction to Travel Insurance
                </h2>
                <div className="intro-content-wrapper">
                  <p className="section-content">
                    Travel insurance is not just a document; it&apos;s a safety
                    net that protects you against the unpredictable nature of
                    international travel. At Voyanta, we understand that even
                    the most well-planned trips can face unexpected disruptions,
                    from sudden illnesses to flight cancellations.
                  </p>
                  <p className="section-content">
                    Protecting yourself means ensuring that medical emergencies
                    abroad don&apos;t lead to financial hardship. Our
                    comprehensive solutions provide immediate assistance and
                    coordination, allowing you to focus on your recovery or your
                    next destination rather than administrative hurdles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="coverage-options-section">
          <div className="coverage-container">
            <div className="section-header-centered">
              <h2 className="section-title">Insurance Coverage Options</h2>
              <p className="section-subtitle">
                Comprehensive plans tailored for every traveler&apos;s unique
                needs.
              </p>
            </div>
            <div className="coverage-grid">
              <div className="coverage-card">
                <div className="page-card-icon">
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
                    <path d="M12 11v4m2-2h-4m6-7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m10 0v14M6 6v14"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="section-subtitle">Medical Coverage</h3>
                <ul className="coverage-list">
                  <li>
                    <span>Emergency medical treatment</span>
                  </li>
                  <li>
                    <span>Hospitalization support</span>
                  </li>
                  <li>
                    <span>Medical evacuation assistance</span>
                  </li>
                </ul>
              </div>
              <div className="coverage-card">
                <div className="page-card-icon">
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
                    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7H9l2-7H7l-2 2H2l2-4l-2-4h3l2 2h4L9 3h3z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Trip Cancellation &amp; Delay
                </h3>
                <ul className="coverage-list">
                  <li>
                    <span>Flight cancellation protection</span>
                  </li>
                  <li>
                    <span>Delayed departure assistance</span>
                  </li>
                  <li>
                    <span>Missed connection support</span>
                  </li>
                </ul>
              </div>
              <div className="coverage-card">
                <div className="page-card-icon">
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
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="section-subtitle">Baggage Protection</h3>
                <ul className="coverage-list">
                  <li>
                    <span>Lost baggage coverage</span>
                  </li>
                  <li>
                    <span>Delayed luggage support</span>
                  </li>
                  <li>
                    <span>Theft or damage protection</span>
                  </li>
                </ul>
              </div>
              <div className="coverage-card">
                <div className="page-card-icon">
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
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"></path>
                      <circle cx="18" cy="5" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Emergency Assistance</h3>
                <ul className="coverage-list">
                  <li>
                    <span>24/7 emergency support</span>
                  </li>
                  <li>
                    <span>Travel advisory assistance</span>
                  </li>
                  <li>
                    <span>Emergency coordination services</span>
                  </li>
                </ul>
              </div>
              <div className="coverage-card">
                <div className="page-card-icon">
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
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Personal Liability</h3>
                <ul className="coverage-list">
                  <li>
                    <span>Accidental damage coverage</span>
                  </li>
                  <li>
                    <span>Legal liability support</span>
                  </li>
                  <li>
                    <span>Third-party protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-comparison-section">
          <div className="benefits-container">
            <div className="section-header">
              <h2 className="section-title">Why Travel Insurance Matters</h2>
              <p className="section-content">
                Understanding the tangible benefits that secure your
                international ventures.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h4 className="page-benefit-title">Financial Protection</h4>
                <p className="section-content">
                  Avoid massive out-of-pocket expenses for medical bills or lost
                  prepaid bookings.
                </p>
              </div>
              <div className="benefit-card">
                <h4 className="page-benefit-title">Medical Support Abroad</h4>
                <p className="section-content">
                  Access to vetted medical facilities and professional
                  coordination in foreign languages.
                </p>
              </div>
              <div className="benefit-card">
                <h4 className="page-benefit-title">Peace of Mind</h4>
                <p className="section-content">
                  Travel with confidence knowing that a dedicated team is ready
                  to assist 24/7.
                </p>
              </div>
              <div className="benefit-card">
                <h4 className="page-benefit-title">Reduced Risk</h4>
                <p className="section-content">
                  Mitigate risks associated with geopolitical shifts, weather
                  events, and health crises.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="who-needs-section">
          <div className="who-container">
            <div className="who-layout">
              <div className="who-text">
                <h2 className="section-title">Who Needs Travel Insurance?</h2>
                <p className="section-content">
                  Our plans are designed for a wide spectrum of global
                  travelers, ensuring no one is left unprotected.
                </p>
              </div>
              <div className="who-grid">
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>International Travelers</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Students Studying Abroad</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Business Professionals</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Families Traveling Globally</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Pilgrimage Travelers</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Frequent Flyers</span>
                </div>
                <div className="who-item">
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
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span>Leisure Tourists</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="study-abroad-section">
          <div className="study-container">
            <div className="study-split">
              <div className="study-visual">
                <img
                  src="https://images.pexels.com/photos/3985162/pexels-photo-3985162.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Students studying abroad"
                  className="study-img"
                />
              </div>
              <div className="study-content">
                <h2 className="section-title">
                  Study Abroad Insurance Support
                </h2>
                <p className="section-content">
                  International students face unique insurance requirements from
                  both host universities and visa authorities. Voyanta provides
                  specialized plans that meet all compliance standards for study
                  visas worldwide.
                </p>
                <ul className="study-features">
                  <li>
                    <span>
                      Medical insurance compliance for major study destinations
                    </span>
                  </li>
                  <li>
                    <span>
                      Support for study visa application documentation
                    </span>
                  </li>
                  <li>
                    <span>
                      Mental health and wellness coverage for students
                    </span>
                  </li>
                  <li>
                    <span>
                      Repatriation and emergency evacuation specific to student
                      needs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="visa-requirements-section">
          <div className="visa-container">
            <h2 className="section-title">Visa &amp; Embassy Requirements</h2>
            <div className="tabs-vertical-layout">
              <nav className="visa-tabs-nav">
                <button
                  data-target="mandatory"
                  className="visa-tab-trigger active"
                >
                  Mandatory Destinations
                </button>
                <button data-target="compliance" className="visa-tab-trigger">
                  Policy Compliance
                </button>
                <button data-target="verification" className="visa-tab-trigger">
                  Verification Process
                </button>
              </nav>
              <div className="visa-tabs-content">
                <div id="mandatory" className="page-tab-panel active">
                  <h3 className="section-subtitle">Compulsory Insurance</h3>
                  <p className="section-content">
                    Many countries, especially within the Schengen Area and
                    several Gulf nations, require proof of valid travel
                    insurance before a visa is granted. Without this
                    documentation, your application may be rejected immediately.
                  </p>
                </div>
                <div id="compliance" className="page-tab-panel">
                  <h3 className="section-subtitle">
                    Meeting Embassy Standards
                  </h3>
                  <p className="section-content">
                    Insurance must meet specific minimum coverage amounts (often
                    €30,000 or more) and cover the entire duration of the stay.
                    Our policies are designed to exceed these requirements for
                    guaranteed acceptance.
                  </p>
                </div>
                <div id="verification" className="page-tab-panel">
                  <h3 className="section-subtitle">
                    Verification Before Departure
                  </h3>
                  <p className="section-content">
                    Travelers should verify destination requirements at least 4
                    weeks before departure. We provide immediate digital
                    certificates that can be submitted to embassies and
                    consulates for verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="claims-process-section">
          <div className="claims-container">
            <div className="section-header-centered">
              <h2 className="section-title">Claims &amp; Support Process</h2>
              <p className="section-subtitle">
                A streamlined, four-step guide to getting the help you need.
              </p>
            </div>
            <div className="steps-container">
              <div className="step-item">
                <div className="page-step-number">
                  <span>01</span>
                </div>
                <h4 className="step-title">Initial Contact</h4>
                <p className="section-content">
                  Call our 24/7 emergency hotline immediately when an incident
                  occurs to initiate support.
                </p>
              </div>
              <div className="step-item">
                <div className="page-step-number">
                  <span>02</span>
                </div>
                <h4 className="step-title">Documentation</h4>
                <p className="section-content">
                  Gather all required receipts, medical reports, and police
                  statements relevant to your claim.
                </p>
              </div>
              <div className="step-item">
                <div className="page-step-number">
                  <span>03</span>
                </div>
                <h4 className="step-title">Submission</h4>
                <p className="section-content">
                  Submit your documents via our digital portal or through your
                  dedicated R&amp;B Travels consultant.
                </p>
              </div>
              <div className="step-item">
                <div className="page-step-number">
                  <span>04</span>
                </div>
                <h4 className="step-title">Processing</h4>
                <p className="section-content">
                  Our team coordinates with providers to ensure fast claim
                  evaluation and reimbursement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="why-rb-section">
          <div className="why-container">
            <h2 className="section-title">Why Choose R&amp;B Travels</h2>
            <div className="why-grid">
              <div className="why-card">
                <h4 className="why-card-title">Professional Guidance</h4>
                <p className="section-content">
                  Expert consultants who understand the fine print of
                  international insurance policies.
                </p>
              </div>
              <div className="why-card">
                <h4 className="why-card-title">Reliable Support</h4>
                <p className="section-content">
                  A commitment to standing by our travelers from the moment they
                  plan until they return home.
                </p>
              </div>
              <div className="why-card">
                <h4 className="why-card-title">Travel Expertise</h4>
                <p className="section-content">
                  Years of experience navigating global travel regulations and
                  visa requirements.
                </p>
              </div>
              <div className="why-card">
                <h4 className="why-card-title">Full Assistance</h4>
                <p className="section-content">
                  We don&apos;t just sell policies; we coordinate medical care
                  and emergency logistics.
                </p>
              </div>
              <div className="why-card">
                <h4 className="why-card-title">Trusted Documentation</h4>
                <p className="section-content">
                  Guaranteed acceptance of our insurance certificates by
                  embassies and airlines worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="page-testimonials-container">
            <div className="testimonial-header">
              <h2 className="section-title">Travel With Confidence</h2>
              <p className="section-subtitle">
                Real stories from travelers who trusted Voyanta and R&amp;B
                Travels.
              </p>
            </div>
            <div className="testimonial-grid">
              <div className="page-testimonial-card">
                <p className="page-testimonial-text">
                  &quot;When my flight was cancelled in Frankfurt, R&amp;B
                  Travels handled the insurance claim and rebooked me within
                  hours. Truly effortless.&quot;
                </p>
                <div className="page-testimonial-author">
                  <span>— Sarah J., International Traveler</span>
                </div>
              </div>
              <div className="page-testimonial-card">
                <p className="page-testimonial-text">
                  &quot;The student insurance plan was exactly what I needed for
                  my UK visa. Fast, compliant, and very affordable.&quot;
                </p>
                <div className="page-testimonial-author">
                  <span>— Ahmed K., Student</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="page-faq-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-accordion">
              <details className="page-faq-item faq-item">
                <summary className="page-faq-summary">
                  <span>Is travel insurance mandatory?</span>
                </summary>
                <div className="page-faq-content">
                  <p className="section-content">
                    Yes, for many destinations including the Schengen Area,
                    insurance is a mandatory requirement for visa approval. It
                    is also highly recommended for all international travel to
                    avoid financial risks.
                  </p>
                </div>
              </details>
              <details className="page-faq-item faq-item">
                <summary className="page-faq-summary">
                  <span>What does travel insurance cover?</span>
                </summary>
                <div className="page-faq-content">
                  <p className="section-content">
                    Typically, coverage includes medical emergencies, trip
                    cancellations, baggage loss, emergency evacuations, and
                    personal liability. Specific coverage depends on the
                    selected plan.
                  </p>
                </div>
              </details>
              <details className="page-faq-item faq-item">
                <summary className="page-faq-summary">
                  <span>Can insurance help during medical emergencies?</span>
                </summary>
                <div className="page-faq-content">
                  <p className="section-content">
                    Absolutely. Our plans provide 24/7 access to emergency
                    medical assistance, hospital coordination, and financial
                    coverage for treatment costs abroad.
                  </p>
                </div>
              </details>
              <details className="page-faq-item faq-item">
                <summary className="page-faq-summary">
                  <span>How do I make a claim?</span>
                </summary>
                <div className="page-faq-content">
                  <p className="section-content">
                    Claims can be initiated via our emergency hotline. You will
                    need to provide relevant documentation such as receipts and
                    medical reports for processing.
                  </p>
                </div>
              </details>
              <details className="page-faq-item faq-item">
                <summary className="page-faq-summary">
                  <span>Is insurance required for study visas?</span>
                </summary>
                <div className="page-faq-content">
                  <p className="section-content">
                    Yes, most international study visas require proof of
                    comprehensive health and travel insurance that meets
                    specific host-country standards.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-support-section">
          <div className="page-contact-container">
            <div className="page-contact-grid">
              <div className="contact-info">
                <h2 className="section-title">Contact Insurance Support</h2>
                <p className="section-content">
                  Our specialized insurance desk is ready to help you choose the
                  right plan for your next journey.
                </p>
                <div className="page-contact-details">
                  <div className="detail-item">
                    <strong>Email:</strong>
                    <span>
                      {' '}
                      support@voyanta.travel
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="detail-item">
                    <strong>Phone:</strong>
                    <span>
                      {' '}
                      +1 (800) VOYANTA
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="detail-item">
                    <strong>Office:</strong>
                    <span>
                      {' '}
                      123 Travel Plaza, Global City
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form
                  action="#"
                  method="POST"
                  data-form-id="4a6d46b0-2f37-40eb-9628-d64311abcb47"
                  className="support-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required="true"
                      id="thq_textinput_P2Kj"
                      name="textinput"
                      data-form-field-id="thq_textinput_P2Kj"
                      className="page-form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required="true"
                      id="thq_textinput_B_oW"
                      name="textinput"
                      data-form-field-id="thq_textinput_B_oW"
                      className="page-form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required="true"
                      id="thq_textinput_1u_5"
                      name="textinput"
                      data-form-field-id="thq_textinput_1u_5"
                      className="page-form-input"
                    />
                  </div>
                  <button
                    type="submit"
                    id="thq_button_uBTw"
                    name="button"
                    data-form-field-id="thq_button_uBTw"
                    className="w-full btn-primary btn-lg"
                  >
                    Request Support
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="disclaimer-section">
          <div className="disclaimer-container">
            <div className="disclaimer-content">
              <p className="disclaimer-text section-content">
                <span className="insurance-text59">Important Notice:</span>
                <span>
                  {' '}
                  Insurance terms and conditions depend entirely on the
                  respective insurance providers. Coverage limitations,
                  exclusions, and deductibles may apply. Travelers are strongly
                  advised to review all policy documents carefully before
                  purchase. R&amp;B Travels assists customers with documentation
                  and guidance, but final insurance approvals and claim
                  settlements depend solely on the insurance providers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
          </div>
        </section>
        <div className="insurance-container4">
          <div className="insurance-container5">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="insurance-container6">
          <div className="insurance-container7">
            <Script
              html={`<script defer data-name="travel-insurance-logic">
(function(){
  const tabTriggers = document.querySelectorAll(".visa-tab-trigger")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-target")

      // Update trigger states
      tabTriggers.forEach((t) => t.classList.remove("active"))
      trigger.classList.add("active")

      // Update panel visibility
      tabPanels.forEach((panel) => {
        panel.classList.remove("active")
        if (panel.id === targetId) {
          panel.classList.add("active")
        }
      })
    })
  })

  // Subtle reveal animations for cards on scroll
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".coverage-card, .benefit-card, .why-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
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
          .insurance-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .insurance-container2 {
            display: none;
          }
          .insurance-container3 {
            display: contents;
          }
          .insurance-thq-btn-primary-elm1 {
            text-decoration: none;
          }
          .insurance-thq-btn-outline-elm {
            text-decoration: none;
          }
          .insurance-text59 {
            font-weight: 700;
          }
          .insurance-container4 {
            display: none;
          }
          .insurance-container5 {
            display: contents;
          }
          .insurance-container6 {
            display: none;
          }
          .insurance-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Insurance
