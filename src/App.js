import React, { Fragment } from "react";
import { Pres, Home } from "./containers";
import { BrowserRouter, Route } from "react-router-dom";

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
