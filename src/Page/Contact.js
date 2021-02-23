import React from "react";

const Contact = props => {
  console.log(props);
  return (
    <div className="col-12 col-md-4">
      <img
        src={props.img}
        className="img-fluid rounded shadow"
        alt="Aplikasi program kasir toko minimarket"
      />
      <div className="card-body">
        <h3>
          <b>{props.title}</b>
        </h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Contact;
