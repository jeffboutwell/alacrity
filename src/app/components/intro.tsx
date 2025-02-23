import Image from "next/image";
import Link from "next/link";
import React from "react";
import bird from "../../../public/images/bird.svg";

const Intro = () => {
  return (
    <div className="Intro Content--outer">
      <div className="Intro Content--inner grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <h2>
            Join Alacrity &#8212; Where Your Expertise Meets a Mission That
            Matters
          </h2>
          <p className="mb-12">
            At Alacrity, we don&#8217;t just offer jobs &#8212; we offer a
            purpose. As a premier medical staffing agency, we work hand-in-hand
            with the U.S. military to deliver top-tier care to those who need it
            most. We&#8217;re looking for passionate healthcare and dental
            professionals like you to join our team and help make a lasting
            impacton the lives of military personnel, veterans, and their
            families.
          </p>
          <Link href={"#form"} className="Button Button--primary">
            Get Started
          </Link>
        </div>
        <div className="md:col-span-5">
          <Image
            src={bird}
            width="500"
            height="500"
            alt="bird"
            className="opacity-25 dark:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
