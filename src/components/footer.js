import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery, Link } from 'gatsby'

import '../styles/Footer/footer.css'

library.add(fab)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressWpHours(title: { eq: "Hours" }) {
        content
      }
    }
  `)

  const hours = data.wordpressWpHours.content

  return (
    <div className="footer-wrapper">
      <div className="footer-image"></div>
      <div className="footer-main h-100">
        <div className="footer-row row m-0">
          <div className="footer-column col-lg-3 col-md-6 p-0">
            <div className="footer-title-wrapper m-3">
              <div className="footer-title container mb-5 p-0">
                <h3>taproom</h3>
              </div>
            </div>
            <div className="footer-address-wrapper m-3">
              <div className="footer-address container d-flex flex-column p-0 mb-3">
                <address className="location-address">
                  Address coming soon
                  <br />
                  City, State, Zip
                </address>
                <a className="directions-link" href="#">
                  get directions
                </a>
              </div>
            </div>
            <div className="footer-hours-wrapper m-3">
              <div
                className="footer-hours container p-0"
                dangerouslySetInnerHTML={{ __html: hours }}
              />
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 p-0">
            <div className="footer-title-wrapper m-3">
              <div className="footer-title container mb-5 p-0">
                <h3>contact</h3>
              </div>
            </div>
            <div className="contact-link-wrapper m-3">
              <div className="contact-link container p-0">
                <Link to="/contact">Send us a message</Link>
              </div>
              <div className="contact-number container p-0">
                <a href="tel:18008675309">1 (800) 867-5309</a>
              </div>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 p-0">
            <div className="footer-title-wrapper m-3">
              <div className="footer-title container mb-5 p-0">
                <h3>links</h3>
              </div>
            </div>
            <div className="link-wrapper m-3">
              <ul className="link-list container p-0">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-column col-lg-3 col-md-6 p-0">
            <div className="footer-title-wrapper m-3">
              <div className="footer-title container mb-5 p-0">
                <h3>social</h3>
              </div>
            </div>
            <div className="social-icons-wrapper m-3">
              <div className="social-icons container p-0">
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={['fab', 'twitter']} />
                </a>
              </div>
            </div>
            <div className="social-links-wrapper m-3">
              <div className="social-links container p-0">
                <ul className="link-list">
                  <li>
                    <a href="#">Untapped</a>
                  </li>
                  <li>
                    <a href="#">Yelp</a>
                  </li>
                  <li>
                    <a href="#">Beer Advocate</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
