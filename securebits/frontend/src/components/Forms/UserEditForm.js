import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { withFormik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { addUser } from '../../_actions/actions'
import axios from 'axios';

const useStyles = makeStyles({
    dialogContent: {
        padding: 25,
    },
    text: {
        marginBottom: 10,
    },
    error: {
        marginBottom: 10,
        color: "red",
    }
})

const Form = props => {
    const classes = useStyles();

    const {
        open,
        onClose,
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        resetForm,
    } = props;

    return (
        <Dialog open={open} maxWidth="xs" fullWidth>
            <form>
                <DialogContent className={classes.dialogContent}>
                    <TextField variant="outlined" label="Username" fullWidth className={classes.text} readOnly
                        name="username" value={values.username} onChange={handleChange}
                        error={errors.username && touched.username}
                    />
                    {errors.username && touched.username && <div className={classes.error}>{errors.username}</div>}
                    <TextField variant="outlined" label="E-mail" fullWidth className={classes.text}
                        name="email" value={values.email} onChange={handleChange}
                        error={errors.email && touched.email}
                    />
                    {errors.email && touched.email && <div className={classes.error}>{errors.email}</div>}
                    <TextField variant="outlined" label="First Name" fullWidth className={classes.text}
                        name="first_name" value={values.first_name} onChange={handleChange}
                        error={errors.first_name && touched.first_name}
                    />
                    {errors.first_name && touched.first_name && <div className={classes.error}>{errors.first_name}</div>}
                    <TextField variant="outlined" label="Last Name" fullWidth className={classes.text}
                        name="last_name" value={values.last_name} onChange={handleChange}
                        error={errors.last_name && touched.last_name}
                    />
                    {errors.last_name && touched.last_name && <div className={classes.error}>{errors.last_name}</div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {onClose(); resetForm()}} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        {isSubmitting ? <CircularProgress color="inherit" size="1.8em" /> : "Sign Up"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const UserEditForm = withFormik({
    mapPropsToValues: () => ({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
    }),
    handleSubmit: (values, { props, setSubmitting, setErrors }) => {
        // axios.post('auth/users/', values)
        //     .then(res => {
        //         props.addUser(values.username, values.password)
        //         props.onClose()
        //     })
        //     .catch(res => {
        //         setErrors(res.response.data)
        //     })
        //     .finally(setSubmitting(false))
    },
    validate: values => {
        const errors = {}
        if(!values.username)
            errors.username = "Required"
        if(!values.email)
            errors.email = "Required"
        if(!values.first_name)
            errors.first_name = "Required"
        if(!values.last_name)
            errors.last_name = "Required"
        return errors
    }
})(Form);

export default connect(null, { addUser })(UserEditForm);