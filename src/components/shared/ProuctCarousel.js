import React, { createRef, useState } from "react";
import Carousel from "react-elastic-carousel";
// functions
import { changeSlide } from "../../helpers/functions";
// styles
import "../../assets/css/ProductCarousel.css";
const ProuctCarousel = (props) => {
  const [endIndex, setEndIndex] = useState(3);
  const carousel = createRef();
  let setTime;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 780, itemsToShow: 4 },
  ];
  const backToStart = (currentItem) => {
    clearTimeout(setTime);
    if (currentItem.index === endIndex) {
      setTime = setTimeout(() => {
        carousel.current.goTo(0);
      }, 4000);
    }
  };
  return (
    <Carousel
      ref={carousel}
      breakPoints={breakPoints}
      enableAutoPlay
      autoPlaySpeed={4000}
      onChange={() => changeSlide(carousel, setEndIndex)}
      onNextEnd={backToStart}
    >
      {props.children}
    </Carousel>
  );
};

export default ProuctCarousel;
