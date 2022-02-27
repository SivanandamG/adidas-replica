import "./Orderplaced.css"
import { FcCheckmark } from "react-icons/fc";
import { BsChevronDoubleRight } from "react-icons/bs";


export const Orderplaced = () => {
  setTimeout(function () {
    window.location.href = "/"
  }, 4000); //
  return (
    <div id="order_placed_wrap">
      <div id="order_placed_txt">
        Order placed Successfully <FcCheckmark />
      </div>
      <div id="redirect_wrap">
        <div id="order_placed_redirect">Redirecting to Homepage </div>
        <div>
          <BsChevronDoubleRight id="orderplaced_icon" />
        </div>
      </div>
    </div>
  );
};;
