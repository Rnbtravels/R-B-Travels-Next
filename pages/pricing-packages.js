import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PricingPackages = (props) => {
  return (
    <>
      <div className="pricing-packages-container10">
        <Head>
          <title>Pricing-Packages - rnvtravels</title>
          <meta property="og:title" content="Pricing-Packages - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/pricing-packages"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/pricing-packages"
          />
        </Head>
        <Navigation></Navigation>
        <section className="pricing-overview">
          <div className="pricing-overview__bg">
            <video
              src="https://videos.pexels.com/video-files/27384797/12131713_640_360_50fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/27384797/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="pricing-overview__video"
            ></video>
            <div className="pricing-overview__overlay"></div>
          </div>
          <div className="pricing-overview__container">
            <div className="pricing-overview__content">
              <h1 className="hero-title">
                Transparent Pricing for Infinite Journeys
              </h1>
              <p className="hero-subtitle">
                At R &amp; B Travels, we believe travel should be effortless
                from the first quote. Our pricing philosophy is built on
                clarity: no hidden fees, fair local rates, and total support
                from planning to your safe return.
              </p>
              <div className="pricing-overview__actions">
                <a href="#packages">
                  <div className="btn-lg btn-primary btn pricing---packages-btn">
                    <span>View Packages</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="btn-lg btn pricing---packages-btn btn-outline">
                    <span>Custom Quote</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="pricing-overview__visual">
              <div className="pricing-overview__diagonal-card">
                <div className="pricing-overview__stat">
                  <span className="pricing-overview__stat-val">100%</span>
                  <span className="pricing-overview__stat-label">
                    Vetted Partners
                  </span>
                </div>
                <div className="pricing-overview__stat">
                  <span className="pricing-overview__stat-val">0</span>
                  <span className="pricing-overview__stat-label">
                    Hidden Surcharges
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="packages" className="package-tiers">
          <div className="package-tiers__container">
            <div className="package-tiers__header">
              <h2 className="section-title">Our Curated Package Tiers</h2>
              <p className="section-content">
                Choose the level of support that fits your travel style. From
                bespoke solo adventures to organized small-group expeditions.
              </p>
            </div>
            <div className="package-tiers__bento">
              <div className="package-tiers__card--featured package-tiers__card">
                <div className="package-tiers__badge">
                  <span>Most Popular</span>
                </div>
                <h3 className="section-subtitle">Custom Trip Planning</h3>
                <p className="section-content">
                  A fully personalized itinerary designed specifically for your
                  interests, pace, and budget.
                </p>
                <div className="package-tiers__price">
                  <span className="package-tiers__amount">$299</span>
                  <span className="package-tiers__unit">
                    / per group planning fee
                  </span>
                </div>
                <ul className="package-tiers__list">
                  <li className="package-tiers__item">
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
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Unlimited itinerary revisions</span>
                  </li>
                  <li className="package-tiers__item">
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
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Visa application assistance</span>
                  </li>
                  <li className="package-tiers__item">
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
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                    <span>Flight &amp; accommodation booking</span>
                  </li>
                </ul>
                <button className="btn-primary btn pricing---packages-btn">
                  Start Planning
                </button>
              </div>
              <div className="package-tiers__card">
                <h3 className="section-subtitle">Small Group Tours</h3>
                <p className="section-content">
                  Join a curated group of 6-12 like-minded travelers.
                </p>
                <div className="package-tiers__price">
                  <span className="package-tiers__amount">From $1,850</span>
                  <span className="package-tiers__unit">/ per person</span>
                </div>
                <button className="btn-secondary btn pricing---packages-btn btn-sm">
                  View Tours
                </button>
              </div>
              <div className="package-tiers__card">
                <h3 className="section-subtitle">Private Groups</h3>
                <p className="section-content">
                  Tailored tours for your own circle (8+ people).
                </p>
                <div className="package-tiers__price">
                  <span className="package-tiers__amount">Custom</span>
                  <span className="package-tiers__unit">
                    / tiered discounts apply
                  </span>
                </div>
                <button className="btn pricing---packages-btn btn-outline btn-sm">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="inclusions-addons">
          <div className="inclusions-addons__container">
            <div className="inclusions-addons__header">
              <h2 className="section-title">
                What’s Included in Every Journey
              </h2>
              <p className="section-content">
                We handle the complexities so you can focus on the experience.
                Here is a breakdown of our standard inclusions and flexible
                add-ons.
              </p>
            </div>
            <div className="inclusions-addons__bento">
              <div className="inclusions-addons__main-cell">
                <h3 className="section-subtitle">Standard Inclusions</h3>
                <div className="inclusions-addons__grid">
                  <div className="inclusions-addons__feature">
                    <div className="inclusions-addons__icon">
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
                    <div>
                      <h4 className="pricing-packages-thq-section-content-elm15 section-content">
                        Visa &amp; Entry Support
                      </h4>
                      <p className="pricing-packages-thq-section-content-elm16 section-content">
                        Full documentation guidance and application handling.
                      </p>
                    </div>
                  </div>
                  <div className="inclusions-addons__feature">
                    <div className="inclusions-addons__icon">
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
                    <div>
                      <h4 className="pricing-packages-thq-section-content-elm17 section-content">
                        Vetted Stays
                      </h4>
                      <p className="pricing-packages-thq-section-content-elm18 section-content">
                        Hand-picked accommodation from boutique hotels to
                        eco-lodges.
                      </p>
                    </div>
                  </div>
                  <div className="inclusions-addons__feature">
                    <div className="inclusions-addons__icon">
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
                          <path d="m15 9l-6 6m0-6l6 6"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h4 className="pricing-packages-thq-section-content-elm19 section-content">
                        Flight Optimization
                      </h4>
                      <p className="pricing-packages-thq-section-content-elm20 section-content">
                        Best routes and connections monitored for price drops.
                      </p>
                    </div>
                  </div>
                  <div className="inclusions-addons__feature">
                    <div className="inclusions-addons__icon">
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
                            y="3"
                            rx="2"
                            width="18"
                            height="18"
                          ></rect>
                          <path d="M7 8h10M7 12h10M7 16h10"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h4 className="pricing-packages-thq-section-content-elm21 section-content">
                        Insurance Concierge
                      </h4>
                      <p className="pricing-packages-thq-section-content-elm22 section-content">
                        Comprehensive travel insurance tailored to your
                        destination.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inclusions-addons__side-cell">
                <h3 className="section-subtitle">Optional Add-ons</h3>
                <div className="inclusions-addons__addon-item">
                  <span className="section-content">Airport Fast-Track</span>
                  <span className="inclusions-addons__price">+$45</span>
                </div>
                <div className="inclusions-addons__addon-item">
                  <span className="section-content">Private Local Guide</span>
                  <span className="inclusions-addons__price">+$120/day</span>
                </div>
                <div className="inclusions-addons__addon-item">
                  <span className="section-content">Photography Package</span>
                  <span className="inclusions-addons__price">+$250</span>
                </div>
              </div>
              <div className="inclusions-addons__side-cell--alt inclusions-addons__side-cell">
                <h3 className="section-subtitle">Local Experiences</h3>
                <p className="section-content">
                  Curated local workshops, culinary tours, and off-beat
                  adventures are included in all group tours.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="group-policies">
          <div className="group-policies__container">
            <div className="group-policies__bento">
              <div className="group-policies__main">
                <h2 className="section-title">
                  Group Sizes &amp; Pricing Dynamics
                </h2>
                <p className="section-content">
                  We specialize in small-group dynamics. Whether you are
                  traveling solo within a group or booking for your entire
                  family, our pricing scales to ensure you get the best value
                  without compromising the intimate feel of the journey.
                </p>
                <div className="group-policies__stats-row">
                  <div className="group-policies__stat-item">
                    <span className="group-policies__stat-num">6-12</span>
                    <span className="section-content">Ideal Group Size</span>
                  </div>
                  <div className="group-policies__stat-item">
                    <span className="group-policies__stat-num">8+</span>
                    <span className="section-content">Private Group Tier</span>
                  </div>
                  <div className="group-policies__stat-item">
                    <span className="group-policies__stat-num">15%</span>
                    <span className="section-content">
                      Avg. Large Group Saving
                    </span>
                  </div>
                </div>
              </div>
              <div className="group-policies__side">
                <div className="group-policies__policy-card">
                  <h3 className="section-subtitle">Our Limits</h3>
                  <ul className="group-policies__list">
                    <li className="group-policies__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
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
                      <span>Min: 4 travelers</span>
                    </li>
                    <li className="group-policies__list-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
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
                      <span>Max: 14 travelers</span>
                    </li>
                  </ul>
                  <p className="pricing-packages-thq-section-content-elm31 section-content">
                    Private group options available for smaller or larger
                    parties upon request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fair-pricing">
          <div className="fair-pricing__container">
            <div className="fair-pricing__header">
              <h2 className="section-title">
                Fair Pricing &amp; Full Transparency
              </h2>
              <p className="section-content">
                We are committed to a no-hidden-fees policy. Every dollar you
                spend is accounted for, ensuring fair compensation for local
                partners and clear value for you.
              </p>
            </div>
            <div className="fair-pricing__bento">
              <div className="fair-pricing__card--wide fair-pricing__card">
                <h3 className="section-subtitle">
                  Our Transparency Commitment
                </h3>
                <p className="section-content">
                  We provide a line-item breakdown of all costs. Our exchange
                  rate handling ensures you pay the true market value at the
                  time of booking, protecting you from inflated currency
                  margins.
                </p>
                <div className="fair-pricing__commitments">
                  <div className="fair-pricing__chip">
                    <span>Real-time Exchange Rates</span>
                  </div>
                  <div className="fair-pricing__chip">
                    <span>No Hidden Commissions</span>
                  </div>
                  <div className="fair-pricing__chip">
                    <span>Direct Partner Payments</span>
                  </div>
                </div>
              </div>
              <div className="fair-pricing__card">
                <h3 className="section-subtitle">Refund Policy</h3>
                <p className="section-content">
                  100% refund within 48 hours of booking. Tiered cancellation
                  windows thereafter.
                </p>
              </div>
              <div className="fair-pricing__card">
                <h3 className="section-subtitle">Price Lock</h3>
                <p className="section-content">
                  Once your deposit is paid, your trip price is locked against
                  inflation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials__container">
            <div className="testimonials__header">
              <h2 className="section-title">What Our Travelers Say</h2>
              <p className="section-content">
                Honest feedback on the value and clarity of our planning
                services.
              </p>
            </div>
            <div className="testimonials__masonry">
              <div className="testimonials__item">
                <div className="testimonials__quote-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V5H10.017V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <p className="section-content">
                  &quot;The clarity of costs was refreshing. No hidden fees at
                  the end, and the value we got for the planning fee was worth
                  every penny.&quot;
                </p>
                <div className="testimonials__author">
                  <span className="testimonials__name">Sarah Jenkins</span>
                  <span className="testimonials__trip">
                    Custom Trip to Japan
                  </span>
                </div>
              </div>
              <div className="testimonials__item">
                <p className="section-content">
                  &quot;R &amp; B Travels handled everything from visas to local
                  insurance. Knowing exactly what was included in the
                  small-group price made budgeting so much easier.&quot;
                </p>
                <div className="testimonials__author">
                  <span className="testimonials__name">Marcus Thorne</span>
                  <span className="testimonials__trip">Morocco Group Tour</span>
                </div>
              </div>
              <div className="testimonials__item">
                <p className="section-content">
                  &quot;Fair pricing is an understatement. They found us local
                  stays that were cheaper than what we saw online, yet better
                  quality.&quot;
                </p>
                <div className="testimonials__author">
                  <span className="testimonials__name">Elena Rodriguez</span>
                  <span className="testimonials__trip">
                    Family Trip to Peru
                  </span>
                </div>
              </div>
              <div className="testimonials__item">
                <p className="section-content">
                  &quot;I loved the transparency around exchange rates. Most
                  agencies hide a 3-5% margin there, but R &amp; B Travels was
                  completely upfront.&quot;
                </p>
                <div className="testimonials__author">
                  <span className="testimonials__name">David Chen</span>
                  <span className="testimonials__trip">
                    Custom Trip to Iceland
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="questions-contact">
          <div className="questions-contact__container">
            <div className="questions-contact__tabs">
              <div className="questions-contact__nav">
                <button
                  data-tab="faq"
                  className="active questions-contact__tab-btn"
                >
                  Pricing FAQ
                </button>
                <button
                  data-tab="contact"
                  className="questions-contact__tab-btn"
                >
                  Request Quote
                </button>
                <button
                  data-tab="custom"
                  className="questions-contact__tab-btn"
                >
                  Customization
                </button>
              </div>
              <div className="questions-contact__content-area">
                <div id="tab-faq" className="questions-contact__pane active">
                  <h2 className="section-title">
                    Pricing Frequently Asked Questions
                  </h2>
                  <div className="questions-contact__accordion">
                    <details open="true">
                      <summary>
                        <span>When is the planning fee paid?</span>
                      </summary>
                      <p className="section-content">
                        The planning fee is paid upfront to initiate the custom
                        itinerary design process. This covers our
                        consultants&apos; time and expertise.
                      </p>
                    </details>
                    <details>
                      <summary>
                        <span>Are flights included in the package price?</span>
                      </summary>
                      <p className="section-content">
                        For group tours, international flights are usually
                        separate, but we handle the booking for you to ensure
                        you arrive with the group. For custom trips, we can
                        include them in your total quote.
                      </p>
                    </details>
                    <details>
                      <summary>
                        <span>
                          Do you offer discounts for repeat travelers?
                        </span>
                      </summary>
                      <p className="section-content">
                        Yes! Our &apos;Voyanta Circle&apos; members receive a 5%
                        discount on all group tours and waived planning fees for
                        their third custom trip.
                      </p>
                    </details>
                  </div>
                </div>
                <div id="tab-contact" className="questions-contact__pane">
                  <h2 className="section-title">
                    Request a Personalized Quote
                  </h2>
                  <p className="section-content">
                    Tell us your vision, and we will provide a transparent
                    estimate within 24 hours.
                  </p>
                  <form
                    action="/submit"
                    method="POST"
                    data-form-id="2738f35b-e2f6-49fe-8404-64af703f8bed"
                    className="questions-contact__form"
                  >
                    <div className="questions-contact__form-grid">
                      <input
                        type="text"
                        id="thq_textinput_FfwU"
                        name="textinput"
                        required="true"
                        placeholder="Full Name"
                        data-form-field-id="thq_textinput_FfwU"
                        className="questions-contact__input"
                      />
                      <input
                        type="email"
                        id="thq_textinput_MDQT"
                        name="textinput"
                        required="true"
                        placeholder="Email Address"
                        data-form-field-id="thq_textinput_MDQT"
                        className="questions-contact__input"
                      />
                      <select
                        id="thq_select_X9EP"
                        name="select"
                        required="true"
                        data-form-field-id="thq_select_X9EP"
                        className="questions-contact__input"
                      >
                        <option value="true">Select Package</option>
                        <option value="custom">Custom Planning</option>
                        <option value="group">Small Group Tour</option>
                        <option value="private">Private Group</option>
                      </select>
                      <input
                        type="number"
                        id="thq_textinput_24iH"
                        min="1"
                        name="textinput"
                        required="true"
                        placeholder="Group Size"
                        data-form-field-id="thq_textinput_24iH"
                        className="questions-contact__input"
                      />
                    </div>
                    <textarea
                      id="thq_textarea_zmu8"
                      name="textarea"
                      required="true"
                      placeholder="Tell us about your dream destination..."
                      data-form-field-id="thq_textarea_zmu8"
                      className="questions-contact__input questions-contact__textarea"
                    ></textarea>
                    <button
                      id="thq_button_eVL5"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_eVL5"
                      className="btn-lg btn-primary btn pricing---packages-btn"
                    >
                      Send Request
                    </button>
                  </form>
                </div>
                <div
                  id="tab-custom"
                  className="questions-contact__pane pricing-packages-thq-questions-contactpane-elm3"
                >
                  <h2 className="section-title">Bespoke Customizations</h2>
                  <p className="section-content">
                    Every traveler is unique. We can adjust any package to
                    include specific luxury upgrades, accessibility
                    requirements, or niche interest workshops.
                  </p>
                  <div className="questions-contact__features">
                    <div className="questions-contact__feature-item">
                      <h4 className="section-subtitle">Luxury Upgrades</h4>
                      <p className="section-content">
                        Upgrade to 5-star suites or private villas.
                      </p>
                    </div>
                    <div className="questions-contact__feature-item">
                      <h4 className="section-subtitle">Extended Stays</h4>
                      <p className="section-content">
                        Add pre or post-tour days to any group itinerary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pricing-packages-container21">
          <div className="pricing-packages-container22">
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
        <div className="pricing-packages-container23">
          <div className="pricing-packages-container24">
            <Script
              html={`<script defer data-name="voyanta-pricing-logic">
(function(){
  // Tab Switching Logic
  const tabButtons = document.querySelectorAll(".questions-contact__tab-btn")
  const panes = document.querySelectorAll(".questions-contact__pane")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Update buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Update panes
      panes.forEach((pane) => {
        pane.classList.remove("active")
        if (pane.id === \`tab-\${targetTab}\`) {
          pane.classList.add("active")
        }
      })
    })
  })

  // Form visual feedback
  const form = document.querySelector(".questions-contact__form")
  if (form) {
    form.addEventListener("submit", (e) => {
      // Native submission happens, but we can add a visual state
      const btn = form.querySelector('button[type="submit"]')
      btn.textContent = "Sending..."
      btn.disabled = true

      // The browser will handle the actual POST action defined in HTML
    })
  }

  // Simple reveal animation on scroll for bento cards
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".package-tiers__card, .fair-pricing__card, .inclusions-addons__side-cell").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
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
          .pricing-packages-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .pricing-packages-thq-section-content-elm15 {
            font-weight: 600;
          }
          .pricing-packages-thq-section-content-elm16 {
            opacity: 0.8;
          }
          .pricing-packages-thq-section-content-elm17 {
            font-weight: 600;
          }
          .pricing-packages-thq-section-content-elm18 {
            opacity: 0.8;
          }
          .pricing-packages-thq-section-content-elm19 {
            font-weight: 600;
          }
          .pricing-packages-thq-section-content-elm20 {
            opacity: 0.8;
          }
          .pricing-packages-thq-section-content-elm21 {
            font-weight: 600;
          }
          .pricing-packages-thq-section-content-elm22 {
            opacity: 0.8;
          }
          .pricing-packages-thq-section-content-elm31 {
            font-size: var(--font-size-sm);
            margin-top: var(--spacing-md);
          }
          .pricing-packages-container21 {
            display: none;
          }
          .pricing-packages-container22 {
            display: contents;
          }
          .pricing-packages-container23 {
            display: none;
          }
          .pricing-packages-container24 {
            display: contents;
          }
          @media (max-width: 479px) {
            .pricing-packages-thq-questions-contactpane-elm3 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default PricingPackages
