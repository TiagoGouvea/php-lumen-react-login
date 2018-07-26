import React from 'react';
import User from "../User";

class Main extends React.Component {
    render () {
        return (
            <React.Fragment/>
        );
    }


    /**
     * Will call /users/me/ trying to get the remote user data
     */
    componentWillMount() {
        // Request users/me
        User.getMe().then(()=>{
            this.props.history.push("/dashboard");
        }).catch(()=>{
            this.props.history.push("/login");
        });
    }
}

export default Main;
