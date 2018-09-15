
//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import SignIn from './components/SignIn/SignIn';
//import FrontPage from './FrontPage'
//import registerServiceWorker from './registerServiceWorker';
//import 'tachyons';

const React = require("react");
const ReactDOM = require("react-dom");
const FrontPage = require("./FrontPage");
const registerServiceWorker = require("./registerServiceWorker");
const tachyons = require("tachyons");

ReactDOM.render(<FrontPage />, document.getElementById('root'));
registerServiceWorker();
