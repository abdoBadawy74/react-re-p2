import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {

  constructor(){
    super();//becuase class inherite from another class "Component"
    console.log("constructor say Hello");
  }

  state = {
    products: [
      { id: 1, name: "Toshipa c3", price: 8000, onSale: false, count: 10 },
      { id: 2, name: "oppo", price: 8000, onSale: true, count: 13 },
      { id: 3, name: "samsung 173 c3", price: 8000, onSale: false, count: 35 },
      { id: 4, name: "National c54", price: 8000, onSale: true, count: 2 },
      { id: 5, name: "LG y3", price: 8000, onSale: false, count: 7 },
      { id: 6, name: "Apple macBook", price: 8000, onSale: true, count: 8 },
      { id: 7, name: "Toshipa c3", price: 8000, onSale: false, count: 10 },
      { id: 8, name: "oppo", price: 8000, onSale: true, count: 13 },
      { id: 9, name: "samsung 173 c3", price: 8000, onSale: false, count: 35 },
      { id: 10, name: "National c54", price: 8000, onSale: true, count: 2 },
      { id: 11, name: "LG y3", price: 8000, onSale: false, count: 7 },
      { id: 12, name: "Apple macBook", price: 8000, onSale: true, count: 8 },
    ],
  };

componentDidMount(){
  console.log("component Did Mount ");
  // best position for Api
}

componentDidUpdate(){
  console.log("component Did Update ");
}

  deleteProduct = (id) => {
    // deep copy
    let newProducts = [...this.state.products];
    //action
    newProducts = newProducts.filter((product) => product.id !== id);
    //setState
    this.setState({ products: newProducts });
  };

  updateProduct = (index) => {
    // deepcopy
    let products = [...this.state.products];
    // action
    products[index].count = products[index].count + 1;
    // setstate
    this.setState({ products });
  };

  render() {
    console.log("Render say Hello");
    return (
      <div className="container bg-dark py-4">
        <div className="bg-dark p-3 row">
          {this.state.products.map((product, i) => (
            <Child
              key={i}
              index={i}
              update={this.updateProduct}
              delete={this.deleteProduct}
              productInfo={product}
            ></Child>
          ))}
        </div>
      </div>
    );
  }

}


// lifecycle 
// bulding => 3 method is called : 1)constructor 2)render 3)ComponenetDidMount
// updating => 1 method is called : 1)render 2) ComponenetDidUpdate
// unMounting => 1)render from parent 2) componentWillUnmount from child 3) ComponenetDidUpdate from parent