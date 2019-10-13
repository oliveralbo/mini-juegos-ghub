import React from "react";
import Layout from "./components/layouts";
import { Pres, Home } from "./containers";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Route exact path="/" component={Pres} />
        <Route exact path="/home" component={Home} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
