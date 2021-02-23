import React from "react";
import SEO from "../Plugin/SEO";
const Cashier = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="col-12 col-md-4 p-3">
        {" "}
        <img
          src={props.img}
          className="card-img-top"
          alt="Aplikasi program kasir toko minimarket"
        />
        <h3>
          <b>{props.title}</b>
        </h3>
        <p>Spek : {props.spek}</p>
        <p>Harga : Rp.{props.price}</p>
        <p />
      </div>
    </div>
  );
};

export default Cashier;
