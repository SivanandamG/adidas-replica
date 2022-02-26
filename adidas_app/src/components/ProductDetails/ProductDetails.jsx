import { Description } from "./ProductDescription/Description"
import "./ProductDetails.css"
import { Images } from "./ProductImage/Image"
import { Price } from "./ProductPrice/Price"
import { Specification } from "./ProductSpecification/Specification"

export const ProductDetails = () => {
    return (
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
    )
}