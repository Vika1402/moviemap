import "./Footer.scss";
// https://www.youtube.com/watch?v=VLgVw2NEqCM&ab_channel=JSDevHindi
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
        This website is currently under development and may contain incomplete or inaccurate information. The content provided on this website is for demonstration and testing purposes only. While efforts are made to ensure the accuracy and reliability of the information presented, we make no warranties or representations regarding the completeness, accuracy, suitability, or reliability of the websites content.Any action you take upon the information presented on this website is strictly at your own risk. We shall not be liable for any losses or damages arising from the use of this website or its contentPlease note that certain features, functionalities, or content may be subject to change without prior notice as development progresses.Thank you for your understanding and cooperation during the development phase.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
