import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>rnvtravels</title>
          <meta property="og:title" content="rnvtravels" />
          <link rel="canonical" href="https://voyanta.teleporthq.site/" />
          <meta property="og:url" content="https://voyanta.teleporthq.site/" />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
  padding: var(--spacing-4xl) 0;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-journey home-thq-hero-journey-elm">
          <div className="hero-video-wrapper">
            <video
              src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/2169880/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="hero-bg-video"
            ></video>
          </div>
          <div className="home-thq-hero-blue-overlay-elm"></div>
          <div className="hero-diagonal-split">
            <div className="hero-content-left">
              <h1 className="hero-title home-hero-title home-thq-hero-title-elm">
                <span>Your Trusted Partner for </span>
                <span>Global Travel, Study &amp; Visa Solutions</span>
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                <span>
                  We simplify international travel with expert visa assistance,
                  study abroad guidance, travel documentation, itinerary
                  planning, airport transfers, and 24/7 support.
                </span>
              </p>
              <div className="hero-cta-group">
                <Link href="/travel-enquiry-form">
                  <a>
                    <div className="home-thq-btn-elm1 btn-lg btn-primary btn">
                      <span>Start Your Journey</span>
                    </div>
                  </a>
                </Link>
                <Link href="/consultation">
                  <a>
                    <div className="home-thq-btn-elm2 btn-lg btn btn-outline">
                      <span className="home-text14">Book Consultation</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="home-thq-hero-trust-bar-elm">
                <div className="trust-item">
                  <div className="trust-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                        <path d="M12 6v6l4 2"></path>
                      </g>
                    </svg>
                  </div>
                  <span>Fast Processing</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <span>Professional Guidance</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
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
                        <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                      </g>
                    </svg>
                  </div>
                  <span>Global Destinations</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path>
                        <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                      </g>
                    </svg>
                  </div>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="hero-visual-right">
              <div className="card-1 hero-floating-card">
                <div className="card-icon">
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
                <span>Custom Itineraries</span>
              </div>
              <div className="card-2 hero-floating-card">
                <div className="card-icon">
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
                </div>
                <span>Vetted Partners</span>
              </div>
            </div>
          </div>
        </section>
        <section className="handle-services">
          <div className="handle-container">
            <div className="handle-header">
              <h2 className="section-title">Our Services</h2>
              <p className="section-content">
                Comprehensive travel solutions designed to make your journey
                effortless.
              </p>
            </div>
            <div className="home-thq-handle-bento-grid-elm">
              <div className="service-card thq-handle-cell-elm1">
                <img
                  alt="Smiling college student holding books in a park with a scenic background"
                  src="https://images.pexels.com/photos/3755759/pexels-photo-3755759.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="home-thq-service-card-image-elm"
                />
                <div className="home-thq-thq-service-card-overlay-elm"></div>
                <div className="home-thq-bento-content-elm service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </g>
                  </svg>
                </div>
                <div className="thq-service-card-text">
                  <h3 className="section-subtitle">Study Abroad</h3>
                  <p className="section-content">
                    Professional guidance for international admissions,
                    applications, and student travel preparation.
                  </p>
                  <span className="service-cta">Start now</span>
                </div>
              </div>
              <div className="service-card thq-handle-cell-elm2">
                <div className="home-thq-bento-icon-elm1 service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Visa Appointment Booking</h3>
                <p className="section-content">
                  Fast and stress-free embassy appointment scheduling
                  assistance.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="service-card thq-handle-cell-elm3">
                <div className="home-thq-bento-icon-elm2 service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Travel Documentation</h3>
                <p className="section-content">
                  Support for passport processing, visa applications, proof of
                  funds, and essential travel documents.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="thq-handle-cell-elm4 service-card">
                <div className="home-thq-bento-icon-elm3 service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
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
                <h3 className="section-subtitle">
                  Comprehensive Itinerary Planning
                </h3>
                <p className="section-content">
                  Personalized travel schedules designed for comfort,
                  efficiency, and memorable experiences.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="service-card thq-handle-cell-elm5">
                <div className="home-thq-bento-icon-elm4 service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
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
                <h3 className="section-subtitle">Travel Insurance</h3>
                <p className="section-content">
                  Reliable insurance options for international trips, studies,
                  tours, and emergencies.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
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
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Tour Packages &amp; Guided Experiences
                </h3>
                <p className="section-content">
                  Curated travel experiences, vacation packages, and guided
                  international tours.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                      <circle r="2" cx="7" cy="17"></circle>
                      <path d="M9 17h6"></path>
                      <circle r="2" cx="17" cy="17"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Airport Transfer Arrangements
                </h3>
                <p className="section-content">
                  Convenient pickup and drop-off arrangements for smooth travel
                  experiences.
                </p>
                <span className="service-cta">Start now</span>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <svg
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path>
                      <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  24/7 Travel Support &amp; Emergency Assistance
                </h3>
                <p className="section-content">
                  Round-the-clock assistance to help travelers anytime,
                  anywhere.
                </p>
                <span className="service-cta">Start now</span>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-itineraries">
          <div className="itineraries-container">
            <div className="itineraries-header">
              <h2 className="section-title">Popular Sample Journeys</h2>
              <p className="section-content">
                Get inspired by our most beloved curated experiences.
              </p>
            </div>
            <div id="itineraryCarousel" className="itineraries-carousel">
              <div className="itinerary-card">
                <div className="itinerary-img-wrapper">
                  <img
                    alt="Bali"
                    src="https://images.pexels.com/photos/775687/pexels-photo-775687.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="itinerary-img"
                  />
                </div>
                <div className="itinerary-info">
                  <h3 className="section-subtitle">Bali Bliss &amp; Culture</h3>
                  <p className="section-content">
                    A deep dive into Ubud&apos;s spiritual heart and
                    Uluwatu&apos;s coastal magic.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Itinerary</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="itinerary-card">
                <div className="itinerary-img-wrapper">
                  <img
                    alt="Maldives"
                    src="https://images.pexels.com/photos/1456297/pexels-photo-1456297.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="itinerary-img"
                  />
                </div>
                <div className="itinerary-info">
                  <h3 className="section-subtitle">Maldives Escape</h3>
                  <p className="section-content">
                    Ultimate luxury in overwater bungalows and crystal clear
                    lagoons.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Itinerary</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="itinerary-card">
                <div className="itinerary-img-wrapper">
                  <img
                    alt="Swiss Alps"
                    src="https://images.pexels.com/photos/8322903/pexels-photo-8322903.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="itinerary-img"
                  />
                </div>
                <div className="itinerary-info">
                  <h3 className="section-subtitle">Alpine Adventure</h3>
                  <p className="section-content">
                    Train journeys through the heart of Switzerland&apos;s
                    majestic peaks.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Itinerary</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="itinerary-card">
                <div className="itinerary-img-wrapper">
                  <img
                    alt="Safari"
                    src="https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="itinerary-img"
                  />
                </div>
                <div className="itinerary-info">
                  <h3 className="section-subtitle">Serengeti Safari</h3>
                  <p className="section-content">
                    Witness the Great Migration and local wildlife in their
                    natural habitat.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Itinerary</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-carousel-controls">
              <button id="prevItinerary" className="carousel-btn prev">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m15 18l-6-6l6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button id="nextItinerary" className="next carousel-btn">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="how-we-work">
          <div className="work-container">
            <div className="work-header">
              <h1 className="home-text25">How It Works</h1>
              <p className="section-content">
                A simple, transparent process from first contact to departure.
              </p>
            </div>
            <div className="work-timeline">
              <div className="timeline-line"></div>
              <div className="home-timeline-item left">
                <div className="home-timeline-dot">
                  <span>1</span>
                </div>
                <div className="home-timeline-content">
                  <h3 className="section-subtitle">Consultation</h3>
                  <p className="section-content">
                    We discuss your travel goals, budget, and preferences to
                    understand exactly what you need.
                  </p>
                </div>
              </div>
              <div className="home-timeline-item right">
                <div className="home-timeline-dot">
                  <span>2</span>
                </div>
                <div className="home-thq-timeline-content-elm2 home-timeline-content">
                  <h3 className="section-subtitle">Document Review</h3>
                  <p className="section-content">
                    Our team reviews your passport, visa requirements, and all
                    necessary paperwork.
                  </p>
                </div>
              </div>
              <div className="home-timeline-item left">
                <div className="home-timeline-dot">
                  <span>3</span>
                </div>
                <div className="home-timeline-content">
                  <h3 className="section-subtitle">
                    Application &amp; Booking
                  </h3>
                  <p className="section-content">
                    We handle embassy appointments, flight reservations,
                    accommodations, and insurance.
                  </p>
                </div>
              </div>
              <div className="home-timeline-item right">
                <div className="home-timeline-dot">
                  <span>4</span>
                </div>
                <div className="home-thq-timeline-content-elm4 home-timeline-content">
                  <h3 className="section-subtitle">
                    Processing &amp; Confirmation
                  </h3>
                  <p className="section-content">
                    Track your application status and receive confirmed bookings
                    with all details.
                  </p>
                </div>
              </div>
              <div className="home-timeline-item right">
                <div className="home-timeline-dot">
                  <span>5</span>
                </div>
                <div className="home-timeline-content">
                  <h3 className="section-subtitle">Travel Support</h3>
                  <p className="section-content">
                    Enjoy 24/7 assistance before, during, and after your trip
                    for complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="traveler-stories">
          <div className="stories-container">
            <div className="stories-header">
              <h2 className="section-title">Traveler Stories</h2>
              <p className="section-content">
                Real experiences from our global community.
              </p>
            </div>
            <div id="storiesCarousel" className="stories-carousel">
              <div className="story-card">
                <div className="story-quote">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12M14.017 21H11.017C9.91243 21 9.017 20.1046 9.017 19V10C9.017 7.23858 11.2556 5 14.017 5V8C13.4647 8 13.017 8.44772 13.017 9V10M14.017 21L14.017 18M10 11L10 14M10 11L7.00001 11C5.89544 11 5.00001 11.8954 5.00001 13V19C5.00001 20.1046 5.89544 21 7.00001 21H10V18M10 11V8C10 5.23858 7.76143 3 5.00001 3V6C5.55229 6 6.00001 6.44772 6.00001 7V8M10 11L10 14"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="section-content">
                  <span>&quot;R</span>
                  <span className="home-text32">&amp;</span>
                  <span>
                    B Travels made our honeymoon in the Maldives completely
                    effortless. The local partner they vetted was incredible,
                    and the visa process was handled before we even asked.&quot;
                  </span>
                </p>
                <div className="story-author">
                  <span className="home-author-name">Sarah &amp; Mark J.</span>
                  <span className="home-author-trip">Maldives Escape</span>
                </div>
              </div>
              <div className="story-card">
                <div className="story-quote">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12M14.017 21H11.017C9.91243 21 9.017 20.1046 9.017 19V10C9.017 7.23858 11.2556 5 14.017 5V8C13.4647 8 13.017 8.44772 13.017 9V10M14.017 21L14.017 18M10 11L10 14M10 11L7.00001 11C5.89544 11 5.00001 11.8954 5.00001 13V19C5.00001 20.1046 5.89544 21 7.00001 21H10V18M10 11V8C10 5.23858 7.76143 3 5.00001 3V6C5.55229 6 6.00001 6.44772 6.00001 7V8M10 11L10 14"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;I&apos;ve never felt so supported during a solo trip.
                  The constant communication and the custom itinerary in Bali
                  were exactly what I needed to feel safe and inspired.&quot;
                </p>
                <div className="story-author">
                  <span className="home-author-name">Elena R.</span>
                  <span className="home-author-trip">Bali Solo Journey</span>
                </div>
              </div>
              <div className="story-card">
                <div className="story-quote">
                  <svg
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewbox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19C19.5523 16 20 15.5523 20 15V9C20 8.44772 19.5523 8 19 8H16.017C14.9124 8 14.017 8.89543 14.017 10V12M14.017 21H11.017C9.91243 21 9.017 20.1046 9.017 19V10C9.017 7.23858 11.2556 5 14.017 5V8C13.4647 8 13.017 8.44772 13.017 9V10M14.017 21L14.017 18M10 11L10 14M10 11L7.00001 11C5.89544 11 5.00001 11.8954 5.00001 13V19C5.00001 20.1046 5.89544 21 7.00001 21H10V18M10 11V8C10 5.23858 7.76143 3 5.00001 3V6C5.55229 6 6.00001 6.44772 6.00001 7V8M10 11L10 14"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;The small-group tour in the Serengeti felt like
                  traveling with friends. Fair pricing and the support from
                  planning through return was top-notch.&quot;
                </p>
                <div className="story-author">
                  <span className="home-author-name">David T.</span>
                  <span className="home-author-trip">Serengeti Group Tour</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="destination-gallery">
          <div className="gallery-container">
            <div className="gallery-header">
              <h2 className="section-title">Inspiring Destinations</h2>
              <p className="section-content">
                A glimpse into the worlds we help you explore.
              </p>
            </div>
            <div className="gallery-masonry">
              <div className="gallery-item">
                <img
                  alt="Lombok Indonesia"
                  src="https://images.pexels.com/photos/3857215/pexels-photo-3857215.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Tropical Beach"
                  src="https://images.pexels.com/photos/3155658/pexels-photo-3155658.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Sri Lanka"
                  src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Vietnam Resort"
                  src="https://images.pexels.com/photos/1488297/pexels-photo-1488297.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Paradise Island"
                  src="https://images.pexels.com/photos/9400832/pexels-photo-9400832.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Maldives Bungalow"
                  src="https://images.pexels.com/photos/4118269/pexels-photo-4118269.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Mountain Resort"
                  src="https://images.pexels.com/photos/12389373/pexels-photo-12389373.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
              <div className="gallery-item">
                <img
                  alt="Kaafu Atoll"
                  src="https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="gallery-img"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="quick-start-cta">
          <div className="cta-inner">
            <div className="cta-content-left">
              <h2 className="section-title">Ready to Start Your Journey?</h2>
              <p className="section-content">
                Choose your preferred entry point and let our consultants handle
                the rest. Effortless travel starts here.
              </p>
              <a href="tel:+2348062163748">
                <div className="home-thq-cta-contact-shortcut-elm cta-contact-shortcut">
                  <div className="shortcut-item">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewbox="0 0 24 24"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Speak with an Expert: +2348062163748</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="cta-feature-right">
              <div className="cta-card-stack">
                <Link href="/plan">
                  <a>
                    <div className="home-thq-cta-action-card-elm1 cta-action-card">
                      <div className="action-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewbox="0 0 24 24"
                        >
                          <path
                            d="M11 19l-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12m-6-6.236V12m3 3v6m3-3h-6M9 3.236v15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="action-text">
                        <span className="action-label">Start Custom Plan</span>
                        <span className="action-desc">
                          Tailor every detail of your next trip.
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
                <a href="#">
                  <div className="cta-action-card">
                    <div className="action-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewbox="0 0 24 24"
                      >
                        <path
                          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </svg>
                    </div>
                    <div className="action-text">
                      <span className="action-label">
                        Join Small-Group Tour
                      </span>
                      <span className="action-desc">
                        Explore with like-minded travelers.
                      </span>
                    </div>
                  </div>
                </a>
                <Link href="/consultation">
                  <a>
                    <div className="home-thq-cta-action-card-elm3 highlight cta-action-card">
                      <div className="action-icon">
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
                            <path d="M8 2v4m8-4v4"></path>
                            <rect
                              x="3"
                              y="4"
                              rx="2"
                              width="18"
                              height="18"
                            ></rect>
                            <path d="M3 10h18"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="action-text">
                        <span className="action-label">
                          Request Consultation
                        </span>
                        <span className="action-desc">
                          Chat with a travel expert today.
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="home-thq-map-elm">
          <iframe
            lat="9.0501347"
            lng="7.4820817"
            src="https://www.google.com/maps?q=Muhammadu Buhari Way, Central Business District, Abuja 900103, Federal Capital Territory, Nigeria.&amp;output=embed"
            address="Muhammadu Buhari Way, Central Business District, Abuja 900103, Federal Capital Territory, Nigeria."
            className="home-google-maps"
          ></iframe>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) translateX(var(--tx, 0));}
