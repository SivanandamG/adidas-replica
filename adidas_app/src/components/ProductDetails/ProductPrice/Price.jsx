import "./price.css"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StraightenIcon from '@mui/icons-material/Straighten';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const Price = () => {
    return (
      <div className="nac_prbox">
        <div className="nac_right_top">
          <div>Men • Sportswear</div>
          <div className="nac_topstar">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
        </div>
        <div className="nac_right_title">
          <h1>VS PACE SHOES</h1>
          <div className="nac_rightprice">
            MRP: <div className="nac_strike">₹3 999.00</div>
            <div className="nac_red">₹1 999.50</div>{" "}
          </div>
          <div className="nac__tax">(Inclusive of all taxes)</div>
        </div>
        <div className="nac_right_size">
          <div className="nac_sizebtn">
            <h4>Available sizes</h4>
            <button>6</button>
            <button>7</button>
            <button>10</button>
            <button>11</button>
            <button>12</button>
          </div>
          <a href="" className="nac_tax">
            {" "}
            <StraightenIcon />
            <div className="nac__s">Size Guide</div>
          </a>
        </div>
        <div className="nac_right_btn">
          <a href="/Cart">
            <button className="nac_addbag" onClick={()=>{
                fetch("https://adidas-server.herokuapp.com/cart/additem/:id/:product")
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                  });
            }}>
              ADD TO BAG
              <ArrowRightAltIcon />
            </button>
          </a>
          <button className="nac_fav">
            <FavoriteBorderIcon />
          </button>
        </div>
        <div className="nac_right_bottom">
          <div className="nac_ship">
            <WarningAmberIcon /> <a href="">FREE SHIPPING FOR ALL ORDERS</a>
          </div>
          <div className="nac_money">
            {" "}
            <MoneyIcon />
            <a href="">FREE RETURNS</a>
          </div>
        </div>
      </div>
    );
}