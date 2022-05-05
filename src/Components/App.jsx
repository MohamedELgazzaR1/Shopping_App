import React, { Component } from "react";
import NavBar from "./navBar";
import ShoppingCart from "./shoppingCart";
import Product from "./product";
import { Route, route, Routes } from "react-router-dom";
import { useParams, useSearchParams ,useNavigate} from 'react-router-dom';
import About from "./about";
import HomePage from "./home";
import Contact from "./contact";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import Menu from './Menu';
import Login from "./Login";
import axios from 'axios'
import Admin from './Admin';
import ProdForm from './ProdForm';
import {toast, ToastContainer} from 'react-toastify'



class App extends Component {
  state = {
    cartProducts :[],
      Products: [],
  };

async componentDidMount(){
  // const promise = fetch("https://my-json-server.typicode.com/typicode/demo/posts")
  // const res = promise.then(res => res.json())
  // let dataa ;
  //  res.then(data => this.dataa = data )
  // console.log(dataa)

  const {data} = await axios.get('http://localhost:3000/Products')
 // console.log(data)
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))
  this.setState({Products : data})
}

addToCart = (prodId) =>{
  const Products = [...this.state.Products]; //this.state.Products.filter(prod => prod.id === prodId)
  const prod = this.state.Products.filter((prod) => prod.id === prodId)[0];
  if(prod.isChoosen){return}
  prod.isChoosen = true
  prod.count += 1
  const cartProducts = this.state.cartProducts
  cartProducts.push(prod)
  this.setState({cartProducts})

}

  onDelete = (prodId) => {
    const cartProducts = this.state.cartProducts.filter((prod) => prod.id !== prodId);
    const cartProductsdel = this.state.cartProducts.filter((prod) => prod.id == prodId)[0];
    cartProductsdel.count = 0
    cartProductsdel.isChoosen = false
    this.setState({ cartProducts });
  };

  onRem = async(prodId) => {
    const oldProd = [...this.state.Products]

    const Products = this.state.Products.filter((prod) => prod.id !== prodId);
    //const Productsdel = this.state.Products.filter((prod) => prod.id == prodId)[0];
    this.setState({ Products });
    try{
    await axios.delete('http://localhost:3000/Products/111'+prodId)
    }catch(ex){
      toast.error("Can't Delete")
      this.setState({ Produc : oldProd });
    }
  };

  handleEdit = () =>{
    console.log("Edit")
  }

  onIncrement = (prodId) => {
    const cartProducts = [...this.state.cartProducts]; //this.state.Products.filter(prod => prod.id === prodId)
    const prod = cartProducts.filter((prod) => prod.id === prodId)[0];
    prod.count += 1;
    this.setState({ cartProducts });
  };
  onReset = () => {
    let cartProducts = this.state.cartProducts;
    // console.log(Products);
    cartProducts = cartProducts.map((p) => {
      p.count = 0;
      return p;
    });

    this.setState({ cartProducts });
  };
  render() {

    const Wrapper = (props) => {
      const params = useParams();
      const searchparams = useSearchParams();
      let navigate = useNavigate();
      return <ProductDetails products ={this.state.Products} {...{...props, match: {params,searchparams,navigate}} } />
    }

    const AdminWrapper = (props) => {
      const params = useParams();
      const searchparams = useSearchParams();
      let navigate = useNavigate();
      console.log(this.state.Products)
      return <Admin products ={this.state.Products} {...{...props, match: {params,searchparams,navigate}} } />
    }

    const ProdEditWrapper = (props) => {
      const params = useParams();
      const searchparams = useSearchParams();
      let navigate = useNavigate();
      console.log(this.state.Products)
      return <ProdForm products ={this.state.Products} {...{...props, match: {params,searchparams,navigate}} } />
    }

    return (
      <React.Fragment>
        <ToastContainer/>
        <NavBar
          productCount={
            this.state.Products.filter((prod) => prod.count > 0).length
          }
        ></NavBar>
        <main className="container">
          <Routes>
            <Route path="/about/*" element={<About></About>} />
            <Route path="/products/:id" element={<Wrapper 
            />} />
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/admin/add" element={<ProdEditWrapper/>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/admin/:id" element={<ProdEditWrapper />} />
            <Route path="/admin" element={
            <AdminWrapper
            product={this.state.Products}
            onEdit={this.handleEdit}
            onRem={this.onRem}
            />} />
            <Route path="/menu" element ={
            <Menu 
            product={this.state.Products}
            addToCart = {this.addToCart}
            >
            </Menu>} />
            <Route
              path="/cart"
              element={(
                <ShoppingCart
                 // key={this.state.Products.id}
                  product={this.state.cartProducts}
                  onDelete={this.onDelete}
                  onIncrement={this.onIncrement}
                  onReset={this.onReset}
                ></ShoppingCart>
              )}
              animate={true}
            />
            
          </Routes>

          {/* <ShoppingCart
           // key={this.props.product.id}
            Product={this.state.Products}
            onDelete={this.onDelete}
            onIncrement={this.onIncrement}
            onReset = {this.onReset}
          ></ShoppingCart> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
