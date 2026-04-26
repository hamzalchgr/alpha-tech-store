import React, { useEffect, useMemo, useRef, useState } from "react";

const useSlide = (imgs) => {
    const imgList = useMemo(() => {
    if (!imgs || imgs.length === 0) return [];

    return [imgs[imgs.length - 1], ...imgs, imgs[0]];
  }, [imgs]);

  const [imgIndex, setImgIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  const sliderRef = useRef(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextImg = () => {
    setAnimate(true);
    setImgIndex((prev) => prev + 1);
  };
  const prevImg = () => {
    setAnimate(true);
    setImgIndex((prev) => prev - 1);
  };

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches? e.touches[0].clientX : e.clientX;
  }
  
  const handleMove = (e) => {
    if (!isDragging.current) return;

    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startX.current - currentX;

    if (diff > 50) {
      nextImg();
      isDragging.current = false;
    } else if (diff < -50) {
      prevImg();
      isDragging.current = false;
    }
  };

  
  const handleEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const onEnd = () => {
      if (imgIndex === imgList.length - 1) {
        setAnimate(false);
        setImgIndex(1);
      }
      if (imgIndex === 0) {
        setAnimate(false);
        setImgIndex(imgList.length - 2);
      }
    };

    slider.addEventListener("transitionend", onEnd);
    return () => slider.removeEventListener("transitionend", onEnd);
  }, [imgIndex, imgList.length]);

  return {
    imgList,
    imgIndex,
    animate,
    sliderRef,
    nextImg,
    prevImg,
    handleMove,
    handleStart,
    handleEnd
  };
};

export default useSlide;
