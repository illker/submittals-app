import React from "react";
import SubmittalsLogo from "../assets/img/submittals-logo.svg";

const Logo = () => {
  return (
    <img
      src={SubmittalsLogo}
      alt="Submittals logo App"
      style={{
        width: "250px",
        padding: "5px",
        margin: "15px",
      }}
    />
  );
};

export default Logo;
