import "./Footer.css";

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

import { MdLocationOn, MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-wrapper">

        <div className="footer-container">

          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-logo">© 2026 Bakua.</h2>

            <p>
              Bakua is a technology company, not a bank. Financial services are
              provided in partnership with licensed microfinance institutions.
            </p>
          </div>

          {/* Head Office */}
          <div className="footer-column">
            <h4>Head Office</h4>

            <div className="footer-item">
              <MdLocationOn />
              <span>
                52 Skytop Street,<br />
                San Jose, CA 94135
              </span>
            </div>

            <div className="footer-item">
              <MdEmail />
              <span>contact@bakua.app</span>
            </div>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h4>Support</h4>

            <div className="footer-item">
              <img src="/cameroon.png" alt="Cameroon" className="footer-circle" />
              <span>+237 6 77 04 46 11</span>
            </div>

            <div className="footer-item">
              <img src="/nigeria.png" alt="Nigeria" className="footer-circle" />
              <span>+234 802 295 7814</span>
            </div>

            <div className="footer-item">
              <img src="/america.png" alt="USA" className="footer-circle" />
              <span>+1 (800) 555-0199</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-column">
            <h4>Follow us</h4>

            <div className="social-icons">
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTiktok />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>

        </div>

        

      </div>

    </footer>
  );
}

export default Footer;
