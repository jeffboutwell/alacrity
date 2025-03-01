import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const DownArrow = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faArrowDown}
        className="text-xl mt-12 animate-bounce"
      />
    </div>
  );
};

export default DownArrow;
