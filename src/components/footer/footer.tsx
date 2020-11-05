import React from "react";
import FooterStyle from "./footer.style";
import { SiLinkedin } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="social">
        <div className="linkedin">
          <SiLinkedin />
        </div>
        <div className="github">
          <VscGithubInverted />
        </div>
        <div className="twitter">
          <FaTwitter />
        </div>
      </div>
      <div className="copyright">Developed By Simon Julius</div>
    </FooterStyle>
  );
};

export default Footer;
