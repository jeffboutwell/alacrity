import Image from "next/image";
import Link from "next/link";
import React from "react";
import bird from "../../../public/images/bird.svg";

const Intro = () => {
  return (
    <div className="Intro">
      <div>
        <h2>
          Join Alacrity - Where Your Expertise Meets a Mission That Matters
        </h2>
        <p>
          At Alacrity, we don&#8217;t just offer jobs – we offer a purpose. As a
          premier medical staffing agency, we work hand-in-hand with the U.S.
          military to deliver top-tier care to those who need it most.
          We&#8217;re looking for passionate healthcare and dental professionals
          like you to join our team and help make a lasting impacton the lives
          of military personnel, veterans, and their families.
        </p>
        <Link href={"#form"} className="Button--primary">
          Get Started
        </Link>
      </div>
      <div>
        <Image src={bird} width="500" height="500" alt="bird" />
      </div>
    </div>
  );
};

export default Intro;
