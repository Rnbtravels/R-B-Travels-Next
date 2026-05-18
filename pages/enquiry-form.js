import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const EnquiryForm = (props) => {
  return (
    <>
      <div className="enquiry-form-container1">
        <Head>
          <title>EnquiryForm - rnvtravels</title>
          <meta property="og:title" content="EnquiryForm - rnvtravels" />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/enquiry-form"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/enquiry-form"
          />
        </Head>
        <Navigation></Navigation>
        <section data-section="travel-enquiry-hero" className="page-hero">
          <div className="enquiry-form-thq-page-hero-container-elm thq-page-hero-container-elm">
            <div className="enquiry-form-thq-page-hero-content-elm">
              <div className="enquiry-form-thq-page-hero-icon-elm thq-page-hero-icon-elm">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                  </g>
                </svg>
              </div>
              <h1 className="enquiry-form-thq-page-hero-title-elm thq-page-hero-title-elm">
                Travel Enquiry
              </h1>
              <p className="enquiry-form-thq-page-hero-subtitle-elm thq-page-hero-subtitle-elm">
                Tell us about your dream journey and let our experts craft a
                seamless, personalized travel experience for you.
              </p>
              <div className="enquiry-form-thq-page-hero-divider-elm thq-page-hero-divider-elm"></div>
              <p className="enquiry-form-thq-page-hero-description-elm thq-page-hero-description-elm">
                From visa applications and flight bookings to curated
                itineraries and travel insurance — R&amp;B Travels handles every
                detail so you can focus on the adventure ahead.
              </p>
            </div>
            <div className="page-hero-image">
              <img
                alt="Stunning sunset view from mountain top with expansive seascape"
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fER1YmFpfGVufDB8fHx8MTc3OTA5NjUzM3ww&amp;ixlib=rb-4.1.0&amp;w=1500"
              />
            </div>
          </div>
        </section>
        <section id="step-1" className="thq-step1-section-elm">
          <div className="step-1-container">
            <h2 className="section-title">Select a Service</h2>
            <p className="section-subtitle">
              Choose the service you&apos;d like to enquire about
            </p>
            <div className="service-grid">
              <div
                data-icon="🎓"
                data-service="Study Abroad"
                className="service-card"
              >
                <span className="service-icon">🎓</span>
                <span className="service-label">Study Abroad</span>
              </div>
              <div
                data-icon="📄"
                data-service="Travel Documentation"
                className="service-card"
              >
                <span className="service-icon">📄</span>
                <span className="service-label">Travel Documentation</span>
              </div>
              <div
                data-icon="🗺️"
                data-service="Comprehensive Itinerary Planning"
                className="service-card"
              >
                <span className="service-icon">🗺️</span>
                <span className="service-label">
                  Comprehensive Itinerary Planning
                </span>
              </div>
              <div
                data-icon="🛡️"
                data-service="Travel Insurance"
                className="service-card"
              >
                <span className="service-icon">🛡️</span>
                <span className="service-label">Travel Insurance</span>
              </div>
              <div
                data-icon="✈️"
                data-service="Tour Packages &amp; Guided Experiences"
                className="service-card"
              >
                <span className="service-icon">✈️</span>
                <span className="service-label">
                  Tour Packages &amp; Guided Experiences
                </span>
              </div>
              <div
                data-icon="🚐"
                data-service="Airport Transfer Arrangements"
                className="service-card"
              >
                <span className="service-icon">🚐</span>
                <span className="service-label">
                  Airport Transfer Arrangements
                </span>
              </div>
              <div
                data-icon="🆘"
                data-service="24/7 Travel Support &amp; Emergency Assistance"
                className="service-card"
              >
                <span className="service-icon">🆘</span>
                <span className="service-label">
                  24/7 Travel Support &amp; Emergency Assistance
                </span>
              </div>
            </div>
            <button
              id="btn-continue-step-1"
              disabled="true"
              className="btn-lg btn button btn-accent"
            >
              Continue
            </button>
          </div>
        </section>
        <section
          id="step-2"
          className="enquiry-form-thq-dynamic-enquiry-form-elm dynamic-enquiry-form"
        >
          <div className="form-container">
            <button id="btn-back-step-2" className="btn-back">
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span>
                {' '}
                Back to Services
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
            <form
              id="enquiry-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              data-form-id="b23835c1-ae81-4385-9d2a-a32d276f3fea"
            >
              <input
                type="hidden"
                id="thq_access_key_z0yH"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY_HERE"
                data-form-field-id="thq_access_key_z0yH"
              />
              <input
                type="hidden"
                id="hidden-subject"
                name="subject"
                value="R&amp;B Travels Enquiry"
                data-form-field-id="hidden-subject"
              />
              <input
                type="hidden"
                id="thq_from_name_O45T"
                name="from_name"
                value="R&amp;B Travels Website"
                data-form-field-id="thq_from_name_O45T"
              />
              <input
                type="hidden"
                id="hidden-service"
                name="selected_service"
                data-form-field-id="hidden-service"
              />
              <div className="form-section">
                <h2 className="section-title">Contact Details</h2>
                <div className="page1-form-grid">
                  <div className="form-field">
                    <label htmlFor="full_name">1. Full Name*</label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      required="true"
                      placeholder="Enter your full name"
                      data-form-field-id="full_name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">2. Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="example@email.com"
                      data-form-field-id="email"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">3. Phone/WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+234..."
                      data-form-field-id="phone"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="country">4. Country of Residence</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Nigeria"
                      data-form-field-id="country"
                    />
                  </div>
                </div>
              </div>
              <div id="conditional-sections">
                <div
                  data-service="Study Abroad"
                  className="enquiry-form-thq-form-section-elm2 form-section service-specific"
                >
                  <h2 className="section-title">Study Abroad Details</h2>
                  <div className="page1-form-grid">
                    <div className="form-field">
                      <label htmlFor="sa-country">5. Country of study</label>
                      <input
                        type="text"
                        id="sa-country"
                        name="study_country"
                        data-form-field-id="sa-country"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="sa-level">6. Level of study</label>
                      <select
                        id="sa-level"
                        name="study_level"
                        data-form-field-id="sa-level"
                      >
                        <option value="true">Select Level</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="PhD">PhD</option>
                        <option value="Short Course">Short Course</option>
                        <option value="Language School">Language School</option>
                        <option value="High School">High School</option>
                      </select>
                    </div>
                    <div className="form-field full-width">
                      <label>7. School chosen</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_school_status_jteC"
                            name="school_status"
                            value="Yes specific"
                            data-form-field-id="thq_school_status_jteC"
                          />
                          <span>
                            {' '}
                            Yes specific
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_school_status_5vFr"
                            name="school_status"
                            value="Have shortlist"
                            data-form-field-id="thq_school_status_5vFr"
                          />
                          <span>
                            {' '}
                            Have shortlist
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_school_status_nenu"
                            name="school_status"
                            value="Need guidance"
                            data-form-field-id="thq_school_status_nenu"
                          />
                          <span>
                            {' '}
                            Need guidance
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="sa-intake">8. Intake date</label>
                      <select
                        id="sa-intake"
                        name="intake_date"
                        data-form-field-id="sa-intake"
                      >
                        <option value="Jan 2025">Jan 2025</option>
                        <option value="Sep 2025">Sep 2025</option>
                        <option value="Jan 2026">Jan 2026</option>
                        <option value="Sep 2026">Sep 2026</option>
                        <option value="Not decided">Not decided</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>9. Visa assistance needed</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_visa_support_k7aI"
                            name="visa_support"
                            value="Full support"
                            data-form-field-id="thq_visa_support_k7aI"
                          />
                          <span>
                            {' '}
                            Full support
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_visa_support_CdIW"
                            name="visa_support"
                            value="Documents only"
                            data-form-field-id="thq_visa_support_CdIW"
                          />
                          <span>
                            {' '}
                            Documents only
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_visa_support_ovgu"
                            name="visa_support"
                            value="No"
                            data-form-field-id="thq_visa_support_ovgu"
                          />
                          <span>
                            {' '}
                            No
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="sa-funding">10. Funding</label>
                      <select
                        id="sa-funding"
                        name="funding_source"
                        data-form-field-id="sa-funding"
                      >
                        <option value="Personal">Personal</option>
                        <option value="Scholarship full/partial">
                          Scholarship full/partial
                        </option>
                        <option value="Loan">Loan</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Undecided">Undecided</option>
                      </select>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="sa-notes">11. Additional notes</label>
                      <textarea
                        id="sa-notes"
                        name="additional_notes"
                        rows="4"
                        data-form-field-id="sa-notes"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="Travel Documentation"
                  className="enquiry-form-thq-form-section-elm3 form-section service-specific"
                >
                  <h2 className="section-title">Documentation Requirements</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Document types needed</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_B8TU"
                            name="docs[]"
                            value="Passport"
                            data-form-field-id="thq_docs[]_B8TU"
                          />
                          <span>
                            {' '}
                            Passport
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_3DOd"
                            name="docs[]"
                            value="Visa Application"
                            data-form-field-id="thq_docs[]_3DOd"
                          />
                          <span>
                            {' '}
                            Visa Application
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_out_"
                            name="docs[]"
                            value="Proof of Funds"
                            data-form-field-id="thq_docs[]_out_"
                          />
                          <span>
                            {' '}
                            Proof of Funds
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_mfOL"
                            name="docs[]"
                            value="Travel Itinerary"
                            data-form-field-id="thq_docs[]_mfOL"
                          />
                          <span>
                            {' '}
                            Travel Itinerary
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_DVVX"
                            name="docs[]"
                            value="Hotel Booking"
                            data-form-field-id="thq_docs[]_DVVX"
                          />
                          <span>
                            {' '}
                            Hotel Booking
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_02PO"
                            name="docs[]"
                            value="Flight Reservation"
                            data-form-field-id="thq_docs[]_02PO"
                          />
                          <span>
                            {' '}
                            Flight Reservation
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_mE-3"
                            name="docs[]"
                            value="Reference Letter"
                            data-form-field-id="thq_docs[]_mE-3"
                          />
                          <span>
                            {' '}
                            Reference Letter
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_tobo"
                            name="docs[]"
                            value="Other"
                            data-form-field-id="thq_docs[]_tobo"
                          />
                          <span>
                            {' '}
                            Other
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="td-country">6. Destination country</label>
                      <input
                        type="text"
                        id="td-country"
                        name="destination"
                        data-form-field-id="td-country"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="td-date">7. Planned travel date</label>
                      <input
                        type="date"
                        id="td-date"
                        name="travel_date"
                        data-form-field-id="td-date"
                      />
                    </div>
                    <div className="form-field">
                      <label>8. Urgency</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_urgency_0kLu"
                            name="urgency"
                            value="Within 1 week"
                            data-form-field-id="thq_urgency_0kLu"
                          />
                          <span>
                            {' '}
                            Within 1 week
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_urgency_p7cj"
                            name="urgency"
                            value="2–4 weeks"
                            data-form-field-id="thq_urgency_p7cj"
                          />
                          <span>
                            {' '}
                            2–4 weeks
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_urgency_0k-Y"
                            name="urgency"
                            value="1–3 months"
                            data-form-field-id="thq_urgency_0k-Y"
                          />
                          <span>
                            {' '}
                            1–3 months
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label>9. Previous visa denial</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_denial__ygt"
                            name="denial"
                            value="No"
                            data-form-field-id="thq_denial__ygt"
                          />
                          <span>
                            {' '}
                            No
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_denial_F1kz"
                            name="denial"
                            value="Yes same country"
                            data-form-field-id="thq_denial_F1kz"
                          />
                          <span>
                            {' '}
                            Yes same country
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_denial_nz3Q"
                            name="denial"
                            value="Yes different country"
                            data-form-field-id="thq_denial_nz3Q"
                          />
                          <span>
                            {' '}
                            Yes different country
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="td-details">
                        10. Documentation details
                      </label>
                      <textarea
                        id="td-details"
                        name="doc_details"
                        rows="4"
                        data-form-field-id="td-details"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="Comprehensive Itinerary Planning"
                  className="enquiry-form-thq-form-section-elm4 form-section service-specific"
                >
                  <h2 className="section-title">Trip Preferences</h2>
                  <div className="page1-form-grid">
                    <div className="form-field">
                      <label htmlFor="ip-type">5. Trip type</label>
                      <select
                        id="ip-type"
                        name="trip_type"
                        data-form-field-id="ip-type"
                      >
                        <option value="Leisure">Leisure</option>
                        <option value="Honeymoon">Honeymoon</option>
                        <option value="Family">Family</option>
                        <option value="Business">Business</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Cultural">Cultural</option>
                        <option value="Medical">Medical</option>
                        <option value="Religious">Religious</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="ip-dest">6. Destinations</label>
                      <input
                        type="text"
                        id="ip-dest"
                        name="destinations"
                        data-form-field-id="ip-dest"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="ip-dur">7. Duration</label>
                      <select
                        id="ip-dur"
                        name="duration"
                        data-form-field-id="ip-dur"
                      >
                        <option value="&lt;1 week">&lt;1 week</option>
                        <option value="1–2 wks">1–2 wks</option>
                        <option value="2–3 wks">2–3 wks</option>
                        <option value="3–4 wks">3–4 wks</option>
                        <option value="1 month+">1 month+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="ip-date">8. Departure date</label>
                      <input
                        type="text"
                        id="ip-date"
                        name="departure"
                        placeholder="Approx. date"
                        data-form-field-id="ip-date"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="ip-count">9. Traveller count</label>
                      <select
                        id="ip-count"
                        name="travellers"
                        data-form-field-id="ip-count"
                      >
                        <option value="Solo">Solo</option>
                        <option value="2">2</option>
                        <option value="3–5">3–5</option>
                        <option value="6–10">6–10</option>
                        <option value="10+">10+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>10. Travel style</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_style_U16q"
                            name="style"
                            value="Budget"
                            data-form-field-id="thq_style_U16q"
                          />
                          <span>
                            {' '}
                            Budget
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_style_yFbu"
                            name="style"
                            value="Mid-range"
                            data-form-field-id="thq_style_yFbu"
                          />
                          <span>
                            {' '}
                            Mid-range
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_style_-qAK"
                            name="style"
                            value="Luxury"
                            data-form-field-id="thq_style_-qAK"
                          />
                          <span>
                            {' '}
                            Luxury
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label>11. Interests</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_-EMl"
                            name="interests[]"
                            value="Beaches"
                            data-form-field-id="thq_interests[]_-EMl"
                          />
                          <span>
                            {' '}
                            Beaches
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_Llt7"
                            name="interests[]"
                            value="History"
                            data-form-field-id="thq_interests[]_Llt7"
                          />
                          <span>
                            {' '}
                            History
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_DMBQ"
                            name="interests[]"
                            value="Food"
                            data-form-field-id="thq_interests[]_DMBQ"
                          />
                          <span>
                            {' '}
                            Food
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_7G9e"
                            name="interests[]"
                            value="Adventure"
                            data-form-field-id="thq_interests[]_7G9e"
                          />
                          <span>
                            {' '}
                            Adventure
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_w-C6"
                            name="interests[]"
                            value="Wildlife"
                            data-form-field-id="thq_interests[]_w-C6"
                          />
                          <span>
                            {' '}
                            Wildlife
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_4zdS"
                            name="interests[]"
                            value="Shopping"
                            data-form-field-id="thq_interests[]_4zdS"
                          />
                          <span>
                            {' '}
                            Shopping
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_lbg2"
                            name="interests[]"
                            value="Nightlife"
                            data-form-field-id="thq_interests[]_lbg2"
                          />
                          <span>
                            {' '}
                            Nightlife
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_interests[]_b5tz"
                            name="interests[]"
                            value="Wellness"
                            data-form-field-id="thq_interests[]_b5tz"
                          />
                          <span>
                            {' '}
                            Wellness
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="ip-budget">12. Total budget USD</label>
                      <select
                        id="ip-budget"
                        name="budget"
                        data-form-field-id="ip-budget"
                      >
                        <option value="&lt;$1k">&lt;$1k</option>
                        <option value="$1k–$3k">$1k–$3k</option>
                        <option value="$3k–$6k">$3k–$6k</option>
                        <option value="$6k–$10k">$6k–$10k</option>
                        <option value="$10k+">$10k+</option>
                        <option value="Need quote">Need quote</option>
                      </select>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="ip-req">13. Special requirements</label>
                      <textarea
                        id="ip-req"
                        name="special_req"
                        rows="4"
                        data-form-field-id="ip-req"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="Travel Insurance"
                  className="enquiry-form-thq-form-section-elm5 form-section service-specific"
                >
                  <h2 className="section-title">Insurance Details</h2>
                  <div className="page1-form-grid">
                    <div className="form-field">
                      <label htmlFor="ti-type">5. Insurance type</label>
                      <select
                        id="ti-type"
                        name="ins_type"
                        data-form-field-id="ti-type"
                      >
                        <option value="Single Trip">Single Trip</option>
                        <option value="Annual">Annual</option>
                        <option value="Student">Student</option>
                        <option value="Group">Group</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Medical">Medical</option>
                        <option value="Cancellation">Cancellation</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="ti-dest">6. Destination</label>
                      <input
                        type="text"
                        id="ti-dest"
                        name="destination"
                        data-form-field-id="ti-dest"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="ti-dep">7. Departure date</label>
                      <input
                        type="date"
                        id="ti-dep"
                        name="departure_date"
                        data-form-field-id="ti-dep"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="ti-ret">8. Return date</label>
                      <input
                        type="date"
                        id="ti-ret"
                        name="return_date"
                        data-form-field-id="ti-ret"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="ti-count">9. Travellers</label>
                      <select
                        id="ti-count"
                        name="traveller_count"
                        data-form-field-id="ti-count"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="Family">Family</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label>10. Pre-existing condition</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_condition_9JcO"
                            name="condition"
                            value="No"
                            data-form-field-id="thq_condition_9JcO"
                          />
                          <span>
                            {' '}
                            No
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_condition_Ky1f"
                            name="condition"
                            value="Minor"
                            data-form-field-id="thq_condition_Ky1f"
                          />
                          <span>
                            {' '}
                            Minor
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_condition_v-1M"
                            name="condition"
                            value="Serious"
                            data-form-field-id="thq_condition_v-1M"
                          />
                          <span>
                            {' '}
                            Serious
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label>11. Coverage needs</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_4ZZa"
                            name="coverage[]"
                            value="Medical"
                            data-form-field-id="thq_coverage[]_4ZZa"
                          />
                          <span>
                            {' '}
                            Medical
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_OS2P"
                            name="coverage[]"
                            value="Cancellation"
                            data-form-field-id="thq_coverage[]_OS2P"
                          />
                          <span>
                            {' '}
                            Cancellation
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_LRFu"
                            name="coverage[]"
                            value="Baggage"
                            data-form-field-id="thq_coverage[]_LRFu"
                          />
                          <span>
                            {' '}
                            Baggage
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_prj0"
                            name="coverage[]"
                            value="Delays"
                            data-form-field-id="thq_coverage[]_prj0"
                          />
                          <span>
                            {' '}
                            Delays
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_KuWA"
                            name="coverage[]"
                            value="Evacuation"
                            data-form-field-id="thq_coverage[]_KuWA"
                          />
                          <span>
                            {' '}
                            Evacuation
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_WPFd"
                            name="coverage[]"
                            value="Adventure sports"
                            data-form-field-id="thq_coverage[]_WPFd"
                          />
                          <span>
                            {' '}
                            Adventure sports
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_coverage[]_aqrz"
                            name="coverage[]"
                            value="COVID"
                            data-form-field-id="thq_coverage[]_aqrz"
                          />
                          <span>
                            {' '}
                            COVID
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="ti-notes">12. Additional notes</label>
                      <textarea
                        id="ti-notes"
                        name="notes"
                        rows="4"
                        data-form-field-id="ti-notes"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="Tour Packages &amp; Guided Experiences"
                  className="enquiry-form-thq-form-section-elm6 form-section service-specific"
                >
                  <h2 className="section-title">Tour Details</h2>
                  <div className="page1-form-grid">
                    <div className="form-field">
                      <label htmlFor="tp-type">5. Tour type</label>
                      <select
                        id="tp-type"
                        name="tour_type"
                        data-form-field-id="tp-type"
                      >
                        <option value="Private">Private</option>
                        <option value="Small Group">Small Group</option>
                        <option value="Large Group">Large Group</option>
                        <option value="Self-Guided">Self-Guided</option>
                        <option value="Custom Package">Custom Package</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="tp-dest">6. Destination(s)</label>
                      <input
                        type="text"
                        id="tp-dest"
                        name="destinations"
                        data-form-field-id="tp-dest"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="tp-dur">7. Duration</label>
                      <select
                        id="tp-dur"
                        name="duration"
                        data-form-field-id="tp-dur"
                      >
                        <option value="3–5d">3–5d</option>
                        <option value="6–9d">6–9d</option>
                        <option value="10–14d">10–14d</option>
                        <option value="15–21d">15–21d</option>
                        <option value="22d+">22d+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="tp-date">8. Travel date</label>
                      <input
                        type="text"
                        id="tp-date"
                        name="travel_date"
                        data-form-field-id="tp-date"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="tp-size">9. Group size</label>
                      <select
                        id="tp-size"
                        name="group_size"
                        data-form-field-id="tp-size"
                      >
                        <option value="1-2">1-2</option>
                        <option value="3-5">3-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21+">21+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="tp-budget">10. Budget per person</label>
                      <select
                        id="tp-budget"
                        name="budget_pp"
                        data-form-field-id="tp-budget"
                      >
                        <option value="&lt;$500">&lt;$500</option>
                        <option value="$500–$1.5k">$500–$1.5k</option>
                        <option value="$1.5k–$3k">$1.5k–$3k</option>
                        <option value="$3k–$5k">$3k–$5k</option>
                        <option value="$5k+">$5k+</option>
                        <option value="Need quote">Need quote</option>
                      </select>
                    </div>
                    <div className="form-field full-width">
                      <label>11. Experience types</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_exp[]_tOsq"
                            name="exp[]"
                            value="Beaches"
                            data-form-field-id="thq_exp[]_tOsq"
                          />
                          <span>
                            {' '}
                            Beaches
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_exp[]_MAht"
                            name="exp[]"
                            value="Safari"
                            data-form-field-id="thq_exp[]_MAht"
                          />
                          <span>
                            {' '}
                            Safari
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_exp[]_cLyj"
                            name="exp[]"
                            value="Culture"
                            data-form-field-id="thq_exp[]_cLyj"
                          />
                          <span>
                            {' '}
                            Culture
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_exp[]_z2TR"
                            name="exp[]"
                            value="City"
                            data-form-field-id="thq_exp[]_z2TR"
                          />
                          <span>
                            {' '}
                            City
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_exp[]_laBB"
                            name="exp[]"
                            value="Mountain"
                            data-form-field-id="thq_exp[]_laBB"
                          />
                          <span>
                            {' '}
                            Mountain
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label>12. Inclusions wanted</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_1qXx"
                            name="inclusions[]"
                            value="Flights"
                            data-form-field-id="thq_inclusions[]_1qXx"
                          />
                          <span>
                            {' '}
                            Flights
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_1uht"
                            name="inclusions[]"
                            value="Accommodation"
                            data-form-field-id="thq_inclusions[]_1uht"
                          />
                          <span>
                            {' '}
                            Accommodation
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_EgtO"
                            name="inclusions[]"
                            value="Transport"
                            data-form-field-id="thq_inclusions[]_EgtO"
                          />
                          <span>
                            {' '}
                            Transport
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_uA3C"
                            name="inclusions[]"
                            value="Meals"
                            data-form-field-id="thq_inclusions[]_uA3C"
                          />
                          <span>
                            {' '}
                            Meals
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_RzjQ"
                            name="inclusions[]"
                            value="Excursions"
                            data-form-field-id="thq_inclusions[]_RzjQ"
                          />
                          <span>
                            {' '}
                            Excursions
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_J1NO"
                            name="inclusions[]"
                            value="Insurance"
                            data-form-field-id="thq_inclusions[]_J1NO"
                          />
                          <span>
                            {' '}
                            Insurance
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_inclusions[]_W3w2"
                            name="inclusions[]"
                            value="Visa"
                            data-form-field-id="thq_inclusions[]_W3w2"
                          />
                          <span>
                            {' '}
                            Visa
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="tp-req">13. Special requests</label>
                      <textarea
                        id="tp-req"
                        name="special_requests"
                        rows="4"
                        data-form-field-id="tp-req"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="Airport Transfer Arrangements"
                  className="enquiry-form-thq-form-section-elm7 form-section service-specific"
                >
                  <h2 className="section-title">Transfer Logistics</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Transfer type</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_DPrm"
                            name="transfer_type"
                            value="Arrival"
                            data-form-field-id="thq_transfer_type_DPrm"
                          />
                          <span>
                            {' '}
                            Arrival
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_rYD2"
                            name="transfer_type"
                            value="Departure"
                            data-form-field-id="thq_transfer_type_rYD2"
                          />
                          <span>
                            {' '}
                            Departure
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_59Sx"
                            name="transfer_type"
                            value="Both"
                            data-form-field-id="thq_transfer_type_59Sx"
                          />
                          <span>
                            {' '}
                            Both
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_4dsu"
                            name="transfer_type"
                            value="Inter-city"
                            data-form-field-id="thq_transfer_type_4dsu"
                          />
                          <span>
                            {' '}
                            Inter-city
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_OxYA"
                            name="transfer_type"
                            value="Hotel-to-attraction"
                            data-form-field-id="thq_transfer_type_OxYA"
                          />
                          <span>
                            {' '}
                            Hotel-to-attraction
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-airport">6. Airport name</label>
                      <input
                        type="text"
                        id="at-airport"
                        name="airport"
                        data-form-field-id="at-airport"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-date">7. Transfer date</label>
                      <input
                        type="date"
                        id="at-date"
                        name="date"
                        data-form-field-id="at-date"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-flight">8. Flight number</label>
                      <input
                        type="text"
                        id="at-flight"
                        name="flight"
                        data-form-field-id="at-flight"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-time">9. Time</label>
                      <input
                        type="text"
                        id="at-time"
                        name="time"
                        data-form-field-id="at-time"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-pax">10. Passengers</label>
                      <select
                        id="at-pax"
                        name="passengers"
                        data-form-field-id="at-pax"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13+">13+</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="at-luggage">11. Luggage</label>
                      <select
                        id="at-luggage"
                        name="luggage"
                        data-form-field-id="at-luggage"
                      >
                        <option value="Light">Light</option>
                        <option value="Standard">Standard</option>
                        <option value="Heavy">Heavy</option>
                      </select>
                    </div>
                    <div className="form-field full-width">
                      <label>12. Vehicle</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_ZT0X"
                            name="vehicle"
                            value="Economy"
                            data-form-field-id="thq_vehicle_ZT0X"
                          />
                          <span>
                            {' '}
                            Economy
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_corJ"
                            name="vehicle"
                            value="Business"
                            data-form-field-id="thq_vehicle_corJ"
                          />
                          <span>
                            {' '}
                            Business
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_GMY1"
                            name="vehicle"
                            value="SUV"
                            data-form-field-id="thq_vehicle_GMY1"
                          />
                          <span>
                            {' '}
                            SUV
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_Dbpt"
                            name="vehicle"
                            value="Minivan"
                            data-form-field-id="thq_vehicle_Dbpt"
                          />
                          <span>
                            {' '}
                            Minivan
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_itkq"
                            name="vehicle"
                            value="Minibus"
                            data-form-field-id="thq_vehicle_itkq"
                          />
                          <span>
                            {' '}
                            Minibus
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_GMQQ"
                            name="vehicle"
                            value="No preference"
                            data-form-field-id="thq_vehicle_GMQQ"
                          />
                          <span>
                            {' '}
                            No preference
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="at-pickup">13. Pickup address</label>
                      <input
                        type="text"
                        id="at-pickup"
                        name="pickup"
                        data-form-field-id="at-pickup"
                      />
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="at-req">14. Special requests</label>
                      <textarea
                        id="at-req"
                        name="special_requests"
                        rows="4"
                        data-form-field-id="at-req"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div
                  data-service="24/7 Travel Support &amp; Emergency Assistance"
                  className="enquiry-form-thq-form-section-elm8 form-section service-specific"
                >
                  <h2 className="section-title">Emergency Support</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Support type</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_UrGJ"
                            name="support[]"
                            value="Lost docs"
                            data-form-field-id="thq_support[]_UrGJ"
                          />
                          <span>
                            {' '}
                            Lost docs
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_4k4H"
                            name="support[]"
                            value="Medical"
                            data-form-field-id="thq_support[]_4k4H"
                          />
                          <span>
                            {' '}
                            Medical
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_2sRE"
                            name="support[]"
                            value="Flight rebooking"
                            data-form-field-id="thq_support[]_2sRE"
                          />
                          <span>
                            {' '}
                            Flight rebooking
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_tpaG"
                            name="support[]"
                            value="Accommodation"
                            data-form-field-id="thq_support[]_tpaG"
                          />
                          <span>
                            {' '}
                            Accommodation
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_Fcik"
                            name="support[]"
                            value="Security concern"
                            data-form-field-id="thq_support[]_Fcik"
                          />
                          <span>
                            {' '}
                            Security concern
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_s2tf"
                            name="support[]"
                            value="Emergency funds"
                            data-form-field-id="thq_support[]_s2tf"
                          />
                          <span>
                            {' '}
                            Emergency funds
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_lOPw"
                            name="support[]"
                            value="Embassy contact"
                            data-form-field-id="thq_support[]_lOPw"
                          />
                          <span>
                            {' '}
                            Embassy contact
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_yJhl"
                            name="support[]"
                            value="General crisis"
                            data-form-field-id="thq_support[]_yJhl"
                          />
                          <span>
                            {' '}
                            General crisis
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="sup-loc">6. Current location</label>
                      <input
                        type="text"
                        id="sup-loc"
                        name="location"
                        data-form-field-id="sup-loc"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="sup-dest">7. Destination</label>
                      <input
                        type="text"
                        id="sup-dest"
                        name="destination"
                        data-form-field-id="sup-dest"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="sup-date">8. Date of incident</label>
                      <input
                        type="date"
                        id="sup-date"
                        name="incident_date"
                        data-form-field-id="sup-date"
                      />
                    </div>
                    <div className="form-field">
                      <label>9. Urgency</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_emergency_level_5st1"
                            name="emergency_level"
                            value="🚨 Emergency"
                            data-form-field-id="thq_emergency_level_5st1"
                          />
                          <span>
                            {' '}
                            🚨 Emergency
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_emergency_level_R4SL"
                            name="emergency_level"
                            value="⚠️ Urgent"
                            data-form-field-id="thq_emergency_level_R4SL"
                          />
                          <span>
                            {' '}
                            ⚠️ Urgent
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_emergency_level_wu2O"
                            name="emergency_level"
                            value="📋 Non-urgent"
                            data-form-field-id="thq_emergency_level_wu2O"
                          />
                          <span>
                            {' '}
                            📋 Non-urgent
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field">
                      <label>10. Preferred contact</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            id="thq_contact_pref_Vrdw"
                            name="contact_pref"
                            value="Phone"
                            data-form-field-id="thq_contact_pref_Vrdw"
                          />
                          <span>
                            {' '}
                            Phone
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_contact_pref_OieY"
                            name="contact_pref"
                            value="WhatsApp"
                            data-form-field-id="thq_contact_pref_OieY"
                          />
                          <span>
                            {' '}
                            WhatsApp
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_contact_pref_BDV1"
                            name="contact_pref"
                            value="Email"
                            data-form-field-id="thq_contact_pref_BDV1"
                          />
                          <span>
                            {' '}
                            Email
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                        <label>
                          <input
                            type="radio"
                            id="thq_contact_pref_PmPT"
                            name="contact_pref"
                            value="Any"
                            data-form-field-id="thq_contact_pref_PmPT"
                          />
                          <span>
                            {' '}
                            Any
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="form-field full-width">
                      <label htmlFor="sup-desc">
                        11. Situation description
                      </label>
                      <textarea
                        id="sup-desc"
                        name="situation"
                        rows="4"
                        data-form-field-id="sup-desc"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button
                  id="thq_button_3g0S"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_3g0S"
                  className="btn btn-accent btn-xl"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </section>
        <section
          id="step-3"
          className="enquiry-form-thq-success-state-elm success-state"
        >
          <div className="success-container">
            <div className="success-icon">
              <svg
                width="64"
                xmlns="http://www.w3.org/2000/svg"
                height="64"
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
            </div>
            <h2>
              <span>Thank you,</span>
              <span>
                !
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h2>
            <div className="success-message">
              <p className="section-content">
                <span>Your enquiry for</span>
                <span id="display-service"></span>
                <span>has been received.</span>
              </p>
              <p className="section-content">
                <span>We&apos;ve sent a confirmation to</span>
                <span
                  id="display-email"
                  className="enquiry-form-text325"
                ></span>
                <span>
                  {' '}
                  .
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                Our team will contact you within 24 hours.
              </p>
            </div>
            <div className="success-footer">
              <p className="section-subtitle">Need immediate assistance?</p>
              <a href="tel:+2348062163748">
                <div className="btn-lg btn btn-outline">
                  <span>+234 806 216 3748</span>
                </div>
              </a>
            </div>
            <button onclick="window.location.reload()" className="btn btn-link">
              Start New Enquiry
            </button>
          </div>
        </section>
        <div className="enquiry-form-container3">
          <div className="enquiry-form-container4">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes scaleIn {from {transform: scale(0);}
to {transform: scale(1);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="enquiry-form-container5">
          <div className="enquiry-form-container6">
            <Script
              html={`<script>
        ;(function () {
          const step1 = document.getElementById("step-1")
          const step2 = document.getElementById("step-2")
          const step3 = document.getElementById("step-3")
          const serviceCards = document.querySelectorAll(".service-card")
          const continueBtn = document.getElementById("btn-continue-step-1")
          const backBtn = document.getElementById("btn-back-step-2")
          const form = document.getElementById("enquiry-form")
          const hiddenServiceInput = document.getElementById("hidden-service")
          const hiddenSubjectInput = document.getElementById("hidden-subject")
          const conditionalSections = document.querySelectorAll(".service-specific")
          let selectedService = ""
          let selectedIcon = ""
          // Step 1: Service Selection
          serviceCards.forEach((card) => {
            card.addEventListener("click", () => {
              serviceCards.forEach((c) => c.classList.remove("selected"))
              card.classList.add("selected")
              selectedService = card.getAttribute("data-service")
              selectedIcon = card.getAttribute("data-icon")
              continueBtn.disabled = false
            })
          })
          continueBtn.addEventListener("click", () => {
            if (!selectedService) return
            // Set hidden fields
            hiddenServiceInput.value = selectedService
            // Update conditional logic
            conditionalSections.forEach((section) => {
              if (section.getAttribute("data-service") === selectedService) {
                section.style.display = "block"
                // Make fields required if needed (optional based on UX)
              } else {
                section.style.display = "none"
              }
            })
            // Transition to Step 2
            step1.style.opacity = "0"
            setTimeout(() => {
              step1.style.display = "none"
              step2.style.display = "flex"
              // Force reflow to ensure proper layout calculation
              void step2.offsetHeight
              step2.style.opacity = "1"
              window.scrollTo({ top: 0, behavior: "smooth" })
            }, 400)
          })
          // Back Navigation
          backBtn.addEventListener("click", () => {
            step2.style.opacity = "0"
            setTimeout(() => {
              step2.style.display = "none"
              step1.style.display = "flex"
              // Force reflow to ensure proper layout calculation
              void step1.offsetHeight
              step1.style.opacity = "1"
              window.scrollTo({ top: 0, behavior: "smooth" })
            }, 400)
          })
          // Form Submission
          form.addEventListener("submit", async (e) => {
            e.preventDefault()
            const name = document.getElementById("full_name").value
            const email = document.getElementById("email").value
            // Update subject line dynamically
            hiddenSubjectInput.value = \`R&B Travels Enquiry – \\\${selectedService} – \\\${name}\`
            // Show loading state on button
            const submitBtn = form.querySelector('button[type="submit"]')
            const originalBtnText = submitBtn.innerText
            submitBtn.innerText = "Sending..."
            submitBtn.disabled = true
            try {
              const formData = new FormData(form)
              const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              })
              if (response.ok) {
                // Prepare Success State
                document.getElementById("display-name").innerText = name
                document.getElementById("display-email").innerText = email
                document.getElementById("display-service").innerText = selectedService
                // Transition to Step 3
                step2.style.opacity = "0"
                setTimeout(() => {
                  step2.style.display = "none"
                  step3.style.display = "flex"
                  // Force reflow to ensure proper layout calculation
                  void step3.offsetHeight
                  step3.style.opacity = "1"
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }, 400)
              } else {
                alert("Something went wrong. Please try again or contact us directly.")
                submitBtn.innerText = originalBtnText
                submitBtn.disabled = false
              }
            } catch (error) {
              console.error("Submission error:", error)
              alert("Connection error. Please check your internet and try again.")
              submitBtn.innerText = originalBtnText
              submitBtn.disabled = false
            }
          })
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="enquiry-form-container8">
            <Script
              html={`<style>
@media (min-width: 768px) {
.page-hero {
  padding: var(--spacing-3xl) var(--spacing-lg);
}
.page-hero-image img {
  max-height: 360px;
  min-height: 280px;
}
}

@media (min-width: 992px) {
.page-hero {
  padding: var(--spacing-4xl) var(--spacing-lg);
}
.page-hero-image {
  margin: 0 auto;
  max-width: 600px;
}
.page-hero-image img {
  max-height: 420px;
  min-height: 320px;
}
}

@media (min-width: 768px) {
.thq-page-hero-title-elm {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-lg);
}
.thq-page-hero-subtitle-elm {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-xl);
}
.thq-page-hero-divider-elm {
  margin-bottom: var(--spacing-xl);
}
.thq-page-hero-description-elm {
  font-size: var(--font-size-base);
}
.thq-page-hero-container-elm {
  gap: var(--spacing-3xl);
}
}

@media (min-width: 992px) {
.thq-page-hero-container-elm {
  gap: var(--spacing-4xl);
  grid-template-columns: 1fr 1fr;
  text-align: left;
}
.thq-page-hero-title-elm {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}
.thq-page-hero-subtitle-elm {
  max-width: 540px;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: var(--spacing-xl);
}
.thq-page-hero-icon-elm {
  width: 64px;
  height: 64px;
  margin: 0 0 var(--spacing-xl) 0;
}
.thq-page-hero-divider-elm {
  margin: 0 0 var(--spacing-xl) 0;
}
.thq-page-hero-description-elm {
  max-width: 500px;
  margin-left: 0;
  margin-right: 0;
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .enquiry-form-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .enquiry-form-thq-page-hero-container-elm {
            gap: var(--spacing-xl);
            margin: 0 auto;
            display: grid;
            z-index: 1;
            position: relative;
            max-width: var(--content-max-width);
            text-align: center;
            align-items: center;
            grid-template-columns: 1fr;
          }
          .enquiry-form-thq-page-hero-content-elm {
            color: #ffffff;
          }
          .enquiry-form-thq-page-hero-icon-elm {
            color: #f59e0b;
            width: 48px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            height: 48px;
            margin: 0 auto var(--spacing-lg);
            display: flex;
            background: rgba(255, 255, 255, 0.12);
            align-items: center;
            border-radius: var(--border-radius-lg);
            backdrop-filter: blur(8px);
            justify-content: center;
          }
          .enquiry-form-thq-page-hero-title-elm {
            color: #ffffff;
            font-size: var(--font-size-2xl);
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-heading);
            line-height: var(--line-height-heading);
            margin-bottom: var(--spacing-md);
            letter-spacing: var(--letter-spacing-heading);
          }
          .enquiry-form-thq-page-hero-subtitle-elm {
            color: #e2e8f0;
            font-size: var(--font-size-lg);
            max-width: 100%;
            font-family: var(--font-family-heading);
            font-weight: var(--font-weight-medium);
            line-height: 1.4;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: var(--spacing-lg);
          }
          .enquiry-form-thq-page-hero-divider-elm {
            width: 60px;
            height: 3px;
            margin: 0 auto var(--spacing-lg);
            background: linear-gradient(90deg, #f59e0b, #e0a93a);
            border-radius: 2px;
          }
          .enquiry-form-thq-page-hero-description-elm {
            color: rgba(255, 255, 255, 0.8);
            font-size: var(--font-size-sm);
            max-width: 100%;
            font-family: var(--font-family-body);
            font-weight: var(--font-weight-body);
            line-height: var(--line-height-body);
            margin-left: auto;
            margin-right: auto;
          }
          .enquiry-form-thq-dynamic-enquiry-form-elm {
            display: none;
          }
          .enquiry-form-thq-form-section-elm2 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm3 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm4 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm5 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm6 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm7 {
            display: none;
          }
          .enquiry-form-thq-form-section-elm8 {
            display: none;
          }
          .enquiry-form-thq-success-state-elm {
            display: none;
          }
          .enquiry-form-text325 {
            color: var(--color-surface);
            font-weight: 700;
          }
          .enquiry-form-container3 {
            display: none;
          }
          .enquiry-form-container4 {
            display: contents;
          }
          .enquiry-form-container5 {
            display: none;
          }
          .enquiry-form-container6 {
            display: contents;
          }
          .enquiry-form-container8 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default EnquiryForm
