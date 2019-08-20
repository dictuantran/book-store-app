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
    }

    render(){
        return (
            <div>
                <div class="container"></div>
                <div class="col-sm-4 col-sm-offset-4">
                    <h1 align="center"> Login</h1>
                    <br />
                    <div class="login-form">
                        <div class="form-group">
                            <label>Username</label>
                                <input onChange = {this.usernameChangeHandler} 
                                    type="text" 
                                    class="form-control" 
                                    name="username" >                        
                                </input>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input onChange = {this.passwordChangeHandler} 
                                    type="password" 
                                    class="form-control" 
                                    name="password" >                                        
                            </input>
                        </div>  
                        <button onClick={this.submitLogin} 
                                type="submit" 
                                class="btn btn-success"
                                style={{position: 'relative'}}>Submit
                        </button>
                    </div>                  
                </div>
            </div>
        )
    }
}

export default Login;