import React from "react";
import SEO from "../Plugin/SEO";
const Demovid = props => {
  console.log(props);
  return (
    <div>
      <SEO />
      <div className="row">
        <div className="col-12 col-md-12 p-3">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item rounded shadow"
              src="https://www.youtube.com/embed/JGTQ1dxnJEo"
              title="mesin kasir toko minimarket"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demovid;
