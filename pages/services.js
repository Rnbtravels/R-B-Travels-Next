import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container1">
        <Head>
          <title>Services - R & B Travels</title>
          <meta property="og:title" content="Services - R &amp;  B Travels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/services"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/services"
          />
        </Head>
        <Navigation></Navigation>
        <div className="services-container2">
          <div className="services-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="services-overview">
          <div className="services-overview-background">
            <video
              src="https://videos.pexels.com/video-files/853879/853879-hd_1280_720_24fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="services-overview-video"
            ></video>
            <div className="services-overview-overlay"></div>
          </div>
          <div className="services-overview-container">
            <div className="services-overview-content">
              <div className="services-overview-text">
                <h1 className="hero-title">
                  <span>
                    {' '}
                    Your Journey,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    Expertly Crafted.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
                <p className="hero-subtitle">
                  Concise summary of consultancy offerings, custom trip
                  planning, small-group tours, and end-to-end support to orient
                  visitors immediately.
                </p>
                <div className="services-overview-actions">
                  <a href="#contact">
                    <div className="btn-lg btn-primary btn">
                      <span>Start Planning</span>
                    </div>
                  </a>
                  <a href="#offerings">
                    <div className="btn-lg btn btn-outline">
                      <span>Explore Services</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="services-overview-feature">
                <div className="feature-card">
                  <img
                    alt="Travel Planning Essentials"
                    src="https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="feature-image"
                  />
                  <div className="feature-badge">
                    <div className="icon-wrapper">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span>Global Expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="offerings" className="core-offerings">
          <div className="core-offerings-header">
            <h2 className="section-title">Our Core Offerings</h2>
            <p className="section-content">
              Comprehensive solutions for the modern traveler, from first spark
              to final return.
            </p>
          </div>
          <div className="core-offerings-bento">
            <div className="bento-cell wide">
              <div className="bento-content">
                <div className="icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4zM14 7l3 3m-7.6.6l-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Travel Consultancy &amp; Logistics
                </h3>
                <p className="section-content">
                  We handle visa application, flights, stays, experiences, and
                  insurance so the journey is effortless. Our end-to-end
                  management ensures no detail is overlooked.
                </p>
                <ul className="offering-list">
                  <li>
                    <div className="dot"></div>
                    <span>
                      {' '}
                      Visa Assistance
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <div className="dot"></div>
                    <span>
                      {' '}
                      Flight Coordination
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <div className="dot"></div>
                    <span>
                      {' '}
                      Insurance Coverage
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <img
                alt="Logistics Support"
                src="https://images.pexels.com/photos/7235811/pexels-photo-7235811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="bento-img"
              />
            </div>
            <div className="tall bento-cell">
              <div className="bento-content">
                <div className="icon-box">
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
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Custom Trip Design</h3>
                <p className="section-content">
                  Bespoke itineraries crafted around your interests, pace, and
                  preferences with vetted local partners.
                </p>
              </div>
            </div>
            <div className="tall bento-cell">
              <div className="bento-content">
                <div className="icon-box">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1M15 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2 5h2a2 2 0 0 1 2 2v1M5 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-2 8v-1a2 2 0 0 1 2-2h2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Small-Group Tours</h3>
                <p className="section-content">
                  Curated experiences for like-minded travelers focusing on
                  cultural immersion and fair pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="how-it-works">
          <div className="how-it-works-container">
            <div className="how-it-works-header">
              <h2 className="section-title">The Voyanta Process</h2>
              <p className="section-content">
                From initial consultation through your safe return, we are with
                you every step of the way.
              </p>
            </div>
            <div className="timeline">
              <div className="timeline-line"></div>
              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="step-number">01</span>
                  <h3 className="section-subtitle">
                    Consultation &amp; Planning
                  </h3>
                  <p className="section-content">
                    We begin with a deep dive into your travel goals to
                    establish a clear itinerary framework and budget.
                  </p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="step-number">02</span>
                  <h3 className="section-subtitle">Partner Vetting</h3>
                  <p className="section-content">
                    We match your requirements with our network of vetted local
                    partners to ensure authentic and safe experiences.
                  </p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="step-number">03</span>
                  <h3 className="section-subtitle">
                    Booking &amp; Documentation
                  </h3>
                  <p className="section-content">
                    Full support for flights, stays, and visa applications. All
                    your documentation is organized and ready.
                  </p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="step-number">04</span>
                  <h3 className="section-subtitle">On-Trip Assistance</h3>
                  <p className="section-content">
                    Real-time support while you travel. We handle any hiccups so
                    you can focus on the journey.
                  </p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="step-number">05</span>
                  <h3 className="section-subtitle">Post-Trip Follow-up</h3>
                  <p className="section-content">
                    We check in after your return to ensure everything met our
                    standards and your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="group-tour-details">
          <div className="group-tour-header">
            <h2 className="section-title">Small-Group Tours</h2>
            <p className="section-content">
              Intimate journeys designed for connection, safety, and cultural
              depth.
            </p>
          </div>
          <div className="group-tour-bento">
            <div className="featured bento-cell wide">
              <img
                alt="Small Group Experience"
                src="https://images.pexels.com/photos/2108832/pexels-photo-2108832.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="bento-bg"
              />
              <div className="bento-overlay">
                <h3 className="section-subtitle">Intimate Group Sizes</h3>
                <p className="section-content">
                  We limit our groups to 8-12 travelers, ensuring personalized
                  attention and the ability to visit off-the-beaten-path
                  locations that larger groups simply can&apos;t reach.
                </p>
              </div>
            </div>
            <div className="info bento-cell">
              <div className="icon-wrapper">
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
              <h3 className="section-subtitle">Safety First</h3>
              <p className="section-content">
                Every itinerary includes robust safety measures and 24/7 local
                support from our vetted partners.
              </p>
            </div>
            <div className="info bento-cell">
              <div className="icon-wrapper">
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
                    <path d="M8 2v4m8-4v4"></path>
                    <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                    <path d="M3 10h18M9 16l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">Booking Timelines</h3>
              <p className="section-content">
                Recommended booking 4-6 months in advance to secure the best
                rates and availability.
              </p>
            </div>
          </div>
        </section>
        <section className="custom-planning">
          <div className="custom-planning-container">
            <div className="custom-planning-header">
              <h2 className="section-title">Bespoke Itineraries</h2>
              <p className="section-content">
                Your dream trip, exactly as you imagined it, but with the
                logistics handled by experts.
              </p>
            </div>
            <div className="tabs-vertical-wrapper">
              <div className="tabs-controls">
                <button data-tab="process" className="tab-trigger active">
                  The Process
                </button>
                <button data-tab="included" className="tab-trigger">
                  What&apos;s Included
                </button>
                <button data-tab="examples" className="tab-trigger">
                  Sample Itineraries
                </button>
                <button data-tab="addons" className="tab-trigger">
                  Optional Add-ons
                </button>
              </div>
              <div className="tabs-content-area">
                <div id="process" className="tab-panel active">
                  <h3 className="section-subtitle">Personalization Process</h3>
                  <p className="section-content">
                    We start with a blank canvas. Your personal consultant works
                    through your &quot;must-haves&quot; and
                    &quot;would-likes&quot; to build a day-by-day plan that
                    matches your rhythm.
                  </p>
                  <img
                    alt="Planning Process"
                    src="https://images.pexels.com/photos/8828448/pexels-photo-8828448.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="tab-image"
                  />
                </div>
                <div id="included" className="tab-panel">
                  <h3 className="section-subtitle">The Voyanta Standard</h3>
                  <p className="section-content">
                    Every custom trip includes: Vetted accommodations, private
                    transfers, curated local experiences, comprehensive travel
                    insurance, and 24/7 concierge support.
                  </p>
                  <ul className="tab-list">
                    <li>
                      <span>Personalized digital itinerary</span>
                    </li>
                    <li>
                      <span>All internal transport bookings</span>
                    </li>
                    <li>
                      <span>Visa application management</span>
                    </li>
                  </ul>
                </div>
                <div id="examples" className="tab-panel">
                  <h3 className="section-subtitle">Bespoke Examples</h3>
                  <p className="section-content">
                    From culinary tours in Tuscany to high-adventure trekking in
                    Patagonia, our examples show the depth of our local
                    connections.
                  </p>
                  <img
                    alt="Sample Trip"
                    src="https://images.pexels.com/photos/1037890/pexels-photo-1037890.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="tab-image"
                  />
                </div>
                <div id="addons" className="tab-panel">
                  <h3 className="section-subtitle">Elevate Your Journey</h3>
                  <p className="section-content">
                    Enhance your trip with specialized services: Private
                    photographers, luxury airport lounge access, or exclusive
                    after-hours museum tours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-support">
          <div className="testimonials-header">
            <h2 className="section-title">Trusted by Explorers</h2>
            <p className="section-content">
              Our support promise is simple: We are your bridge to the world.
            </p>
          </div>
          <div className="masonry-grid">
            <div className="masonry-item">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  &quot;Voyanta made our complex multi-country trip feel like a
                  walk in the park. The local partners they vetted were
                  exceptional.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Sarah Jenkins</span>
                    <span className="author-trip">
                      3-Week Southeast Asia Custom Trip
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div className="promise-card">
                <h3 className="section-subtitle">Our Support Commitment</h3>
                <p className="section-content">
                  We promise fair pricing, vetted partners, and end-to-end
                  assistance. If something goes wrong, we are one call away,
                  anywhere in the world.
                </p>
              </div>
            </div>
            <div className="masonry-item">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  &quot;The small group size allowed us to see parts of Morocco
                  I never would have found on my own. Truly effortless
                  planning.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">David Thorne</span>
                    <span className="author-trip">
                      Morocco Small-Group Tour
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  &quot;Clear itineraries and fair pricing. No hidden fees, just
                  pure travel bliss. The visa support was a lifesaver.&quot;
                </p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <span className="author-name">Elena Rodriguez</span>
                    <span className="author-trip">
                      Japan Cultural Immersion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="get-started">
          <div className="get-started-container">
            <div className="get-started-grid">
              <div className="get-started-content">
                <h2 className="section-title">Ready to Start Your Journey?</h2>
                <p className="section-content">
                  Request a consultation today. Within 24 hours, an expert
                  consultant will reach out to discuss your vision and next
                  steps.
                </p>
                <div className="expectations">
                  <div className="expectation-item">
                    <div className="icon-dot"></div>
                    <span>24-Hour Initial Response</span>
                  </div>
                  <div className="expectation-item">
                    <div className="icon-dot"></div>
                    <span>No-Obligation Consultation</span>
                  </div>
                  <div className="expectation-item">
                    <div className="icon-dot"></div>
                    <span>Personalized Draft Itinerary</span>
                  </div>
                </div>
              </div>
              <div className="get-started-form-wrapper">
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="9532f551-39d3-47a3-84e1-41111428b070"
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      data-form-field-id="service"
                      className="form-input"
                    >
                      <option value="custom">Custom Trip Planning</option>
                      <option value="group">Small-Group Tours</option>
                      <option value="consultancy">Travel Consultancy</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Tell us about your trip
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Destination, dates, preferences..."
                      data-form-field-id="message"
                      className="form-input"
                    ></textarea>
                  </div>
                  <button
                    id="thq_button_Zz04"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_Zz04"
                    className="btn-lg btn-primary btn-block btn"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="services-container4">
          <div className="services-container5">
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
        <div className="services-container6">
          <div className="services-container7">
            <Script
              html={`<script defer data-name="voyanta-services">
(function(){
  // Tab switching logic for Custom Trip Planning section
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const tabId = trigger.getAttribute("data-tab")

      // Remove active classes
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabPanels.forEach((p) => p.classList.remove("active"))

      // Add active classes to selected
      trigger.classList.add("active")
      const activePanel = document.getElementById(tabId)
      if (activePanel) {
        activePanel.classList.add("active")
      }
    })
  })

  // Simple intersection observer for reveal animations
  const revealOptions = {
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
  }, revealOptions)

  // Apply initial styles and observe elements
  const animatedElements = document.querySelectorAll(".bento-cell, .timeline-item, .testimonial-card")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    revealObserver.observe(el)
  })

  // Form validation feedback (Visual only as per rules)
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      // Native submission will happen, this is just for UX feedback
      const btn = contactForm.querySelector('button[type="submit"]')
      btn.textContent = "Sending..."
      btn.style.opacity = "0.7"
      btn.style.pointerEvents = "none"
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .services-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .services-container2 {
            display: none;
          }
          .services-container3 {
            display: contents;
          }
          .services-container4 {
            display: none;
          }
          .services-container5 {
            display: contents;
          }
          .services-container6 {
            display: none;
          }
          .services-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Services
