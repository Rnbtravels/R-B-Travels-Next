import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Help = (props) => {
  return (
    <>
      <div className="help-container1">
        <Head>
          <title>Help - rnvtravels</title>
          <meta property="og:title" content="Help - rnvtravels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/help" />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/help"
          />
        </Head>
        <Navigation></Navigation>
        <section className="page-hero-section1">
          <div className="hero-bg-wrapper">
            <img
              alt="Premium Travel Lounge"
              src="https://images.pexels.com/photos/2612117/pexels-photo-2612117.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-bg-img"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="page-hero-container1">
            <div className="page-hero-content">
              <h1 className="hero-title page-hero-title2">Help Center</h1>
              <p className="page-hero-subtitle2 hero-subtitle">
                We are here to support your travel journey. Contact our team for
                assistance with visa processing, bookings, travel documentation,
                study abroad support and other travel-related services.
              </p>
              <div className="hero-actions">
                <a href="#contact-form">
                  <div className="btn-lg btn-primary btn">
                    <span>Contact Support</span>
                  </div>
                </a>
              </div>
              <div className="page-hero-features-grid1">
                <div className="page-hero-feature-item1">
                  <div className="hero-feature-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12.077 11.695a3 3 0 1 0-6 0a3 3 0 0 0 6 0M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>Fast Customer Assistance</span>
                </div>
                <div className="page-hero-feature-item1">
                  <div className="hero-feature-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>Professional Travel Support</span>
                </div>
                <div className="page-hero-feature-item1">
                  <div className="hero-feature-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>Visa &amp; Documentation Guidance</span>
                </div>
                <div className="page-hero-feature-item1">
                  <div className="hero-feature-icon-box">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>24/7 Communication Channels</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome-section">
          <div className="welcome-container">
            <aside className="welcome-sidebar">
              <div className="welcome-badge">
                <span>Voyanta Excellence</span>
              </div>
              <img
                alt="Support Specialist"
                src="https://images.pexels.com/photos/5453829/pexels-photo-5453829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="welcome-sidebar-img"
              />
            </aside>
            <div className="welcome-main">
              <h2 className="section-title">Welcome to Our Support Center</h2>
              <div className="section-content">
                <p>
                  R&amp;B Travels provides dedicated customer support tailored
                  to the modern traveler. We understand that every journey is
                  unique, which is why our assistance is available for all
                  travel and visa-related inquiries with a personal touch.
                </p>
                <p>
                  Our team is committed to helping customers throughout their
                  travel process, from the initial spark of inspiration to the
                  final flight home. We handle the complexities so you can focus
                  on the experience.
                </p>
                <ul className="welcome-list">
                  <li>
                    <span>Personalized travel consultation</span>
                  </li>
                  <li>
                    <span>Real-time status updates on applications</span>
                  </li>
                  <li>
                    <span>
                      Proactive problem solving for complex itineraries
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="quick-support-section">
          <div className="quick-support-container">
            <h2 className="section-title text-center">
              Quick Support Channels
            </h2>
            <div className="quick-support-grid">
              <div className="support-card">
                <div className="support-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <h3>WhatsApp Support</h3>
                <p>
                  Instant chat with our travel consultants for quick updates.
                </p>
              </div>
              <div className="support-card">
                <div className="support-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Direct Messaging</h3>
                <p>
                  Send a message directly through our portal for secure
                  assistance.
                </p>
                <button className="btn-primary btn btn-sm">
                  Send a Message
                </button>
              </div>
              <div className="support-card">
                <div className="support-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7.586 4.586A2 2 0 0 0 6.172 4H6a2 2 0 0 0-2 2v.172a2 2 0 0 0 .586 1.414a2 2 0 0 1 0 2.828A2 2 0 0 0 4 11.828v.344a2 2 0 0 0 .586 1.414c.4.4.595.928.585 1.452c-.01.5-.204.995-.585 1.376A2 2 0 0 0 4 17.828V18a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414-.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414.586h.344a2 2 0 0 0 1.414-.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414.586H18a2 2 0 0 0 2-2v-.172a2 2 0 0 0-.586-1.414a1.996 1.996 0 0 1 0-2.828A2 2 0 0 0 20 12.172v-.344a2 2 0 0 0-.586-1.414a2 2 0 0 1 0-2.828A2 2 0 0 0 20 6.172V6a2 2 0 0 0-2-2h-.172a2 2 0 0 0-1.414.586a2 2 0 0 1-2.828 0A2 2 0 0 0 12.172 4h-.344a2 2 0 0 0-1.414.586a2 2 0 0 1-2.828 0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Email Support</h3>
                <p>For detailed inquiries and document submissions.</p>
                <a href="mailto:Info@myRnBTravels.com?subject=">
                  <div className="help-thq-btn-elm3 btn btn-outline btn-sm">
                    <span>Send Email</span>
                  </div>
                </a>
              </div>
              <div className="support-card">
                <div className="support-icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Phone Support</h3>
                <p>Speak directly with a dedicated travel agent.</p>
                <a href="tel:+2348062163748">
                  <div className="btn-secondary btn btn-sm">
                    <span>Call Support</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="help-categories">
          <div className="help-categories-container">
            <h2 className="section-title">Support Categories</h2>
            <div className="help-categories-grid">
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm1 category-card">
                    <div className="category-icon">
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
                    <span>Visa Assistance</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm2 category-card">
                    <div className="category-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                    </div>
                    <span>Study Abroad Support</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm3 category-card">
                    <div className="category-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Flight &amp; Hotel Booking</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm4 category-card">
                    <div className="category-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Travel Documentation</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm5 category-card">
                    <div className="category-icon">
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
                    <span>Travel Insurance</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm6 category-card">
                    <div className="category-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path>
                      </svg>
                    </div>
                    <span>Tour Packages</span>
                  </div>
                </a>
              </Link>
              <Link href="/enquiry-form">
                <a>
                  <div className="help-thq-category-card-elm7 category-card">
                    <div className="category-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M2 22h20M3.77 10.77L2 9l2-4.5l1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6l1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span>Airport Transfer Assistance</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="contact-form" className="page-contact-section">
          <div className="page-contact-container1">
            <aside className="page-contact-sidebar">
              <div className="contact-info-block">
                <h3 className="section-subtitle">Why Contact Us?</h3>
                <p className="section-content">
                  Our consultants provide expert guidance on complex visa
                  requirements and educational placements worldwide.
                </p>
                <div className="contact-badge-list">
                  <div className="badge-item">
                    <span>Vetted Partners</span>
                  </div>
                  <div className="badge-item">
                    <span>Fair Pricing</span>
                  </div>
                  <div className="badge-item">
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </aside>
            <div className="page-contact-main">
              <h2 className="section-title">Send a Direct Inquiry</h2>
              <form
                action="/submit"
                method="POST"
                data-form-id="cfd7b17c-bbc3-4470-ab56-0b287b5a6668"
                className="form-wrapper"
              >
                <div className="page-form-grid">
                  <div className="form-group">
                    <label htmlFor="full-name" className="page-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="full-name"
                      className="page-form-input1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="page-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email"
                      className="page-form-input1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="page-form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required="true"
                      placeholder="+1 234 567 890"
                      data-form-field-id="phone"
                      className="page-form-input1"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="page-form-label">
                      Service Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      required="true"
                      data-form-field-id="service"
                      className="page-form-input1"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select a Service
                      </option>
                      <option value="visa">Visa Processing</option>
                      <option value="study">Study Abroad</option>
                      <option value="insurance">Travel Insurance</option>
                      <option value="flight">Flight Booking</option>
                      <option value="tour">Tour Packages</option>
                      <option value="docs">Documentation Support</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="page-form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required="true"
                    placeholder="How can we help?"
                    data-form-field-id="subject"
                    className="page-form-input1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="page-form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required="true"
                    minlength="10"
                    placeholder="Please provide details about your inquiry..."
                    data-form-field-id="message"
                    className="page-form-input1"
                  ></textarea>
                </div>
                <button
                  id="thq_button_rgTv"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_rgTv"
                  className="page-w-full btn-lg btn-primary btn"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="faq-section page-faq-section1">
          <div className="page-faq-container1">
            <h2 className="section-title text-center">
              Frequently Asked Questions
            </h2>
            <div className="faq-accordion-list">
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>How long does visa processing take?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    Visa processing times vary by country and visa type.
                    Generally, it can take anywhere from 5 working days to 8
                    weeks. We recommend starting your application at least 3
                    months before your intended travel date.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>
                    Can I book a visa appointment through R&amp;B Travels?
                  </span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    Yes, we facilitate appointment bookings as part of our
                    comprehensive visa assistance package. We ensure you have
                    all the necessary documentation ready for your interview.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>Do you provide study abroad assistance?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    Absolutely. We partner with vetted educational institutions
                    globally to help students with admissions, visa processing,
                    and pre-departure briefings.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>Is travel insurance available?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    Yes, we offer comprehensive travel insurance plans that
                    cover medical emergencies, trip cancellations, and lost
                    luggage to ensure you travel with peace of mind.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>How can I contact customer support?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    You can reach us via WhatsApp, phone, email, or by filling
                    out the contact form on this page. Our team is available
                    24/7 for urgent travel disruptions.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>Do you assist with passport processing?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    We provide guidance on the documents required for passport
                    applications and renewals, helping you navigate the process
                    efficiently.
                  </p>
                </div>
              </details>
              <details className="page-faq-item1 faq-item">
                <summary className="page-faq-summary1">
                  <span>Can I get help with travel documentation?</span>
                </summary>
                <div className="page-faq-content1">
                  <p>
                    Yes, our documentation support includes assistance with
                    invitations, hotel vouchers, flight itineraries, and
                    translation services when required.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="availability-section">
          <div className="availability-container">
            <div className="availability-bento">
              <div className="availability-main-card">
                <h2 className="section-title">Support Availability</h2>
                <p className="section-content">
                  We operate across multiple time zones to ensure our
                  international travelers always have someone to talk to. Our
                  response time expectations are set to maintain high service
                  standards.
                </p>
                <div className="working-hours-grid">
                  <div className="hour-item">
                    <span className="day">Mon - Fri</span>
                    <span className="time">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Sunday</span>
                    <span className="time">Emergency Support Only</span>
                  </div>
                </div>
              </div>
              <div className="availability-side-card">
                <h3 className="section-subtitle">Global Coverage</h3>
                <p className="section-content">
                  <span>
                    {' '}
                    Current Time Zone:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="help-text56">GMT +1</span>
                </p>
                <div className="emergency-notice">
                  <div className="emergency-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p>
                    Emergency support is available 24/7 for travelers currently
                    on a trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-section">
          <div className="page-trust-container1">
            <h2 className="section-title text-center">
              Why Customers Trust Us
            </h2>
            <div className="page-trust-grid">
              <div className="trust-card">
                <div className="page-trust-icon">
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
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                </div>
                <h3>Professional Travel Guidance</h3>
                <p>
                  Expert advice from seasoned consultants with deep industry
                  knowledge.
                </p>
              </div>
              <div className="trust-card">
                <div className="page-trust-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Reliable Communication</h3>
                <p>
                  Transparent and consistent updates throughout your entire
                  journey.
                </p>
              </div>
              <div className="trust-card">
                <div className="page-trust-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>International Expertise</h3>
                <p>
                  A global network of vetted partners ensuring quality and
                  safety.
                </p>
              </div>
              <div className="trust-card">
                <div className="page-trust-icon">
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
                <h3>Secure Documentation</h3>
                <p>
                  Your sensitive travel documents are handled with the utmost
                  security.
                </p>
              </div>
              <div className="trust-card">
                <div className="page-trust-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6V2H8m7 9v2M2 12h2m16 0h2m-2 4a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 11v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3>Responsive Support</h3>
                <p>
                  A team that cares and acts quickly to resolve any travel
                  issues.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="emergency-assistance">
          <div className="emergency-bento-grid">
            <div className="emergency-hero-cell">
              <h2 className="section-title">Emergency Assistance</h2>
              <p className="section-content">
                Immediate support during travel disruptions. We prioritize your
                safety and seamless journey above all else.
              </p>
              <a href="tel:+1234567890">
                <div className="btn-lg btn btn-accent">
                  <span>Call Emergency Line</span>
                </div>
              </a>
            </div>
            <div className="emergency-support-cell">
              <h3>Flight Disruptions</h3>
              <p>Guidance for cancellations and missed connections.</p>
            </div>
            <div className="emergency-support-cell">
              <h3>Urgent Concerns</h3>
              <p>Assistance for medical or safety emergencies abroad.</p>
            </div>
            <div className="emergency-support-cell">
              <h3>Document Issues</h3>
              <p>Support for lost passports or critical travel papers.</p>
            </div>
          </div>
        </section>
        <section className="contact-info-section">
          <div className="contact-info-container">
            <div className="info-card-wrapper">
              <div className="info-card-content">
                <h2 className="section-title">
                  <span>R</span>
                  <span className="help-text76">&amp;</span>
                  <span>B Travels</span>
                </h2>
                <div className="info-details">
                  <div className="info-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>+2348062163748</span>
                  </div>
                  <div className="info-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>+2348062163748</span>
                  </div>
                  <div className="info-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7.586 4.586A2 2 0 0 0 6.172 4H6a2 2 0 0 0-2 2v.172a2 2 0 0 0 .586 1.414a2 2 0 0 1 0 2.828A2 2 0 0 0 4 11.828v.344a2 2 0 0 0 .586 1.414c.4.4.595.928.585 1.452c-.01.5-.204.995-.585 1.376A2 2 0 0 0 4 17.828V18a2 2 0 0 0 2 2h.172a2 2 0 0 0 1.414-.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414.586h.344a2 2 0 0 0 1.414-.586a2 2 0 0 1 2.828 0a2 2 0 0 0 1.414.586H18a2 2 0 0 0 2-2v-.172a2 2 0 0 0-.586-1.414a1.996 1.996 0 0 1 0-2.828A2 2 0 0 0 20 12.172v-.344a2 2 0 0 0-.586-1.414a2 2 0 0 1 0-2.828A2 2 0 0 0 20 6.172V6a2 2 0 0 0-2-2h-.172a2 2 0 0 0-1.414.586a2 2 0 0 1-2.828 0A2 2 0 0 0 12.172 4h-.344a2 2 0 0 0-1.414.586a2 2 0 0 1-2.828 0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Info@myRnBTravels.com</span>
                  </div>
                  <div className="info-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                    <span>
                      Nicon Plaza, Plot 242, Muhammadu Buhari Way, Central Area,
                      Federal Capital Territory.
                    </span>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#">
                    <div className="social-icon">
                      <span>FB</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-icon">
                      <span>IG</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-icon">
                      <span>LN</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="social-icon">
                      <span>TW</span>
                    </div>
                  </a>
                </div>
                <a href="#contact-form">
                  <div className="btn-lg btn-primary btn">
                    <span>Contact Us Now</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="sticky-support-bar">
          <a href="tel:+2348062163748">
            <div className="sticky-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Call
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </a>
          <a href="#contact-form">
            <div className="help-thq-sticky-item-elm2 sticky-item">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>
                {' '}
                Inquiry
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </a>
        </div>
        <div className="help-container2">
          <div className="help-container3">
            <Script
              html={`<style>
textarea.form-input {
  min-height: 120px;
  resize: vertical;
}
details[open] .faq-summary::after {
  transform: rotate(45deg);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="help-container4">
          <div className="help-container5">
            <Script
              html={`<script defer data-name="help-center-interactions">
(function(){
  // FAQ Accordion Interaction Enhancement (Optional visual polish)
  const faqDetails = document.querySelectorAll(".faq-item")

  faqDetails.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Optional: Close other details when one is opened
      faqDetails.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open")
        }
      })
    })
  })

  // Form Submission Visual Feedback
  const contactForm = document.querySelector(".form-wrapper")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Native validation will run first
      if (!contactForm.checkValidity()) return

      // Visual success state (mock)
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.disabled = true
      submitBtn.textContent = "Sending..."

      // In a real app, the form would submit to the action URL
      // We simulate a small delay before the native submission or success UI
      setTimeout(() => {
        submitBtn.style.backgroundColor = "#2ecc71"
        submitBtn.textContent = "Message Sent Successfully!"

        // Optional: Reset form after delay
        setTimeout(() => {
          contactForm.reset()
          submitBtn.disabled = false
          submitBtn.textContent = originalText
          submitBtn.style.backgroundColor = ""
        }, 3000)
      }, 1000)
    })
  }

  // Sticky Bar Scroll Visibility
  const stickyBar = document.querySelector(".sticky-support-bar")
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      stickyBar.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll) {
      // Scrolling down
      stickyBar.style.transform = "translateY(100%)"
    } else {
      // Scrolling up
      stickyBar.style.transform = "translateY(0)"
    }
    lastScroll = currentScroll
  })

  // Category Card Hover Animation
  const categoryCards = document.querySelectorAll(".category-card")
  categoryCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)"
    })
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)"
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
          .help-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .help-thq-btn-elm3 {
            background-color: var(--color-primary-light);
          }
          .help-thq-category-card-elm1 {
            text-decoration: none;
          }
          .help-thq-category-card-elm2 {
            text-decoration: none;
          }
          .help-thq-category-card-elm3 {
            text-decoration: none;
          }
          .help-thq-category-card-elm4 {
            text-decoration: none;
          }
          .help-thq-category-card-elm5 {
            text-decoration: none;
          }
          .help-thq-category-card-elm6 {
            text-decoration: none;
          }
          .help-thq-category-card-elm7 {
            text-decoration: none;
          }
          .help-text56 {
            font-weight: 700;
          }
          .help-thq-sticky-item-elm2 {
            text-decoration: none;
          }
          .help-container2 {
            display: none;
          }
          .help-container3 {
            display: contents;
          }
          .help-container4 {
            display: none;
          }
          .help-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .help-thq-btn-elm3 {
              background-color: var(--color-primary-light);
            }
            .help-text76 {
              color: var(--color-accent-light);
            }
          }
          @media (max-width: 479px) {
            .help-thq-btn-elm3 {
              background-color: var(--color-primary-light);
            }
          }
        `}
      </style>
    </>
  )
}

export default Help
