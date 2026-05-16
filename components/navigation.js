import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className={`navigation-container1 ${props.rootClassName} `}>
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="Homepage">
              <div aria-label="Voyanta Home" className="navigation-brand">
                <div className="navigation-logo-icon">
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
                <span className="section-title navigation-brand-name">
                  <span>R</span>
                  <span className="navigation-text11">&amp;</span>
                  <span>B Travels</span>
                </span>
              </div>
            </a>
            <div className="navigation-main-links">
              <Link href="/services">
                <a>
                  <div className="navigation-link">
                    <span>Services</span>
                  </div>
                </a>
              </Link>
              <Link href="/itineraries-experiences">
                <a>
                  <div className="navigation-link">
                    <span>Itineraries</span>
                  </div>
                </a>
              </Link>
              <Link href="/pricing-packages">
                <a>
                  <div className="navigation-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </Link>
              <Link href="/booking-documentation">
                <a>
                  <div className="navigation-link">
                    <span>Booking</span>
                  </div>
                </a>
              </Link>
              <Link href="/booking-sub">
                <a>
                  <div className="navigation-link">
                    <span>BookingSub</span>
                  </div>
                </a>
              </Link>
            </div>
            <div className="navigation-actions">
              <Link href="/booking-documentation">
                <a>
                  <div className="btn-primary btn navigation-cta btn-sm">
                    <span>Start Planning</span>
                  </div>
                </a>
              </Link>
              <button
                id="mobileMenuToggle"
                aria-label="Open menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  height="100%"
                  width="100%"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill="currentColor">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"></path>
                    <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323l-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div id="mobileOverlay" className="navigation-mobile-overlay">
            <div className="navigation-mobile-header">
              <a href="Homepage">
                <div className="navigation-brand">
                  <div className="navigation-logo-icon">
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
                  <span className="section-title navigation-brand-name">
                    R&amp;B Travels
                  </span>
                </div>
              </a>
              <button
                id="mobileMenuClose"
                aria-label="Close menu"
                className="navigation-mobile-close"
              >
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
                    <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                    <path d="M15 3v18M8 9l3 3l-3 3"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="navigation-mobile-content">
              <div className="navigation-mobile-links">
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
                <Link href="/services">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Travel Services</span>
                    </div>
                  </a>
                </Link>
                <Link href="/itineraries-experiences">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Curated Itineraries</span>
                    </div>
                  </a>
                </Link>
                <Link href="/pricing-packages">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Fair Pricing</span>
                    </div>
                  </a>
                </Link>
                <Link href="/booking-documentation">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Booking Hub</span>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="navigation-mobile-footer">
                <Link href="/booking-documentation">
                  <a>
                    <div className="btn-lg btn-primary navigation-mobile-cta btn">
                      <span>Start Your Journey</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
[data-theme="dark"] .navigation-theme-icon-light {
  display: none;
}
[data-theme="dark"] .navigation-theme-icon-dark {
  display: block;
}
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay, .navigation-link::after, .navigation-mobile-link {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-controls">
(function(){
  const mobileToggle = document.getElementById("mobileMenuToggle")
  const mobileClose = document.getElementById("mobileMenuClose")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const body = document.body

  function openMenu() {
    mobileOverlay.style.display = "flex"
    // Small timeout to allow display:flex to register for transition
    setTimeout(() => {
      mobileOverlay.classList.add("is-active")
      mobileToggle.setAttribute("aria-expanded", "true")
      body.style.overflow = "hidden"
    }, 10)
  }

  function closeMenu() {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    body.style.overflow = ""

    // Wait for transition then hide
    setTimeout(() => {
      if (!mobileOverlay.classList.contains("is-active")) {
        mobileOverlay.style.display = "none"
      }
    }, 300)
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  // Close menu on link click
  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Handle escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      closeMenu()
    }
  })

  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Initialize theme from localStorage or system preference
  const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

  applyTheme(storedTheme)

  function applyTheme(theme) {
    const suffix = theme === "dark" ? "dark" : "light"

    // Update ALL active color variables to point to the correct theme
    html.style.setProperty("--color-primary", \`var(--color-primary-\${suffix})\`)
    html.style.setProperty("--color-secondary", \`var(--color-secondary-\${suffix})\`)
    html.style.setProperty("--color-accent", \`var(--color-accent-\${suffix})\`)
    html.style.setProperty("--color-neutral", \`var(--color-neutral-\${suffix})\`)
    html.style.setProperty("--color-surface", \`var(--color-surface-\${suffix})\`)
    html.style.setProperty("--color-on-surface", \`var(--color-on-surface-\${suffix})\`)
    html.style.setProperty("--color-on-surface-secondary", \`var(--color-on-surface-secondary-\${suffix})\`)
    html.style.setProperty("--color-on-primary", \`var(--color-on-primary-\${suffix})\`)
    html.style.setProperty("--color-surface-elevated", \`var(--color-surface-elevated-\${suffix})\`)
    html.style.setProperty("--color-on-secondary", \`var(--color-on-secondary-\${suffix})\`)
    html.style.setProperty("--color-on-accent", \`var(--color-on-accent-\${suffix})\`)
    html.style.setProperty("--color-border", \`var(--color-border-\${suffix})\`)
    html.style.setProperty("--color-outline", \`var(--color-outline-\${suffix})\`)
    html.style.setProperty("--color-overlay", \`var(--color-overlay-\${suffix})\`)
    html.style.setProperty("--color-backplate", \`var(--color-backplate-\${suffix})\`)
    html.style.setProperty("--color-scrim", \`var(--color-scrim-\${suffix})\`)

    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"
    applyTheme(newTheme)
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-text11 {
            color: var(--color-accent);
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }

          @media (max-width: 991px) {
            .navigation-text11 {
              color: var(--color-accent);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  rootClassName: '',
}

Navigation.propTypes = {
  rootClassName: PropTypes.string,
}

export default Navigation
