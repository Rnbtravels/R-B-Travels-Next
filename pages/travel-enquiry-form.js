import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const TravelEnquiryForm = (props) => {
  return (
    <>
      <div className="travel-enquiry-form-container1">
        <Head>
          <title>Travel-Enquiry-Form - rnvtravels</title>
          <meta
            property="og:title"
            content="Travel-Enquiry-Form - rnvtravels"
          />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/travel-enquiry-form"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/travel-enquiry-form"
          />
        </Head>
        <Navigation></Navigation>
        <section id="step-1" className="service-selector">
          <div className="service-selector-container">
            <div className="service-selector-header">
              <h1 className="hero-title">Start Your Journey</h1>
              <p className="section-subtitle">
                Select a service to begin your enquiry with R&amp;B Travels
              </p>
            </div>
            <div className="service-selector-grid">
              <button
                data-service="Study Abroad"
                data-icon="🎓"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm1">
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
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path>
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">1. Study Abroad</span>
              </button>
              <button
                data-service="Travel Documentation"
                data-icon="📄"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm2">
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
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">2. Travel Documentation</span>
              </button>
              <button
                data-service="Comprehensive Itinerary Planning"
                data-icon="🗺️"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm3">
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
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </g>
                  </svg>
                </div>
                <span className="section-content">
                  3. Comprehensive Itinerary Planning
                </span>
              </button>
              <button
                data-service="Travel Insurance"
                data-icon="🛡️"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm4">
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
                </div>
                <span className="section-content">4. Travel Insurance</span>
              </button>
              <button
                data-service="Tour Packages &amp; Guided Experiences"
                data-icon="✈️"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm5">
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
                      d="M2 22h20M6.36 17.4L4 17l-2-4l1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12L5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
                    ></path>
                  </svg>
                </div>
                <span className="section-content">
                  5. Tour Packages &amp; Guided Experiences
                </span>
              </button>
              <button
                data-service="Airport Transfer Arrangements"
                data-icon="🚐"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm6">
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
                      <path d="M4 6L2 7m8-1h4m8 1l-2-1"></path>
                      <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                      <path d="M4 11h16M8 15h.01M16 15h.01M6 19v2m12 0v-2"></path>
                    </g>
                  </svg>
                </div>
                <span className="section-content">
                  6. Airport Transfer Arrangements
                </span>
              </button>
              <button
                data-service="24/7 Travel Support &amp; Emergency Assistance"
                data-icon="🆘"
                className="page1-service-card"
              >
                <div className="travel-enquiry-form-thq-service-card-icon-elm7">
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
                      <path d="m4.93 4.93l4.24 4.24m5.66 0l4.24-4.24m-4.24 9.9l4.24 4.24m-9.9-4.24l-4.24 4.24"></path>
                      <circle cx="12" cy="12" r="4"></circle>
                    </g>
                  </svg>
                </div>
                <span className="section-content">
                  7. 24/7 Travel Support &amp; Emergency Assistance
                </span>
              </button>
            </div>
            <div className="service-selector-actions">
              <button
                id="btn-continue-step-1"
                disabled="true"
                className="btn btn-accent btn-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </section>
        <section
          id="step-2"
          className="travel-enquiry-form-thq-dynamic-enquiry-form-elm dynamic-enquiry-form"
        >
          <div className="form-container">
            <button id="btn-back-step-2" className="btn-back">
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
              action="https://api.web3forms.com/submit"
              method="POST"
              id="enquiry-form"
              data-form-id="b23835c1-ae81-4385-9d2a-a32d276f3fea"
            >
              <input
                type="hidden"
                name="access_key"
                value="YOUR_WEB3FORMS_ACCESS_KEY_HERE"
                id="thq_access_key_z0yH"
                data-form-field-id="thq_access_key_z0yH"
              />
              <input
                type="hidden"
                name="subject"
                id="hidden-subject"
                value="R&amp;B Travels Enquiry"
                data-form-field-id="hidden-subject"
              />
              <input
                type="hidden"
                name="from_name"
                value="R&amp;B Travels Website"
                id="thq_from_name_O45T"
                data-form-field-id="thq_from_name_O45T"
              />
              <input
                type="hidden"
                name="selected_service"
                id="hidden-service"
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
                  className="travel-enquiry-form-thq-form-section-elm2 form-section service-specific"
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
                            name="school_status"
                            value="Yes specific"
                            id="thq_school_status_jteC"
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
                            name="school_status"
                            value="Have shortlist"
                            id="thq_school_status_5vFr"
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
                            name="school_status"
                            value="Need guidance"
                            id="thq_school_status_nenu"
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
                            name="visa_support"
                            value="Full support"
                            id="thq_visa_support_k7aI"
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
                            name="visa_support"
                            value="Documents only"
                            id="thq_visa_support_CdIW"
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
                            name="visa_support"
                            value="No"
                            id="thq_visa_support_ovgu"
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
                  className="travel-enquiry-form-thq-form-section-elm3 form-section service-specific"
                >
                  <h2 className="section-title">Documentation Requirements</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Document types needed</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            name="docs[]"
                            value="Passport"
                            id="thq_docs[]_B8TU"
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
                            name="docs[]"
                            value="Visa Application"
                            id="thq_docs[]_3DOd"
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
                            name="docs[]"
                            value="Proof of Funds"
                            id="thq_docs[]_out_"
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
                            name="docs[]"
                            value="Travel Itinerary"
                            id="thq_docs[]_mfOL"
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
                            name="docs[]"
                            value="Hotel Booking"
                            id="thq_docs[]_DVVX"
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
                            name="docs[]"
                            value="Flight Reservation"
                            id="thq_docs[]_02PO"
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
                            name="docs[]"
                            value="Reference Letter"
                            id="thq_docs[]_mE-3"
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
                            name="docs[]"
                            value="Other"
                            id="thq_docs[]_tobo"
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
                            name="urgency"
                            value="Within 1 week"
                            id="thq_urgency_0kLu"
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
                            name="urgency"
                            value="2–4 weeks"
                            id="thq_urgency_p7cj"
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
                            name="urgency"
                            value="1–3 months"
                            id="thq_urgency_0k-Y"
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
                            name="denial"
                            value="No"
                            id="thq_denial__ygt"
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
                            name="denial"
                            value="Yes same country"
                            id="thq_denial_F1kz"
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
                            name="denial"
                            value="Yes different country"
                            id="thq_denial_nz3Q"
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
                  className="travel-enquiry-form-thq-form-section-elm4 form-section service-specific"
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
                            name="style"
                            value="Budget"
                            id="thq_style_U16q"
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
                            name="style"
                            value="Mid-range"
                            id="thq_style_yFbu"
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
                            name="style"
                            value="Luxury"
                            id="thq_style_-qAK"
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
                            name="interests[]"
                            value="Beaches"
                            id="thq_interests[]_-EMl"
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
                            name="interests[]"
                            value="History"
                            id="thq_interests[]_Llt7"
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
                            name="interests[]"
                            value="Food"
                            id="thq_interests[]_DMBQ"
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
                            name="interests[]"
                            value="Adventure"
                            id="thq_interests[]_7G9e"
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
                            name="interests[]"
                            value="Wildlife"
                            id="thq_interests[]_w-C6"
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
                            name="interests[]"
                            value="Shopping"
                            id="thq_interests[]_4zdS"
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
                            name="interests[]"
                            value="Nightlife"
                            id="thq_interests[]_lbg2"
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
                            name="interests[]"
                            value="Wellness"
                            id="thq_interests[]_b5tz"
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
                  className="travel-enquiry-form-thq-form-section-elm5 form-section service-specific"
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
                            name="condition"
                            value="No"
                            id="thq_condition_9JcO"
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
                            name="condition"
                            value="Minor"
                            id="thq_condition_Ky1f"
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
                            name="condition"
                            value="Serious"
                            id="thq_condition_v-1M"
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
                            name="coverage[]"
                            value="Medical"
                            id="thq_coverage[]_4ZZa"
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
                            name="coverage[]"
                            value="Cancellation"
                            id="thq_coverage[]_OS2P"
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
                            name="coverage[]"
                            value="Baggage"
                            id="thq_coverage[]_LRFu"
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
                            name="coverage[]"
                            value="Delays"
                            id="thq_coverage[]_prj0"
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
                            name="coverage[]"
                            value="Evacuation"
                            id="thq_coverage[]_KuWA"
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
                            name="coverage[]"
                            value="Adventure sports"
                            id="thq_coverage[]_WPFd"
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
                            name="coverage[]"
                            value="COVID"
                            id="thq_coverage[]_aqrz"
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
                  className="travel-enquiry-form-thq-form-section-elm6 form-section service-specific"
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
                            name="exp[]"
                            value="Beaches"
                            id="thq_exp[]_tOsq"
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
                            name="exp[]"
                            value="Safari"
                            id="thq_exp[]_MAht"
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
                            name="exp[]"
                            value="Culture"
                            id="thq_exp[]_cLyj"
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
                            name="exp[]"
                            value="City"
                            id="thq_exp[]_z2TR"
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
                            name="exp[]"
                            value="Mountain"
                            id="thq_exp[]_laBB"
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
                            name="inclusions[]"
                            value="Flights"
                            id="thq_inclusions[]_1qXx"
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
                            name="inclusions[]"
                            value="Accommodation"
                            id="thq_inclusions[]_1uht"
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
                            name="inclusions[]"
                            value="Transport"
                            id="thq_inclusions[]_EgtO"
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
                            name="inclusions[]"
                            value="Meals"
                            id="thq_inclusions[]_uA3C"
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
                            name="inclusions[]"
                            value="Excursions"
                            id="thq_inclusions[]_RzjQ"
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
                            name="inclusions[]"
                            value="Insurance"
                            id="thq_inclusions[]_J1NO"
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
                            name="inclusions[]"
                            value="Visa"
                            id="thq_inclusions[]_W3w2"
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
                  className="travel-enquiry-form-thq-form-section-elm7 form-section service-specific"
                >
                  <h2 className="section-title">Transfer Logistics</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Transfer type</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            name="transfer_type"
                            value="Arrival"
                            id="thq_transfer_type_DPrm"
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
                            name="transfer_type"
                            value="Departure"
                            id="thq_transfer_type_rYD2"
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
                            name="transfer_type"
                            value="Both"
                            id="thq_transfer_type_59Sx"
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
                            name="transfer_type"
                            value="Inter-city"
                            id="thq_transfer_type_4dsu"
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
                            name="transfer_type"
                            value="Hotel-to-attraction"
                            id="thq_transfer_type_OxYA"
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
                            name="vehicle"
                            value="Economy"
                            id="thq_vehicle_ZT0X"
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
                            name="vehicle"
                            value="Business"
                            id="thq_vehicle_corJ"
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
                            name="vehicle"
                            value="SUV"
                            id="thq_vehicle_GMY1"
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
                            name="vehicle"
                            value="Minivan"
                            id="thq_vehicle_Dbpt"
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
                            name="vehicle"
                            value="Minibus"
                            id="thq_vehicle_itkq"
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
                            name="vehicle"
                            value="No preference"
                            id="thq_vehicle_GMQQ"
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
                  className="travel-enquiry-form-thq-form-section-elm8 form-section service-specific"
                >
                  <h2 className="section-title">Emergency Support</h2>
                  <div className="page1-form-grid">
                    <div className="form-field full-width">
                      <label>5. Support type</label>
                      <div className="checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            name="support[]"
                            value="Lost docs"
                            id="thq_support[]_UrGJ"
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
                            name="support[]"
                            value="Medical"
                            id="thq_support[]_4k4H"
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
                            name="support[]"
                            value="Flight rebooking"
                            id="thq_support[]_2sRE"
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
                            name="support[]"
                            value="Accommodation"
                            id="thq_support[]_tpaG"
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
                            name="support[]"
                            value="Security concern"
                            id="thq_support[]_Fcik"
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
                            name="support[]"
                            value="Emergency funds"
                            id="thq_support[]_s2tf"
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
                            name="support[]"
                            value="Embassy contact"
                            id="thq_support[]_lOPw"
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
                            name="support[]"
                            value="General crisis"
                            id="thq_support[]_yJhl"
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
                            name="emergency_level"
                            value="🚨 Emergency"
                            id="thq_emergency_level_5st1"
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
                            name="emergency_level"
                            value="⚠️ Urgent"
                            id="thq_emergency_level_R4SL"
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
                            name="emergency_level"
                            value="📋 Non-urgent"
                            id="thq_emergency_level_wu2O"
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
                            name="contact_pref"
                            value="Phone"
                            id="thq_contact_pref_Vrdw"
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
                            name="contact_pref"
                            value="WhatsApp"
                            id="thq_contact_pref_OieY"
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
                            name="contact_pref"
                            value="Email"
                            id="thq_contact_pref_BDV1"
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
                            name="contact_pref"
                            value="Any"
                            id="thq_contact_pref_PmPT"
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
                  type="submit"
                  id="thq_button_3g0S"
                  name="button"
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
          className="travel-enquiry-form-thq-success-state-elm success-state"
        >
          <div className="success-container">
            <div className="success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
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
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
            </div>
            <h2 className="hero-title">Request Received</h2>
            <div className="success-message">
              <p className="section-content">
                <span>
                  {' '}
                  Thank you,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span
                  id="display-name"
                  className="travel-enquiry-form-text320"
                ></span>
                <span>
                  {' '}
                  ! Your enquiry for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span id="display-service"></span>
                <span>
                  {' '}
                  has been successfully sent to our travel consultants.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <p className="section-content">
                <span>
                  {' '}
                  We have also sent a confirmation to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span
                  id="display-email"
                  className="travel-enquiry-form-text325"
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
            </div>
            <div className="success-footer">
              <p className="section-subtitle">Need immediate assistance?</p>
              <a href="tel:+2348062163748">
                <div className="btn btn-lg btn-outline">
                  <span>+234 806 216 3748</span>
                </div>
              </a>
            </div>
            <button onclick="window.location.reload()" className="btn btn-link">
              Start New Enquiry
            </button>
          </div>
        </section>
        <div className="travel-enquiry-form-container3">
          <div className="travel-enquiry-form-container4">
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
        <div className="travel-enquiry-form-container5">
          <div className="travel-enquiry-form-container6">
            <Script
              html={`<script defer data-name="travel-enquiry-logic">
(function(){
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
      step2.style.opacity = "1"
      window.scrollTo(0, 0)
    }, 400)
  })

  // Back Navigation
  backBtn.addEventListener("click", () => {
    step2.style.opacity = "0"
    setTimeout(() => {
      step2.style.display = "none"
      step1.style.display = "flex"
      step1.style.opacity = "1"
      window.scrollTo(0, 0)
    }, 400)
  })

  // Form Submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("full_name").value
    const email = document.getElementById("email").value

    // Update subject line dynamically
    hiddenSubjectInput.value = \`R&B Travels Enquiry – \${selectedService} – \${name}\`

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
          step3.style.opacity = "1"
          window.scrollTo(0, 0)
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
      </div>
      <style jsx>
        {`
          .travel-enquiry-form-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .travel-enquiry-form-thq-service-card-icon-elm1 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm2 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm3 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm4 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm5 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm6 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-service-card-icon-elm7 {
            color: #f59e0b;
            width: 48px;
            height: 48px;
            display: flex;
            background: color-mix(in srgb, #f59e0b, transparent 90%);
            transition: transform 0.3s ease;
            align-items: center;
            border-radius: var(--border-radius-md);
            justify-content: center;
          }
          .travel-enquiry-form-thq-dynamic-enquiry-form-elm {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm2 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm3 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm4 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm5 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm6 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm7 {
            display: none;
          }
          .travel-enquiry-form-thq-form-section-elm8 {
            display: none;
          }
          .travel-enquiry-form-thq-success-state-elm {
            display: none;
          }
          .travel-enquiry-form-text320 {
            color: var(--color-surface);
            font-weight: 700;
          }
          .travel-enquiry-form-text325 {
            color: var(--color-surface);
            font-weight: 700;
          }
          .travel-enquiry-form-container3 {
            display: none;
          }
          .travel-enquiry-form-container4 {
            display: contents;
          }
          .travel-enquiry-form-container5 {
            display: none;
          }
          .travel-enquiry-form-container6 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default TravelEnquiryForm
