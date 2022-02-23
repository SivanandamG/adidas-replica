import "./Navbar.css";
import { Link } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgHeart } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div id="nav_mainwrap">
      <div id="nav_upper_wrap">
        <div className="nav_upper_content">
          FREE DELIVERY FOR ALL ORDERS NOW
        </div>
        <div className="nav_upper_content">SIGN UP & GET 15% OFF</div>
        <div className="nav_upper_content">
          QUICK EASY RETURNS ON PREPAID ORDERS
        </div>
      </div>
      <div id="nav_lower_wrap">
        <div id="nav_lower_wrap_logo">
          <img src="/images/adidas-logo.svg" alt="" width="70px" />
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
            <Link to="" className="nav_lower_primary_links">
              sign up
            </Link>
            <Link to="" className="nav_lower_primary_links">
              creators club
            </Link>
            <Link to="" className="nav_lower_primary_links">
              log in
            </Link>
          </div>
          <div id="nav_lower_wrap_link_contents_secondary">
            <div id="nav_lower_secondary_categories">
              <Link to="" className="nav_lower_secondary_categ1">
                MEN
              </Link>
              <Link to="" className="nav_lower_secondary_categ1">
                WOMEN
              </Link>
              <Link to="" className="nav_lower_secondary_categ1">
                KIDS
              </Link>
              <Link to="" className="nav_lower_secondary_categ2">
                SPORTS
              </Link>
              <Link to="" className="nav_lower_secondary_categ2">
                BRANDS
              </Link>
              <Link to="" className="nav_lower_secondary_categ2">
                COLLECTIONS
              </Link>
              <Link to="" className="nav_lower_secondary_categ2">
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
                <i>{<GrSearch />}</i>
              </div>
              <div id="nav_lower_sec_icons">
              <i>{<FiUser/>}</i>
              <i>{<CgHeart/>}</i>
              <i>{<BsHandbag/>}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
