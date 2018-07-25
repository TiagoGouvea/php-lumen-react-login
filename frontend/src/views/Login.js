import React from 'react';
import * as _ from "lodash";
import axios from "axios";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: 'kaleb.dietrich@harvey.com',
            password: 'tiago'
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email"
                                   aria-describedby="emailHelp" placeholder="Enter email"
                                   value={this.state.email}
                                   onChange={this.onInputChanged}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password"
                                   value={this.state.password}
                                   onChange={this.onInputChanged}/>
                        </div>
                        <button className="btn btn-primary"
                                onClick={() => this.login()}>Login
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    onInputChanged = ({target: {value, id: field}}) => {
        console.log("value", value);
        console.log("field", field);
        this.setState((prevState) => {
            _.set(prevState, field, value);
            return prevState;
        });
    };

    // Proceed with user login
    login() {
        // Validate fields
        let error = null;
        if (!this.state.email || !this.state.password)
            error = "You must type your email and password";
        else if (!validateEmail(this.state.email))
            error = "Please type a valid email address";
        else if (this.state.password.length < 4)
            error = "The password are so short";

        // Some error?
        if (error) {
            alert(error);
            return;
        }

        axios.post('http://localhost:8000/auth/verify/', this.state).then((response) => {
            console.log(response);
            localStorage.setItem("userToken", response.data.token);
            console.log("history", this.props.history);
            this.props.history.push("/dashboard");
        }).catch((error) => {
            let message = "Error trying to access server";
            if (error.response && error.response.data.error) {
                console.log(error.response.data);
                message = error.response.data.error;
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
            alert(message);
        });

    }

}

const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export default Login;
