import "./Navbar.css";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgHeart } from "react-icons/cg";
import { BsHandbag, BsCardHeading, BsTruck } from "react-icons/bs";
import { ImLoop } from "react-icons/im";
import { MenPopup } from "../popup/Men_popup.jsx";
import { useState } from "react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
    if (count % 2 == 1) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <div id="nav_mainwrap">
        <div id="nav_upper_wrap">
          <div className="nav_upper_content">
            <i className="nav_upper_content_logo">{<BsTruck />}</i>
            <span>FREE DELIVERY FOR ALL ORDERS NOW</span>
          </div>
          <div className="nav_upper_content">
            <i className="nav_upper_content_logo">{<BsCardHeading />}</i>
            <span>SIGN UP & GET 15% OFF</span>
          </div>
          <div className="nav_upper_content">
            <i className="nav_upper_content_logo">{<ImLoop />}</i>
            <span>QUICK EASY RETURNS ON PREPAID ORDERS</span>
          </div>
        </div>
        <div id="nav_lower_wrap">
          <div id="nav_lower_wrap_logo">
            <Link to="/">
              <img src="/images/adidas-logo.svg" alt="" width="70px" />
            </Link>
          </div>
          <div id="nav_lower_wrap_link_contents">
            <div id="nav_lower_wrap_link_contents_primary">
              <Link to="" className="nav_lower_primary_links">
                help
              </Link>
              <Link to="" className="nav_lower_primary_links">
                returns
              </Link>
              <Link to="" className="nav_lower_primary_links">
                order tracker
              </Link>
              <Link to="/Signup" className="nav_lower_primary_links">
                sign up
              </Link>
              <Link to="" className="nav_lower_primary_links">
                creators club
              </Link>
              <Link to="/Login" className="nav_lower_primary_links">
                log in
              </Link>
            </div>
            <div id="nav_lower_wrap_link_contents_secondary">
              <div id="nav_lower_secondary_categories">
                <Link
                  to=""
                  className="nav_lower_secondary_categ1"
                  id="demo_popup"
                  // onMouseEnter={()=>{
                  //   setToggle(true)
                  // }}
                  // onMouseLeave={()=>{
                  //   setToggle(true)
                  // }}
                  onClick={handleClick}
                >
                  MEN
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ1"
                  onClick={handleClick}
                >
                  WOMEN
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ1"
                  onClick={handleClick}
                >
                  KIDS
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ2"
                  onClick={handleClick}
                >
                  SPORTS
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ2"
                  onClick={handleClick}
                >
                  BRANDS
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ2"
                  onClick={handleClick}
                >
                  COLLECTIONS
                </Link>
                <Link
                  to=""
                  className="nav_lower_secondary_categ2"
                  onClick={handleClick}
                >
                  OUTLET
                </Link>
              </div>
              <div id="nav_lower_secondary_srchbar_icons">
                <div id="nav_lower_sec_srchbar">
                  <input
                    type="text"
                    id="nav_lower_sec_srchinput"
                    placeholder="Search"
                  />
                  <a href="/products">
                    <i>{<GrSearch id="nav_lower_sec_srchinput_searchicon" />}</i>
                  </a>
                </div>
                <div id="nav_lower_sec_icons">
                  <a href="/login">
                    <i>{<FiUser />}</i>
                  </a>
                  <a href="/Wishlist">
                    <i>{<CgHeart />}</i>
                  </a>
                  <a href="/Cart">
                    <i>{<BsHandbag />}</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle === true && <MenPopup />}
    </>
  );
};
