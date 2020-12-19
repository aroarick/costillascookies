import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Menu from "./components/menu/menu";
import Gallary from "./components/gallary/gallary";
import Order from "./components/order/order";
import cookieOrder from "./components/cookieOrder/cookieOrder";
import cakeOrder from "./components/cakeOrder/cakeOrder";
import Container from "react-bootstrap/Container";

import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

// import ReactGA from "react-ga";
// ReactGA.initialize("UA-158563288-1");
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Container className="costilla-cookies-website" fluid>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/gallary" component={Gallary} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/cookieOrder" component={cookieOrder} />
          <Route exact path="/cakeOrder" component={cakeOrder} />
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;
