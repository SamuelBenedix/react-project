import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainApp, About, Checkout } from "../../pages";
import { SubRoutes } from "../../config";
import ScrollToTop from "../../components/atoms/ScrollToTop";
import Provider from "../../helpers/hooks/useGlobaContext";

const Routes = () => {
  return (
    <Provider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/invoice" children={<SubRoutes />} />
          <Route exact path="/checkout" children={<Checkout />} />
          <Route path="/auth/login" children={<About />} />
          <Route path="/" children={<MainApp />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
