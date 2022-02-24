import Slider from "react-slick";
import "./Slider.css"

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div id="slider1_Nextarrow"
      className={className}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div id="slider1_Prevarrow"
      className={className}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div id="slider_mainwrap">
      <Slider {...settings}>
        <div className="slider_one_contents">
          <img src="/images/carousel1_img1.jpg" alt="" />
          <div id="slider_one_cont1_txt1" className="slider_one_txt1">
            MANIKA BATRA
          </div>
          <div id="slider_one_cont1_txt2" className="slider_one_txt2">
            Here to inspire and create possibilities. <br /> Welcome to the
            adidas family!
          </div>
          <div id="slider_one_cont1_txt3" className="slider_one_txt3">
            SHOP NOW
          </div>
        </div>
        <div className="slider_one_contents">
          <video
            loop
            autoPlay
            muted
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/global%20brand%20publishing/Running/solarglide/running-ss22-solarglide-launch-hp-teaser-carousel-dual-d.mp4"
          ></video>
          <div className="slider_one_txt1" id="slider_one_cont2_txt1">
            SOLARGLIDE 5. EXPERIENCE GUIDED <br /> ENERGY.
          </div>
          <div className="slider_one_txt2" id="slider_one_cont2_txt2">
            Run with superb energy return.
          </div>
          <div className="slider_one_txt3" id="slider_one_cont2_txt3">
            SHOP NOW
          </div>
        </div>
        <div className="slider_one_contents">
          <img src="/images/carousel1_img2.jpg" alt="" id="slider_one_img2" />
          <div className="slider_one_txt1">GUCCIMAZE OZRAH</div>
          <div className="slider_one_txt2">
            Reshuffled rave codesinspired by Tokyo's club scene.
          </div>
          <div className="slider_one_txt3">SHOP NOW</div>
        </div>
        <div className="slider_one_contents">
          <video
            loop
            autoPlay
            muted
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto,c_scale,w_0.5/video/upload/ss22-ivp-5-5-educate-tcc-d_yctfe7.mp4"
          ></video>
          <div className="slider_one_txt1" id="slider_one_cont4_txt1">
            IVY HEART
          </div>
          <div className="slider_one_txt2" id="slider_one_cont4_txt2">
            Love is a beautiful thing
          </div>
          <div className="slider_one_txt3" id="slider_one_cont4_txt3">
            SHOP NOW
          </div>
        </div>
        <div className="slider_one_contents">
          <img
            src="/images/carousel1_img3.jpg"
            id="slider_one_cont5_img"
            alt=""
          />
          <div className="slider_one_txt1">DREAM AND IT IS</div>
          <div className="slider_one_txt2">
            Imagine your dreams are destined to become reality, then go out and
            chase them in The Bambi Collection
          </div>
          <div className="slider_one_txt3" id="slider_one_cont5_txt3">
            SHOP NOW
          </div>
        </div>
      </Slider>
    </div>
  );
};

