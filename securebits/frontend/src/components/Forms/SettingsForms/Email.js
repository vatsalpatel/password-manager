import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function EmailForm(props) {
    return (
        <>
        </>
    )
}

const Email = withFormik({
    mapPropsToValues: props => ({

    }),
    validate: values => {

    },
    handleSubmit: (values, { props }) => {

    }
})(EmailForm)

export default connect()(Email)