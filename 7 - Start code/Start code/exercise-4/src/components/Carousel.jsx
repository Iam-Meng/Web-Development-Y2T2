import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */

  /* You will need to hanle the click on left and right button */

  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[0].src} alt={images[0].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" />
    </div>
  );
};
