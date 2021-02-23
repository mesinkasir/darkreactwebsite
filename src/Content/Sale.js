import React, { useState } from "react";
import Order from "../Page/Order";
import { Link } from "react-router-dom";

function Sale() {
  const [orders] = useState([
    {
      id: "basic",
      desc:
        "DX-Retail Apps + Free domain .my.id + Cloud Host + Cloud Database + Free Website Informasi + 500MB Web Space  + Layanan Bantuan + Layanan Konsultasi.",
      price: "Rp.1.085.600",
      title: "Basic"
    },
    {
      id: "standard",
      desc:
        "DX-Retail Apps + Free domain .com + Cloud Host + Cloud Database + Get Axcora CMS Website + 500MB Web Space + APK Android Backend + Layanan Bantuan + Layanan Konsultasi.",
      price: "Rp.1.561.200",
      title: "Standard"
    },
    {
      id: "premium",
      desc:
        "DX-Retail Apps + Free domain .com + Cloud Host + Cloud Database + Get Axcora CMS Website Premium + 1.5GB Web Space + APK Android Backend + APK Android Frontend + Layanan Bantuan + Layanan Konsultasi.",
      price: "Rp.3.264.800",
      title: "Premium"
    }
  ]);
  const [showOrder] = useState(true);

  const ordersMarkup =
    showOrder &&
    orders.map((order, index) => (
      <Order
        desc={order.desc}
        price={order.price}
        title={order.title}
        key={order.id}
      />
    ));

  return (
    <div className="container">
      <div className="row">
        <p className="text-center border rounded p-3 col-12">
          Layanan dengan durasi pertahun siap digunakan mendampingi bisnis usaha
          mu.
        </p>
        {ordersMarkup}
        <p className="text-center border rounded p-3 col-12">
          Pembayaran Order
          <br />
          BCA 0181884109 - SUCI CHANIFAH / BCA 8290363021 RICA ANGGRAINI
        </p>
      </div>
    </div>
  );
}

export default Sale;
