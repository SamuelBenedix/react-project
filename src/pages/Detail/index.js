import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { cx } from "@emotion/css";
import axios from "axios";
import NumberFormat from "react-number-format";

import {
  Breadcrumbs,
  DisplayImage,
  Section,
  PurchaseInfo,
  Tabs,
} from "../../components/";
import { styFormControl } from "../../components/atoms/Tabs/style";
import {
  styContainer,
  styCol4,
  styCol5,
  styRow,
  styPaddingTop,
  styPadding,
  styColMd3,
  styCol12,
  styTextArea,
  styPosition,
} from "../../components/style";

import {
  styDetailTitle,
  styDetailText,
  styDiscount,
  styLastPrice,
  styNewPrice,
  styDivider,
} from "./style";
import { styLabel } from "../../components/atoms/Input/style";

export default function Detail() {
  let { id, productId } = useParams();
  const [detail, setDetail] = useState({ data: [] });
  const [discount, setDiscount] = useState(0);
  const [gallery, setGallery] = useState({ data: [] });
  const [template, setTemplate] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  const [message, setMessage] = useState("");

  const [order, setOrder] = useState({
    image: "",
    title: "",
    name: "",
    phone_number: "",
    is_delivery: 1,
    city: "",
    address: "",
    postal_code: "",
    delivery_date: "",
    delivery_time: "",
    pickup_date: " ",
    pickup_time: " ",
    delivery_vendor: "Preciosa Florist",
    delivery_charge: 0,
    service_charge: 0,
    from: "",
    to: "",
    message: message,
    note: "",
    product_id: "",
  });

  useEffect(() => {
    setOrder({ ...order, message: message });
  }, [message]);

  const callback = (count) => {
    setOrder({
      ...order,
      delivery_date: count.delivery_date,
      delivery_time: count.delivery_time,
      pickup_date: count.pickup_date,
      pickup_time: count.pickup_time,
      address: count.address,
      city: count.city.split("|")[1],
      postal_code: count.postal_code,
      is_delivery: count.is_delivery,
      delivery_charge: count.city.split("|")[0] ? count.city.split("|")[0] : 0,
    });
  };

  function changeOrder(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    const getTemplate = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/occasions"
      );
      const result = response.data;
      setTemplate(result.data);
    };
    getTemplate();
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/products",
        {
          params: {
            slug: productId,
          },
        }
      );
      const result = response.data;
      const persen = Math.floor(
        ((result.data.price - result.data.discount) * 100) / result.data.price
      );
      setDiscount(persen);
      setDetail(response.data);
      setGallery(result.data.galleries);
      setIsLoading(false);
      setOrder({
        ...order,
        image: result.data.galleries[0].photo,
        title: result.data.name,
        product_id: result.data.id,
        service_charge: Math.ceil((parseInt(result.data.price) * 2) / 100),
      });
    };
    getDetails();
  }, [productId]);

  const templateItem = Object.values(template);
  const total = detail.data.price;

  return (
    <>
      <Section>
        <div className={styPadding("30px 0 0 0 ")}>
          <Breadcrumbs id={id} productId={detail.data.name} />
        </div>
      </Section>
      <div className={styPaddingTop(50)}>
        <div className={styContainer}>
          <div className={styRow}>
            <div className={cx(styCol4, styCol12)}>
              <DisplayImage data={gallery} isLoading={isLoading} />
            </div>
            <div className={cx(styCol5, styCol12)}>
              <div className={styPadding("0 20px")}>
                <div className={styPadding("0 0 1rem 0")}>
                  <h5 className={styDetailTitle}>{detail.data.name}</h5>
                  <div className={styDetailText}>
                    <span className={styDiscount}>{discount}%</span>
                    <small className={styLastPrice}>
                      <NumberFormat
                        value={detail.data.price}
                        displayType={"text"}
                        thousandSeparator={"."}
                        prefix={"Rp. "}
                        decimalSeparator={","}
                      />
                    </small>
                    <p className={styNewPrice}>
                      <NumberFormat
                        value={detail.data.discount}
                        displayType={"text"}
                        thousandSeparator={"."}
                        prefix={"Rp. "}
                        decimalSeparator={","}
                      />
                    </p>
                  </div>
                </div>

                <div className="product-form">
                  <div className={styPadding("0 0 1rem 0")}>
                    <div className={styCol12}>
                      <div className={styPosition("relative")}>
                        <input
                          type="text"
                          className={styFormControl}
                          id="name"
                          name="name"
                          onChange={changeOrder}
                          required
                        />
                        <label htmlFor="name" className={styLabel}>
                          Recipient's Name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styPadding("0 0 1rem 0")}>
                    <div className={styCol12}>
                      <div className={styPosition("relative")}>
                        <input
                          type="text"
                          className={styFormControl}
                          id="phone_number"
                          name="phone_number"
                          required
                          onChange={changeOrder}
                        />
                        <label htmlFor="phone_number" className={styLabel}>
                          Recipient's Phone/ WhatsApp Number
                        </label>
                      </div>
                    </div>
                  </div>
                  <Tabs parentCallback={callback} />
                  <hr className={styDivider} />
                  <label>Message</label>
                  <div className={styPadding("0 0 1rem 0")}>
                    <div className={styCol12}>
                      <div className={styPosition("relative")}>
                        <input
                          type="text"
                          className={styFormControl}
                          id="from"
                          name="from"
                          onChange={changeOrder}
                          required
                        />
                        <label htmlFor="from" className={styLabel}>
                          From
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styPadding("0 0 1rem 0")}>
                    <div className={styCol12}>
                      <div className={styPosition("relative")}>
                        <input
                          type="text"
                          className={styFormControl}
                          id="to"
                          name="to"
                          required
                          onChange={changeOrder}
                        />
                        <label htmlFor="to" className={styLabel}>
                          to
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className={styPadding("0 0 1rem 0")}>
                    <div className={styCol12}>
                      <label className="select-label" htmlFor="Delivery_Time">
                        Template
                      </label>
                      <select
                        name="template"
                        id="template"
                        className={styFormControl}
                        onChange={(event) => setMessage(event.target.value)}
                      >
                        <option value="">Template Pesan</option>
                        <option value="Free Text">Free Text</option>
                        {templateItem.map((item, index) => {
                          return (
                            <option value={item.message} key={index}>
                              {item.title}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className={styPadding("0 0 1rem 0")}>
                    <textarea
                      type="text"
                      className={styTextArea}
                      name="message"
                      rows="3"
                      onChange={(event) => setMessage(event.target.value)}
                      value={message}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx(styCol12, styColMd3)}>
              <PurchaseInfo
                productPrice={detail.data.price}
                delivery_charge={order.delivery_charge}
                data={order}
                service_charge={order.service_charge}
                total={detail.data.discount}
                changeOrder={changeOrder}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
