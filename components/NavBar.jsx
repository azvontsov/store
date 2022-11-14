import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext.js";

const Navbar = ({ heroBanner }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p>
        <Link href="/">
          {/* Misha's Merch */}
          <div className="nav-logo">
            <img
              className="logo"
              src="https://res.cloudinary.com/antonjs/image/upload/v1668385050/logo_pcuuiv.png"
              alt=""
            />
            <p>Misha's Merch on Demand</p>
          </div>
        </Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
