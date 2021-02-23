import React, { useState } from "react";
import Pos from "../Page/Pos";
import { Link } from "react-router-dom";

function Kasir() {
  const [poss] = useState([
    {
      id: "demo",
      vd: "https://www.youtube.com/embed/USPXOypllOU",
      desc:
        "Dengan hadirnya divisi kasir apps atau aplikasi yang dikhusus kan untuk kasir menjadikan kemudahan bagi karyawan atau staff bekerja dengan melakukan pekerjaan sesuai dengan bidang nya, pada kasir point of sale application ini , maka ketika kasir login akan di tampilkan display penjualan kasir langsung, dengan tujuan utama kasir adalah melakukan penjualan dan melayani dalam handle pesanan  pelanggan, cek pada video demo mudah nya penggunaan nya, serta support dengan barcode system semakin mempermudah dan mempercepat dalam transaksi penjualan kasir via mesin kasir point of sale online ini.",
      title: "Divisi Kasir Penjualan Point of sale"
    }
  ]);
  const [showPos] = useState(true);

  const possMarkup =
    showPos &&
    poss.map((pos, index) => (
      <Pos vd={pos.vd} desc={pos.desc} title={pos.title} key={pos.id} />
    ));

  return (
    <div className="container">
      <div className="row">{possMarkup}</div>
    </div>
  );
}

export default Kasir;
