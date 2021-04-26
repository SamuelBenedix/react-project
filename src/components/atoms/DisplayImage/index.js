import React, { useState } from "react";
import { cx } from "@emotion/css";
import {
  styProductImg,
  styImgShowcase,
  styImage,
  styMiniPicture,
  styWrapper,
  styMiniWrapper,
} from "./style";
import { styOverflow, styPointer, styMargin, styDisplay } from "../../style";
import propTypes from "prop-types";
import LoadingImage from "../LoadingImage";

export default function DisplayImage(props) {
  const [current, setCurrent] = useState(0);
  const nextSlide = (index) => {
    setCurrent(-100 * (index - 1));
  };

  const gallery = Object.values(props.data);

  return (
    <div className={styProductImg}>
      <div className={styOverflow("hidden")}>
        <div className={styImgShowcase}>
          <div className={styWrapper}>
            {props.isLoading ? (
              <LoadingImage />
            ) : (
              gallery.map((item, index) => {
                return (
                  <img
                    key={index}
                    className={styImage}
                    src={item.photo}
                    alt="image1"
                    style={{ transform: `translateX(${current}%)` }}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className={styDisplay("flex")}>
        {gallery.map((item, index) => {
          return (
            <div
              key={index}
              className={cx(styMargin("0.3rem"), styPointer, styMiniPicture)}
              onClick={() => {
                nextSlide({ index });
              }}
            >
              {props.isLoading ? (
                <div className={styMiniWrapper}>
                  <LoadingImage />
                </div>
              ) : (
                <img src={item.photo} alt={`product${index}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

DisplayImage.prototype = {
  data: propTypes.array,
};
