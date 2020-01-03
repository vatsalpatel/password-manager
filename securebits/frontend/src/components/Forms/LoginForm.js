import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../_actions/actions';
import { login } from '../../_services/services';
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { withFormik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    dialogContent: {
        padding: 25,
    },
    text: {
        marginBottom: 15,
    },
    error: {
        color: "red",
    }
})

const Form = props => {
    const { open, onClose } = props
    const classes = useStyles();

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = props;
    return (
        <Dialog onClose={onClose} open={open} maxWidth="xs" fullWidth>
            <form>
                <DialogContent className={classes.dialogContent}>
                    <TextField variant="outlined" label="Username" fullWidth className={classes.text}
                        name="username" value={values.username} onChange={handleChange}
                    />
                    <TextField variant="outlined" label="Password" fullWidth className={classes.text}
                        type="password" name="password" value={values.password} onChange={handleChange}
                    />
                    {errors.password && touched.password && <div className={classes.error}>{errors.password}</div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        {isSubmitting ? <CircularProgress color="inherit" size="1.8em" /> : "Log In"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const LoginForm = withFormik({
    mapPropsToValues: () => ({
        username: "admin",
        password: "qweasdrf",
    }),
    handleSubmit: (values, { props, setErrors, setSubmitting }) => {
        login(values.username, values.password)
            .then(res => {
                props.loginUser(values.username, values.password, res.data.auth_token)
                props.onClose()
            })
            .catch(res => {
                setErrors({ "password": "Username and password do not match" })
            })
            .finally(() => setSubmitting(false))
    },
})(Form);

export default connect(null, { loginUser })(LoginForm);