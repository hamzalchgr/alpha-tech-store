import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import useSlide from "../hooks/useSlide";

const ImgSlider = ({ imgs }) => {
  const { imgList, imgIndex, nextImg, prevImg, animate, sliderRef, handleMove, handleStart, handleEnd } =
    useSlide(imgs);
  return (
    <div className="relative block md:hidden">
      <div className="overflow-hidden cursor-grab" onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}>
        <ul
          id="slider"
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${imgIndex * 100}%)`,
            transition: animate ? "transform 0.3s ease" : "none",
          }}
        >
          {imgList.map((img, index) => (
            <li className="flex-none img-container bg-surface" key={index}>
              <img className="" src={img} alt="" loading="lazy" />
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-4 bottom-4 flex gap-2">
        <button
          type="button"
          aria-label="next product img"
          aria-controls="slider"
          className="toggle-btn"
          onClick={prevImg}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="next product img"
          aria-controls="slider"
          className="toggle-btn"
          onClick={nextImg}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ImgSlider;
