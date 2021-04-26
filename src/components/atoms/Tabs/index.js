import React, { useState, useEffect } from "react";
import { cx } from "@emotion/css";
import axios from "axios";
import {
  styNavPills,
  styNavActive,
  styNavTabs,
  styNav,
  styContent,
  styContentActive,
  styFormControl,
} from "./style";
import {
  styCol6,
  styDisplay,
  styMargin,
  styPadding,
  styPosition,
  styRow,
  styWidth,
} from "../../style";

import { styLabel } from "../Input/style";

export default function Tabs({ parentCallback }) {
  const [toggle, setToggle] = useState(1);
  const [time, setTime] = useState({ data: [] });
  const [city, setCity] = useState({ data: [] });
  const [deliveryInfo, setDelivery] = useState({
    is_delivery: 1,
    message: "",
    city: "",
    address: "",
    postal_code: "",
    delivery_date: "",
    delivery_time: "",
    pickup_date: "",
    pickup_time: "",
    delivery_charge: 0,
  });

  useEffect(() => {
    parentCallback(deliveryInfo);
  }, [deliveryInfo]);

  function changeDelivery(e) {
    setDelivery({ ...deliveryInfo, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const getTime = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/timeslots"
      );
      const result = response.data;
      setTime(result.data);
    };
    const getCity = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/location"
      );
      const result = response.data;
      setCity(result.data);
    };
    getCity();
    getTime();
  }, []);
  const timeItem = Object.values(time);
  const cityItem = Object.values(city);

  return (
    <>
      <ul className={styNavTabs}>
        <li className={styNavPills}>
          <button
            className={toggle === 1 ? cx(styNav, styNavActive) : styNav}
            type="button"
            onClick={() => {
              setToggle(1);
              setDelivery({ ...deliveryInfo, is_delivery: 1 });
            }}
          >
            Delivery
          </button>
        </li>
        <li className={styNavPills}>
          <button
            className={toggle === 2 ? cx(styNav, styNavActive) : styNav}
            type="button"
            onClick={() => {
              setToggle(2);
              setDelivery({ ...deliveryInfo, is_delivery: 0 });
            }}
          >
            Self Pickup
          </button>
        </li>
      </ul>
      <div
        className={cx(
          styDisplay("flex"),
          styWidth("100%"),
          styPosition("relative")
        )}
      >
        <div
          className={
            toggle === 1 ? cx(styContent, styContentActive) : styContent
          }
        >
          <div
            className={cx(
              styRow,
              styPosition("relative"),
              styMargin("1rem  0rem")
            )}
          >
            <div className={styCol6}>
              <label className="select-label" htmlFor="date">
                Delivery Date
              </label>
              <input
                type="date"
                className={styFormControl}
                id="date"
                name="delivery_date"
                onChange={changeDelivery}
              />
            </div>
            <div className={cx(styCol6, styPadding("0 0 0 1rem"))}>
              <label className="select-label" htmlFor="time">
                Delivery Time
              </label>
              <select
                name="delivery_time"
                id="time"
                className={styFormControl}
                onChange={changeDelivery}
              >
                <option className="selected">Select Time</option>
                {timeItem.map((item, index) => {
                  return (
                    <option key={index} value={item.time}>
                      {item.time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <div className={styPosition("relative")}>
              <input
                type="text"
                className={styFormControl}
                id="addresss"
                name="address"
                onChange={changeDelivery}
                required
              />
              <label htmlFor="address" className={styLabel}>
                Delivery Address
              </label>
            </div>
          </div>
          <div
            className={cx(
              styRow,
              styPosition("relative"),
              styMargin("1rem  0rem")
            )}
          >
            <div className={styCol6}>
              <label className="select-label" htmlFor="city">
                City
              </label>
              <select
                name="city"
                id="city"
                className={styFormControl}
                onChange={changeDelivery}
              >
                <option className="selected" value="0">
                  Select City
                </option>
                {cityItem.map((item, index) => {
                  return (
                    <option key={index} value={`${item.price}|${item.area}`}>
                      {item.area}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className={cx(styCol6, styPadding("0 0 0 1rem"))}>
              <div className={styPosition("relative")}>
                <input
                  type="text"
                  className={styFormControl}
                  id="postal_code"
                  name="postal_code"
                  onChange={changeDelivery}
                  required
                />
                <label htmlFor="postal_code" className={styLabel}>
                  Postal Code
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            toggle === 2 ? cx(styContent, styContentActive) : styContent
          }
        >
          <div
            className={cx(
              styRow,
              styPosition("relative"),
              styMargin("1rem  0rem")
            )}
          >
            <div className={styCol6}>
              <label className="select-label" htmlFor="date">
                Delivery Date
              </label>
              <input
                type="date"
                className={styFormControl}
                id="date"
                name="pickup_date"
                onChange={changeDelivery}
              />
            </div>
            <div className={cx(styCol6, styPadding("0 0 0 1rem"))}>
              <label className="select-label" htmlFor="time">
                Delivery Time
              </label>
              <select
                name="pickup_time"
                id="time"
                className={styFormControl}
                onChange={changeDelivery}
              >
                <option className="selected">Select Time</option>
                {timeItem.map((item, index) => {
                  return (
                    <option key={index} value={item.time}>
                      {item.time}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <label className={cx(styMargin("0.5rem 0"), styPosition("relative"))}>
            *Note: We Open at 10 AM
          </label>
        </div>
      </div>
    </>
  );
}
