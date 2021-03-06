import { useEffect, useState } from "react"
import "./cart.css"
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

export default function Cart (){
     const [cart,setCart] = useState([]);
     useEffect(()=>{
          fetch("https://adidas-server.herokuapp.com/cart/62173d4ee7006e0f0f397d33").then((res)=>res.json()).then((res)=>{console.log(res);setCart(res)})
     },[]);
     var sum=0; cart.map((a)=>{sum = sum + a.price; return})
     return (
       <>
         <Navbar />
         <div id="cart">
           <div id="subcart">
             <h1>Your Bag</h1>
             <p>
               Total Price: ({cart.length}items) <b>₹{sum}.00</b>
             </p>
             <p>
               Items in your bag are not reserved – check out now to make them
               yours.
             </p>
             {cart.map((a) => {
               return (
                 <div key={a._id}>
                   <div
                     className="cartclose"
                     onClick={() => {
                       fetch(
                         `https://adidas-server.herokuapp.com/cart/deleteitem/62173d4ee7006e0f0f397d33/${a._id}`
                       )
                         .then((res) => res.json())
                         .then((res) => {
                           setCart(res);
                         });
                     }}
                   >
                     <b>
                       <strong id="cart_dlt_icon">
                         <MdDeleteOutline />
                       </strong>
                     </b>
                   </div>
                   <img src={a.imageUrls[0]} alt="" />
                   <div className="itemTitle">
                     {" "}
                     {a.title}DOVE GREY / CORE BLACK / SEMI SCREAMING GREEN
                   </div>
                   <div className="itemPrice">
                     {" "}
                     <strike style={{ color: "grey" }}>
                       ₹{a.price}.00
                     </strike>{" "}
                     <span style={{ color: "red" }}>
                       {" "}
                       ₹{Math.round(a.price * a.discount)}.00
                     </span>
                   </div>
                   <br />
                   <div className="itemSize">
                     size: {Math.floor(Math.random() * 10 + 3)}
                   </div>
                   <br />
                   <select name="1">
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                   </select>
                 </div>
               );
             })}
             <a href="/Address">
               <button className="checkout">
                 Checkout →
               </button>
             </a>
           </div>

           <div id="cartSide">
             <a href="/Address">
               <button className="checkout">Checkout →</button>
             </a>
             <div>
               <h2>
                 <b>OrderSummary</b>
               </h2>
               <br />
               <table>
                 <tbody>
                   <tr>
                     <td>ORIGINAL PRICE </td>
                     <td>₹{sum}.00</td>
                   </tr>
                   <tr>
                     <td>ONSALE PRICE </td>
                     <td>{Math.round(sum * 0.6) - sum}.00</td>
                   </tr>
                   <tr>
                     <td>{cart.length} ITEMS </td>
                     <td>₹{Math.round(sum * 0.4)}.00</td>
                   </tr>
                   <tr>
                     <td>DELIVERY </td>
                     <td>FREE</td>
                   </tr>
                   <tr>
                     <td>
                       <b> TOTAL PRICE </b>
                     </td>
                     <td>
                       <b>₹{Math.round(sum * 0.4)}.00</b>
                     </td>
                   </tr>
                 </tbody>
               </table>
               <p>(Including all taxes)</p>
             </div>
             <input type="text" placeholder="Enter Promo Code  " />
             <p>
               <a href=""> NEED HELP? </a>
             </p>

             <p>
               <a href=""> Delivery</a>
             </p>
             {/* 
                    <p><a href=""> Return & Refund </a></p>

                    <p><a href=""> Ordering & Payment </a></p>

                    <p><a href=""> Promotions & Vouchers </a></p> */}
           </div>
         </div>
         <Footer />
       </>
     );
}