import "./Signup.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Signup = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [login,setLogin] = useState(false);
  
  const handleemail = (e)=>{
    setEmail(e.target.value);
    console.log(email);
  }
  const handlepassword = (e)=>{
    setPassword(e.target.value);
    console.log(password);
  }
  return (
    <>
    <Navbar/>
    <div id="signup_wrap">
      <div id="signup_header">CREATE YOUR ACCOUNT</div>
      <div id="signup_subheader">
        Sign up now and get 15% off your first order
      </div>
      <div id="signup_email_input">
        <input type="text" onChange={handleemail} placeholder="Email *" />
      </div>
      <div id="signup_pass_input">
        <input type="text" onChange={handlepassword} placeholder="Password *" />
      </div>
      <div id="signup_input_disclaim">
        Please use 8+ characters, with at least 1 number and a mixture of big
        and small letters
      </div>
      <div id="signup_age_checkbox">
        <input type="checkbox" name="age" />
        <label htmlFor="age">Yes, I am over 18 years old *</label>
      </div>
      <div id="signup_subscribe_checkbox">
        <input type="checkbox" name="subscribe" />
        <label htmlFor="subscribe">
          {" "}
          I would like to sstay up to date with adidas. I agree to recieve
          personalised email <br />{" "}
          <span>marketing messages from adidas India Marketing Pvt.Ltd</span>
        </label>
      </div>
      <div id="signup_terms_checkbox">
        <input type="checkbox" name="termsandcndtn" />
        <label htmlFor="termsandcndtn">
          I have read and accepted Terms & Conditions, the Creators Club Terms &{" "}
          <br /> <span> Conditions and the adidas Privacy Policy. *</span>
        </label>
      </div>
      <div id="signup_reg_btn" onClick={()=>{
                 fetch(`https://adidas-server.herokuapp.com/auth/signup/${email}/${password}`).then((res)=>res.json()).then(()=>{setLogin(true)});
                if (login) {
                  console.log(login);
                  window.location = "/Login";
                } else if(!login){
                  alert("User Already Exists");
                }
                }}>
        <div>REGISTER</div>
        <div>
          <i>{<HiOutlineArrowNarrowRight id="signup_regicon" />}</i>
        </div>
      </div>
      <div id="OR_txt">OR</div>
      <div id="signup_fb_btn">
        <div id="facebook_signup_txt">FACEBOOK</div>
        <div>
          <i><BsFacebook id="signup_fbicon"/></i>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};
