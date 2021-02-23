import React, { useState } from "react";
import Contact from "../Page/Contact";

function Me() {
  const [contacts] = useState([
    {
      id: "area",
      img:
        "https://1.bp.blogspot.com/-fUrorzpe7ck/XykfGG7yinI/AAAAAAAAK_E/Lx-PwF7_2GsfO9KOwDv5Txm98JSC0TrCQCLcBGAsYHQ/s1356/online%2Bpos%2Bapplication.png",
      desc: "Area login untuk akses berdasarkan jabatan.",
      title: "Area"
    },
    {
      id: "login",
      img:
        "https://1.bp.blogspot.com/--Nq85F21C1Q/YDTwwLd7nYI/AAAAAAAANEI/lMgaA8kjAlEOtEMX6x8tHPJ-hdxgSEteQCLcBGAsYHQ/s366/program%2Bsoftware%2Baplikasi%2Bminimarket%2Bonline%2B-%2BCopy.png",
      desc: "Fitur login awal untuk akses aplikasi",
      title: "Login"
    },
    {
      id: "home",
      img:
        "https://1.bp.blogspot.com/-GMu9xEdPhAc/YDTvUvXUZRI/AAAAAAAANEA/gteqfvNdF9IJDpIcSiSwGKLxhUPL-1voQCLcBGAsYHQ/s1366/aplikasi%2Btoko%2Bminimarket%2Bdengan%2Bpembagian%2Bdivisi.png",
      desc: "Dashboard home awal setelah login.",
      title: "Home"
    },
    {
      id: "supplier",
      img:
        "https://1.bp.blogspot.com/-SGko5m5a1CU/XykfKMSd62I/AAAAAAAAK_4/wTARtuLvyyYYX9LOITvMuF6ozFRnxThHwCLcBGAsYHQ/s1344/supplier%2Bdatabase%2Bprogram%2Btoko.png",
      desc: "Fitur untuk mendaftarkan supplier",
      title: "Supplier"
    },
    {
      id: "product",
      img:
        "https://1.bp.blogspot.com/-pfAzT83oIGo/XykfIZLU8uI/AAAAAAAAK_g/0hgJc3I6nmEmWDSMfbELSET1AK72qsfZgCLcBGAsYHQ/s1350/laporan%2Bproduk.png",
      desc: "Product database untuk input dan memasukan produk jual.",
      title: "Products"
    },
    {
      id: "pembelian",
      img:
        "https://1.bp.blogspot.com/-VPLSuMRAffk/XykfJ_l6OwI/AAAAAAAAK_0/uZZzM-IeSk4JkR-FCFOzPUIm0kJ1PNHFACLcBGAsYHQ/s1369/purchase%2Border%2Bpembelian%2Bke%2Bsupplier.png",
      desc: "Fitur untuk melakukan pembelian ke supplier",
      title: "Pembelian"
    },
    {
      id: "retur",
      img:
        "https://1.bp.blogspot.com/-kzYyVLuUk3E/XykfGh9jqsI/AAAAAAAAK_I/8pRTgpa2aMwkccvO4M_zMqbI5Umz9PrjgCLcBGAsYHQ/s1362/inventori%2Bmanagement.png",
      desc: "Inventori stok management untuk melakukan retur pembelian",
      title: "Retur"
    },
    {
      id: "stok",
      img:
        "https://1.bp.blogspot.com/-CK0TM68ChRU/XykfJXNW5kI/AAAAAAAAK_s/ymTkgKI2OFEB15niFgE4L-kZLr3zft8iwCLcBGAsYHQ/s1349/out%2Bstok%2Bsystem.png",
      desc:
        "Inventori stok management untuk stok opname dan penyamaan out loss stok",
      title: "Stok"
    },
    {
      id: "kasir",
      img:
        "https://1.bp.blogspot.com/-PbblNMy7W7A/XylAcyeJZSI/AAAAAAAALAY/643SHFKwtY0RM5d03JxMKRzfv7GyG21aACLcBGAsYHQ/s1366/pointofsale%2Bonline.png",
      desc:
        "Point of sale penjualan kasir support dengan barcode dan pencarian produk",
      title: "Kasir"
    },
    {
      id: "print",
      img:
        "https://1.bp.blogspot.com/-XlX3sdJgSXg/XykfJp5qryI/AAAAAAAAK_w/_VYvzOHm7SIV-Az9XNog6CSBNArzGt2xACLcBGAsYHQ/s519/print%2Bstruk%2Bkasir.png",
      desc: "Printer kasir untuk mencetak struk kasir penjualan",
      title: "Struk"
    },
    {
      id: "grup",
      img:
        "https://1.bp.blogspot.com/-Xwlbw9InHtY/XykfHwlHp1I/AAAAAAAALAQ/e-0IRA-o4NYtIluLqcp3ggA0YvBp80T2ACPcBGAYYCw/s1349/laporan%2Bpennjualan%2Bkasir%2Bkategori%2Bproduk.png",
      desc: "Grafik laporan penjualan per kategori grup produk",
      title: "Group"
    },
    {
      id: "Inventori",
      img:
        "https://1.bp.blogspot.com/-iKEwJ0d3T3w/XykfG9QJtZI/AAAAAAAAK_M/F9Mr8e9f7MYUQuE2Se241SX-EmkkhYgUACLcBGAsYHQ/s1371/inventori%2Bstok.png",
      desc: "Laporan inventori stok management yang lengkap",
      title: "Inventori"
    },
    {
      id: "lapbeli",
      img:
        "https://1.bp.blogspot.com/-vrUQtxK7Mpg/XykfHWMRmGI/AAAAAAAAK_U/BLN6lKNOH2kyJx6xKXVA_wcZG0b28zDrQCLcBGAsYHQ/s1362/laporan%2Bpembelian.png",
      desc: "Rangkuman laporan pembelian detail pada supplier",
      title: "Lap Pembelian"
    },
    {
      id: "Laba",
      img:
        "https://1.bp.blogspot.com/-yJjh11ILwD4/XykfH1lZDUI/AAAAAAAAK_Y/nnyUaoPz6Wg6Pki8n3p95TGdsW_QllnoACLcBGAsYHQ/s1366/laporan%2Bpenjualan%2Bkasir.png",
      desc: "Laporan profit pendapatan income details.",
      title: "Profit"
    },
    {
      id: "expire",
      img:
        "https://1.bp.blogspot.com/-KmWOwbwlrjQ/XykfI29dDpI/AAAAAAAAK_o/gwoGnrd0TI0M7SbGZE8Su1eFa-pKPcKUQCLcBGAsYHQ/s1366/out%2Bstok%2Bproduk%2Bkarena%2Brusak%2Bexpired%2Bdate.png",
      desc: "Laporan expired produk details",
      title: "Expired"
    },
    {
      id: "grafik",
      img:
        "https://1.bp.blogspot.com/-pVIPVu3ojis/XykfHAf-eQI/AAAAAAAAK_Q/HweaVDP9uuooI3jV1_Cc6Pofd9perp8oQCLcBGAsYHQ/s1349/laporan%2Bbulanan.png",
      desc: "Laporan Bulanan Grafik details",
      title: "Grafik"
    },
    {
      id: "doc",
      img:
        "https://1.bp.blogspot.com/-SZznwVgCO0c/XykfKi5aOtI/AAAAAAAAK_8/c-BQqkLMfBoT0YeGiKfWKL1a5LaN80J7wCLcBGAsYHQ/s1340/tutorial%2Bprogram%2Btoko%2Bkasir.png",
      desc: "Live dokumentasi penggunaan dx retail apps",
      title: "Dokumentasi"
    }
  ]);
  const [showContact] = useState(true);

  const contactsMarkup =
    showContact &&
    contacts.map((contact, index) => (
      <Contact
        img={contact.img}
        desc={contact.desc}
        title={contact.title}
        key={contact.id}
      />
    ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-12 p-3 text-center">
          <h3>Gallery</h3>
        </div>
        {contactsMarkup}
      </div>
    </div>
  );
}

export default Me;
