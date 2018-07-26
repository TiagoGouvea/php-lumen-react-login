import React from 'react';
import User from '../User';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/dashboard">Dashboard</a>

                <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.logout()}>Logout
                </button>
            </nav>

        );
    }

    /**
     * Request user logout and redirect to /
     */
    logout = () => {
        User.logout();
        this.props.history.push("/");
    }
}

export default Header;
