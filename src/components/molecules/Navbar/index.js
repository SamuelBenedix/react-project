import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Brand, Button } from "../../atoms";
import { Search, MegaDropdown, Cart } from "../../molecules";
import { cx } from "@emotion/css";
import axios from "axios";

import {
  styCartNotify,
  styIcon,
  styIconWrapper,
  styNavbar,
  styNavbarWrapper,
  styNavItem,
  styNavLink,
  stySearchBg,
  styShowSearch,
  styMegaArea,
  styShowMega,
  styShowSidebar,
  styLinkWrapper,
  styWrapperCart,
  styShowCart,
  styToggle,
  styNavLinks,
  styCloseToggle,
} from "./style";
import { styContainer, styLeft } from "../../style";

function Navbar() {
  const [category, setCategory] = useState(false);
  const [occasion, setOccasion] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [dataCategory, setDataCategory] = useState({ data: [] });
  const [dataOccasion, setDataOccasion] = useState({ data: [] });
  const onCategoryEnter = () => {
    setCategory(true);
  };

  const onCategoryLeave = () => {
    setCategory(false);
  };

  const onOccasionEnter = () => {
    setOccasion(true);
  };

  const onOccasionLeave = () => {
    setOccasion(false);
  };

  useEffect(() => {
    const getCards = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/categories?navbar=true"
      );
      const result = response.data;
      setDataCategory(result.data.category);
      setDataOccasion(result.data.occasion);
    };
    getCards();
  }, []);

  return (
    <nav className={styNavbar}>
      <div className={styContainer}>
        <div className={styNavbarWrapper}>
          <Button
            className={styToggle}
            type="button"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <span className="menu-icon">
              <FontAwesomeIcon icon="bars" />
            </span>
          </Button>
          <Brand />
          <div
            className={
              toggle ? cx(styLinkWrapper, styShowSidebar) : styLinkWrapper
            }
          >
            <ul className={toggle ? cx(styLeft(0), styNavLinks) : styNavLinks}>
              <label
                className={styCloseToggle}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <FontAwesomeIcon icon="times" />
              </label>
              <li className={styNavLink}>
                <Button className={styNavItem} href="/" type="link">
                  Home
                </Button>
              </li>
              <li
                className={styNavLink}
                onMouseEnter={onCategoryEnter}
                onMouseLeave={onCategoryLeave}
              >
                <Button
                  className={styNavItem}
                  type="link"
                  isExternal
                  target="_blank"
                  rel="_blank"
                  onClick={() => {
                    setCategory(!category);
                  }}
                >
                  Category
                  {window.innerWidth > 970 ? (
                    <FontAwesomeIcon icon="caret-down" />
                  ) : (
                    ""
                  )}
                </Button>
                <div
                  className={
                    category ? cx(styMegaArea, styShowMega) : styMegaArea
                  }
                >
                  <MegaDropdown data={dataCategory} title={"Category"} />
                </div>
              </li>
              <li
                className={styNavLink}
                onMouseEnter={onOccasionEnter}
                onMouseLeave={onOccasionLeave}
              >
                <Button
                  className={styNavItem}
                  type="link"
                  isExternal
                  target="_blank"
                  rel="_blank"
                >
                  Occasion
                  {window.innerWidth > 970 ? (
                    <FontAwesomeIcon icon="caret-down" />
                  ) : (
                    ""
                  )}
                </Button>
                <div
                  className={
                    occasion ? cx(styMegaArea, styShowMega) : styMegaArea
                  }
                >
                  <MegaDropdown data={dataOccasion} title={"Occasion"} />
                </div>
              </li>
              {/* <li className={styNavLink}>
                <Button className={styNavItem} href="/promo" type="link">
                  Promo
                </Button>
              </li> */}
              {/* <li className={styNavLink}>
                <Button className={styNavItem} href="/about" type="link">
                  About
                </Button>
              </li> */}
            </ul>
          </div>
          <div className={styIconWrapper}>
            <div
              className={styIcon}
              onClick={() => {
                setSearch(!search);
              }}
            >
              <FontAwesomeIcon icon="search" />
            </div>
            <div
              className={0 ? cx(styCartNotify, styIcon) : styIcon}
              data-notify="1f"
              onClick={() => {
                setCart(!cart);
              }}
            >
              <FontAwesomeIcon icon="shopping-cart" />
            </div>
          </div>
        </div>
      </div>
      <div className={search ? cx(stySearchBg, styShowSearch) : stySearchBg}>
        <Search
          setSearch={() => {
            setSearch(!search);
          }}
        />
      </div>
      <div>
        <div
          className={
            cart ? cx(styWrapperCart, styShowCart) : cx(styWrapperCart)
          }
        >
          <Cart
            cart={cart}
            setCart={() => {
              setCart(!cart);
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
