import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Browse from "./components/browse/browse";
import CookiePage from "./components/cookiepage/cookiepage";
import Container from "react-bootstrap/Container";

import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

// import ReactGA from "react-ga";
// ReactGA.initialize("UA-158563288-1");
// ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Container fluid>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/cookies" component={CookiePage} />
        </Switch>
        <Footer></Footer>
      </Router>
    </Container>
  );
}

export default App;
