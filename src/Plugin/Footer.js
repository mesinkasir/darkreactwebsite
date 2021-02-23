import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Boot from "./Boot";
const Footer = props => {
  console.log(props);
  return (
    <div>
      <Contact />
      <Boot />
    </div>
  );
};

export default Footer;
