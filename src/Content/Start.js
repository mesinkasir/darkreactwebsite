import React, { useState } from "react";
import About from "../Page/About";

function Start() {
  const [abouts] = useState([
    {
      id: "DX retail",
      img:
        "https://1.bp.blogspot.com/-SI3jJ64UAdg/XykfFG12SlI/AAAAAAAAK-8/rnAP_Ziyueg7UdolRLJUhqWgHI46Vn19QCLcBGAsYHQ/s1142/software%2Baplikasi%2Btoko%2Bminimarket%2Bonline.png",
      title: "DX Retail",
      desc:
        " Mesin kasir online aplikasi toko kasir penjualan minimarket online",
      content:
        "Sensasi point of sale system dengan kemudahan rasakan dunia dalam genggaman,dengan dx-retail web apps solutions.",
      footer:
        "Full online dalam bekerja baik installasi dan database cloud menjadikan kemudahan akses via berbagai device hingga kebebasan dalam penggunaan dengan unlimited user dalam bekerja, saat nya revolusi digital dimulai bersama kami.",
      url: "/getstart"
    }
  ]);
  const [showAbout] = useState(true);

  const aboutsMarkup =
    showAbout &&
    abouts.map((about, index) => (
      <About
        img={about.img}
        desc={about.desc}
        url={about.url}
        footer={about.footer}
        content={about.content}
        title={about.title}
        key={about.id}
      />
    ));

  return <div>{aboutsMarkup}</div>;
}

export default Start;
