import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/modal";
import Cart from "./components/Cart";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
