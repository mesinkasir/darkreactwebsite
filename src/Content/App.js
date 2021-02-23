import React, { useState } from "react";
import Inventori from "../Page/Inventori";

function App() {
  const [inventoris] = useState([
    {
      id: "demo",
      title: "Divisi admin gudang database",
      vd: "https://www.youtube.com/embed/Zq3h_HY4ASo",
      desc:
        "Divisi ini secara khusus bertugas untuk melakukan input dan regristasi produk supplier dan kebutuhan untuk melakukan transaksi stok inventori management, dengan pembagian divisi masing masing maka kemudahan dalam melakukan pekerjaan secara cepat pun dapat dilakukan, dan installasi online cloud memudahkan staff karyawan bekerja dengan menggunakan smartphone nya untuk kebutuhan dalam input data produk , kategori , supplier , melakukan transaksi stok dan lain nya."
    }
  ]);
  const [showInventori] = useState(true);

  const inventorisMarkup =
    showInventori &&
    inventoris.map((inventori, index) => (
      <Inventori
        vd={inventori.vd}
        desc={inventori.desc}
        title={inventori.title}
        key={inventori.id}
      />
    ));

  return (
    <div className="container">
      <div className="row">{inventorisMarkup}</div>
    </div>
  );
}

export default App;
