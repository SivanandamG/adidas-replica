import "./Image.css"
import React, { useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import axios from "axios";
import {useParams} from 'react-router-dom'

export const Images = () => {

    const Thumbnail = ({ arr, image, index }) => {

 const { id } = useParams();
 console.log({id});

        return(<div className="tumbnail">
          {
            arr.map((imgsrc, i) => (
              <img
                key={i}
                height="50"
                src={imgsrc}
                onClick={() => image(i)}
                className={index === i ? 'active' : ''}
              />
            ))
          }
        </div>)
      }
      
      const Slideshow = ({ imgs }) => {
        const [index, setIndex] = useState(0)
      
        useEffect(() => {
          setIndex(0)
        }, [])
      
        const next = () => {
          if (index === imgs.length - 1) {
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
        }
        const prev = () => {
          if (index === 0) {
            setIndex(imgs.length - 1)
          } else {
            setIndex(index - 1)
          }
        }
      
      const [res, setRes] = useState();
      useEffect(async () => {
        let data = await axios.get(
          "https://adidas-server.herokuapp.com/products/621716d177215202e3c4acc6"
        );
        data = data.data;
        setRes(data);
      }, []);
      console.log(res);
      
        return (
          <div className="slideshow">
            <img className="mainImg" src={imgs[index]} />
            <div className="actions">
              <button onClick={prev}><ArrowBackIcon/></button>
              <button onClick={next}><ArrowForwardIcon/></button>
            </div>
            <Thumbnail arr={imgs} image={setIndex} index={index} />
          </div>
        )
      }
    return (
        <div>
                <div>
                    <div className="nac__topnav">
                    <a href="" className="nac_anc"><KeyboardBackspaceIcon/> BACK  / </a>
                    <a href="" className="nac_anc">Home  / </a>
                    <a href="" className="nac_anc">Men  / </a>
                    <a href="" className="nac_anc">Shoes</a>
                    </div>
                    
                    {/* <div><OpenInFullIcon/></div> */}
                </div>
                <Slideshow
        imgs={[
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9ba7d1e3f1244593b13ba808010b8722_9366/VS_Pace_Shoes_Blue_B74493_01_standard.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7062a3d2b76944409923a6aa00ca68c9_9366/VS_Pace_Shoes_Blue_B74493_02_standard_hover.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d0b52d3782a042fbb333a6aa00ca62ca_9366/VS_Pace_Shoes_Blue_B74493_03_standard.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/500d601e04ee4787a342a808010bb3b7_9366/VS_Pace_Shoes_Blue_B74493_04_standard.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/401fbb5d925c43209158a808010bbf12_9366/VS_Pace_Shoes_Blue_B74493_05_standard.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5339b29efb64000abdea808010b9285_9366/VS_Pace_Shoes_Blue_B74493_06_standard.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d32346ab026c4b869f91a6aa00ca7ea8_9366/VS_Pace_Shoes_Blue_B74493_41_detail.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bd1b337efbf04dc48ac1a6aa00ca846d_9366/VS_Pace_Shoes_Blue_B74493_42_detail.jpg',
          // 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/285e9b04f9484056a992a80801139f89_9366/VS_Pace_Shoes_Blue_B74493_43_detail.jpg',
        ]}
      />
        </div>
    )
}

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