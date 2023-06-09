import React, {useEffect, useState} from "react";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import "./carousel.css";

function Carousel({sliderImage}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const len = sliderImage?.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Dots activeIndex={activeIndex} sliderImage={sliderImage} onclick={(activeIndex) => setActiveIndex(activeIndex)} />
    </div>
  );
}

export default Carousel;
