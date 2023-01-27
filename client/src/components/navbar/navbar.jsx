import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../cart/cart";
import "./navbar-style.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <h3>
            <Link to="/">
              <img src="/img/logo.png" alt="" className="logo" />
            </Link>
          </h3>
          <div className="item">
            <img src="/img/bn.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link to="/products/1">Women</Link>
          </div>

          <div className="item">
            <Link to="/products/2">Men</Link>
          </div>

          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        {/* <div className="mid">
          <Link to="/">Royal Shopping</Link>
        </div> */}
        <div className="right">
          <div className="item">
            <Link to="/">Home</Link>
          </div>

          <div className="item">
            <Link to="/">About</Link>
          </div>

          <div className="item">
            <Link to="/">Contact</Link>
          </div>

          <div className="item">
            <Link to="/">Stores</Link>
          </div>

          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
