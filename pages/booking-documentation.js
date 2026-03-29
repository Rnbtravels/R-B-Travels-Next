import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const BookingDocumentation = (props) => {
  return (
    <>
      <div className="booking-documentation-container10">
        <Head>
          <title>Booking-Documentation - rnvtravels</title>
          <meta
            property="og:title"
            content="Booking-Documentation - rnvtravels"
          />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/booking-documentation"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/booking-documentation"
          />
        </Head>
        <Navigation></Navigation>
        <div className="booking-documentation-container11">
          <div className="booking-documentation-container12">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
  background-color: var(--color-surface);
  color: var(--color-on-surface);
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="booking-hero">
          <div className="booking-hero-container">
            <div className="booking-hero-content">
              <span className="section-subtitle">Effortless Planning</span>
              <h1 className="hero-title">
                Your Complete Journey, Managed in One Plan
              </h1>
              <p className="section-content">
                Voyanta provides a seamless all-in-one experience. From visa
                support and flight arrangements to premium accommodation and
                curated experiences, we handle every detail. Enjoy the peace of
                mind that comes with a single point of contact for your entire
                itinerary, including comprehensive travel insurance.
              </p>
              <div className="booking-hero-actions">
                <a href="#booking-form">
                  <div className="btn-lg btn-primary btn">
                    <span>Start Planning</span>
                  </div>
                </a>
                <a href="#packages">
                  <div className="btn-lg btn btn-outline">
                    <span>View Sample Packages</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="booking-hero-feature">
              <div className="feature-card-wrapper">
                <img
                  alt="Travel documents and passport on airplane"
                  src="https://images.pexels.com/photos/32227477/pexels-photo-32227477.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="booking---documentation-feature-image"
                />
                <div className="feature-overlay">
                  <div className="overlay-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Document Accuracy</span>
                  </div>
                  <div className="overlay-stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Expert Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="logistics-services">
          <div className="logistics-container">
            <h2 className="section-title">Visa, Flights &amp; Logistics</h2>
            <div className="logistics-bento">
              <div className="booking---documentation-bento-cell cell-wide">
                <div className="cell-content">
                  <div className="booking---documentation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></path>
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m0 0H2m13 0h7"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Comprehensive Visa Assistance
                  </h3>
                  <p className="section-content">
                    We manage the entire visa application process on your
                    behalf. Our experts handle document verification,
                    appointment scheduling, and submission tracking to ensure a
                    smooth entry to your destination without the typical
                    administrative hurdles.
                  </p>
                </div>
                <img
                  alt="Passport and boarding pass"
                  src="https://images.pexels.com/photos/8061952/pexels-photo-8061952.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="cell-bg"
                />
              </div>
              <div className="cell-narrow booking---documentation-bento-cell">
                <div className="cell-content">
                  <div className="booking---documentation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                  <h3 className="section-subtitle">Multi-Airline Routing</h3>
                  <p className="section-content">
                    Optimized flight paths across multiple carriers to find the
                    best balance of travel time and comfort.
                  </p>
                </div>
              </div>
              <div className="cell-narrow booking---documentation-bento-cell">
                <div className="cell-content">
                  <div className="booking---documentation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                  <h3 className="section-subtitle">Arrival Logistics</h3>
                  <p className="section-content">
                    Seamless ground transfers and entry support waiting for you
                    at every touchpoint of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="options-features">
          <div className="options-container">
            <div className="options-header">
              <h2 className="section-title">Accommodation &amp; Experiences</h2>
              <p className="section-content">
                Choose your level of comfort with our vetted lodging tiers and
                hand-picked local activities.
              </p>
            </div>
            <div className="options-bento">
              <div className="options-main">
                <div className="lodging-tier">
                  <div className="tier-image">
                    <img
                      alt="Luxury accommodation detail"
                      src="https://images.pexels.com/photos/33497885/pexels-photo-33497885.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    />
                  </div>
                  <div className="tier-info">
                    <h3 className="section-subtitle">Vetted Lodging Tiers</h3>
                    <div className="tier-grid">
                      <div className="tier-item">
                        <span className="tier-label">Luxury Collection</span>
                        <p className="section-content">
                          5-star boutique hotels and private villas with full
                          amenities.
                        </p>
                      </div>
                      <div className="tier-item">
                        <span className="tier-label">Signature Stays</span>
                        <p className="section-content">
                          Authentic, high-comfort properties vetted for
                          character and service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="options-sidebar">
                <div className="experience-card">
                  <div className="booking---documentation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Curated Experiences</h3>
                  <ul className="experience-list">
                    <li className="section-content">
                      <span>Private Local Guides</span>
                    </li>
                    <li className="section-content">
                      <span>Exclusive Access Tours</span>
                    </li>
                    <li className="section-content">
                      <span>Custom Daily Itineraries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="included-pricing">
          <div className="included-container">
            <div className="included-header">
              <h2 className="section-title">What’s Included</h2>
              <p className="section-content">
                Transparent planning with zero hidden fees. Everything you need
                for a secure journey.
              </p>
            </div>
            <div className="included-bento">
              <div className="included-primary">
                <div className="inclusion-grid">
                  <div className="inclusion-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1-1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h4 className="section-subtitle">Insurance Coverage</h4>
                      <p className="section-content">
                        Comprehensive travel and medical protection tailored to
                        your destination.
                      </p>
                    </div>
                  </div>
                  <div className="inclusion-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M16 5H3m13 7H3m8 7H3m12-1l2 2l4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div>
                      <h4 className="section-subtitle">Document Handling</h4>
                      <p className="section-content">
                        Digital and physical organization of all permits, visas,
                        and vouchers.
                      </p>
                    </div>
                  </div>
                  <div className="inclusion-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <circle r="4" cx="9" cy="7"></circle>
                    </svg>
                    <div>
                      <h4 className="section-subtitle">Guide Support</h4>
                      <p className="section-content">
                        Direct access to local partners and 24/7 emergency
                        coordination.
                      </p>
                    </div>
                  </div>
                  <div className="inclusion-item">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12m-6 1.5l3.794.506M3.173 8.18l11-5a2 2 0 0 1 2.647.993L18.56 8M6 10V8m0 6v1m0 4v2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <rect x="2" y="8" rx="2" width="20" height="13"></rect>
                    </svg>
                    <div>
                      <h4 className="section-subtitle">Arrival Transfers</h4>
                      <p className="section-content">
                        Private chauffeur service from airport to your first
                        accommodation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="included-secondary">
                <div className="addon-box">
                  <h4 className="section-subtitle">Optional Add-ons</h4>
                  <ul className="addon-list">
                    <li className="section-content">
                      <span>VIP Lounge Access</span>
                    </li>
                    <li className="section-content">
                      <span>Extra Luggage Handling</span>
                    </li>
                    <li className="section-content">
                      <span>Special Event Booking</span>
                    </li>
                    <li className="section-content">
                      <span>Extended Insurance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="packages" className="packages-showcase">
          <div className="packages-container">
            <div className="packages-intro">
              <h2 className="section-title">Sample Booking Packages</h2>
              <p className="section-content">
                Explore how we bundle visas, flights, and stays into a single,
                cohesive timeline.
              </p>
            </div>
            <div className="packages-bento-freeform">
              <div className="package-item item-large">
                <img
                  alt="European Getaway"
                  src="https://images.pexels.com/photos/32642491/pexels-photo-32642491.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="package-img"
                />
                <div className="package-overlay">
                  <h3 className="section-subtitle">The European Grand Tour</h3>
                  <p className="section-content">
                    14 Days | 3 Countries | Full Visa Support
                  </p>
                  <span className="package-badge">Most Popular</span>
                </div>
              </div>
              <div className="package-item item-square">
                <img
                  alt="Asian Adventure"
                  src="https://images.pexels.com/photos/7010140/pexels-photo-7010140.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="package-img"
                />
                <div className="package-overlay">
                  <h3 className="section-subtitle">Southeast Asia Explorer</h3>
                  <p className="section-content">
                    Complex Multi-City Logistics
                  </p>
                </div>
              </div>
              <div className="package-item item-tall">
                <img
                  alt="Safari Experience"
                  src="https://images.pexels.com/photos/12484358/pexels-photo-12484358.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="package-img"
                />
                <div className="package-overlay">
                  <h3 className="section-subtitle">African Safari Luxury</h3>
                  <p className="section-content">
                    Private Charters &amp; Permits
                  </p>
                </div>
              </div>
              <div className="package-item item-wide">
                <img
                  alt="Global Nomad"
                  src="https://images.pexels.com/photos/7009465/pexels-photo-7009465.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="package-img"
                />
                <div className="package-overlay">
                  <h3 className="section-subtitle">The Remote Work Retreat</h3>
                  <p className="section-content">
                    Long-term Stays &amp; Insurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-masonry">
          <div className="testimonials-container">
            <h2 className="section-title">Traveler Stories</h2>
            <div className="booking---documentation-masonry-grid">
              <div className="booking---documentation-testimonial-card">
                <p className="section-content">
                  &quot;The visa process for my Brazil trip was daunting, but
                  Voyanta handled every document. I just showed up for my
                  flight. Incredible support!&quot;
                </p>
                <div className="booking---documentation-testimonial-author">
                  <span className="booking---documentation-author-name">
                    Sarah Jenkins
                  </span>
                  <span className="booking---documentation-author-trip">
                    Rio de Janeiro Getaway
                  </span>
                </div>
              </div>
              <div className="card-elevated booking---documentation-testimonial-card">
                <p className="section-content">
                  &quot;Our multi-airline routing was complex, involving three
                  different carriers. Voyanta coordinated everything, including
                  the transfers. Not a single delay or lost bag.&quot;
                </p>
                <div className="booking---documentation-testimonial-author">
                  <span className="booking---documentation-author-name">
                    Michael Chen
                  </span>
                  <span className="booking---documentation-author-trip">
                    Asia-Pacific Tour
                  </span>
                </div>
              </div>
              <div className="booking---documentation-testimonial-card">
                <p className="section-content">
                  &quot;Having a single point of contact for my flights, hotel,
                  and insurance saved me hours of stress. The documentation was
                  perfectly organized.&quot;
                </p>
                <div className="booking---documentation-testimonial-author">
                  <span className="booking---documentation-author-name">
                    Elena Rodriguez
                  </span>
                  <span className="booking---documentation-author-trip">
                    European Business &amp; Leisure
                  </span>
                </div>
              </div>
              <div className="card-elevated booking---documentation-testimonial-card">
                <p className="section-content">
                  &quot;When my flight was cancelled, Voyanta&apos;s team
                  rebooked me before I even reached the service desk.
                  That&apos;s real travel support.&quot;
                </p>
                <div className="booking---documentation-testimonial-author">
                  <span className="booking---documentation-author-name">
                    David Thompson
                  </span>
                  <span className="booking---documentation-author-trip">
                    Safari Expedition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="booking-form" className="booking-contact">
          <div className="contact-container">
            <div className="contact-main">
              <h2 className="section-title">Start Your Booking</h2>
              <p className="section-content">
                Tell us about your dream journey. We&apos;ll provide a
                personalized document checklist and check your visa eligibility
                immediately.
              </p>
              <form
                action="/submit-booking"
                method="POST"
                data-form-id="9e7b411f-9f90-4f24-8510-6f9248729f8e"
                className="booking-form"
              >
                <div className="form-grid">
                  <div className="booking---documentation-form-group">
                    <label htmlFor="full-name" className="section-subtitle">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="full-name"
                      className="booking---documentation-form-input"
                    />
                  </div>
                  <div className="booking---documentation-form-group">
                    <label htmlFor="email" className="section-subtitle">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email"
                      className="booking---documentation-form-input"
                    />
                  </div>
                  <div className="booking---documentation-form-group">
                    <label htmlFor="destination" className="section-subtitle">
                      Primary Destination
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      required="true"
                      placeholder="e.g. Japan, Italy"
                      data-form-field-id="destination"
                      className="booking---documentation-form-input"
                    />
                  </div>
                  <div className="booking---documentation-form-group">
                    <label htmlFor="travel-dates" className="section-subtitle">
                      Estimated Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travel-dates"
                      name="dates"
                      placeholder="Spring 2025"
                      data-form-field-id="travel-dates"
                      className="booking---documentation-form-input"
                    />
                  </div>
                </div>
                <div className="booking---documentation-form-group">
                  <label htmlFor="details" className="section-subtitle">
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows="4"
                    placeholder="Tell us about your preferences, number of travelers, or specific visa concerns..."
                    data-form-field-id="details"
                    className="booking---documentation-form-input"
                  ></textarea>
                </div>
                <button
                  id="thq_button_Z_Kv"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_Z_Kv"
                  className="btn-lg btn-primary btn"
                >
                  Request Personalized Plan
                </button>
              </form>
            </div>
            <aside className="contact-sidebar">
              <div className="sidebar-box">
                <h3 className="section-subtitle">What Happens Next?</h3>
                <ol className="next-steps">
                  <li>
                    <span className="step-num">01</span>
                    <p className="section-content">
                      <span className="booking-documentation-text19">
                        Eligibility Check:
                      </span>
                      <span>
                        {' '}
                        We verify your visa requirements based on your passport.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </li>
                  <li>
                    <span className="step-num">02</span>
                    <p className="section-content">
                      <span className="booking-documentation-text21">
                        Draft Itinerary:
                      </span>
                      <span>
                        {' '}
                        Receive a flight and accommodation proposal within 24
                        hours.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </li>
                  <li>
                    <span className="step-num">03</span>
                    <p className="section-content">
                      <span className="booking-documentation-text23">
                        Secure Booking:
                      </span>
                      <span>
                        {' '}
                        Finalize your documentation and activate travel
                        insurance.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </p>
                  </li>
                </ol>
              </div>
              <div className="sidebar-box box-accent">
                <h3 className="section-subtitle">Expert Consultation</h3>
                <p className="section-content">
                  Prefer a call? Speak with a travel consultant today.
                </p>
                <a href="tel:+1234567890">
                  <div className="btn btn-outline btn-sm">
                    <span>Schedule a Call</span>
                  </div>
                </a>
              </div>
            </aside>
          </div>
        </section>
        <section className="confirm-cta">
          <div className="confirm-container">
            <div className="confirm-content">
              <h2 className="section-title">
                Confirm &amp; Protect Your Journey
              </h2>
              <p className="section-content">
                Finalize your documentation with secure payment and instant
                travel insurance activation. Your effortless journey starts
                here.
              </p>
              <div className="confirm-features">
                <div className="confirm-feat-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span>Secure Payment</span>
                </div>
                <div className="confirm-feat-item">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewbox="0 0 24 24"
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
                  <span>Instant Protection</span>
                </div>
              </div>
              <a href="#booking-form">
                <div className="btn btn-accent btn-xl">
                  <span>Activate Plan Now</span>
                </div>
              </a>
            </div>
            <div className="confirm-visual">
              <div className="visual-stack">
                <img
                  alt="Travel protection documents"
                  src="https://images.pexels.com/photos/32060712/pexels-photo-32060712.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="stack-img-1"
                />
                <div className="visual-card">
                  <div className="booking---documentation-icon-wrapper">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewbox="0 0 24 24"
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
                  <span className="section-subtitle">Insurance Activated</span>
                  <p className="section-content">Your policy is live.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="booking-documentation-container17">
          <div className="booking-documentation-container18">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="booking-documentation-container19">
          <div className="booking-documentation-container20">
            <Script
              html={`<script defer data-name="voyanta-booking-logic">
(function(){
  // Simple form feedback enhancement
  const bookingForm = document.querySelector(".booking-form")
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      // Native submission proceeds, but we provide instant visual feedback
      const submitBtn = bookingForm.querySelector('button[type="submit"]')
      submitBtn.textContent = "Processing..."
      submitBtn.disabled = true
    })
  }

  // Parallax effect for hero feature
  window.addEventListener("scroll", () => {
    const heroFeature = document.querySelector(".feature-card-wrapper")
    if (heroFeature) {
      const scrollValue = window.scrollY
      heroFeature.style.transform = \`perspective(1000px) rotateY(\${-5 + scrollValue * 0.01}deg) translateY(\${scrollValue * 0.05}px)\`
    }
  })

  // Masonry layout adjustment for window resizing (optional enhancement)
  const adjustMasonry = () => {
    if (window.innerWidth > 767) {
      const cards = document.querySelectorAll(".testimonial-card")
      cards.forEach((card, index) => {
        if (index % 2 !== 0) {
          card.classList.add("card-elevated")
        }
      })
    } else {
      const cards = document.querySelectorAll(".testimonial-card")
      cards.forEach((card) => card.classList.remove("card-elevated"))
    }
  }

  window.addEventListener("resize", adjustMasonry)
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .booking-documentation-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .booking-documentation-container11 {
            display: none;
          }
          .booking-documentation-container12 {
            display: contents;
          }
          .booking-documentation-text19 {
            font-weight: 700;
          }
          .booking-documentation-text21 {
            font-weight: 700;
          }
          .booking-documentation-text23 {
            font-weight: 700;
          }
          .booking-documentation-container17 {
            display: none;
          }
          .booking-documentation-container18 {
            display: contents;
          }
          .booking-documentation-container19 {
            display: none;
          }
          .booking-documentation-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default BookingDocumentation
