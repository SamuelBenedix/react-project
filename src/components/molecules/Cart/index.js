import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../atoms";
import { cx } from "@emotion/css";

import {
  styCartContent,
  styCartItem,
  styCartItemImg,
  styCartItemName,
  styCartItemPrice,
  styCartItemText,
  styCartTitle,
  styCloseCart,
  styHeaderCartItem,
  styBtnRemove,
  styHeaderCartTotal,
  styHeaderCartButton,
  styHeaderCartTitle,
  styHeaderCart,
} from "./style";

import { styJustifyContent, styWidth, styRight, styPadding } from "../../style";

export default function Cart(props) {
  const data = 1;
  return (
    <div
      className={props.cart ? cx(styHeaderCart, styRight(0)) : styHeaderCart}
    >
      <div className={styHeaderCartTitle}>
        <span className={styCartTitle}> Your Cart </span>
        <div className={styCloseCart} onClick={props.setCart}>
          <FontAwesomeIcon icon="times" />
        </div>
      </div>
      <div className={styCartContent}>
        <div>
          <ul className={styHeaderCartItem}>
            {/* {state.map((item, index) => {
              return (
                <li className={styCartItem} key={index}>
                  <div className={styCartItemImg}>
                    <img src={item.img} alt="Product-image" />
                  </div>
                  <div className={styCartItemText}>
                    <div className={styCartItemName}>{item.title}</div>
                    <div className={styJustifyContent("space-between")}>
                      <span className={styCartItemPrice}>Rp.{item.price}</span>
                      <Link className={styBtnRemove} to="remove">
                        remove
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })} */}
          </ul>
        </div>
      </div>
      <div className={styWidth("100%")}>
        <div className={styHeaderCartTotal}>Total : Rp {data}</div>
        <div className={styHeaderCartButton}>
          <div className={styPadding("0 0 1rem 0")}>
            <Button isSecondary isLarge href="/cart" type="link">
              View Cart
            </Button>
          </div>
          <div>
            <Button isPrimary isLarge href="/checkout" type="link">
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
