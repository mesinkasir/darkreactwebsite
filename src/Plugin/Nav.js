import React from "react";
import { Link } from "react-router-dom";
const Nav = props => {
  console.log(props);
  return (
    <div className="text-center">
      <Link className="text-white" to="/order">
        Order
      </Link>
      <Link className="text-white" to="/">
        <img
          width="60"
          className="img-fluid"
          alt="aplikasi kasir toko minimarket"
          src="https://firebasestorage.googleapis.com/v0/b/dexopos.appspot.com/o/c.png?alt=media&token=09d60ab7-164d-495a-a280-bf73455c3ea1"
        />
      </Link>
      <Link className="text-white" to="/gallery">
        Gallery
      </Link>
      <nav className="nav bg-primary justify-content-center">
        <Link className="nav-link text-white" to="/stock">
          Admin
        </Link>
        <Link className="nav-link text-white" to="/kasir">
          Kasir
        </Link>
        <Link className="nav-link text-white" to="/admin">
          Office
        </Link>
        <Link className="nav-link text-white" to="/mesinkasir">
          POS
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
