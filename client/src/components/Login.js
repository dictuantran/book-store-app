import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import {Redirect} from 'react-router';

class Login extends Component {
    constructor(props) {
        // Call the constrictor of Super class i.e The Component
        super(props);
        // maintain the state required for this component
        this.state = {
            email : "",
            password : "",
            token: "",
            authFlag : false
        }   
                
        // Bind the handlers to this class      
        this.submitLogin = this.submitLogin.bind(this);
    }

    // Call the Will Mount to set the auth Flag to false
    componentWillMount() {
        this.setState({
            authFlag : false,
            token: ""
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleValidation () {
        return true;
    }

    submitLogin = (e) => {
        // prevent page from refresh
        e.preventDefault();

        if(this.handleValidation()) {
            const data = {
                email: this.state.email,
                password: this.state.password
            }            

            // set the with credentials to true
            axios.defaults.withCredentials = true;

            // make a post request with the user data
            axios.post('http://localhost:3000/auth/login', data)
                .then(response => {
                    if(response.status === 200) {                        
                        this.setState({
                            authFlag: true,
                            token: response.data["token"]
                        })
                    }
                })
                .catch(error => {
                    console.log("Login error: " + error)
                    this.setState({
                        authFlag: false,
                        token: ""
                    })
                    alert("Authentication Unsuccessful");
                })
        }
    }

    render(){
        // redirect based on successful login
        let redirectVar = null;
        if(this.state.token !== ""){        
            redirectVar = <Redirect to= "/users"/>
        }
        
        return (
            <div>
                {redirectVar}
                <div className="container"></div>
                <div className="col-sm-4 col-sm-offset-4">
                    <h1 align="center"> Login</h1>
                    <br />
                    <div className="login-form">
                        <div className="form-group">
                            <label>Email</label>
                                <input onChange = {this.emailChangeHandler} 
                                    type="text" 
                                    className="form-control" 
                                    name="email" >                        
                                </input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange = {this.passwordChangeHandler} 
                                    type="password" 
                                    className="form-control" 
                                    name="password" >                                        
                            </input>
                        </div>  
                        <button onClick={this.submitLogin} 
                                type="submit" 
                                className="btn btn-success"
                                style={{position: 'relative'}}>Submit
                        </button>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default Login;