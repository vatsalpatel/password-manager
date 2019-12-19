import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions';

class TestComp extends Component {
    componentDidMount() {
        this.props.loginUser({
            username: 'admin',
            password: 'qweasdrf',
        })
    }

    logout = (e) => {
        this.props.logoutUser(this.props.token.token)
    }

    render() {
        console.log(this.props.token.token)
        return (
            <>
                <button onClick={e => this.logout(e)}>Logout</button>
                <h1>{this.props.token.token}</h1>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(TestComp)