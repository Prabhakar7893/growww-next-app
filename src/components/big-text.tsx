import Link from "next/link";
import React from "react";

// type 
type IProps = {
  cls?: string;
};

export default function BigText({cls=""}: IProps) {
  return (
    <div className={`sv-big-text-area pb-80 ${cls}`}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>FUTURE &nbsp; PROOF &nbsp; DEVELOPMENT</span>
          <span>ECOMMERCE &nbsp; SOLUTIONS</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp-char-animation">
            <Link href="https://api.whatsapp.com/send?phone=919866662226&text=Hi%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20talk%20to%20your%20team%20about%20my%20eCommerce%20project">Get in Touch</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
