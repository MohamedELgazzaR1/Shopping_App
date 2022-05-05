import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    // state = { 
    //     id : this.props.Product.id,
    //     name: this.props.Product.name,
    //     count:this.props.Product.count,
    //     //imgUrl :"logo192.png",
    //     //names:[] //["toso","ahmed","Mostafa"]
    //  } 


     getClasses(){
        return  this.props.Product.count === 0 ?   "badge bg-warning m-2" : "badge bg-primary m-2" 
     }

     clickHandler =() =>{     
       this.setState({count : this.props.Product.count + 1})
     }

    //  deleteHandler =() =>{
    //     this.setState({count : this.state.count - 1})
    //  }

    render() { 
        
       // console.log(this.props)

       // var st = this.state
        
        const styles ={color : 'red'}
        return (

        <div className='row'>
        <div className='col-1'>
        <span style={styles}>
                <Link to={`/products/${this.props.Product.id}`}>{this.props.Product.name} </Link>
                <span className={this.getClasses()} > {this.props.Product.count} </span> 
            </span></div>
  
            <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.Product.id)} className="btn btn-primary btn-sm" >+</button>
            <button style={{cursor:"pointer"}} onClick={() => this.props.onDelete(this.props.Product.id)} className="btn btn-primary btn-sm m-2" ><i className="fa-solid fa-trash m-2"></i></button>

            </div>

        </div>
        );
    }
}
 
export default Product ;


