import Image from "next/image";
import React from "react";
import logo from "../../../public/images/alacrity-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-white bg-opacity-80 py-4 px-8 sm:px-20 absolute top-0">
      <Image
        src={logo}
        width={logo.width}
        height={logo.height}
        alt="Alacrity logo"
        className="max-w-[35%]"
      />
    </header>
  );
};

export default Header;
