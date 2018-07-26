import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes thisProps={{}}/>
            </BrowserRouter>
        );
    }
}

export default App;
