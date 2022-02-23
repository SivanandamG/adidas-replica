import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navigation/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Body } from "./components/Body/Body.jsx";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div> 
    <Navbar/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;