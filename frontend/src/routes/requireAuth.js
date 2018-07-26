import React from 'react';
import { Redirect } from 'react-router-dom';
import User from '../User';

/**
 * Check if have the Authenticated User.
 * I haven't will redirect user to /login route
 */
const RequireAuth = (component, user) => {
    if (User.hasUser())
        return component;
    return  <Redirect to="/login"/>;
};

export default RequireAuth;
