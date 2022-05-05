import React, { Component } from "react";
import Joi from "joi-browser"

class Login extends Component {
state = {
    username : "",
    password : "",
    errors : {}
}

schema = {
    username : Joi.string().required(),
    password : Joi.string().required()
}
    // username = React.createRef()
    HandleSubmit=(e)=>{
        e.preventDefault()

        const errors = this.validate()

        if(errors) return

        console.log("submit")
        // const username = this.username.current.value;
        //console.log(username)
    }

    validate = () => {
        const errors = {}
        // if(this.state.username.trim() === "" )
        //     errors.username = 'Username is required'
        // if(this.state.password.trim() === "" )
        //     errors.password = 'Password is required'
        
        // this.setState({errors})
        // return Object.keys(errors).length === 0 ? null : errors 
        const state = this.state
        delete state.errors
        const res = Joi.validate(state,this.schema,{abortEarly:false})
        if(res.error === null) {
            this.setState({errors})
            return null
        }

        for (const error of res.error.details){
            console.log(error.path)
            errors[error.path] = error.message
        }
        this.setState({errors})
        console.log(res)

    }

    HandleChange=(e)=>{
        let state = this.state 
        state[e.currentTarget.name] = e.currentTarget.value
        this.setState(state)
        console.log("change")
        // const username = this.username.current.value;
        //console.log(username)
    }


  render() {
    return (
      <React.Fragment>
        <h1>Login Page</h1>
        <form onSubmit={this.HandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" 
                    /*ref={this.username}*/ 
                    name="username"
                    className="form-control"
                     id="username" 
                     aria-describedby="usernamehelp"
                     value={this.state.username}
                     onChange={this.HandleChange}
                     />
                    <div id="usernamehelp" className="form-text">Please enter the exact username.</div>
                    {this.state.errors.username && (<div className="alert alert-danger">{this.state.errors.username}</div>)}
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password"
                    name="password"
                     className="form-control"
                      id="exampleInputPassword1"
                      value={this.state.password}
                      onChange={this.HandleChange}
                      />
                {this.state.errors.password && (<div className="alert alert-danger">{this.state.errors.password}</div>)}
                </div>
                
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
