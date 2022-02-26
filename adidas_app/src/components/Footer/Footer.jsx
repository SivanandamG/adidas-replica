import "./Footer.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="footer_mainwrap">
      <div id="footer_sectone_wrap">
        <h4>JOIN ADIDAS AND GET 15% OFF</h4>
        <div>
          <div>SIGN UP</div>
          <span id="footer_sectone_arrow_icon">
            <i>{<HiOutlineArrowNarrowRight />}</i>
          </span>
        </div>
      </div>
      <div id="footer_secttwo_wrap">
        <div id="footer_secttwo_links_wrap">
          <ul className="footer_secttwo_wrap_links">
            <li>PRODUCTS</li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Footwear
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Clothing
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Outlet-Sale
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                New Arrivals
              </Link>
            </li>
          </ul>

          <ul className="footer_secttwo_wrap_links">
            <li>SPORTS</li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Running
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Football
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Gym/Training
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Tennis
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Outdoor
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Basketball
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Swimming
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Skateboarding
              </Link>
            </li>
          </ul>

          <ul className="footer_secttwo_wrap_links">
            <li>COLLECTIONS</li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Ultraboost
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Superstar
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                NMD
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Stan Smith
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Predator
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Parley
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                adicolor
              </Link>
            </li>
          </ul>

          <ul className="footer_secttwo_wrap_links">
            <li>SUPPORT</li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Help
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Customer Services
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Order Tracker
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Store Locator
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Running Shoe Finder
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Bra Fit Guide
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                creators club
              </Link>
            </li>
          </ul>

          <ul className="footer_secttwo_wrap_links">
            <li>COMPANY INFO</li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                adidas stories
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                adidas Apps
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Entity Details
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Press
              </Link>
            </li>
            <li>
              <Link to="" className="footer_secttwo_mainlinks">
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer_sectthree_wrap">
        <div id="footer_sectthree_innerwrap">
          <div id="footer_sectthree_location">
            <img src="/images/india-logo.svg" alt="" />
            <span>India</span>
          </div>
          <div id="footer_sectthree_links">
            <div className="footer_sectthree_linkoneandthree">
              Privacy Policy
            </div>
            <div className="footer_sectthree_linkoneandthree">
              Terms and Conditions
            </div>
            <div>Cookies</div>
          </div>
        </div>
        <div id="footer_sectthree_copyright">©2021 adidas India Marketing Pvt. Ltd</div>
      </div>
    </div>
  );
};
