import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
//import Main from './components/Main';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainContainer/>
            </BrowserRouter>
        )
    }
}

export default App;