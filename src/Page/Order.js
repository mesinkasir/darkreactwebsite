import React from "react";
import SEO from "../Plugin/SEO";
const Order = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="col-12 col-md-4 p-3 p-md-5 border">
        <h3>
          <b>{props.title}</b>
        </h3>
        <p>Spek : {props.desc}</p>
        <p>Harga : {props.price}</p>
      </div>
    </div>
  );
};

export default Order;
