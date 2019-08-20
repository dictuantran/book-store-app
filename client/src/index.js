import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');

//render App component on the root element
render(
    <App />, rootElement
)

registerServiceWorker();