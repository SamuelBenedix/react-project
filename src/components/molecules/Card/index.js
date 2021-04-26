import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { cx } from "@emotion/css";
import { styCol3, styPadding, styPointer } from "../../style";
import { LoadingImage } from "../../atoms";
import NumberFormat from "react-number-format";

import {
  styProductItem,
  styProductImg,
  styProductText,
  styProductTitle,
  styProductdiscount,
  styLastPrice,
  styNewPrice,
  styAddCart,
} from "./style";

export default function Card(props) {
  const persen = Math.floor(
    ((props.price - props.discount) * 100) / props.price
  );

  return (
    <>
      <div className={cx(styCol3, styPadding("0 0.5rem"))}>
        <div className={styProductItem}>
          <div className={styProductImg}>
            {props.isLoading ? (
              <LoadingImage />
            ) : (
              <Link to={`/${props.url}/${props.slug}/details`}>
                <img className={styPointer} src={props.photo} alt="dsadsa" />
              </Link>
            )}
          </div>
          <div className={styProductText}>
            <h5 className={styProductTitle}>{props.name}</h5>
            {persen !== 0 ? (
              <span className={styProductdiscount}> {persen}%</span>
            ) : (
              " "
            )}
            <small className={styLastPrice}>
              <NumberFormat
                value={props.discount}
                displayType={"text"}
                thousandSeparator={"."}
                prefix={"Rp. "}
                decimalSeparator={","}
              />
            </small>

            <p className={styNewPrice}>
              <NumberFormat
                value={props.price}
                displayType={"text"}
                thousandSeparator={"."}
                prefix={"Rp. "}
                decimalSeparator={","}
              />
            </p>
            <Link
              className={styAddCart}
              to={`/${props.url}/${props.slug}/details`}
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  url: propTypes.string,
  path: propTypes.string,
  photo: propTypes.string,
  name: propTypes.string,
  price: propTypes.string,
  slug: propTypes.string,
  discount: propTypes.string,
  isLoading: propTypes.bool,
};
