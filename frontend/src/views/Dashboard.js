import React from 'react';

import {Loading, Header} from "../components";
import User from "../User";

class Dashboard extends React.Component {
    constructor() {
        super();
        // Set initial state
        this.state = {userData: null};
    }

    render() {
        return (
            <React.Fragment>
                <Header history={this.props.history}/>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        {this.renderUserData()}
                    </div>
                </div>
            </React.Fragment>
        );
    }

    /**
     * Will call /users/me/ trying to get the remote user data
     */
    componentWillMount() {
        // Try do get the current User, if success set state, if not show an error
        User.getMe().then(userData => {
            this.setState({'userData': userData});
        }).catch(errorMessage => {
            alert(errorMessage);
        });
    }

    /**
     * Display the user name, email and id or just a loading
     * @returns {XML}
     */
    renderUserData() {
        if (!this.state.userData) {
            return <Loading/>;
        } else {
            return <div>
                <h3 className="display-2">{this.state.userData.name}</h3>
                <p>{this.state.userData.email}</p>
                <small>Your user id is <b>{this.state.userData.id}</b></small>
            </div>
        }
    }
}

export default Dashboard;
