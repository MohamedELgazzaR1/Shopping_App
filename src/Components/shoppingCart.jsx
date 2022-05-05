import React, { Component } from 'react';
import Product from './product';

class ShoppingCart extends Component {


    render() { 
       // console.log(this.props)
       // var st = this.state
       const {onReset,product,onDelete,onIncrement} = this.props
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                <button onClick={()=> onReset()} className="btn btn-secondary btn-lg m-2">Reset</button>
                {product.map(product => (
                    <ul>
                        <li>
                            <Product
                             key = {product.id} 
                             Product = {product} 
                             onDelete ={onDelete}
                             onIncrement ={onIncrement}
                             onReset ={onReset}
                             >
                            </Product>
                        </li>
                    </ul>
                ))}
            </React.Fragment>
        );
    }
}
 
export default ShoppingCart;