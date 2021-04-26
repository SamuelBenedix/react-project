import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cx } from "@emotion/css";
import propTypes from "prop-types";
import axios from "axios";

import {
  styMegaItems,
  styMegaWrapper,
  styTitle,
  styMegaItem,
  styWidget,
} from "./style";
import {
  styColMd6,
  styDisplayMobileHide,
  styPadding,
  styRow,
} from "../../style";
import { LoadingImage } from "../../atoms";

export default function MegaDropdown(props) {
  const [topbar, setTopbar] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/products",
        {
          params: {
            random: true,
            limit: 2,
          },
        }
      );
      const result = response.data;
      setTopbar(result.data);
      setIsLoading(false);
    };
    getDetails();
  }, []);
  const megaItem = Object.values(props.data);

  return (
    <div className={styRow}>
      <div className={styColMd6}>
        <div className={styPadding("0 15px")}>
          <div className={styTitle}>{props.title}</div>
          <div className={styRow}>
            <ul className={styMegaWrapper}>
              {megaItem.map((item, index) => {
                return (
                  <li className={styMegaItems} key={`item-${index}`}>
                    <Link className={styMegaItem} to={`/${item.slug}`}>
                      {item.category ? item.category : item.occasion}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={cx(styColMd6, styDisplayMobileHide)}>
        <div className={styRow}>
          {topbar.data.map((item, index) => {
            return (
              <div className={styColMd6} key={index}>
                <div className={styWidget}>
                  {isLoading ? (
                    <LoadingImage />
                  ) : (
                    <Link to={`/${item.categories.slug}/${item.slug}/details`}>
                      <img src={item.galleries[0].photo} alt={item.name} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

MegaDropdown.prototype = {
  data: propTypes.object,
  title: propTypes.string,
};
