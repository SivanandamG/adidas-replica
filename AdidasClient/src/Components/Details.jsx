import { Description } from "./Description/Description"
import "./Details.css"
import { Images } from "./Image/Image"
import { Price } from "./Price/Price"
import { Specification } from "./Specification/Specification"

export const Details = () => {
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