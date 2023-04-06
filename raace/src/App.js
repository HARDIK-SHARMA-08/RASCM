import React from "react";
import Main from "./main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Theme } from "./Pages/Theme";
import { Author } from "./Pages/Author";
import Contact from "./Pages/ContactUs";
import ScrollToTop from "./assets/ScrollToTop";
import Registration from "./Pages/Registration";
import { Committee } from "./Pages/Committee";
import Dates from "./Pages/Dates";
import Publication from "./Pages/Publication";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            {" "}
            <Main />
          </Route>
          <Route path="/theme">
            {" "}
            <Theme />{" "}
          </Route>
          <Route path="/author">
            <Author />
          </Route>
          <Route path="/committee">
            <Committee />
          </Route>
          <Route path="/dates">
            {" "}
            <Dates />{" "}
          </Route>
          <Route path="/publication">
            {" "}
            <Publication />{" "}
          </Route>
          <Route path="/registration">
            {" "}
            <Registration />{" "}
          </Route>
          <Route path="/contact">
            {" "}
            <Contact />{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
