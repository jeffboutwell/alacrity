import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/alacrity-logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <Image
          src={logo}
          width={logo.width}
          height={logo.height}
          alt="Alacrity logo"
        />
        <ul className="Footer__social">
          <li className="Footer__social-twitter">
            <Link href="https://twitter.com">Twitter</Link>
          </li>
          <li className="Footer__social-facebook">
            <Link href="https://facebook.com">Facebook</Link>
          </li>
          <li className="Footer__social-linkedin">
            <Link href="https://linkedin.com">Linked In</Link>
          </li>
          <li className="Footer__social-googleplus">
            <Link href="https://google.com">Google+</Link>
          </li>
        </ul>
      </div>
      <div className="Footer__small">
        <p>{new Date().getFullYear()} © Alacrity | All Rights Reserved</p>
        <ul className="Footer__nav">
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
    </div>
  );
};

export default Footer;
