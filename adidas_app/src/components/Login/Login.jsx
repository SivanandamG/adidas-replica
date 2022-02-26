import { Btn } from "../Button/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { BsFacebook } from "react-icons/bs";



export const Login = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className="nkContainer">
      <div id="nkLeft">
        <div id="heading">LOG IN</div>
        <br/>
        <form>
          <a href="#">Forgotten Your Password?</a>
          <br/>
          <br/>
       
          <TextField
            required
            id="outlined-required"
            label="Email"
            // defaultValue="Password *"
          />
            <br/>
            <br/>
            <br/>
            <br/>
          <TextField
            required
            id="outlined-required"
            label="Password"
            // defaultValue="Password *"
          />
          <br/>
          <br/>
          <div>
            <Checkbox {...label} />
            Keep me logged in.
          </div>
          <br/>

          <Btn value="LOG IN" />
          <br/>
          <div id="tc">
            By clicking "LOG IN", I agree to the <span>Terms & Conditions</span>, the
            <br/><span>Creators Club Terms & Conditions</span> and the adidas <span>Privacy Policy</span> .
          </div>
          
          <br/>
          
            <div id="fb">FACEBOOK <BsFacebook id="logo"/></div>
        
        </form>
      </div>

      <div id="nkRight">
        <div id="heading">JOIN THE CLUB. GET <br/>REWARDED.</div>
        <p>Join the adidas Creators Club membership program:</p>
        <ul>
          <li>Get immediate access to all Challenger level rewards</li>
          <li>Earn access to shop limited edition products</li>
          <li>Level up for exclusive access to sport, yoga and music events</li>
          <li>Receive our best special offers and promotions</li>
        </ul>
        <p>
          Join now and start earning points to access new levels and rewards.
          It's time to unlock the best of adidas.
        </p>
        <Btn value="JOIN THE CLUB" />
        <br/>
        <div id="image_div">
          <img src="https://www.adidas.co.in/glass/react/247d8cd/assets/img/CC2.0_my_account_register.jpg" />
        </div>
      </div>
    </div>
  );
};
