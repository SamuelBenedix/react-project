import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Collection, Home, Promo, About, Detail, Cart } from "..";
import { Footer, Navbar } from "../../components";
import ScrollToTop from "../../components/atoms/ScrollToTop";
import Search from "../Search";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainApp = () => {
  let query = useQuery();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/cart" children={<Cart />} />
        <Route
          exact
          path="/search"
          children={<Search q={query.get("q")} type={query.get("type")} />}
        />
        <Route exact path="/promo" children={<Promo />} />
        <Route exact path="/about" children={<About />} />
        <Route exact path="/:id" children={<Collection />} />
        <Route exact path="/:id/:productId/details" children={<Detail />} />
        <Route exact path="/" children={<Home />} />
      </Switch>
      <Footer />
    </>
  );
};

export default MainApp;
