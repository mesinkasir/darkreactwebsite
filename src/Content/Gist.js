import React, { useState } from "react";
import Cashier from "../Page/Cashier";
import { Link } from "react-router-dom";

function Gist() {
  const [cashiers] = useState([
    {
      id: "2",
      img:
        "https://1.bp.blogspot.com/-hU1SgbKO0aI/X97OIpUSjRI/AAAAAAAALw0/Kderbf4jXNArVpacJVlbE31tP2HA-82UACLcBGAsYHQ/s300/mesinkasirterbaru%2B%25282%2529.png",
      price: "10.000.000",
      spek:
        "All in one touchscreen mesin kasir POS + Printer kasir auto cutter.",
      title: "Version 2"
    },
    {
      id: "3",
      img:
        "https://1.bp.blogspot.com/-_BlljbjWIeM/X97OIPh7caI/AAAAAAAALws/I5ch19Eap2g4bIPaAeKo9LZ1qvSxQB5twCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25283%2529.png",
      price: "11.000.000",
      spek:
        "All in one touchscreen mesin kasir POS + Printer kasir auto cutter + laci kasir besi.",
      title: "Version 3"
    },
    {
      id: "4",
      img:
        "https://1.bp.blogspot.com/-0NZKcpWm9kw/X97OJNNn9mI/AAAAAAAALw4/RIEiq-dWGy087iH1Oh5z-r4AtuYh7O44QCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25284%2529.png",
      price: "12.000.000",
      spek:
        "All in one touchscreen mesin kasir POS + Printer kasir auto cutter + laci kasir besi + laser barcode manual.",
      title: "Version 4"
    },
    {
      id: "5",
      img:
        "https://1.bp.blogspot.com/-Np6dpwJu-Dk/X97OJyeHGSI/AAAAAAAALw8/6jvCuqi7lHI6kouFUKMq0rQkmy12Pk7tQCLcBGAsYHQ/s300/mesinkasirterbaru%2B%25285%2529.png",
      price: "14.500.000",
      spek:
        "All in one touchscreen mesin kasir POS + Printer kasir auto cutter + laci kasir besi + laser barcode multi auto laser.",
      title: "Version 4"
    },
    {
      id: "6",
      img:
        "https://1.bp.blogspot.com/-MmDK-GujJH0/X97OIYuyqDI/AAAAAAAALww/C6Ha3tgRjOc0soSWxgZabOVo1730uJzvACLcBGAsYHQ/s300/mesinkasirterbaru%2B%25281%2529.png",
      price: "Rp.18.500.000",
      spek:
        "All in one touchscreen mesin kasir POS + Printer kasir auto cutter + laci kasir besi + laser barcode multi auto laser + mesin barcode",
      title: "Version 6"
    }
  ]);
  const [showCashier] = useState(true);

  const cashiersMarkup =
    showCashier &&
    cashiers.map((cashier, index) => (
      <Cashier
        spek={cashier.spek}
        img={cashier.img}
        price={cashier.price}
        title={cashier.title}
        key={cashier.id}
      />
    ));

  return (
    <div className="container text-center">
      <Link to="/demo" className="btn btn-primary p-3">
        Play Demo Video
      </Link>
      <div className="row">{cashiersMarkup}</div>
      <p className="text-center border rounded p-3 col-12">
        Pembayaran Order
        <br />
        BCA 0181884109 - SUCI CHANIFAH <br /> BCA 8290363021 RICA ANGGRAINI
      </p>
    </div>
  );
}

export default Gist;
