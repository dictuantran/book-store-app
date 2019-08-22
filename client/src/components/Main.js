import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import List from './List';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/list" component={List}/>
            </div>
        )
    }
}

export default Main;