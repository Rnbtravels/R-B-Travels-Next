import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const TravelEnquiryForm = (props) => {
  return (
    <>
      <div className="travel-enquiry-form-container1">
        <section id="voyanta-enquiry" className="travel-enquiry-form">
          <div className="travel-enquiry-form__container">
            <header className="travel-enquiry-form__header">
              <h2 className="section-title">
                Start Your Journey with R&amp;B Travels
              </h2>
              <p className="section-content">
                Abuja, Nigeria&apos;s premier luxury travel consultancy. Select
                a service to begin your effortless experience.
              </p>
            </header>
            <div className="travel-enquiry-form__progress">
              <div
                id="progress-bar"
                className="travel-enquiry-form__progress-bar"
              ></div>
              <div className="travel-enquiry-form__steps-indicator">
                <span data-step="1" className="step-dot active"></span>
                <span data-step="2" className="step-dot"></span>
                <span data-step="3" className="step-dot"></span>
              </div>
            </div>
            <form
              id="enquiry-form"
              action="https://api.web3forms.com/submit"
              method="POST"
              data-form-id="438fcd36-1715-4a7c-a883-faafdcfa6672"
              className="travel-enquiry-form__form"
            >
              <input
                type="hidden"
                id="thq_access_key_P-_K"
                name="access_key"
                value="YOUR_ACCESS_KEY_HERE"
                data-form-field-id="thq_access_key_P-_K"
              />
              <input
                type="hidden"
                id="thq_from_name_YGed"
                name="from_name"
                value="R&amp;B Travels Website"
                data-form-field-id="thq_from_name_YGed"
              />
              <input
                type="hidden"
                id="form-subject"
                name="subject"
                value="R&amp;B Travels Enquiry"
                data-form-field-id="form-subject"
              />
              <div id="step-1" className="form-step active">
                <div className="service-grid">
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_El57"
                      name="service"
                      value="Study Abroad"
                      required="true"
                      data-form-field-id="thq_service_El57"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm1">
                      <span className="service-card__emoji">🎓</span>
                      <span className="service-card__name">Study Abroad</span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_qWs9"
                      name="service"
                      value="Travel Documentation"
                      data-form-field-id="thq_service_qWs9"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm2">
                      <span className="service-card__emoji">📄</span>
                      <span className="service-card__name">
                        Travel Documentation
                      </span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_yRaH"
                      name="service"
                      value="Comprehensive Itinerary Planning"
                      data-form-field-id="thq_service_yRaH"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm3">
                      <span className="service-card__emoji">🗺️</span>
                      <span className="service-card__name">
                        Comprehensive Itinerary Planning
                      </span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_xOAL"
                      name="service"
                      value="Travel Insurance"
                      data-form-field-id="thq_service_xOAL"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm4">
                      <span className="service-card__emoji">🛡️</span>
                      <span className="service-card__name">
                        Travel Insurance
                      </span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_WHO8"
                      name="service"
                      value="Tour Packages &amp; Guided Experiences"
                      data-form-field-id="thq_service_WHO8"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm5">
                      <span className="service-card__emoji">✈️</span>
                      <span className="service-card__name">
                        Tour Packages &amp; Guided Experiences
                      </span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_TyDf"
                      name="service"
                      value="Airport Transfer Arrangements"
                      data-form-field-id="thq_service_TyDf"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm6">
                      <span className="service-card__emoji">🚐</span>
                      <span className="service-card__name">
                        Airport Transfer Arrangements
                      </span>
                    </div>
                  </label>
                  <label className="travel-enquiry-form-service-card">
                    <input
                      type="radio"
                      id="thq_service_FxPE"
                      name="service"
                      value="24/7 Travel Support &amp; Emergency Assistance"
                      data-form-field-id="thq_service_FxPE"
                    />
                    <div className="travel-enquiry-form-thq-service-cardcontent-elm7">
                      <span className="service-card__emoji">🆘</span>
                      <span className="service-card__name">
                        24/7 Travel Support &amp; Emergency Assistance
                      </span>
                    </div>
                  </label>
                </div>
                <div className="travel-enquiry-form-form-actions">
                  <button
                    id="btn-continue"
                    name="button"
                    type="button"
                    disabled="true"
                    data-form-field-id="btn-continue"
                    className="btn-lg btn-accent travel-enquiry-form-btn-lg"
                  >
                    <span>Continue</span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
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
              <div id="step-2" className="form-step">
                <div className="travel-enquiry-form-form-section">
                  <h3 className="section-subtitle">Contact Details</h3>
                  <div className="input-group">
                    <div className="travel-enquiry-form-form-field">
                      <label htmlFor="full_name">1. Full Name*</label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required="true"
                        placeholder="John Doe"
                        data-form-field-id="full_name"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label htmlFor="email">2. Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required="true"
                        placeholder="john@example.com"
                        data-form-field-id="email"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label htmlFor="phone">3. Phone/WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+234 ..."
                        data-form-field-id="phone"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
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
                <div id="dynamic-fields">
                  <div data-service="Study Abroad" className="dynamic-group">
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Country of study</label>
                      <input
                        type="text"
                        id="thq_study_country_Ir1Q"
                        name="study_country"
                        data-form-field-id="thq_study_country_Ir1Q"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Level of study</label>
                      <select
                        id="thq_study_level_Xl-O"
                        name="study_level"
                        data-form-field-id="thq_study_level_Xl-O"
                      >
                        <option value="true">Select level...</option>
                        <option>Undergraduate</option>
                        <option>Postgraduate</option>
                        <option>PhD</option>
                        <option>Short Course</option>
                        <option>Language School</option>
                        <option>High School</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>3. School chosen</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_school_status_M-GE"
                            name="school_status"
                            value="Yes specific"
                            data-form-field-id="thq_school_status_M-GE"
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
                            id="thq_school_status_4qPc"
                            name="school_status"
                            value="Have shortlist"
                            data-form-field-id="thq_school_status_4qPc"
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
                            id="thq_school_status_v7QI"
                            name="school_status"
                            value="Need guidance"
                            data-form-field-id="thq_school_status_v7QI"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Intake date</label>
                      <select
                        id="thq_intake_date_YXgw"
                        name="intake_date"
                        data-form-field-id="thq_intake_date_YXgw"
                      >
                        <option>Jan 2025</option>
                        <option>Sep 2025</option>
                        <option>Jan 2026</option>
                        <option>Sep 2026</option>
                        <option>Not decided</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>5. Visa assistance needed</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_study_visa_Rh-2"
                            name="study_visa"
                            value="Full support"
                            data-form-field-id="thq_study_visa_Rh-2"
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
                            id="thq_study_visa_Nahq"
                            name="study_visa"
                            value="Documents only"
                            data-form-field-id="thq_study_visa_Nahq"
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
                            id="thq_study_visa_35bP"
                            name="study_visa"
                            value="No"
                            data-form-field-id="thq_study_visa_35bP"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Funding</label>
                      <select
                        id="thq_funding_oYtu"
                        name="funding"
                        data-form-field-id="thq_funding_oYtu"
                      >
                        <option>Personal</option>
                        <option>Scholarship full/partial</option>
                        <option>Loan</option>
                        <option>Sponsorship</option>
                        <option>Undecided</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>7. Additional notes</label>
                      <textarea
                        id="thq_study_notes_3fkI"
                        name="study_notes"
                        data-form-field-id="thq_study_notes_3fkI"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="Travel Documentation"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Document types needed</label>
                      <div className="travel-enquiry-form-checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_docs[]_NeXb"
                            name="docs[]"
                            value="Passport"
                            data-form-field-id="thq_docs[]_NeXb"
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
                            id="thq_docs[]_Y1nq"
                            name="docs[]"
                            value="Visa Application"
                            data-form-field-id="thq_docs[]_Y1nq"
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
                            id="thq_docs[]_YVdv"
                            name="docs[]"
                            value="Proof of Funds"
                            data-form-field-id="thq_docs[]_YVdv"
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
                            id="thq_docs[]_Piet"
                            name="docs[]"
                            value="Travel Itinerary"
                            data-form-field-id="thq_docs[]_Piet"
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
                            id="thq_docs[]_Dpzr"
                            name="docs[]"
                            value="Hotel Booking"
                            data-form-field-id="thq_docs[]_Dpzr"
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
                            id="thq_docs[]_Y8tL"
                            name="docs[]"
                            value="Flight Reservation"
                            data-form-field-id="thq_docs[]_Y8tL"
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
                            id="thq_docs[]_upyV"
                            name="docs[]"
                            value="Reference Letter"
                            data-form-field-id="thq_docs[]_upyV"
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
                      </div>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Destination country</label>
                      <input
                        type="text"
                        id="thq_doc_destination_Fso9"
                        name="doc_destination"
                        data-form-field-id="thq_doc_destination_Fso9"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>3. Planned travel date</label>
                      <input
                        type="date"
                        id="thq_doc_date_cEZR"
                        name="doc_date"
                        data-form-field-id="thq_doc_date_cEZR"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Urgency</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_urgency_PVKb"
                            name="urgency"
                            value="Within 1 week"
                            data-form-field-id="thq_urgency_PVKb"
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
                            id="thq_urgency_g05O"
                            name="urgency"
                            value="2-4 weeks"
                            data-form-field-id="thq_urgency_g05O"
                          />
                          <span>
                            {' '}
                            2-4 weeks
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
                            id="thq_urgency_56fX"
                            name="urgency"
                            value="1-3 months"
                            data-form-field-id="thq_urgency_56fX"
                          />
                          <span>
                            {' '}
                            1-3 months
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>5. Previous visa denial</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_denial_zst-"
                            name="denial"
                            value="No"
                            data-form-field-id="thq_denial_zst-"
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
                            id="thq_denial_CuGJ"
                            name="denial"
                            value="Yes same country"
                            data-form-field-id="thq_denial_CuGJ"
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
                            id="thq_denial_VgtC"
                            name="denial"
                            value="Yes different country"
                            data-form-field-id="thq_denial_VgtC"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Documentation details</label>
                      <textarea
                        id="thq_doc_notes_hQZg"
                        name="doc_notes"
                        data-form-field-id="thq_doc_notes_hQZg"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="Airport Transfer Arrangements"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Transfer type</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_transfer_type_KIBz"
                            name="transfer_type"
                            value="Arrival"
                            data-form-field-id="thq_transfer_type_KIBz"
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
                            id="thq_transfer_type_TifU"
                            name="transfer_type"
                            value="Departure"
                            data-form-field-id="thq_transfer_type_TifU"
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
                            id="thq_transfer_type_DQlw"
                            name="transfer_type"
                            value="Both"
                            data-form-field-id="thq_transfer_type_DQlw"
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
                            id="thq_transfer_type_K_J3"
                            name="transfer_type"
                            value="Inter-city"
                            data-form-field-id="thq_transfer_type_K_J3"
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
                      </div>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Airport name</label>
                      <input
                        type="text"
                        id="thq_airport__bqn"
                        name="airport"
                        data-form-field-id="thq_airport__bqn"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>3. Transfer date</label>
                      <input
                        type="date"
                        id="thq_transfer_date_vJKO"
                        name="transfer_date"
                        data-form-field-id="thq_transfer_date_vJKO"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Flight number</label>
                      <input
                        type="text"
                        id="thq_flight_num_fhqA"
                        name="flight_num"
                        data-form-field-id="thq_flight_num_fhqA"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>5. Time</label>
                      <input
                        type="text"
                        id="thq_transfer_time_c8OR"
                        name="transfer_time"
                        placeholder="HH:MM AM/PM"
                        data-form-field-id="thq_transfer_time_c8OR"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Passengers</label>
                      <select
                        id="thq_passengers_MohF"
                        name="passengers"
                        data-form-field-id="thq_passengers_MohF"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3-5</option>
                        <option>6-10</option>
                        <option>11-13+</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>8. Vehicle preference</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_vehicle_pU66"
                            name="vehicle"
                            value="Economy"
                            data-form-field-id="thq_vehicle_pU66"
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
                            id="thq_vehicle_95Ez"
                            name="vehicle"
                            value="Business"
                            data-form-field-id="thq_vehicle_95Ez"
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
                            id="thq_vehicle_l_VZ"
                            name="vehicle"
                            value="SUV"
                            data-form-field-id="thq_vehicle_l_VZ"
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
                            id="thq_vehicle_9iw2"
                            name="vehicle"
                            value="Minivan"
                            data-form-field-id="thq_vehicle_9iw2"
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
                      </div>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>9. Pickup address</label>
                      <input
                        type="text"
                        id="thq_pickup_xAo5"
                        name="pickup"
                        data-form-field-id="thq_pickup_xAo5"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>10. Special requests</label>
                      <textarea
                        id="thq_transfer_notes_AjjJ"
                        name="transfer_notes"
                        data-form-field-id="thq_transfer_notes_AjjJ"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="Comprehensive Itinerary Planning"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Trip type</label>
                      <select
                        id="thq_trip_type_DkRB"
                        name="trip_type"
                        data-form-field-id="thq_trip_type_DkRB"
                      >
                        <option>Leisure</option>
                        <option>Honeymoon</option>
                        <option>Family</option>
                        <option>Business</option>
                        <option>Adventure</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Destinations</label>
                      <input
                        type="text"
                        id="thq_itinerary_dest_RX_7"
                        name="itinerary_dest"
                        data-form-field-id="thq_itinerary_dest_RX_7"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>3. Duration</label>
                      <select
                        id="thq_duration_2iac"
                        name="duration"
                        data-form-field-id="thq_duration_2iac"
                      >
                        <option>&lt;1 week</option>
                        <option>1–2 wks</option>
                        <option>2–3 wks</option>
                        <option>3–4 wks</option>
                        <option>1 month+</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Departure date</label>
                      <input
                        type="text"
                        id="thq_departure_date_epal"
                        name="departure_date"
                        data-form-field-id="thq_departure_date_epal"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Travel style</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_style_4H-K"
                            name="style"
                            value="Budget"
                            data-form-field-id="thq_style_4H-K"
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
                            id="thq_style_enaz"
                            name="style"
                            value="Mid-range"
                            data-form-field-id="thq_style_enaz"
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
                            id="thq_style_glR5"
                            name="style"
                            value="Luxury"
                            data-form-field-id="thq_style_glR5"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>8. Total budget USD</label>
                      <select
                        id="thq_budget_rO2I"
                        name="budget"
                        data-form-field-id="thq_budget_rO2I"
                      >
                        <option>&lt;$1k</option>
                        <option>$1k–$3k</option>
                        <option>$3k–$6k</option>
                        <option>$6k–$10k</option>
                        <option>$10k+</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>9. Special requirements</label>
                      <textarea
                        id="thq_itinerary_notes_By_Q"
                        name="itinerary_notes"
                        data-form-field-id="thq_itinerary_notes_By_Q"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="Travel Insurance"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Insurance type</label>
                      <select
                        id="thq_ins_type_zKzN"
                        name="ins_type"
                        data-form-field-id="thq_ins_type_zKzN"
                      >
                        <option>Single Trip</option>
                        <option>Annual</option>
                        <option>Student</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Destination</label>
                      <input
                        type="text"
                        id="thq_ins_dest_pU1_"
                        name="ins_dest"
                        data-form-field-id="thq_ins_dest_pU1_"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>3. Departure date</label>
                      <input
                        type="date"
                        id="thq_ins_start_GDAP"
                        name="ins_start"
                        data-form-field-id="thq_ins_start_GDAP"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Return date</label>
                      <input
                        type="date"
                        id="thq_ins_end_-01M"
                        name="ins_end"
                        data-form-field-id="thq_ins_end_-01M"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Pre-existing condition</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_condition_SYfC"
                            name="condition"
                            value="No"
                            data-form-field-id="thq_condition_SYfC"
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
                            id="thq_condition_8JuW"
                            name="condition"
                            value="Minor"
                            data-form-field-id="thq_condition_8JuW"
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
                            id="thq_condition_xlIj"
                            name="condition"
                            value="Serious"
                            data-form-field-id="thq_condition_xlIj"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>8. Additional notes</label>
                      <textarea
                        id="thq_ins_notes_T87f"
                        name="ins_notes"
                        data-form-field-id="thq_ins_notes_T87f"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="Tour Packages &amp; Guided Experiences"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Tour type</label>
                      <select
                        id="thq_tour_type_fSZ2"
                        name="tour_type"
                        data-form-field-id="thq_tour_type_fSZ2"
                      >
                        <option>Private</option>
                        <option>Small Group</option>
                        <option>Custom Package</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Destination(s)</label>
                      <input
                        type="text"
                        id="thq_tour_dest_2XSI"
                        name="tour_dest"
                        data-form-field-id="thq_tour_dest_2XSI"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>4. Travel date</label>
                      <input
                        type="text"
                        id="thq_tour_date_sJZD"
                        name="tour_date"
                        data-form-field-id="thq_tour_date_sJZD"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>6. Budget per person</label>
                      <select
                        id="thq_tour_budget_OBVn"
                        name="tour_budget"
                        data-form-field-id="thq_tour_budget_OBVn"
                      >
                        <option>&lt;$500</option>
                        <option>$500–$1.5k</option>
                        <option>$1.5k–$3k</option>
                        <option>$5k+</option>
                      </select>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>9. Special requests</label>
                      <textarea
                        id="thq_tour_notes_567Q"
                        name="tour_notes"
                        data-form-field-id="thq_tour_notes_567Q"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    data-service="24/7 Travel Support &amp; Emergency Assistance"
                    className="dynamic-group"
                  >
                    <div className="travel-enquiry-form-form-field">
                      <label>1. Support type</label>
                      <div className="travel-enquiry-form-checkbox-grid">
                        <label>
                          <input
                            type="checkbox"
                            id="thq_support[]_Ys0n"
                            name="support[]"
                            value="Lost docs"
                            data-form-field-id="thq_support[]_Ys0n"
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
                            id="thq_support[]_ylRm"
                            name="support[]"
                            value="Medical"
                            data-form-field-id="thq_support[]_ylRm"
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
                            id="thq_support[]_EA7g"
                            name="support[]"
                            value="Security concern"
                            data-form-field-id="thq_support[]_EA7g"
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
                            id="thq_support[]_yGoR"
                            name="support[]"
                            value="Emergency funds"
                            data-form-field-id="thq_support[]_yGoR"
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
                      </div>
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>2. Current location</label>
                      <input
                        type="text"
                        id="thq_current_loc_eMJB"
                        name="current_loc"
                        data-form-field-id="thq_current_loc_eMJB"
                      />
                    </div>
                    <div className="travel-enquiry-form-form-field">
                      <label>5. Urgency</label>
                      <div className="radio-options">
                        <label>
                          <input
                            type="radio"
                            id="thq_support_urgency_WYt0"
                            name="support_urgency"
                            value="Emergency"
                            data-form-field-id="thq_support_urgency_WYt0"
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
                            id="thq_support_urgency_u8JY"
                            name="support_urgency"
                            value="Urgent"
                            data-form-field-id="thq_support_urgency_u8JY"
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
                            id="thq_support_urgency_a5Vz"
                            name="support_urgency"
                            value="Non-urgent"
                            data-form-field-id="thq_support_urgency_a5Vz"
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
                    <div className="travel-enquiry-form-form-field">
                      <label>7. Situation description</label>
                      <textarea
                        id="thq_support_notes__d2R"
                        name="support_notes"
                        data-form-field-id="thq_support_notes__d2R"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="travel-enquiry-form-form-actions">
                  <button
                    id="btn-back"
                    name="button"
                    type="button"
                    data-form-field-id="btn-back"
                    className="btn-lg travel-enquiry-form-btn-lg btn-outline"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m12 19l-7-7l7-7m7 7H5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Back</span>
                  </button>
                  <button
                    id="btn-submit"
                    name="button"
                    type="submit"
                    data-form-field-id="btn-submit"
                    className="btn-lg btn-accent travel-enquiry-form-btn-lg"
                  >
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </div>
              <div id="step-3" className="form-step">
                <div className="success-card">
                  <div className="travel-enquiry-form-success-icon">
                    <svg
                      width="64"
                      xmlns="http://www.w3.org/2000/svg"
                      height="64"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"></path>
                        <path d="m9 12l2 2l4-4"></path>
                      </g>
                    </svg>
                  </div>
                  <h3 className="section-title">Enquiry Received!</h3>
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
                    <span id="summary-name">Traveler</span>
                    <span>
                      {' '}
                      . We&apos;ve received your request for
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span id="summary-service">our services</span>
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
                    <span>
                      {' '}
                      A confirmation email has been sent to
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span id="summary-email">your address</span>
                    <span>
                      {' '}
                      . Our luxury consultants will reach out shortly.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <div className="success-contact">
                    <span className="label">Immediate Assistance?</span>
                    <a href="tel:+2348062163748">
                      <div className="btn-link">
                        <span>+234 806 216 3748</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <div className="travel-enquiry-form-container3">
          <div className="travel-enquiry-form-container4">
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
        <div className="travel-enquiry-form-container5">
          <div className="travel-enquiry-form-container6">
            <Script
              html={`<script defer data-name="voyanta-form-logic">
(function(){
  const form = document.getElementById("enquiry-form")
  const btnContinue = document.getElementById("btn-continue")
  const btnBack = document.getElementById("btn-back")
  const btnSubmit = document.getElementById("btn-submit")
  const serviceRadios = document.querySelectorAll('input[name="service"]')
  const steps = document.querySelectorAll(".form-step")
  const dots = document.querySelectorAll(".step-dot")
  const progressBar = document.getElementById("progress-bar")
  const dynamicGroups = document.querySelectorAll(".dynamic-group")
  const subjectField = document.getElementById("form-subject")

  let currentStep = 0
  let selectedService = ""

  // Step Navigation Logic
  function updateStep(stepIndex) {
    steps.forEach((step, idx) => {
      step.classList.toggle("active", idx === stepIndex)
    })

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx <= stepIndex)
    })

    const progress = (stepIndex / (steps.length - 1)) * 100
    document.styleSheets[0].addRule(".travel-enquiry-form__progress-bar::after", \`width: \${progress}%\`)

    window.scrollTo({ top: document.getElementById("voyanta-enquiry").offsetTop, behavior: "smooth" })
  }

  // Handle Service Selection
  serviceRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      selectedService = e.target.value
      btnContinue.disabled = false

      // Update dynamic fields visibility
      dynamicGroups.forEach((group) => {
        group.classList.toggle("visible", group.dataset.service === selectedService)
      })

      // Update hidden subject field
      subjectField.value = \`R&B Travels Enquiry – \${selectedService}\`
    })
  })

  btnContinue.addEventListener("click", () => {
    if (selectedService) {
      currentStep = 1
      updateStep(currentStep)
    }
  })

  btnBack.addEventListener("click", () => {
    currentStep = 0
    updateStep(currentStep)
  })

  // Form Submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("full_name").value
    const email = document.getElementById("email").value

    // Update subject with name for R&B Travels requirement
    subjectField.value = \`R&B Travels Enquiry – \${selectedService} – \${name}\`

    btnSubmit.disabled = true
    btnSubmit.innerText = "Sending..."

    const formData = new FormData(form)
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })

      if (response.status === 200) {
        // Success Step
        document.getElementById("summary-name").innerText = name
        document.getElementById("summary-email").innerText = email
        document.getElementById("summary-service").innerText = selectedService

        currentStep = 2
        updateStep(currentStep)
      } else {
        alert("Something went wrong. Please try again.")
        btnSubmit.disabled = false
        btnSubmit.innerText = "Submit Enquiry"
      }
    } catch (error) {
      console.error(error)
      alert("Error submitting form.")
      btnSubmit.disabled = false
      btnSubmit.innerText = "Submit Enquiry"
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .travel-enquiry-form-container1 {
            display: contents;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm1 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm2 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm3 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm4 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm5 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm6 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
          }
          .travel-enquiry-form-thq-service-cardcontent-elm7 {
            gap: var(--spacing-md);
            border: 1px solid rgba(255, 255, 255, 0.1);
            height: 100%;
            display: flex;
            padding: var(--spacing-xl);
            background: rgba(255, 255, 255, 0.03);
            text-align: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            align-items: center;
            border-radius: var(--border-radius-lg);
            flex-direction: column;
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
