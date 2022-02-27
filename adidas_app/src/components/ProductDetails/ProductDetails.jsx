import { Description } from "./ProductDescription/Description.jsx"
import "./ProductDetails.css"
import { Images } from "./ProductImage/Image.jsx"
import { Price } from "./ProductPrice/Price.jsx"
import { Specification } from "./ProductSpecification/Specification"
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";

export const ProductDetails = () => {
 return (
        <>
            <Navbar/>
        <div className="nac__container">
            <div className="nac_left_container">
                <div className="nac_image">
                    <Images/>
                </div>
                
                <div className="nac_description">
                    <Description/>
                </div>
                
                <div className="nac_specification">
                    <Specification/>
                </div>
            </div>
            <div className="nac_right_container">
                <Price/>
            </div>
        </div>
        <Footer/>
        </>
    )
}