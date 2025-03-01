import DownArrow from "./atoms/down-arrow";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="Hero w-full pt-48 pb-8 text-white text-center">
      <h1 className="mx-8 w-auto lg:mx-auto lg:max-w-xl leading-[3rem]">
        Where your expertise meets a <em>mission that matters</em>
      </h1>
      <p className="mx-16 text-sm w-auto sm:max-w-96 sm:mx-auto lg:max-w-[35%]">
        Whether you&#8217;re looking for a temporary, permanent, or contract
        role, we have opportunities that match your skills and career goals.
        <br />
        Choose the right fit for you!
      </p>
      <Link href={"#form"} className="Button Button--secondary">
        Apply Now
      </Link>
      <DownArrow />
    </div>
  );
};

export default Hero;
