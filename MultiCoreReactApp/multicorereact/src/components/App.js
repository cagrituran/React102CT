import axios from "axios";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";

export default class App extends Component {
  state = {
    categories: [],
    products: [],
    search: "",
  };
  async componentDidMount() {
    const resCat = await axios.get("https://localhost:7129/api/Category");
    const resPro = await axios.get("https://localhost:7129/api/Product");
    //console.log(response);
    this.setState({ categories: resCat.data });
    this.setState({ products: resPro.data });
    console.log(this.state.categories);
  }
  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/category"
                element={<CategoryList catProp={this.state.categories} />}
              />
              <Route
                path="/product"
                element={<ProductList proProp={this.state.products} />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}
  // catList = () => {
  //   axios.get(`https://localhost:7050/api/Category`);
  //   const newCatList = this.state.categories;
  //   this.setState((state) => ({
  //     categories: newCatList,
  //   }));
  //   console.log(this.state.categories);
  // };