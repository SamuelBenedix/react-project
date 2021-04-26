import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Section, Title } from "../../components/atoms/";
import { cx } from "@emotion/css";
import { Card } from "../../components/molecules";
import axios from "axios";

import {
  styJustifyContent,
  styContainer,
  styRow,
} from "../../components/style";

export default function Search({ type, q }) {
  const search = q;
  return (
    <>
      <Section>
        <div className={styContainer}>
          <Title data="Search" />
          {/* <div className={cx(styJustifyContent("space-between"), styRow)}>
            {collection.data.map((item, index) => {
              return (
                <Card
                  key={index}
                  url={id}
                  path="bouquet"
                  photo={item.galleries[0].photo}
                  name={item.name}
                  price={item.price}
                  slug={item.slug}
                  discount={item.discount}
                  isLoading={isLoading}
                />
              );
            })}
          </div> */}
        </div>
      </Section>
    </>
  );
}
