import React from "react";
import Slider from "react-slick";

export function SliderElem() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div >
        <img src="https://i.pinimg.com/control/564x/67/b8/94/67b8940d81e780a8cd88d2d6079af97f.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/de/2e/a7/de2ea744562d9de65680e84e169f9498.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/8d/f4/50/8df45052e1538cc80bd0d81b505e816d.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/fb/a2/b0/fba2b03156cf5ebf284e55537ea2ebcb.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/08/92/95/0892952d616e68797b81aab9daa80ecc.jpg" alt="" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/31/df/d7/31dfd74d12bf25f2ef52f908c65ed709.jpg" alt="" />
      </div>
    </Slider>
  );
}

export default SliderElem;