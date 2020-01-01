import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import { withFormik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import { addUser } from '../../_actions/actions'

const useStyles = makeStyles({
    dialogContent: {
        padding: 25,
    },
    text: {
        marginBottom: 15,
    },
})

const Form = props => {
    const classes = useStyles();

    const {
        values,
        handleChange,
        handleClose,
        submit,
    } = props;

    const handleSubmit = () => {
        submit({
            username: values.username,
            password: values.password,
            re_password: values.password2,
            email: values.email,
            first_name: values.first_name,
            last_name: values.last_name,
        })
        handleClose()
    }

    return (
        <form>
            <DialogContent className={classes.dialogContent}>
                <TextField variant="outlined" label="Username" name="username" fullWidth className={classes.text} value={values.username} onChange={handleChange} />
                <TextField variant="outlined" label="E-mail" name="email" fullWidth className={classes.text} value={values.email} onChange={handleChange} />
                <TextField variant="outlined" label="Password" name="password" type="password" fullWidth className={classes.text} value={values.password} onChange={handleChange} />
                <TextField variant="outlined" label="Password Reapeat" name="password2" type="password" fullWidth className={classes.text} value={values.password2} onChange={handleChange} />
                <TextField variant="outlined" label="First Name" name="first_name" fullWidth className={classes.text} value={values.first_name} onChange={handleChange} />
                <TextField variant="outlined" label="Last Name" name="last_name" fullWidth className={classes.text} value={values.last_name} onChange={handleChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Sign Up</Button>
            </DialogActions>
        </form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues: () => ({
        username: "",
        password: "",
        password2: "",
        email: "",
        first_name: "",
        last_name: "",
    })
})(Form);

const SignupForm = props => {
    const { open, onClose } = props;

    return (
        <Dialog open={open} maxWidth="xs" fullWidth>
            <FormikForm handleClose={onClose} submit={props.addUser} />
        </Dialog>
    )
}

export default connect(null, { addUser })(SignupForm);