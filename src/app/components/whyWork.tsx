import Image from "next/image";
import React from "react";
import computer from "../../../public/images/man-with-computer.jpg";
import family from "../../../public/images/family.jpg";
import office from "../../../public/images/office.jpg";
import woman from "../../../public/images/woman.jpg";

const WhyWork = () => {
  return (
    <div className="WhyWork Content--outer">
      <div className="Content--inner">
        <div className="text-center mb-10">
          <h2>Why Work with Alacrity?</h2>
          <p className="max-w-2xl mx-auto">
            Whether you&#8217;re looking for a temporary, permanent, or contract
            role, we have opportunities that match your skills and career goals.
            Choose the right fit for you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-16">
          <div className="WhyWork__item">
            <Image
              src={family}
              width={family.width}
              height={family.height}
              alt="family hugging"
            />
            <h3>Serve Those Who Serve</h3>
            <p>
              Working with Alacrity means being part of a mission bigger than
              just a paycheck. You&#8217;ll be providing care to the men and
              women who dedicate their lives to protecting our country, ensuring
              they receive the highest quality care possible. Your work will
              directly impact the lives of those who have made countless
              sacrifices for our freedom.
            </p>
          </div>
          <div className="WhyWork__item">
            <Image
              src={office}
              width={office.width}
              height={office.height}
              alt="medical office"
            />
            <h3>Supportive Community</h3>
            <p>
              We understand that healthcare and dental professionals work in
              challenging environments, which is why we provide ongoing support
              and resources to help you succeed. Our team is always here to
              ensure you have the tools you need to provide the best care
              possible.
            </p>
          </div>
          <div className="WhyWork__item">
            <Image
              src={computer}
              width={computer.width}
              height={computer.height}
              alt="man working on a computer"
            />
            <h3>Opportunities for Growth</h3>
            <p>
              We offer healthcare professionals a variety of roles in military
              healthcare settings, veterans&#8217; care, and more. By joining
              Alacrity, you&#8217;ll gain access to a range of professional
              development opportunities, helping you grow in your field while
              supporting a community that appreciates your work.
            </p>
          </div>
          <div className="WhyWork__item">
            <Image
              src={woman}
              width={woman.width}
              height={woman.height}
              alt="woman"
            />
            <h3>Competitive Pay & Benefits</h3>
            <p>
              Alacrity offers flexible scheduling for full-time, part-time, or
              locum tenens positions. We also provide competitive pay rates and
              benefits to ensure your work is rewarded and valued.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWork;
