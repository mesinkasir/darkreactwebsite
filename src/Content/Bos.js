import React, { useState } from "react";
import Admin from "../Page/Admin";

function Bos() {
  const [admins] = useState([
    {
      id: "admin",
      img: "https://www.youtube.com/embed/ebXZcgoINuc",
      desc:
        "Dan dengan installasi via clouds online memudahkan anda khusus nya owner pemilik toko dan bisnis dalam melakukan monitoring maupun cek kontrol pembukuan dan laporan detail pada usaha, dapat diakses via smartphone android iphone hingga pc desktop laptop menyempurnakan dalam kebutuhan untuk mendukung mobilitas usaha, kini dimana saja kapan saja angkat phone device mu dan cek laporan dengan mudah nya bersama dx-retail apps",
      title: "Backoffice admin boss"
    }
  ]);
  const [showAdmin] = useState(true);

  const adminsMarkup =
    showAdmin &&
    admins.map((admin, index) => (
      <Admin
        img={admin.img}
        desc={admin.desc}
        title={admin.title}
        key={admin.id}
      />
    ));

  return (
    <div className="container">
      <div className="row">{adminsMarkup}</div>
    </div>
  );
}

export default Bos;
