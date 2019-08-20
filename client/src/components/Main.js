import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login}/>
            </div>
        )
    }
}

export default Main;