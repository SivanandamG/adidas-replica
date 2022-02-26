
import './App.css';
import {Products} from "./components/Product/Products"
import "./components/Product/products.css";
import "./components/Login/login.css";
import { Login } from './components/Login/Login';
import { Address } from './components/Address/Address';
function App() {
  return (
    <div className="App">
      <Products/>
      <Login/>
      <Address/>
    </div>
  );
}

export default App;
