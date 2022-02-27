import "./ProductWishlist.css"
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProductWishlist = () => {
    var { id } = useParams();
    var [res, setRes] = useState([]);
    var [ide, setIde] = useState({ id });
    useEffect(async () => {
      console.log(ide);
      let data = await axios.get(
        `https://adidas-server.herokuapp.com/products/${ide.id}`
      );
      setRes(data.data);
    },[])
    console.log(res)
    // console.log(res.imageUrls[0]);
    const gmage = res.imageUrls
    console.log(gmage)

    var [ret, setRet] = useState([]);
    var [ids, setIds] = useState({ id });
    useEffect(async () => {
      console.log(ids);
      let data = await axios.get(
        `https://adidas-server.herokuapp.com/products/${ide.id}`
      );
      setRet(data.data.imageUrls[0]);
    },[]);
    console.log(ret)
    // console.log(ret[0])

    return (
      <>
        <Navbar />
        <div id="pro_container_wrap">
          <div className="nac_wish_left">
            <h1 className="nac_wishhead">MY WISHLIST</h1>
            {/* <p>0 ITEMS</p>
          <p>
            You haven't saved any items to your wishlist yet. Start shopping and
            add your favorite items to your wishlist.
          </p> */}
            <div className="nac_wishbox">
              <img src={ret} alt="" />
              <p className="nac_wisht">{res.title}</p>
              <p id="wishlist_price">Rs. {res.price}</p>
            </div>
          </div>
          <div className="nac_wish_right">
            <h2 className="nac_wishhead">NEED HELP?</h2>
            <ul className="nac_wright_a">
              <li>
                <a href="/Products" className="nac_black">
                  Products
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Ordering & Payments
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Delivery
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Promotions & Vouchers
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Return & Refund
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Account & Newsletter
                </a>
              </li>
              <li>
                <a href="" className="nac_black">
                  Company information
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
}