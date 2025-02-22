import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <h1>
        Where your expertise meets a <em>mission that matters</em>
      </h1>
      <p>
        Whether you&#8217;re looking for a temporary, permanent, or contract
        role, we have opportunities that match your skills and career goals.
        Choose the right fit for you!
      </p>
      <Link href={"#form"} className="Button--secondary">
        Apply Now
      </Link>
    </div>
  );
};

export default Hero;
