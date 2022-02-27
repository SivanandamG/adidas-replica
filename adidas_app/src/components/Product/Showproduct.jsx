import { AiOutlineHeart } from "react-icons/ai";
export const Showproduct=({id,image,price,name,category,discount})=>{

    const discounted=(price*discount).toFixed(2);
    // console.log(id);
    return (
      <div>
        <a
          href={`products/${id}`}
          id="design"
        >
          <img id="display_img" src={image[0]} />
          <a href={`wishlist/${id}`}>
          <div id="fav">
            <AiOutlineHeart
              id="heart"
              onClick={() => {
                console.log("hereee");
                console.log(id)
                
              }}
            />
          </div>
          </a>
          
          <div id="prod_name">{name}</div>
          
          <div id="prod_price">
            <span>₹{price}</span> <span id="finalprice">₹{discounted}</span>
          </div>
          <div id="prod_cat">{category}</div>
          <div id="prod_color">{image.length} Colours</div>
        </a>
      </div>
    );
}