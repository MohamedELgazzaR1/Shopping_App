import React, { Component } from 'react';
import { useParams, useSearchParams,useNavigate } from 'react-router-dom';
import Product from './product';




class ProductDetails extends Component {
    
handleSave =()=>{
    console.log("here")
    const navigate = this.props.match.navigate
    navigate("/cart",{ replace: true } )
    //this.props.history.push("/cart")
}

    render() { 
        const {id} = this.props.match.params;
        const [searchParams , setSearchParams] = this.props.match.searchparams;  
    //console.log(searchParams.get('sortby'))
    // console.log(this.props.products)
    // console.log(2 === id)
     const prod = this.props.products.filter((com) =>com.id === parseInt(id)) [0]
     console.log(this.props.match)

    return (
        <React.Fragment>
         {/* <h1>Details {id}</h1> */}
         <h2>{prod.name}</h2> 
         <h2>{prod.count}</h2> 
         <button onClick={this.handleSave} className="btn btn-primary btn-sm">save</button>
         </React.Fragment>
         );
    }
}
 
export default (ProductDetails);

