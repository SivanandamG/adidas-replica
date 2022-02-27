
import { Body } from "./components/Body/Body.jsx";
import {Routes, Route } from "react-router-dom";
import {Signup} from "./components/Signup/Signup.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Products } from "./components/Product/Products.jsx";
import { ProductDetails } from "./components/ProductDetails/ProductDetails.jsx";
import Cart from "./components/Cartpage/cart.jsx";
import { ProductWishlist } from "./components/ProductWishlist/ProductWishlist.jsx";
import {Address} from "./components/Address/Address.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:id" element={<ProductDetails />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Wishlist" element={<ProductWishlist />}></Route>
        <Route path="/Address" element={<Address />}></Route>
      </Routes>
    </div>
  );
}

export default App;
