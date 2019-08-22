import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Login extends Component {
    constructor(props){
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {
            username : "",
            password : "",
            authFlag : false
        }   
        
        cookie.remove('cookie', { path: '/' });
        //Bind the handlers to this class      
        this.submitLogin = this.submitLogin.bind(this);
    }

    //Call the Will Mount to set the auth Flag to false
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    handleValidation () {
        return true;
    }

    submitLogin = (e) => {
        //prevent page from refresh
        e.preventDefault();
        if(this.handleValidation()) {
            //axios.post data
            this.setState({
                authFlag : true
            });
        }
    }

    render(){
        //redirect based on successful login
        let redirectVar = null;
        //if(cookie.load('cookie')){
        if(this.state.authFlag) {
            redirectVar = <Redirect to= "/list"/>
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
                            <label>Username</label>
                                <input onChange = {this.usernameChangeHandler} 
                                    type="text" 
                                    className="form-control" 
                                    name="username" >                        
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