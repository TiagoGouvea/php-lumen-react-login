import React from 'react';
import axios from "axios";
import {Loading, Header} from "../components";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {userData: null};
    }

    render() {
        // let {partners} = this.props;
        // partners = partners || [];
        // Faz a box de confirmação aparecer novamente se mudar de usuário
        if (this.props.location.search.indexOf('logout') > -1 && typeof localStorage !== 'undefined') {
            localStorage.removeItem('hasClosedMessage');
        }
        return (
            <React.Fragment>
                <Header/>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        {this.renderUserData()}

                    </div>
                </div>
            </React.Fragment>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillMount() {
        const config = {headers: {token: localStorage.getItem("userToken")}};
        // config.headers.token = "invalidOne";
        console.log("config", config);
        axios.get('http://localhost:8000/users/me/', config).then((response) => {
            console.log(response);
            this.setState({'userData': response.data});
            if (response.data) {

            } else {

            }

        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    // invalid token
                    localStorage.clear();
                    this.props.history.push("/login");
                } else {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);

            let message = "Error trying to access server";

        });
        console.log("componentWillMount");
    }

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
