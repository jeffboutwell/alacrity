import Image from "next/image";
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
      </div>
      <div className="Footer__bottom">
        <p>{new Date().getFullYear()} © Alacrity | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
