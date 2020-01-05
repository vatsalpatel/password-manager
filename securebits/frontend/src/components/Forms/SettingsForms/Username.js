import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik'
import { Button, Dialog, DialogActions, DialogContent, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { editData } from '../../../_services/services'
import { editUser } from '../../../_actions/actions'

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

function NameForm(props) {
    const classes = useStyles()
    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = props;
    return (
        <>
            <form>
                <TextField variant="outlined" label="Username" fullWidth className={classes.text}
                    name="username" value={values.username} onChange={handleChange}
                    error={errors.username && touched.username}
                />
                {errors.username && touched.username && <div className={classes.error}>{errors.username}</div>}
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    {isSubmitting ? <CircularProgress color="inherit" size="1.8em" /> : "Save"}
                </Button>
            </form>
        </>
    )
}

const FullName = withFormik({
    mapPropsToValues: props => ({
        username: props.username || "",
    }),
    validate: values => {
        const errors = {}

        if (!values.username)
            errors.username = "Required"

        return errors
    },
    handleSubmit: (values, { props, setSubmitting, setErrors }) => {
        editData(`auth/users/${props.user.id}/`, { ...props.user, username: values.username })
            .then(res => {
                props.editUser(res.data)
            })
            .catch(res => {
                setErrors(res.response.data)
            })
            .finally(() => setSubmitting(false))
    },
    enableReinitialize: true,
})(NameForm)

const mapStateToProps = state => ({
    username: state.user.username,
    user: state.user,
})

export default connect(mapStateToProps, { editUser })(FullName)