50% {transform: translateY(-20px) translateX(var(--tx, 0));}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script>
        ;(function () {
          const initCarousels = () => {
            const setupCarousel = (id, prevId, nextId) => {
              const carousel = document.getElementById(id)
              const prevBtn = document.getElementById(prevId)
              const nextBtn = document.getElementById(nextId)
              if (!carousel || !prevBtn || !nextBtn) return
              nextBtn.addEventListener("click", () => {
                carousel.scrollBy({ left: 340, behavior: "smooth" })
              })
              prevBtn.addEventListener("click", () => {
                carousel.scrollBy({ left: -340, behavior: "smooth" })
              })
            }
            setupCarousel("itineraryCarousel", "prevItinerary", "nextItinerary")
          }
          const initTimelineObserver = () => {
            const items = document.querySelectorAll(".timeline-item")
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.style.opacity = "1"
                    entry.target.style.transform = "translateY(0)"
                  }
                })
              },
              { threshold: 0.2 }
            )
            items.forEach((item) => {
              item.style.opacity = "0"
              item.style.transform = "translateY(30px)"
              item.style.transition = "all 0.6s ease-out"
              observer.observe(item)
            })
          }
          initCarousels()
          initTimelineObserver()
          const initMobileMenu = () => {
            const toggleBtn = document.getElementById("mobileMenuToggle")
            const closeBtn = document.getElementById("mobileMenuClose")
            const overlay = document.getElementById("mobileOverlay")
            if (!toggleBtn || !overlay) return
            const openMenu = () => {
              overlay.style.display = "flex"
              requestAnimationFrame(() => {
                overlay.classList.add("is-active")
              })
              toggleBtn.setAttribute("aria-expanded", "true")
              toggleBtn.setAttribute("aria-label", "Close menu")
              document.body.style.overflow = "hidden"
            }
            const closeMenu = () => {
              overlay.classList.remove("is-active")
              toggleBtn.setAttribute("aria-expanded", "false")
              toggleBtn.setAttribute("aria-label", "Open menu")
              document.body.style.overflow = ""
              setTimeout(() => {
                if (!overlay.classList.contains("is-active")) {
                  overlay.style.display = "none"
                }
              }, 300)
            }
            toggleBtn.addEventListener("click", () => {
              if (overlay.classList.contains("is-active")) {
                closeMenu()
              } else {
                openMenu()
              }
            })
            if (closeBtn) {
              closeBtn.addEventListener("click", closeMenu)
            }
            overlay.addEventListener("click", (e) => {
              if (e.target === overlay) {
                closeMenu()
              }
            })
            document.addEventListener("keydown", (e) => {
              if (e.key === "Escape" && overlay.classList.contains("is-active")) {
                closeMenu()
              }
            })
          }
          initMobileMenu()
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-thq-hero-blue-overlay-elm {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            bottom: 0;
            height: 100%;
            z-index: 1;
            position: absolute;
            background: rgba(11, 61, 145, 0.65);
            pointer-events: none !important;
          }
          .home-thq-btn-elm1 {
            text-decoration: none;
          }
          .home-thq-btn-elm2 {
            text-decoration: none;
          }
          .home-text14 {
            color: var(--color-primary-light);
          }
          .home-thq-hero-trust-bar-elm {
            gap: var(--spacing-lg);
            display: flex;
            padding: var(--spacing-md) var(--spacing-lg);
            z-index: 3;
            position: relative;
            flex-wrap: wrap;
            background: rgba(11, 61, 145, 0.65);
            margin-top: var(--spacing-2xl);
            align-items: center;
            border-radius: var(--border-radius-md);
            pointer-events: auto;
          }
          .home-thq-handle-bento-grid-elm {
            gap: var(--spacing-lg);
            display: grid;
            grid-template-rows: repeat(2, 320px);
            grid-template-columns: repeat(4, 1fr);
          }
          .home-thq-service-card-image-elm {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            object-fit: cover;
          }
          .home-thq-thq-service-card-overlay-elm {
            left: 0;
            width: 100%;
            bottom: 0;
            height: 55%;
            z-index: 1;
            position: absolute;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.85) 0%,
              rgba(0, 0, 0, 0.5) 60%,
              transparent 100%
            );
            pointer-events: none;
          }
          .home-thq-bento-content-elm {
            top: var(--spacing-lg);
            left: var(--spacing-lg);
            color: var(--color-on-primary);
            width: auto;
            padding: var(--spacing-md);
            z-index: 3;
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            border-radius: var(--border-radius-md);
            backdrop-filter: blur(4px);
          }
          .home-thq-bento-icon-elm1 {
            color: var(--color-primary);
            margin-bottom: var(--spacing-md);
          }
          .home-thq-bento-icon-elm2 {
            color: var(--color-primary);
            margin-bottom: var(--spacing-md);
          }
          .home-thq-bento-icon-elm3 {
            color: var(--color-primary);
            margin-bottom: var(--spacing-md);
          }
          .home-thq-bento-icon-elm4 {
            color: var(--color-primary);
            margin-bottom: var(--spacing-md);
          }
          .home-text25 {
            font-size: 40px;
            font-family: '' '' '' '' '' '' '' '' '' 'Inter' '' '' '' '' '' '' ''
              '' '';
            font-weight: 700;
          }
          .home-thq-timeline-content-elm2 {
            padding-top: var(--dl-layout-space-threeunits);
          }
          .home-thq-timeline-content-elm4 {
            padding-top: var(--dl-layout-space-threeunits);
          }
          .home-text32 {
            color: var(--color-accent-dark);
          }
          .home-thq-cta-contact-shortcut-elm {
            text-decoration: none;
          }
          .home-thq-cta-action-card-elm1 {
            text-decoration: none;
          }
          .home-thq-cta-action-card-elm3 {
            text-decoration: none;
          }
          .home-thq-map-elm {
            width: 100%;
            height: 40vh;
          }
          .home-google-maps {
            width: 100%;
            height: 40vh;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-hero-trust-bar-elm {
              justify-content: center;
            }
            .home-thq-handle-bento-grid-elm {
              grid-template-rows: auto;
              grid-template-columns: repeat(2, 1fr);
            }
            .home-thq-map-elm {
              width: 100%;
            }
            .home-google-maps {
              width: 100%;
              height: 40vh;
            }
          }
          @media (max-width: 767px) {
            .home-thq-hero-title-elm {
              font-size: 35px;
            }
            .home-thq-hero-trust-bar-elm {
              gap: var(--spacing-md);
              margin-top: var(--spacing-lg);
            }
            .home-thq-map-elm {
              width: 100%;
            }
            .home-google-maps {
              height: 40vh;
            }
          }
          @media (max-width: 479px) {
            .home-thq-hero-journey-elm {
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-hero-title-elm {
              font-size: 30px;
              margin-top: var(--dl-layout-space-threeunits);
              margin-bottom: var(--dl-layout-space-halfunit);
            }
            .home-thq-hero-trust-bar-elm {
              gap: var(--spacing-sm);
              margin-top: var(--spacing-md);
              margin-bottom: var(--dl-layout-space-threeunits);
            }
            .home-thq-handle-bento-grid-elm {
              grid-template-columns: 1fr;
            }
            .home-text32 {
              color: var(--color-accent-dark);
            }
            .home-thq-map-elm {
              width: 100%;
              height: 40vh;
              background-color: var(--dl-color-theme-secondary2);
            }
            .home-google-maps {
              height: 40vh;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
