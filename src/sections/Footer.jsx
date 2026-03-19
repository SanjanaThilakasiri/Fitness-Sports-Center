import logo from "../assets/logo.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Logo & Name */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h3 className="footer-name">Fitness Sports Center</h3>
        </div>

        {/* Address & Phone */}
        <div className="footer-info">
          <p className="footer-address">
            No. 10, <br />
            Colombo Road, <br />   
            Dehiwala.
          </p>
          <p className="footer-phone">011-222-44992</p>
          <p className="footer-phone">077-222-44992</p>
        </div>

        {/* Embedded Map */}
        <div className="footer-map">
          <iframe
            title="Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4!2d79.8659!3d6.8514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5555555555%3A0x0!2sDehiwala%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Social Icons */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://web.facebook.com/" className="footer-social-link" aria-label="Facebook">
            <img src={fb} width="20" height="20" alt="Facebook" />
           
          </a>

          <a href="https://www.instagram.com/" className="footer-social-link" aria-label="Instagram">
            <img src={insta} width="20" height="20" alt="Instagram" />
            
          </a>
          <a href="https://www.tiktok.com/en/" className="footer-social-link" aria-label="TikTok">
            <img src={tiktok} width="20" height="20" alt="TikTok" />
            
          </a>
        </div>
      </div>

    </footer>
  );
}