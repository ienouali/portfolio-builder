import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import configureStore from "./redux/store";
import "./style.scss";

const store = configureStore();
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <Router>
            <App/>
        </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

