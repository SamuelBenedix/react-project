import React, { useState, useEffect } from "react";
import { cx } from "@emotion/css";
import { styPurchaseDetail, styPurchaseInfo, styPurchaseTitle } from "./style";
import { Button } from "../../atoms";
import { styFontWeight, styPadding, styTextArea } from "../../style";
import NumberFormat from "react-number-format";

export default function PurchaseInfo(props) {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    let date, time;
    if (props.data.is_delivery == 1) {
      date = props.data.delivery_date;
      time = props.data.delivery_time;
    } else {
      date = props.data.pickup_date;
      time = props.data.pickup_time;
    }
    const data = {
      img: props.data.image,
      title: props.data.title,
      name: props.data.name,
      phoneNumber: props.data.phone_number,
      address:
        props.data.address +
        " " +
        props.data.city +
        " " +
        props.data.postal_code,
      from: props.data.from,
      to: props.data.to,
      message: props.data.message,
      deliveryCharge: props.data.delivery_charge,
      serviceCharge: props.data.service_charge,
      deliveryVendor: props.data.delivery_vendor,
      date: date,
      time: time,
      isDelivery: props.data.is_delivery,
      productId: props.data.product_id,
      note: props.data.note,
    };
    setCart([...cart, data]);
  };

  useEffect(() => {
    const parsed = JSON.stringify(cart);
    localStorage.setItem("cart", parsed);
  }, [cart]);

  return (
    <>
      <div className={styPurchaseInfo}>
        <div className={styPurchaseTitle}>Atur Catatan</div>
        <div className={styPadding("0 0 1rem 0")}>
          <textarea
            type="text"
            className={styTextArea}
            name="note"
            rows="1"
            placeholder="Tulis Catatan"
            onChange={props.changeOrder}
          ></textarea>
        </div>
        <div className={cx(styPurchaseDetail, styPadding("0 0 1rem 0"))}>
          <p>Ongkos Kirim</p>
          <p>
            {props.delivery_charge ? (
              <NumberFormat
                value={props.delivery_charge}
                displayType={"text"}
                thousandSeparator={"."}
                prefix={"Rp. "}
                decimalSeparator={","}
              />
            ) : (
              0
            )}
          </p>
        </div>
        <div className={cx(styPurchaseDetail, styPadding("0 0 1rem 0"))}>
          <p>Service</p>
          <p>
            {props.service_charge ? (
              <NumberFormat
                value={props.service_charge}
                displayType={"text"}
                thousandSeparator={"."}
                prefix={"Rp. "}
                decimalSeparator={","}
              />
            ) : (
              0
            )}
          </p>
        </div>
        <div
          className={cx(
            styPurchaseDetail,
            styFontWeight("700"),
            styPadding("0 0 1rem 0")
          )}
        >
          <p>
            <strong>Subtotal </strong>
          </p>
          <p>
            <strong>
              {props.total ? (
                <NumberFormat
                  value={
                    parseInt(props.total) +
                    parseInt(props.service_charge) +
                    parseInt(props.delivery_charge)
                  }
                  displayType={"text"}
                  thousandSeparator={"."}
                  prefix={"Rp. "}
                  decimalSeparator={","}
                />
              ) : (
                0
              )}
            </strong>
          </p>
        </div>
        <div className={styPadding("0 0 1rem 0")}>
          <Button isPrimary isLarge onClick={addToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
