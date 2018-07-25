

import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Dashboard</a>

                <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.logout()}>Logout
                </button>
            </nav>

        );
    }

    logout() {
        localStorage.clear();
        this.props.history.push("/");
    }
}

export default Header;
