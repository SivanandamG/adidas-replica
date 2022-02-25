import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ProductDetails } from './Components/ProductDetails'
import { ProductWishlist } from './Components/ProductWishlist'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/wishlist" element={<ProductWishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App
