import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const footerStyle = {
    color: "Orange",
  };
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="footer-start">
          <h1>COMPANY</h1>
          <ul>
            <li>Aboutus</li>
            <li>Our Services</li>
            <li>Terms</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-center">
          <br />
          <h1 id="contact">CONTACT</h1>
          <li>mealsharing_soujanya@gmail.com</li>
          <li>+45 12345678</li>
          {/* <h3>mealsharing_soujanya@gmail.com</h3>
          <h3>+45 12345678</h3> */}

          {/* Below links will connect to social network accounts of company   */}
          <div className="social-links">
              <h4>Follow us</h4>
              <a href="https://www.linkedin.com/in/soujanya-polavarapu-816785110/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/soujanyapolavarapu">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100011583960230">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/soujanyapolavarapu/">
                <FaInstagramSquare />
              </a>
            </div>
        </div>

        <div id="social-media" className="footer-right">
          <h1>ADDRESS</h1>
          <ul>
            <li>Algade 56</li>
            <li>Svogerslev</li>
            <li>Roskilde</li>
            <li>4000</li>
          </ul>
        </div>
      </nav>
      <div className="copyright">
        CopyRight@2021, Mealsharing-website Designed by <a href="https://github.com/soujanyapolavarapu" target="_blank"> SoujanyaPolavarapu</a>.
      </div>
    </footer>
  );
}

export default Footer;
