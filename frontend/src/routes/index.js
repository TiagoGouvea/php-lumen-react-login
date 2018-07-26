import React, {Component} from 'react';
import {Route, Switch} from "react-router";

import {
    Login, PageNotFound, Dashboard, Main
} from '../views';
import {Container} from "../components";
import RequireAuth from "./requireAuth";


export default class Router extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        {RequireAuth(<Route exact path='/' component={Main}/>)}
                        {RequireAuth(<Route exact path='/dashboard' component={Dashboard}/>)}
                        <Route exact path='*' component={PageNotFound}/>
                    </Switch>
                    {/*</Header>*/}
                    {/*<Footer />*/}
                </Container>
            </React.Fragment>
        );
    }
};
