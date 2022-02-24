import "./Body.css"

export const Body=()=>{
    return (
      <div id="body_wrap">
        <div id="body_video_wrap_one">
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
        <div id="body_video_wrap_one">
          <video
            loop
            autoPlay
            muted
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/training-ss22-bra_rev-launch-hp-masthead-d_pdjqdh.mp4"
          ></video>
        </div>
      </div>
    );
}