import React, { useState } from "react";
import { Breadcrumbs, CartItem, Footer, Input, Button } from "../../components";
import { cx } from "@emotion/css";
import {
  styContainer,
  styDisplay,
  styHeight,
  styMargin,
  styPadding,
  styRow,
  styColMd6,
  styCol12,
  styCol6,
  styPosition,
} from "../../components/style";
import Brand from "../../assets/logo/preciosa2.png";
import {
  styBgLight,
  styCard,
  styOrderDetailFont,
  styOrderDetailHeader,
  styOrderDetailWrap,
  styOrderItem,
  styOrderWrap,
  styDivider,
  styCollapse,
  styFormControl,
  styCollapseShow,
  styCollapseHide,
  styCollapseTransition,
} from "./style";
import Checkbox from "../../components/atoms/Checkbox";

export default function Checkout() {
  const [invoice, setInvoice] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  return (
    <>
      <section>
        <div className={cx(styContainer, styPadding("10px 0 0 0"))}>
          <div className="text-align-center checkout">
            <a href="index.html">
              <img
                className={cx(
                  styDisplay("block"),
                  styMargin("0 auto"),
                  styHeight("200px")
                )}
                src={Brand}
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className={cx(styBgLight, styPadding("1rem 0"))}>
          <div className={cx(styMargin("0 auto"))}>
            <Breadcrumbs id="Cart" productId="Checkout" isCenter />
          </div>
        </div>
      </section>
      <section>
        <div className={styContainer}>
          <div className={styRow}>
            <div className={cx(styColMd6, styPadding("0 1.25rem"))}>
              <h2 className={styPadding("2rem 0 1rem 0")}>Billing Detail</h2>
              <div className={cx(styPadding("2.5rem"), styCard)}>
                <div className={styPadding("0 0 1rem 0")}>
                  <div className={styCol12}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      required
                    />
                  </div>
                </div>
                <div className={styPadding("0 0 1rem 0")}>
                  <Checkbox
                    label="Keep me up to date on news"
                    id="subscribe"
                    name="subscribe"
                    onChange={() => {
                      setSubscribe(!subscribe);
                    }}
                    isChecked={subscribe}
                  />
                </div>
                <div className={styPadding("0 0 1rem 0")}>
                  <div className={styCol12}>
                    <Input
                      type="text"
                      id="customer_name"
                      name="customer_name"
                      label="Sender Name"
                      required
                    />
                  </div>
                </div>
                <div className={styPadding("0 0 1rem 0")}>
                  <div className={styCol12}>
                    <Input
                      type="text"
                      id="customer_phone"
                      name="customer_phone"
                      label="Sender Phone/WhatsApp Number"
                      required
                    />
                  </div>
                </div>
                <div className={styPadding("0 0 1rem 0")}>
                  <Checkbox
                    label="Do you want send the invoice physically ?"
                    id="invoice"
                    name="invoice"
                    isChecked={invoice}
                    onChange={() => {
                      setInvoice(!invoice);
                    }}
                  />
                </div>

                <div
                  className={
                    invoice
                      ? cx(
                          styCollapseShow,
                          styCollapseTransition,
                          styPadding("0 0 1rem 0")
                        )
                      : cx(styCollapseHide, styPadding("0 0 1rem 0"))
                  }
                >
                  <div className={styCollapse}>
                    <div className={styPadding("0 0 1rem 0")}>
                      <div className={styCol12}>
                        <Input
                          type="text"
                          id="invoice_address"
                          name="invoice_address"
                          label="Address"
                          required
                        />
                      </div>
                    </div>
                    <div
                      className={cx(
                        styRow,
                        styPosition("relative"),
                        styPadding("0 1rem 1rem 1rem")
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
                        >
                          <option className="selected">Select City</option>
                          <option className="selected" value="dasads">
                            fsdafsdfds
                          </option>
                        </select>
                      </div>

                      <div className={cx(styCol6, styPadding("0 0 0 1rem"))}>
                        <Input
                          type="text"
                          id="postal-code"
                          name="postal-code"
                          label="Postal Code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Button isPrimary isLarge href="/invoice?id=213" type="link">
                    Continue to Checkout
                  </Button>
                </div>
              </div>
            </div>
            <div className={cx(styColMd6, styPadding("0 1.25rem"))}>
              <h2 className={styPadding("2rem 0 1rem 0")}>Your Order</h2>
              <div className={cx(styPadding("1rem"), styCard)}>
                <div className={styOrderItem}>
                  <div className={styOrderWrap}>
                    <div className={styPadding("0 .3rem")}>
                      <CartItem />
                      <CartItem />
                      <CartItem />
                    </div>
                  </div>
                </div>
                <hr className={styDivider} />
                <table className={styOrderDetailWrap}>
                  <tbody>
                    <tr className={styOrderDetailHeader}>
                      <td className={styOrderDetailFont}>
                        Invoice Delivery Charge
                      </td>
                      <td className={styOrderDetailFont}>Rp. 0</td>
                    </tr>
                    <tr>
                      <td className={styOrderDetailFont}>
                        <strong>Order Total</strong>
                      </td>
                      <td className={styOrderDetailFont}>
                        <strong> RP. fdas</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
