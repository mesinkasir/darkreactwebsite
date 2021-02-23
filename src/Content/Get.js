import React, { useState } from "react";
import Start from "../Page/Start";
function Get() {
  const [starts] = useState([
    {
      id: "mesin kasir online",
      title: "Mesin Kasir Online",
      cinema: "https://www.youtube.com/embed/4a-7x7KIUhM",
      desc:
        "Temukan kebebasan dengan menggunakan point of sale apps dx retail ini,dalam menunjang berbagai kebutuhan untuk masa depan yang lebih mobile serta cepat pada bisnis usaha mu.",
      content:
        "Dengan pembagian divisi memudahkan dalam kebutuhan untuk bekerja dengan cepat , admin database dan stock apps, kasir point of sale apps, admin backoffice web apps, Mari kita pelajari bagaimana mudah nya penggunaan mesin kasir online dx retail web apps click pilihan aplikasi divisi dibawah ini untuk cek fitur toko minimarket dan shop retail lain nya.",
      stockicon:
        "https://1.bp.blogspot.com/--ipE0dURDmk/XykfFIqXXcI/AAAAAAAAK_A/AHhWyp9w5JgBde4WhYBlLNo9QmFgQccAQCLcBGAsYHQ/s1000/program%2Bkasir%2Btoko%2Bretail%2Bonline.jpg",
      stockurl: "/stock",
      stock: "Admin Stock",
      kasiricon:
        "https://1.bp.blogspot.com/--izAoQQMRAQ/XykfFF4HWvI/AAAAAAAAK-4/MGNRtQrXTkkh4zgB8iUS5XTvWU9vepXbACLcBGAsYHQ/s1019/dexoposretailapps.jpg",
      kasirurl: "/kasir",
      kasir: "Kasir POS",
      adminicon:
        "https://1.bp.blogspot.com/-SI3jJ64UAdg/XykfFG12SlI/AAAAAAAAK-8/rnAP_Ziyueg7UdolRLJUhqWgHI46Vn19QCLcBGAsYHQ/s1142/software%2Baplikasi%2Btoko%2Bminimarket%2Bonline.png",
      adminurl: "/admin",
      admin: "Back Office"
    }
  ]);
  const [showStart] = useState(true);

  const startsMarkup =
    showStart &&
    starts.map((start, index) => (
      <Start
        admin={start.admin}
        adminicon={start.adminicon}
        adminurl={start.adminurl}
        kasir={start.kasir}
        kasiricon={start.kasiricon}
        kasirurl={start.kasirurl}
        stock={start.stock}
        stockicon={start.stockicon}
        stockurl={start.stockurl}
        content={start.content}
        cinema={start.cinema}
        desc={start.desc}
        title={start.title}
        key={start.id}
      />
    ));

  return (
    <div className="container">
      <div className="row">{startsMarkup}</div>
    </div>
  );
}

export default Get;
