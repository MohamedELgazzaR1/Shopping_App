import React, { Component } from 'react';




class Admin extends Component {
   
add(){
    let navigate = this.props.match.navigate;
    navigate("/admin/add",{ replace: true } )
}

edit(prodId){
    let navigate = this.props.match.navigate;
    navigate(`/admin/${prodId}`,{ replace: true } )
}

    render() { 
        console.log(this.props.product)
        return (
            
            <React.Fragment>
                <h1>
                    Admin
                </h1>
                <button onClick={()=> (this.add()) } className="btn btn-primary btn-lg m-2">Add</button>
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.product.map((product, index) => (
                    <tr>
                        <th scope="row">{product.name}</th>
                        <td>{product.price}</td>
                        <td><button  onClick={() => this.edit(product.id)} className="btn btn-sm m-2" aria-hidden ="true" ><i className="fa-solid fa-pen-to-square"></i></button></td>
                        <td><button  onClick={() => this.props.onRem(product.id)} className="btn btn-sm m-2" aria-hidden ="true" ><i className="fa-solid fa-trash m-2"></i></button></td>
                        
                    </tr>
                    
                    ))}
                </tbody>
                </table>
            </React.Fragment>
        
        );
    }
}
 
export default Admin;