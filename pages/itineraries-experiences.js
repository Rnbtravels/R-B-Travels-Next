import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const ItinerariesExperiences = (props) => {
  return (
    <>
      <div className="itineraries-experiences-container1">
        <Head>
          <title>Itineraries-Experiences - rnvtravels</title>
          <meta
            property="og:title"
            content="Itineraries-Experiences - rnvtravels"
          />
          <link
            rel="canonical"
            href="https://voyanta.teleporthq.site/itineraries-experiences"
          />
          <meta
            property="og:url"
            content="https://voyanta.teleporthq.site/itineraries-experiences"
          />
        </Head>
        <Navigation></Navigation>
        <section className="itinerary-snapshot">
          <div className="itinerary-snapshot-container">
            <div className="itinerary-snapshot-content">
              <div className="itinerary-snapshot-badge">
                <span>Featured Journey</span>
              </div>
              <h1 className="hero-title">
                <span>
                  {' '}
                  Crafting Your Next
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="itineraries-experiences-text12">
                  Unforgettable
                </span>
                <span>
                  {' '}
                  Chapter
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <p className="hero-subtitle">
                <span>
                  At
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="itineraries-experiences-text15">
                  R&amp;B Travels
                </span>
                <span>
                  , we blend local expertise with your personal vision. Get
                  clear itineraries, fair pricing, and effortless support from
                  planning through your return home.
                </span>
              </p>
              <div className="itinerary-snapshot-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle r="3" cx="12" cy="10"></circle>
                    </svg>
                  </div>
                  <div className="benefit-text">
                    <span className="benefit-title">Vetted Partners</span>
                    <span className="benefit-desc">
                      Hand-picked local guides and stays.
                    </span>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 22h20M6.36 17.4L4 17l-2-4l1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12L5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.4 2.4 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path>
                    </svg>
                  </div>
                  <div className="benefit-text">
                    <span className="benefit-title">Effortless Logistics</span>
                    <span className="benefit-desc">
                      We handle visas, flights, and insurance.
                    </span>
                  </div>
                </div>
              </div>
              <div className="itinerary-snapshot-actions">
                <a href="#packages">
                  <div className="btn-lg btn-primary btn">
                    <span>Explore Full Itineraries</span>
                  </div>
                </a>
                <a href="#tailor">
                  <div className="btn-lg btn btn-outline">
                    <span>How We Tailor</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="itinerary-snapshot-feature">
              <div className="itineraries---experiences-feature-card">
                <img
                  alt="Scenic mountain exploration"
                  src="https://images.pexels.com/photos/7538728/pexels-photo-7538728.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="itineraries---experiences-feature-image"
                />
                <div className="itineraries---experiences-feature-overlay">
                  <div className="feature-info">
                    <span className="feature-tag">Sample Itinerary</span>
                    <h3 className="feature-title">
                      The Andean Peaks Expedition
                    </h3>
                    <p className="feature-summary">
                      A 12-day immersive journey through hidden valleys and
                      ancient summits with expert local mountaineers.
                    </p>
                    <div className="feature-meta">
                      <span>12 Days</span>
                      <span>•</span>
                      <span>High Adventure</span>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="feature-decoration"></div>
            </div>
          </div>
        </section>
        <section id="packages" className="trip-packages">
          <div className="trip-packages-header">
            <h2 className="section-title">Curated Sample Itineraries</h2>
            <p className="section-subtitle">
              From quick escapes to grand explorations, find the rhythm that
              suits you.
            </p>
          </div>
          <div className="bento-grid">
            <div className="bento-item bento-main">
              <div className="bento-image-wrapper">
                <img
                  alt="Floating market in Thailand"
                  src="https://images.pexels.com/photos/2108831/pexels-photo-2108831.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="bento-image"
                />
              </div>
              <div className="itineraries---experiences-bento-content">
                <div className="bento-tag">
                  <span>The Signature Week</span>
                </div>
                <h3 className="bento-title">Cultural Tapestry of SE Asia</h3>
                <p className="bento-desc">
                  7 Days of vibrant markets, temple sunrises, and private river
                  cruises. Includes day-by-day highlights and vetted culinary
                  tours.
                </p>
                <div className="bento-footer">
                  <span className="price-range">$1,800 - $2,500 pp</span>
                  <span className="options">Fully Adjustable</span>
                </div>
              </div>
            </div>
            <div className="bento-item bento-side">
              <div className="bento-image-wrapper">
                <img
                  alt="City carriage ride"
                  src="https://images.pexels.com/photos/6761094/pexels-photo-6761094.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="bento-image"
                />
              </div>
              <div className="itineraries---experiences-bento-content">
                <div className="bento-tag">
                  <span>Short Break</span>
                </div>
                <h3 className="bento-title">European Urban Escape</h3>
                <p className="bento-desc">
                  3-4 Days. Boutique stays and skip-the-line gallery access.
                </p>
                <div className="bento-footer">
                  <span className="price-range">$850+ pp</span>
                </div>
              </div>
            </div>
            <div className="bento-item bento-side">
              <div className="bento-image-wrapper">
                <img
                  alt="Tropical beach camel ride"
                  src="https://images.pexels.com/photos/18914949/pexels-photo-18914949.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="bento-image"
                />
              </div>
              <div className="itineraries---experiences-bento-content">
                <div className="bento-tag">
                  <span>Extended</span>
                </div>
                <h3 className="bento-title">Coastal Nomad Grand Tour</h3>
                <p className="bento-desc">
                  14+ Days. Deep immersion in coastal traditions and island
                  hopping.
                </p>
                <div className="bento-footer">
                  <span className="price-range">$3,200+ pp</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="vetted-experiences">
          <div className="vetted-header">
            <h2 className="section-title">Vetted Local Experiences</h2>
            <p className="section-subtitle">
              Authentic moments led by partners who know their home best.
            </p>
          </div>
          <div className="itineraries---experiences-masonry-grid">
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Night market food tour"
                src="https://images.pexels.com/photos/18911914/pexels-photo-18911914.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Midnight Market Feast</h3>
                <p>
                  A culinary dive into the heart of Bangkok&apos;s street food
                  scene.
                </p>
              </div>
            </div>
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Traditional toboggan ride"
                src="https://images.pexels.com/photos/33232307/pexels-photo-33232307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Madeira Traditions</h3>
                <p>Experience the historic wicker toboggan rides of Funchal.</p>
              </div>
            </div>
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Museum gallery visit"
                src="https://images.pexels.com/photos/952588/pexels-photo-952588.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Curated Art Walks</h3>
                <p>
                  Private gallery tours with local art historians and critics.
                </p>
              </div>
            </div>
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Sailboat experience"
                src="https://images.pexels.com/photos/29889186/pexels-photo-29889186.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Zanzibar Sailings</h3>
                <p>Traditional Dhow sunset cruises on turquoise waters.</p>
              </div>
            </div>
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Basket boat ride"
                src="https://images.pexels.com/photos/23528811/pexels-photo-23528811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Eco-River Journeys</h3>
                <p>
                  Sustainable basket boat tours through Vietnam&apos;s lush
                  waterways.
                </p>
              </div>
            </div>
            <div className="itineraries---experiences-masonry-item">
              <img
                alt="Street food cart"
                src="https://images.pexels.com/photos/12265850/pexels-photo-12265850.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
              <div className="masonry-overlay">
                <h3>Artisan Food Craft</h3>
                <p>
                  Meet the families behind generations of street food heritage.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="tailor" className="tailor-process">
          <div className="tailor-container">
            <div className="tailor-header">
              <h2 className="section-title">How We Tailor Your Trip</h2>
              <p className="section-subtitle">
                Your journey is unique. Our process ensures every detail
                reflects your preferences.
              </p>
            </div>
            <div className="tailor-bento">
              <div className="tailor-main tailor-card">
                <div className="tailor-icon-group">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </svg>
                </div>
                <h3>The Personalization Engine</h3>
                <p>
                  We start with your &apos;Must-Haves&apos;. Whether it&apos;s
                  dietary needs, accessibility requirements, or a specific
                  budget tier, our planners adjust every flight, stay, and
                  experience to fit your life.
                </p>
                <ul className="tailor-list">
                  <li>
                    <strong>Budget Tiers:</strong>
                    <span>
                      {' '}
                      From conscious comfort to ultra-luxury.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Accessibility:</strong>
                    <span>
                      {' '}
                      Vetted routes for mobility-friendly travel.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                  <li>
                    <strong>Special Requests:</strong>
                    <span>
                      {' '}
                      Birthdays, anniversaries, or niche hobbies.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="tailor-card tailor-step">
                <span className="itineraries---experiences-step-num">01</span>
                <h4>Discovery</h4>
                <p>
                  A brief consultation to understand your pace and interests.
                </p>
              </div>
              <div className="tailor-card tailor-step">
                <span className="itineraries---experiences-step-num">02</span>
                <h4>Drafting</h4>
                <p>
                  We present a baseline itinerary with local partner options.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel">
          <div className="itineraries---experiences-testimonials-header">
            <h2 className="section-title">Traveler Stories</h2>
            <p className="section-subtitle">
              Real feedback on our itineraries and local support.
            </p>
          </div>
          <div className="carousel-wrapper">
            <div id="testimonialTrack" className="carousel-track">
              <div className="itineraries---experiences-testimonial-card">
                <div className="quote-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="itineraries---experiences-testimonial-text">
                  &quot;The itinerary was perfectly balanced. We never felt
                  rushed, and the local food tour in Bangkok was the highlight
                  of our decade. R &amp; B Travels handled every visa detail
                  flawlessly.&quot;
                </p>
                <div className="itineraries---experiences-testimonial-author">
                  <span className="itineraries---experiences-author-name">
                    Sarah &amp; David L.
                  </span>
                  <span className="itineraries---experiences-author-trip">
                    SE Asia Explorer
                  </span>
                </div>
              </div>
              <div className="itineraries---experiences-testimonial-card">
                <div className="quote-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="itineraries---experiences-testimonial-text">
                  &quot;As a solo traveler with mobility needs, I was worried. R
                  &amp; B Travels vetted every hotel and route. I felt supported
                  from the moment I landed until my return flight.&quot;
                </p>
                <div className="itineraries---experiences-testimonial-author">
                  <span className="itineraries---experiences-author-name">
                    Marcus T.
                  </span>
                  <span className="itineraries---experiences-author-trip">
                    European Urban Escape
                  </span>
                </div>
              </div>
              <div className="itineraries---experiences-testimonial-card">
                <div className="quote-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="itineraries---experiences-testimonial-text">
                  &quot;Fair pricing and total transparency. We knew exactly
                  where our money was going, and the local partners they work
                  with are truly top-tier.&quot;
                </p>
                <div className="itineraries---experiences-testimonial-author">
                  <span className="itineraries---experiences-author-name">
                    Elena R.
                  </span>
                  <span className="itineraries---experiences-author-trip">
                    Andean Peaks Expedition
                  </span>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button id="prevBtn" className="btn btn-outline btn-sm">
                Prev
              </button>
              <button id="nextBtn" className="btn btn-outline btn-sm">
                Next
              </button>
            </div>
          </div>
        </section>
        <section className="experience-video">
          <div className="video-section-container">
            <div className="video-content">
              <h2 className="section-title">The Voyanta Experience</h2>
              <p className="section-content">
                Witness the highlights from our most loved sample itineraries.
                From the quiet majesty of mountain peaks to the vibrant pulse of
                local night markets, see what awaits you on your custom-tailored
                journey.
              </p>
              <div className="video-highlights">
                <div className="highlight-item">
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
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Vetted Local Partners</span>
                </div>
                <div className="highlight-item">
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
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
                  </svg>
                  <span>Immersive Culture</span>
                </div>
              </div>
            </div>
            <div className="video-feature">
              <div className="video-wrapper">
                <video
                  src="https://videos.pexels.com/video-files/4236790/4236790-hd_1280_720_25fps.mp4"
                  muted="true"
                  poster="https://images.pexels.com/videos/4236790/pictures/preview-0.jpg"
                  controls="true"
                  playsInline="true"
                  className="preview-video"
                >
                  <span>
                    {' '}
                    Your browser does not support the video tag.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-custom">
          <div className="cta-container">
            <div className="cta-content">
              <h2 className="section-title">
                Ready for a Trip That&apos;s Truly Yours?
              </h2>
              <p className="section-content">
                Request a tailored itinerary or book a consultation with our
                travel experts today. We&apos;ll handle the logistics; you focus
                on the memories.
              </p>
              <div className="cta-contact-info">
                <div className="contact-pill">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Schedule a Call</span>
                </div>
              </div>
            </div>
            <div className="cta-form-block">
              <div className="form-card">
                <form
                  action="#"
                  method="POST"
                  data-form-id="8f439682-e3c9-4f4d-982c-109362a087c3"
                  className="lead-form"
                >
                  <div className="itineraries---experiences-form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="true"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="name"
                    />
                  </div>
                  <div className="itineraries---experiences-form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@example.com"
                      data-form-field-id="email"
                    />
                  </div>
                  <div className="itineraries---experiences-form-group">
                    <label htmlFor="destination">Preferred Destination</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="e.g. Thailand, Peru"
                      data-form-field-id="destination"
                    />
                  </div>
                  <button
                    id="thq_button_EYut"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_EYut"
                    className="btn-full btn-lg btn-primary btn"
                  >
                    Request My Itinerary
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="itineraries-experiences-container2">
          <div className="itineraries-experiences-container3">
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
        <div className="itineraries-experiences-container4">
          <div className="itineraries-experiences-container5">
            <Script
              html={`<script defer data-name="itinerary-interactions">
(function(){
  // Testimonial Carousel Logic
  const track = document.getElementById("testimonialTrack")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  if (track && prevBtn && nextBtn) {
    let currentIndex = 0

    const updateCarousel = () => {
      const cardWidth = track.firstElementChild.offsetWidth + 24 // width + gap
      track.style.transform = \`translateX(-\${currentIndex * cardWidth}px)\`
    }

    nextBtn.addEventListener("click", () => {
      const maxIndex = track.children.length - (window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1)
      if (currentIndex < maxIndex) {
        currentIndex++
        updateCarousel()
      } else {
        currentIndex = 0 // Loop back
        updateCarousel()
      }
    })

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
      } else {
        const maxIndex = track.children.length - (window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1)
        currentIndex = maxIndex // Loop to end
        updateCarousel()
      }
    })

    window.addEventListener("resize", updateCarousel)
  }

  // Simple Form Validation Feedback
  const form = document.querySelector(".lead-form")
  if (form) {
    form.addEventListener("submit", (e) => {
      const submitBtn = form.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      // Visual feedback only - native submission still happens if action is set
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true

      setTimeout(() => {
        submitBtn.textContent = "Request Sent!"
        submitBtn.style.backgroundColor = "#2ecc71"
        form.reset()

        setTimeout(() => {
          submitBtn.textContent = originalText
          submitBtn.style.backgroundColor = ""
          submitBtn.disabled = false
        }, 3000)
      }, 1500)
    })
  }

  // Intersection Observer for Entrance Animations
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

  document.querySelectorAll(".bento-item, .masonry-item, .tailor-card, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
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
          .itineraries-experiences-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .itineraries-experiences-text12 {
            color: var(--color-primary);
          }
          .itineraries-experiences-text15 {
            color: var(--color-primary-light);
          }
          .itineraries-experiences-container2 {
            display: none;
          }
          .itineraries-experiences-container3 {
            display: contents;
          }
          .itineraries-experiences-container4 {
            display: none;
          }
          .itineraries-experiences-container5 {
            display: contents;
          }
          @media (max-width: 479px) {
            .itineraries-experiences-text12 {
              color: var(--color-primary);
            }
            .itineraries-experiences-text15 {
              color: var(--color-primary-light);
            }
          }
        `}
      </style>
    </>
  )
}

export default ItinerariesExperiences
