import Image from "next/image";
import React from "react";
import logo from "../../../public/images/alacrity-logo.png";

const Header = () => {
  return (
    <header>
      <Image
        src={logo}
        width={logo.width}
        height={logo.height}
        alt="Alacrity logo"
      />
    </header>
  );
};

export default Header;
