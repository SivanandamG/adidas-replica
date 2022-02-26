import "./Men_popup.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export const MenPopup=()=>{

    return (
      <div>
        <div id="men_popup_wrap">
          <div id="men_popup_leftwrap">
            <ul className="men_popup_wrap_links">
              <li className="men_popup_wrap_head">FEATURED</li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Originals
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Manchester United
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Ultraboost
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  4DFWD
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Stan Smith
                </Link>
              </li>
              <div id="men_outlet">Outlet</div>
            </ul>
            <img src="/images/mennav_img.jpg" alt="" id="men_nav_img" />
          </div>
          <div id="men_popup_rightwrap">
            <ul className="men_popup_wrap_links">
              <li className="men_popup_wrap_head">FOOTWEAR</li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Running
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Originals
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Slides & Sandals
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Football
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Tennis
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Skatebaording
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Swim
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Hiking & Outdoor
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Cricket
                </Link>
              </li>
            </ul>

            <ul className="men_popup_wrap_links">
              <li className="men_popup_wrap_head">CLOTHING</li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  T-Shirts & Tank Tops
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Joggers & Track Tops
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Originals
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Football Jerseys & T-Shirts
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Shorts
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Jackets
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Tracksuits
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Sweatshirts
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Swimwear
                </Link>
              </li>
            </ul>

            <ul className="men_popup_wrap_links">
              <li className="men_popup_wrap_head">ACCESSORIES</li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Face Covers
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Socks
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  All Bags
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Backpacks
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Gym & Training Bags
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Headwear
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Gloves
                </Link>
              </li>
            </ul>

            <ul className="men_popup_wrap_links">
              <li className="men_popup_wrap_head">SPORTS</li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Running
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Gym & Training
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Football
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Tennis
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Hiking & Outdoor
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Swim
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Skatebaording
                </Link>
              </li>

              <li
                className="men_popup_wrap_head"
                id="men_popup_right_sustainable"
              >
                SUSTAINABLE MATERIALS
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Made with Recycled Material
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Vegan
                </Link>
              </li>
              <li>
                <Link to="" className="men_popup_wrap_mainlinks">
                  Organic Cotton
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="men_popup_footer">
          <div>All Men's</div>
          <div>All Men's Footwear</div>
          <div>All Men's Clothing</div>
          <div>All Men's Accessories</div>
          <div>Men's All Sustainable</div>
        </div>
      </div>
    );
}