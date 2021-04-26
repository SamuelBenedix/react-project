import React, { useEffect, useState } from "react";
import { Hero, Main } from "../../components/molecules";
import axios from "axios";
import { LoadingImage, Section } from "../../components/atoms";

import { styWrapper } from "./style";

const Home = () => {
  const [carousell, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getToken() {
      axios
        .get("https://admin.preciosaflorist.com/api/header")
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => console.error(`error:${error}`));
      setIsLoading(false);
    }
    getToken();
  }, []);

  return (
    <>
      <Section>
        <div className={styWrapper}>
          {isLoading ? <LoadingImage /> : <Hero data={carousell} />}
        </div>
      </Section>

      <Main />
    </>
  );
};

export default Home;
