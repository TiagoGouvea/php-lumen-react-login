import React from 'react';

class Main extends React.Component {
    render () {
        // let {partners} = this.props;
        // partners = partners || [];
        // Faz a box de confirmação aparecer novamente se mudar de usuário
        if (this.props.location.search.indexOf('logout') > -1 && typeof localStorage !== 'undefined') {
            localStorage.removeItem('hasClosedMessage');
        }
        return (
            <React.Fragment>
                [main]
            </React.Fragment>
        );
    }
}

export default Main;
