import Link from "next/link";
import React from "react";

const Difference = () => {
  return (
    <div className="Difference Content--outer">
      <div className="Content--inner grid md:grid-cols-12">
        <h2 className="md:col-span-8">Ready to Make a Difference?</h2>
        <div className="md:col-span-4">
          <Link href={"#form"} className="Button Button--tertiary mx-auto">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Difference;
