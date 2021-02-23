import React from "react";
import { Link } from "react-router-dom";
import SEO from "../Plugin/SEO";
const Start = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="col-12 text-center">
        <h3>
          <a href="/">
            <b>{props.title}</b>
          </a>
        </h3>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item rounded shadow"
            src={props.cinema}
            title="aplikasi toko minimarket"
            allowFullScreen
          />
        </div>
        <p>{props.desc}</p>
        <p>{props.content}</p>
        <div className="row">
          <div className="col-12 col-md-4 p-3 bg-default border border-dark rounded">
            <Link className="text-white" to={props.stockurl}>
              <h3>{props.stock}</h3>
              <img
                className="img-fluid rounded shadow"
                alt="mesin kasir online"
                src={props.stockicon}
              />
              <br />
            </Link>
          </div>
          <div className="col-12 col-md-4 p-3 bg-default border border-dark rounded">
            <Link className="text-white" to={props.kasirurl}>
              <h3>{props.kasir}</h3>
              <img
                className="img-fluid rounded shadow"
                alt="mesin kasir online"
                src={props.kasiricon}
              />
              <br />
            </Link>
          </div>
          <div className="col-12 col-md-4 p-3 bg-default border border-dark rounded">
            <Link className="text-white" to={props.adminurl}>
              <h3>{props.admin}</h3>
              <img
                className="img-fluid rounded shadow"
                alt="mesin kasir online"
                src={props.adminicon}
              />
              <br />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
