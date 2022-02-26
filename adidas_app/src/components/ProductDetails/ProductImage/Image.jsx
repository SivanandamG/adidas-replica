import "./Image.css";
import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Images = () => {
  var { id } = useParams();

   const [res, setRes] = useState([]);
   const [ide, setIde] = useState({ id });
   useEffect(async () => {
     console.log(ide);
     let data = await axios.get(
       `https://adidas-server.herokuapp.com/products/${ide.id}`
     );
     setRes(data.data.imageUrls);
    
   },[]);
    console.log(res);

  const Thumbnail = ({ arr, image, index }) => {
    // console.log({ id });

    return (
      <div className="tumbnail">
        {arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? "active" : ""}
          />
        ))}
      </div>
    );
  };

  const Slideshow = ({ imgs }) => {
    
    const [index, setIndex] = useState(0);

    useEffect(() => {
      setIndex(0);
    }, []);

    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1);
      } else {
        setIndex(index - 1);
      }
    };

   
  

    return (
      <div className="slideshow">
        <img className="mainImg" src={imgs[index]} />
        <div className="actions">
          <button onClick={prev}>
            <ArrowBackIcon />
          </button>
          <button onClick={next}>
            <ArrowForwardIcon />
          </button>
        </div>
        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    );
  };
  return (
    <div>
      <div>
        <div className="nac__topnav">
          <a href="" className="nac_anc">
            <KeyboardBackspaceIcon /> BACK /{" "}
          </a>
          <a href="" className="nac_anc">
            Home /{" "}
          </a>
          <a href="" className="nac_anc">
            Men /{" "}
          </a>
          <a href="" className="nac_anc">
            Shoes
          </a>
        </div>

        {/* <div><OpenInFullIcon/></div> */}
      </div>
      <Slideshow
        imgs={res}
      />
    </div>
  );
};

//"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ba7d1e3f1244593b13ba808010b8722_9366/VS_Pace_Shoes_Blue_B74493_01_standard.jpg",
          // "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7062a3d2b76944409923a6aa00ca68c9_9366/VS_Pace_Shoes_Blue_B74493_02_standard_hover.jpg",
          // "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0b52d3782a042fbb333a6aa00ca62ca_9366/VS_Pace_Shoes_Blue_B74493_03_standard.jpg"



// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="assets/4.jpeg" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src="assets/5.jpeg" />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src="assets/6.jpeg" />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
