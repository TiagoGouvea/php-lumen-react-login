import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
    <BrowserRouter>
        <Routes thisProps={{}}/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
