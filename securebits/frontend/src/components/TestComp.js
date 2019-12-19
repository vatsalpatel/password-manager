import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';

class TestComp extends Component {
    componentDidMount() {
        this.props.loginUser({
            username: 'admin',
            password: 'qweasdrf',
        })
    }

    render() {
        console.log(this.props.token.token)
        return (
            <h1>{this.props.token.token}</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, { loginUser })(TestComp)