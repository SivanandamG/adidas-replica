import Slider from "react-slick";
import "./Slider2.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return <div id="slider2_Nextarrow" className={className} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div id="slider2_Prevarrow" className={className} onClick={onClick} />;
}

export default function Carousel_two() {
  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div id="slider2_mainwrap">
      <Slider {...settings}>
        <div className="slider_two_contents">
          <img src="/images/slider2_img1.jpg" alt="" />
          <div id="slider_two_cont1_txt1" className="slider_two_txt1">
            Adicolor Classics 3-Stripes Tights
          </div>
          <div id="slider_two_cont1_txt2" className="slider_two_txt2">
            Originals
          </div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img2.jpg" alt="" />
          <div className="slider_two_txt1" id="slider_two_cont2_txt1">
            Adicolor Classics 3-Stripes Tee
          </div>
          <div className="slider_two_txt2" id="slider_two_cont2_txt2">
            Originals
          </div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img3.jpg" alt="" />
          <div className="slider_two_txt1">Own the Run Tee</div>
          <div className="slider_two_txt2">Performance</div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img4.jpg" alt="" />
          <div className="slider_two_txt1" id="slider_two_cont4_txt1">
            Adicolor Classics 3-Stripes Tights
          </div>
          <div className="slider_two_txt2" id="slider_two_cont4_txt2">
            Originals
          </div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img5.jpg" alt="" />
          <div className="slider_two_txt1">Own the Run Tee</div>
          <div className="slider_two_txt2">Performance</div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img6.jpg" alt="" />
          <div className="slider_two_txt1">Always Original Slim Snap-Button Pants</div>
          <div className="slider_two_txt2">Originals</div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img7.jpg" alt="" />
          <div className="slider_two_txt1">Adicolor Backpack</div>
          <div className="slider_two_txt2">Originals</div>
        </div>
        <div className="slider_two_contents">
          <img src="/images/slider2_img8.jpg" alt="" />
          <div className="slider_two_txt1">Sport Inspired Linear SJ Tee</div>
          <div className="slider_two_txt2">Performance</div>
        </div>
      </Slider>
    </div>
  );
}
