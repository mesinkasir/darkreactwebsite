import React from "react";
import { Link } from "react-router-dom";
import SEO from "../Plugin/SEO";
const About = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="text-center">
        <h1>
          <strong>
            <a href="/">{props.title}</a>
          </strong>
        </h1>
        <img
          className="img-fluid rounded"
          alt="aplikasi kasir toko minimarket"
          src={props.img}
        />
        <h3>
          <small>{props.desc}</small>
        </h3>
        <p>{props.content}</p>
        <p>{props.footer}</p>
        <div className="text-center">
          <Link to={props.url} className="btn btn-primary p-3 rounded">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
