import React, { useEffect, useState } from "react";
import { Card } from "..";
import { cx } from "@emotion/css";
import { Button, Section } from "../../atoms";
import axios from "axios";

import {
  styContainer,
  styHeader,
  styJustifyContent,
  styRow,
} from "../../style";
import { stySectionButton } from "./style";

export default function Main() {
  const [card, setCard] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/categories",
        {
          params: {
            collection: "hand-bouquet",
            limit: 8,
          },
        }
      );
      const result = response.data;
      setCard(result.data.data);
      setIsLoading(false);
    };
    getDetails();
  }, []);

  return (
    <Section>
      <div className={styContainer}>
        <div className={styHeader}>
          <h1> Bouquet </h1>
        </div>
        <div className={cx(styJustifyContent("space-between"), styRow)}>
          {card.data.map((item, index) => {
            return (
              <Card
                key={index}
                url="hand-bouquet"
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
        </div>
      </div>
      <div className={stySectionButton}>
        <Button isPrimary isSmall href="/bouquet" type="link">
          Load More
        </Button>
      </div>
    </Section>
  );
}
