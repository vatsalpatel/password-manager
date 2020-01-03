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
                    <TextField variant="outlined" label="Current Passowrd" fullWidth className={classes.text}
                        name="password" type="password" value={values.password} onChange={handleChange}
                        error={errors.password && touched.password}
                    />
                    <TextField variant="outlined" label="New Password" fullWidth className={classes.text}
                        name="password2" type="password" value={values.password2} onChange={handleChange}
                        error={errors.password2 && touched.password2}
                    />
                    {errors.password2 && touched.password2 && <div className={classes.error}>{errors.password2}</div>}
                    <TextField variant="outlined" label="New Password Repeat" fullWidth className={classes.text}
                        name="password3" type="password" value={values.password3} onChange={handleChange}
                        error={errors.password3 && touched.password3 && values.password !== values.password3}
                    />
                    {errors.password3 && touched.password3 && <div className={classes.error}>{errors.password3}</div>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { onClose(); resetForm() }} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        {isSubmitting ? <CircularProgress color="inherit" size="1.8em" /> : "Sign Up"}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const SignupForm = withFormik({
    mapPropsToValues: () => ({
        password: "",
        password2: "",
        password3: "",
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
        if(!values.password)
            errors.password = "Required"
        if(values.password2.length < 8)
            errors.password2 = "Minumim length is 8"
        if(values.password2 !== values.password3)
            errors.password3 = "Passwords do not match"
        return errors
    }
})(Form);

export default connect(null, { addUser })(SignupForm);