import Image from "next/image";
import React from "react";
import flexibilityIcon from "../../../public/images/flexibility.png";
import growthIcon from "../../../public/images/growth.png";
import missionIcon from "../../../public/images/mission.png";
import purposeIcon from "../../../public/images/purpose.png";
import supportIcon from "../../../public/images/support.png";

const Values = () => {
  return (
    <div className="Values">
      <h2>Our Values</h2>
      <div className="Values__item">
        <Image
          src={purposeIcon}
          width={purposeIcon.width}
          height={purposeIcon.height}
          alt="purpose icon"
        />
        <h3>Purpose</h3>
        <p>
          Working with Alacrity means being part of a mission bigger than just a
          paycheck. You&#8217;ll be providing care to the men and women who
          dedicate their lives to protecting our country, ensuring they receive
          the highest quality care possible. Your work will directly impact the
          lives of those who have made countless sacrifices for our freedom.
        </p>
      </div>
      <div className="Values__item">
        <Image
          src={flexibilityIcon}
          width={flexibilityIcon.width}
          height={flexibilityIcon.height}
          alt="flexibility icon"
        />
        <h3>Flexibility</h3>
        <p>
          Alacrity offers flexible scheduling to accommodate your lifestyle,
          whether you&#8217;re looking for full-time, part-time, or locum tenens
          positions. We also provide competitive pay rates and benefits to
          ensure your work is rewarded and valued.
        </p>
      </div>
      <div className="Values__item">
        <Image
          src={missionIcon}
          width={missionIcon.width}
          height={missionIcon.height}
          alt="mission icon"
        />
        <h3>Mission</h3>
        <p>
          Alacrity&#8217;s focus on military and veteran care allows you to use
          your skills in a setting where you make a direct, positive difference
          in the lives of those who serve.
        </p>
      </div>
      <div className="Values__item">
        <Image
          src={supportIcon}
          width={supportIcon.width}
          height={supportIcon.height}
          alt="support icon"
        />
        <h3>Support</h3>
        <p>
          We understand that healthcare and dental professionals work in
          challenging environments, which is why we provide ongoing support and
          resources to help you succeed. Our team is always here to ensure you
          have the tools you need to provide the best care possible.
        </p>
      </div>
      <div className="Values__item">
        <Image
          src={growthIcon}
          width={growthIcon.width}
          height={growthIcon.height}
          alt="growth icon"
        />
        <h3>Growth</h3>
        <p>
          By joining Alacrity, you&#8217;ll gain access to a range of
          professional development opportunities, helping you grow in your field
          while supporting a community that appreciates your work.
        </p>
      </div>
    </div>
  );
};

export default Values;
