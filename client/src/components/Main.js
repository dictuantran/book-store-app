import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Users from './Users';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/users" component={Users}/>                
            </div>
        )
    }
}

export default Main;