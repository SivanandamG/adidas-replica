import "./Body.css"
import Carousel_one from "../Carousel/Slider1.jsx";
import Carousel_two from "../Carousel/Slider2.jsx";

export const Body=()=>{
    return (
      <div id="body_wrap">
        <div className="body_video_wrap">
          <video
            loop
            autoPlay
            muted
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/SS22%20IIN/horizontal-concepts-ss22-IIN-launch-hp-mh-large-d.mp4"
          />
        </div>
        <div id="body_wrap_two">
          <h2>POPULAR RIGHT NOW</h2>
          <div id="body_wrap_two_btns">
            <button>JACKETS AND TRACKSUITS</button>
            <button>FACE COVERS</button>
            <button>ADIDAS ORIGINALS</button>
            <button>ULTRABOOST</button>
            <button>FOOTBALL BOOTS</button>
          </div>
        </div>
        <div id="body_wrap_three">
          <div>WHO ARE YOU SHOPPING FOR ?</div>
          <div id="body_wrap_three_imagediv">
            <img src="/images/men_image.jpg" width="410" alt="" />
            <div id="wrap_three_img_txt1">MEN</div>
            <img src="/images/women_image.webp" width="410" alt="" />
            <div id="wrap_three_img_txt2">WOMEN</div>
            <img src="/images/kids_image.webp" width="410" alt="" />
            <div id="wrap_three_img_txt3">KIDS</div>
          </div>
        </div>
        <div className="body_video_wrap">
          <video
            loop
            autoPlay
            muted
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/training-ss22-bra_rev-launch-hp-masthead-d_pdjqdh.mp4"
          ></video>
        </div>
        <div id="body_wrap_four">
          <div id="body_wrap_four_txt">BEST OF ADIDAS</div>
          <Carousel_two />
        </div>
        <div id="body_wrap_five">
          <div id="body_wrap_five_txt">WHAT'S HOT</div>
          <Carousel_one />
        </div>
        <div id="body_wrap_six">
          <div id="body_wrap_six_contain1">
            <div>STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949</div>
            <div>
              Sport keeps us fit. Keeps you mindful. Brings us together. Through
              sport we have the power to change lives. Whether it is through
              stories of inspiring athletes. Helping you to get up and get
              moving. Sportswear featuring the latest technologies, to up your
              performance. Beat your PB. adidas offers a home to the runner, the
              basketball player, the soccer kid, the fitness enthusiast. The
              weekend hiker that loves to escape the city. The yoga teacher that
              spreads the moves. The 3-Stripes are seen in the music scene. On
              stage, at festivals. Our sports clothing keeps you focused before
              that whistle blows. During the race. And at the finish lines.
              We’re here to support creators. Improve their game. Their lives.
              And change the world. <br /> <br />
              adidas is about more than sportswear and workout clothes. We
              partner with the best in the industry to co-create. This way we
              offer our fans the sports apparel and style that match their
              athletic needs, while keeping sustainability in mind. We’re here
              to support creators. Improve their game. Create change. And we
              think about the impact we have on our world.
            </div>
          </div>
          <div id="body_wrap_six_contain2">
            <div>WORKOUT CLOTHES, FOR ANY SPORT</div>
            <div>
              adidas designs for and with athletes of all kinds. Creators, who
              love to change the game. Challenge conventions. Break the rules
              and define new ones. Then break them again. We supply teams and
              individuals with athletic clothing pre-match. To stay focussed. We
              design sports apparel that get you to the finish line. To win the
              match. We support women, with bras and tights made for purpose.
              From low to high support. Maximum comfort. We design, innovate and
              itterate. Testing new technologies in action. On the pitch, the
              tracks, the court, the pool. Retro workout clothes inspire new
              streetwear essentials. Like NMD, Ozweego and our Firebird
              tracksuits. Classic sports models are brought back to life. Like
              Stan Smith. And Superstar. Now seen on the streets and the stages.
              <br />
              <br />
              Through our collections we blur the borders between high fashion
              and high performance. Like our adidas by Stella McCartney athletic
              clothing collection – designed to look the part inside and outside
              of the gym. Or some of our adidas Originals lifestyle pieces, that
              can be worn as sportswear too. Our lives are constantly changing.
              Becoming more and more versatile. And adidas designs with that in
              mind.
            </div>
          </div>
        </div>
      </div>
    );
}