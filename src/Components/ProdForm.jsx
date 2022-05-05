import React, { Component } from 'react';
import axios from 'axios'
class ProdForm extends Component {


    state = {
        id:"",
        name : "",
        price : "" ,
    }
   
    HandleSubmit = async e => {
        e.preventDefault()
        if(Object.keys(this.props.match.params).length === 0){
        const obj = {...this.state , count : 0 , isChoosen : false}
        await axios.post('http://localhost:3000/Products',obj)

        
        
        }else{
            const obj = {...this.state , count : 0 , isChoosen : false}
            delete obj.id
            await axios.put('http://localhost:3000/Products/'+this.state.id,obj)
        }
        let navigate = this.props.match.navigate;
        navigate("/admin",{ replace: true } )
    }

    HandleChange=(e)=>{
        let state = this.state 
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
        console.log("change")
        
        // const username = this.username.current.value;
        //console.log(username)

    }
    componentDidMount(){

        if(Object.keys(this.props.match.params).length !== 0){
        console.log(this.props.match.params)
        const {id} = this.props.match.params;
        const prod = this.props.products.filter((prod) => prod.id === parseInt(id))[0];
        console.log(this.props.products)
        console.log(prod)
       // console.log(prod.price)
       //let state = {name:"",price:0} 
         const name = prod.name
        const price = prod.price
            this.setState({name , price , id})
        }

    }

    render() { 
        //console.log(this.props.products)
        return (
            <React.Fragment>
                 <h1>{Object.keys(this.props.match.params).length === 0 ? "Add Product" : "Edit Product"}</h1>
        <form onSubmit={this.HandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" 
                    name="name"
                    className="form-control"
                     id="name" 
                     aria-describedby="namehelp"
                     value={this.state.name}
                     onChange={this.HandleChange}
                     />
                    {/* <div id="usernamehelp" className="form-text">Please enter the exact username.</div> */}
                    {/* {this.state.errors.name && (<div className="alert alert-danger">{this.state.errors.name}</div>)} */}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPrice1" className="form-label">Price</label>
                    <input 
                    type="text"
                    name="price"
                     className="form-control"
                      id="exampleInputPrice1"
                      value={this.state.price}
                      onChange={this.HandleChange}
                      />
                {/* {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)} */}
                </div>
                
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">{Object.keys(this.props.match.params).length === 0 ? "Add" : "Edit"}</button>
        </form>
            </React.Fragment>
        );
    }
}
 
export default ProdForm;