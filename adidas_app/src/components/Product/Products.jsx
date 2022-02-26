import { useEffect,useState } from "react";
import { Showproduct } from "../Product/Showproduct";
import { Navbar } from "../Navigation/Navbar.jsx";
import { Footer } from "../Footer/Footer.jsx";
import "./products.css"

export const Products = () => {


  const [data, setData] = useState([]);

  const sortAsc=()=>(
    data.map((e)=>{
      data.sort((a,b)=>(a.price-b.price))
    })
  )
    const sortDec=()=>{
      
    }
  
  useEffect(() => {
    fetch("https://adidas-server.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []); 

  return (
    <div className="main_page">
      <Navbar />
      <h1 className="heading">MEN SNEAKERS</h1>
      <div className="type_options">
        <a href="#">All men's footwear</a>
        <a href="#">Running</a>
        <a href="#">Sneakers</a>
        <a href="#">Originals</a>
        <a href="#">Slides & sandals</a>
        <a href="#">Football</a>
        <a href="#">Basketball</a>
        <a href="#">Tennis</a>
        <a href="#">Skateboarding</a>
        <a href="#">Swim</a>
        <a href="#">Hiking & outdoor</a>
        <a href="#">Cricket</a>

        <div id="filter_sort">
          {/* <button id="filter_button" onClick={}>
            <span>Filter & Sort</span>
            <img
              id="filter_img"
              src="	https://www.adidas.co.in/glass/react/dd402dc/assets/img/icon-test-filters.svg"
            />
          </button> */}
          <select>
            <option>Sort by</option>
            <option value="LOW TO HIGH" onClick={sortAsc()}>
              LOW TO HIGH
            </option>
            <option value="HIGH TO LOW" onClick={sortDec}>
              HIGH TO LOW
            </option>
          </select>
        </div>
      </div>

      {/* //product_div */}
      <div className="product_div">
        {data.map((e) => {
          return (
            <div id="prod_show" key={e._id}>
              <Showproduct
                id={e._id}
                image={e.imageUrls}
                name={e.title}
                price={e.price}
                category={e.category}
                discount={e.discount}
              />
            </div>
          );
        })}
      </div>

      {/* //thoery content */}
      <br />
      <div id="thoery_content">
        <h1>YOUR PERFECT MENS SNEAKERS</h1>
        <p>
          Start your day on the right footing with a pair of adidas mens
          sneakers. Whether you’re looking for a pair of casual sneakers that
          you can wear all day or a pair of sneakers you can exercise in, you’ll
          find a large range of styles and colours to choose from. Mens sneakers
          are available in most of the classic adidas collections, such as
          Essentials, Ultraboost, Stan Smith and Continental 80.
        </p>

        <h3>SUPPORTING YOU EVERY STEP OF THE WAY</h3>
        <p>
          The adidas team puts an incredible amount of research into every shoe
          they design, with the aim of providing you with the support you need.
          Adiprene cushioning protects your feet by soaking up impacts and
          reducing pressure on your bones, while Boost cushioning helps with
          storing energy and then releasing it as you take your next step.
          OrthoLite® technology keeps you fresh and reduces odours thanks to its
          anti-microbial properties. As for the outer design, sneakers with a
          Continental™ Rubber outsole ensure a better grip in all weather
          conditions, while mens shoes designed with Primeknit material support
          your foot by moulding around it and taking its shape.
        </p>

        <h3>MAKE THEM YOUR VERY OWN</h3>
        <p>
          With such a large choice of mens sneakers to choose from, you have a
          lot of different design options and can be sure of finding the shoes
          that were made for you. From waterproof shoes for wearing in the rain
          to laceless sneakers that you can easily take on and off, from
          lightweight shoes that you can wear all day without feeling the extra
          weight to vulcanised soles with a more modern look, the options and
          combinations are endless. And for an even more individual touch,
          adidas will let you personalise your shoes by adding a text of your
          choice, an option available for a select collection of mens sneakers.
        </p>
      </div>

      <div id="category">
        <h2>OUR CLOTHING AND SHOE CATEGORIES</h2>
        <div id="category_options">
          <li id="list">Shoes</li>
          <li id="list">Originals</li>
          <li id="list">Long Sleeves</li>
          <li id="list">Training T shirts</li>
          <li id="list">Black T Shirts</li>
          <li id="list">White Jackets</li>
          <li id="list">Tshirt</li>
          <li id="list">Shirts</li>
          <li id="list">Jackets</li>
          <li id="list">Bags</li>
          <li id="list">Sandals</li>
          <li id="list">Caps</li>
          <li id="list">Sneakers</li>
          <li id="list">Shorts</li>
          <li id="list">Hoodies</li>
          <li id="list">Slides</li>
          <li id="list">Flip Flops</li>
          <li id="list">Jerseys</li>
          <li id="list">Sweatshirts</li>
          <li id="list">Water Bottle</li>
          <li id="list">Pantss</li>
          <li id="list">Tracksuits</li>
          <li id="list">Socks</li>
          <li id="list">Gloves</li>
          <li id="list">Football Boots</li>
          <li id="list">Polo Shirt</li>
          <li id="list">Tights</li>
          <li id="list">Hooddies</li>
          <li id="list">Short Sleeves</li>
          <li id="list">Swimwear</li>
          <li id="list">Ankle Socks</li>
          <li id="list">Face Covers</li>
          <li id="list">Men Shirts</li>
          <li id="list">Women Dresses</li>
          <li id="list">Men Caps</li>
          <li id="list">Women Sandals</li>
          <li id="list">Men Slides</li>
          <li id="list">Lifestyle Shirts</li>
          <li id="list">Lifestyle T Shirts</li>
          <li id="list">Tennis Shirts</li>
          <li id="list">Skateboarding</li>
          <li id="list">Lifestyle Sneakers</li>
          <li id="list">Training Shirts</li>
          <li id="list">Lifestyle Flip Flops</li>
          <li id="list">White Shoes</li>
          <li id="list">Black Dresses</li>
          <li id="list">Black Shirts</li>
          <li id="list">Black Shoes</li>
          <li id="list">White Sneakers</li>
          <li id="list">White T Shirts</li>
          <li id="list">Black Caps</li>
          <li id="list">Black Hooddies</li>
          <li id="list">Black Jackets</li>
          <li id="list">Black Pants</li>
          <li id="list">Blue Hoodies</li>
          <li id="list">Black Sneakers</li>
          <li id="list">Red Shoes</li>
          <li id="list">Pink Shoes</li>
          <li id="list">Black Bras</li>
          <li id="list">Black Sweatshirts</li>
          <li id="list">White Hooddies</li>
          <li id="list">White Shirts</li>
          <li id="list">Blue Sweatshirts</li>
          <li id="list">Yellow T SHirt</li>
          <li id="list">Black Sandals</li>
          <li id="list">Shoes</li>
          <li id="list">T Shirts</li>
          <li id="list">Shirts</li>
          <li id="list">Jackets</li>
          <li id="list">Bags</li>
          <li id="list">Sandals</li>
          <li id="list">Caps</li>
        </div>
      </div>
      <Footer />
    </div>
  );
};
