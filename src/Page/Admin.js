import React from "react";
import SEO from "../Plugin/SEO";
const Admin = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="col-12 col-md-12 p-3">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item rounded shadow"
            src={props.img}
            title="aplikasi toko kasir penjualan minimarket"
            allowFullScreen
          />
        </div>
        <h3>
          <b>{props.title}</b>
        </h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Admin;
