
import { Body } from "./components/Body/Body.jsx";
import {Routes, Route } from "react-router-dom";
import {Signup} from "./components/Signup/Signup.jsx";
import { Products } from "./components/Product/Products.jsx";
import { ProductDetails } from "./components/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Products/:id" element={<ProductDetails/>}></Route>
      </Routes>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
