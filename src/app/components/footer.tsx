import {
  faFacebookF,
  faGooglePlusG,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/alacrity-logo.png";

const Footer = () => {
  return (
    <footer className="Footer px-8 sm:px-20 py-4">
      <div className="Footer__top">
        <Image
          src={logo}
          width={logo.width}
          height={logo.height}
          alt="Alacrity logo"
        />
        <ul className="Footer__social gap-x-2">
          <li className="Footer__social-twitter">
            <Link href="https://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li className="Footer__social-facebook">
            <Link href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li className="Footer__social-linkedin">
            <Link href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
          <li className="Footer__social-googleplus">
            <Link href="https://google.com">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="Footer__bottom">
        <p>{new Date().getFullYear()} © Alacrity | All Rights Reserved</p>
        <ul className="Footer__nav gap-x-8">
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Our Dentists</Link>
          </li>
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          <li>
            <Link href={"#"}>FAQ</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
