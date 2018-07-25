import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RequireAuth = (component, user) => {

    const userToken = localStorage.getItem("userToken");
    console.log("userToken",userToken);
    if (userToken) {
        return component;
    }
    return  <Redirect to="/login"/>;
};

export default RequireAuth;
