import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cx } from "@emotion/css";
import {
  styButton,
  styButtonNext,
  styButtonPrev,
  stySlide,
  stySlideIcon,
  stySlider,
} from "./style";

export default function Hero(props) {
  const length = props.data.length;
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    current === 0 ? setCurrent(-100 * (length - 1)) : setCurrent(current + 100);
  };
  const nextSlide = () => {
    current === -100 * (length - 1) ? setCurrent(0) : setCurrent(current - 100);
  };

  return (
    <>
      <div className={stySlider}>
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={stySlide}
              style={{ transform: `translateX(${current}%)` }}
            >
              <img src={item.photo} alt={`carousell ${index}`} />
            </div>
          );
        })}
        <button className={cx(styButton, styButtonPrev)} onClick={prevSlide}>
          <FontAwesomeIcon className={stySlideIcon} icon="chevron-left" />
        </button>
        <button className={cx(styButton, styButtonNext)} onClick={nextSlide}>
          <FontAwesomeIcon className={stySlideIcon} icon="chevron-right" />
        </button>
      </div>
    </>
  );
}
