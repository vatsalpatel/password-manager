import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function PasswordForm(props) {
    return (
        <>
        </>
    )
}

const Password = withFormik({
    mapPropsToValues: props => ({

    }),
    validate: values => {

    },
    handleSubmit: (values, { props }) => {

    }
})(PasswordForm)

export default connect()(Password)