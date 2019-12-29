import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import { withFormik } from 'formik'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    dialogContent: {
        padding: 15,
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
        handleSubmit,
        handleClose,
    } = props;
    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <DialogContent className={classes.dialogContent}>
                <TextField variant="outlined" label="Username" fullWidth className={classes.text}
                name="username" value={values.username} onChange={handleChange} 
            />
                <TextField variant="outlined" label="Password" fullWidth className={classes.text}
                type="password" name="password" value={values.password} onChange={handleChange} 
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined">Cancel</Button>
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </DialogActions>
        </form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues: () => ({
        username: "",
        password: "",
    }),
    handleSubmit: values => {
        console.log(values)
    },
})(Form);

const LoginForm = props => {
    const { open, onClose } = props

    return (
        <Dialog onClose={onClose} open={open} maxWidth="md">
            <FormikForm handleClose={onClose} />
        </Dialog >
    )
}

export default LoginForm;