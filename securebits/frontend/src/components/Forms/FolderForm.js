import React from 'react';
import { Dialog, TextField, DialogContent, DialogActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { addFolder, editFolder } from '../../_actions/actions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        marginBottom: 15,
    },
});

const Form = props => {
    const classes = useStyles();
    const {
        values,
        handleChange,
        handleClose,
        submit
    } = props;

    const handleSubmit = () => {
        submit({ id: values.id, name: values.name })
        handleClose()
    }
    return (
        <>
            <form>
                <DialogContent>
                    <TextField variant="outlined" label="Name" fullWidth className={classes.text}
                        name="name" value={values.name} onChange={handleChange} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
                </DialogActions>
            </form>
        </>
    )
}

const FormikForm = withFormik({
    mapPropsToValues: (props) => ({
        id: props.folder.id,
        name: props.folder.name,
    })
})(Form)

const FolderForm = props => {
    return (
        <Dialog onClose={props.onClose} open={props.open} maxWidth="xs" fullWidth>
            <FormikForm folder={props.folder} handleClose={props.onClose} submit={props.folder.id ? props.editFolder : props.addFolder} />
        </Dialog>
    )
}

const mapStateToProps = (state, ownProps) => {
    let folder = { id: 0, name: "", user: 0 }
    if (ownProps.folder > 0) {
        folder = state.folders.filter(folder => folder.id === ownProps.folder)[0]
    }
    return {
        folder: folder
    }
}

export default connect(mapStateToProps, { addFolder, editFolder })(FolderForm);