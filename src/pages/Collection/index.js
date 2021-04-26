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

export default function Collection() {
  let { id } = useParams();

  const [collection, setCollection] = useState({ data: [] });
  const [title, setTitle] = useState({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const response = await axios.get(
        "https://admin.preciosaflorist.com/api/categories",
        {
          params: {
            collection: id,
            limit: 8,
          },
        }
      );
      const result = response.data;
      setCollection(result.data.data);
      setTitle(result.data.title);
      setIsLoading(false);
    };
    getDetails();
  }, [id]);

  return (
    <>
      <Section>
        <div className={styContainer}>
          <Title data={title.occasion ? title.occasion : title.category} />
          <div className={cx(styJustifyContent("space-between"), styRow)}>
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
          </div>
        </div>
      </Section>
    </>
  );
}
