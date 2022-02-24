import { useEffect, useState } from "react"
import "./cart.css"
export default function Cart (){
     const [cart,setCart] = useState([]);
     useEffect(()=>{
          fetch("http://localhost:2345/cart/62173d4ee7006e0f0f397d33").then((res)=>res.json()).then((res)=>{console.log(res);setCart(res)})
     },[]);
     var sum=0; cart.map((a)=>{sum = sum + a.price; return})
     return(
          <div id="cart">
               <div id="subcart">
               <h1>Your Bag</h1>
               <p>Total Price: ({cart.length}items) <b>₹{sum}.00</b></p>
               <p>Items in your bag are not reserved – check out now to make them yours.</p>
               {cart.map((a)=>{
                    return(<div key={a._id}>
                    <div className="cartclose" onClick={()=>{fetch(`http://localhost:2345/cart/deleteitem/62173d4ee7006e0f0f397d33/${a._id}`).then((res)=>res.json()).then((res)=>{setCart(res)})}}><b><strong>X</strong></b></div>
                              <img src={a.imageUrls[0]} alt="" />
                              <div className="itemTitle"> {a.title}DOVE GREY / CORE BLACK / SEMI SCREAMING GREEN</div>
                              <div className="itemPrice"> <strike style={{color:"grey"}}>₹{a.price}.00</strike> <span style={{color:"red"}}> ₹{Math.round(a.price*a.discount)}.00</span></div><br />
                              <div className="itemSize">size: {Math.floor((Math.random() * 10) + 3)}</div><br />
                              <select name="1" ><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>
                    </div>);
               })}
               <button className="checkout">Checkout →</button>
               </div>
          </div>
     )
}