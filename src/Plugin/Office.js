import React, { useState } from "react";
import Pos from "../Page/Pos";
import { Link } from "react-router-dom";

function Office() {
  const [poss] = useState([
    {
      img:
        "https://1.bp.blogspot.com/-SI3jJ64UAdg/XykfFG12SlI/AAAAAAAAK-8/rnAP_Ziyueg7UdolRLJUhqWgHI46Vn19QCLcBGAsYHQ/s1142/software%2Baplikasi%2Btoko%2Bminimarket%2Bonline.png",
      qty: "15",
      title: "International Operations Producer"
    },
    {
      img: "https://s.udemycdn.com/partner-logos/booking-logo.svg",
      qty: "Bartholome Dietrich",
      title: "Future Security Developer"
    },
    {
      img: "https://s.udemycdn.com/partner-logos/booking-logo.svg",
      qty: "Pattie Miller",
      title: "Forward Metrics AnalystChange Name"
    }
  ]);
  const [showPos] = useState(true);

  const possMarkup =
    showPos &&
    poss.map((pos, index) => (
      <Pos img={pos.img} qty={pos.qty} title={pos.title} key={pos.id} />
    ));

  return (
    <div className="container">
      <Link to="/">Home</Link>
      <div className="row">{possMarkup}</div>
    </div>
  );
}

export default Office;
