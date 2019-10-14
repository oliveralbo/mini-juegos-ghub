import React, { Fragment } from "react";
import LayoutPres from "./components/layouts/LayoutPres";
import { Pres, Home } from "./containers";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Pres} />

        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
