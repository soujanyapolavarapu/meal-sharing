import React from "react";


function Footer() {
  const footerStyle = {
    color: "Orange",
  };
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="footer-start">
          <ul>
            <li>
              <img
                src="src/client/components/TestComponent/testImg.png"
                alt="MealSharing logo"
                width="100"
                height="50"
              />
            </li>
            <li>
              <span className="aside">
                2021 by <strong>Soujanya</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <a href="#">LICENSE</a>
            </li>
            <li>
              <a href="#">TERMS</a>
            </li>
            <li>
              <a href="#">RETURNS</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
          </ul>
        </div>
        <div id="social-media" className="footer-right">
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-tag"></i>
              </a>
            </li>
            <li>
              <a href="#">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#">
                Details
              </a>
            </li>
            <li>
              <a href="#">
                Contact info
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>

    //    <footer>
    //     <img src='src/client/components/TestComponent/mealshare-logo(1).png' alt='MealSharing logo' width='100' height='53'/>
    //     <ul className='footer-links'>
    //       <Link to = {'/about'} style={footerStyle}>
    //         <li>About</li>
    //       </Link>
    //       <Link to = {'/carrers'} style={footerStyle}>
    //         <li>Carrers</li>
    //       </Link>
    //       <Link to = {'/contact'} style={footerStyle}>
    //         <li>Contact</li>
    //       </Link>
    //     </ul>
    // </footer>
  );
}

export default Footer;
