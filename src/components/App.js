import React, { Component } from "react";
import Products from "./Products";
import Cart from "./Cart";
import "../styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={{ backgroundColor: "#4f92b13b" }}>
          <h1>Farmacia lo que manda el doctor</h1>
        </p>
        <h3 style={{ color: "grey" }}>A comprar se dijo</h3>
        <Products />
        <Cart />
      </div>
    );
  }
}
