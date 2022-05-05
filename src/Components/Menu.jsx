import React, { Component } from "react";
import Product from "./product";

class Menu extends Component {

    
    isChoose(choose){
        const style = !choose 
        ? {color:"#80808080" ,cursor:"pointer" }
        : {cursor:"pointer"}
        return style
        }


  render() {
    return (
      <React.Fragment>
        <h1>Menu</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map((product, index) => (
              <tr>
                <th scope="row">{product.name}</th>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td><button style={this.isChoose(product.isChoosen)} onClick={() => this.props.addToCart(product.id)} className="btn btn-sm m-2" aria-hidden ="true" ><i className="fa-solid fa-cart-shopping"></i></button></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Menu;
