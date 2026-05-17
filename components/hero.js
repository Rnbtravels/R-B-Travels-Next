import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  return (
    <>
      <div className="hero-container1">
        <div className="hero-container2">
          <div className="hero-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-gradient-layer, .hero-floating-card, .scroll-wheel, .hero-text-block {
  animation: none !important;
  transform: none !important;
  transition: none !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-container">
          <div className="hero-background-wrapper">
            <div className="hero-gradient-layer"></div>
            <div className="hero-diagonal-shards">
              <div className="shard shard-1"></div>
              <div className="shard shard-2"></div>
            </div>
            <img
              src="https://images.pexels.com/photos/12389419/pexels-photo-12389419.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=200"
              alt="Luxury beach resort destination"
              className="hero-bg-image"
            />
            <div className="hero-hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-inner">
              <div className="hero-text-block">
                <div className="hero-badge">
                  <span className="hero-badge-text">
                    Voyanta Travel Consultancy
                  </span>
                </div>
                <h1 className="hero-hero-title hero-title">
                  Book Your Free Travel Consultation
                </h1>
                <p className="hero-hero-subtitle hero-subtitle">
                  Speak with our experts to plan your perfect trip—custom
                  itineraries, visa help, flights, stays, and local experiences.
                </p>
                <div className="hero-hero-cta-group">
                  <button
                    id="cta-scroll-btn"
                    className="hero-main-btn btn-primary btn-xl"
                  >
                    <span>Schedule Consultation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18M9 16l2 2l4-4"></path>
                    </svg>
                  </button>
                  <a href="#itineraries">
                    <div className="hero-secondary-btn btn-xl btn-outline">
                      <span>Explore Tours</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hero-visual-block">
                <div className="hero-hero-floating-card">
                  <div className="card-glass">
                    <div className="hero-card-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14m7-7l-7 7l-7-7"></path>
                      </svg>
                    </div>
                    <div className="card-info">
                      <span className="card-label">Next Group Tour</span>
                      <span className="card-value">
                        Bali Expedition • June 15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>
            <span className="scroll-text">Scroll to explore</span>
          </div>
        </section>
        <div className="hero-container4">
          <div className="hero-container5">
            <Script
              html={`<style>
        @keyframes heroGradientShift {0% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}
100% {background-position: 0% 50%;}}@keyframes heroFadeUp {0% {opacity: 0;
transform: translateY(30px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes heroFloat {0%,100% {transform: translateY(0) rotate(0);}
50% {transform: translateY(-20px) rotate(2deg);}}@keyframes scrollWheel {0% {opacity: 1;
transform: translateX(-50%) translateY(0);}
100% {opacity: 0;
transform: translateX(-50%) translateY(15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero-container6">
          <div className="hero-container7">
            <Script
              html={`<script defer data-name="hero-interactivity">
(function(){
  const scrollBtn = document.getElementById("cta-scroll-btn")
  const scrollIndicator = document.querySelector(".hero-scroll-indicator")

  scrollBtn.addEventListener("click", () => {
    const nextSection = document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    }
  })

  scrollIndicator.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  })

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    const shards = document.querySelectorAll(".shard")
    const bgImage = document.querySelector(".hero-bg-image")
    const visualBlock = document.querySelector(".hero-visual-block")

    if (shards.length > 0) {
      shards[0].style.transform = \`translateX(\${scrolled * 0.15}px)\`
    }

    if (bgImage) {
      bgImage.style.transform = \`scale(\${1 + scrolled * 0.0005}) translateY(\${scrolled * 0.1}px)\`
    }

    if (visualBlock) {
      visualBlock.style.transform = \`translateY(\${scrolled * -0.2}px)\`
    }

    if (scrolled > 100) {
      scrollIndicator.style.opacity = "0"
      scrollIndicator.style.pointerEvents = "none"
    } else {
      scrollIndicator.style.opacity = "0.6"
      scrollIndicator.style.pointerEvents = "auto"
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
          .hero-container1 {
            display: contents;
          }
          .hero-container2 {
            display: none;
          }
          .hero-container3 {
            display: contents;
          }
          .hero-container4 {
            display: none;
          }
          .hero-container5 {
            display: contents;
          }
          .hero-container6 {
            display: none;
          }
          .hero-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Hero
