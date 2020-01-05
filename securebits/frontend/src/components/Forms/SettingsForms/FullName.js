import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function NameForm(props) {
    return (
        <>
        </>
    )
}

const FullName = withFormik({
    mapPropsToValues: props => ({
        first_name: props.first_name,
        last_name: props.last_name,
    }),
    validate: values => {

    },
    handleSubmit: (values, { props }) => {

    }
})(NameForm)

export default connect()(FullName)