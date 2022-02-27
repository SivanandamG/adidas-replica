import "./Payment.css";
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

export const Payment=()=>{
    return (
      <>
        <Navbar />
        <div id="payment_wrap">
          <div id="payment_form">
            <div>
              <img src="/images/adidas-logo.svg" id="payment_logo" alt="" />
            </div>
            <form action="">
              <label for="card">Card Number</label>
              <input id="card" type="number" placeholder="Enter Card Number" />
              <label for="cvv">CVV</label>
              <input id="cvv" type="number" placeholder="Enter CVV" />
              <label for="exp">Expiry Date</label>
              <input id="exp" type="date" />
              <label for="name">Name</label>
              <input id="name" type="text" placeholder="Enter Name" />
              <Link to="/Orderplaced">
                <button id="submitbtn">PAY NOW</button>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
}