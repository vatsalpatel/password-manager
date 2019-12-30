import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, TextField, Dialog, DialogActions, DialogContent, MenuItem } from '@material-ui/core';
import { withFormik } from 'formik';
import { makeStyles } from '@material-ui/core';
import { addVault } from '../../_actions/actions';

const useStyles = makeStyles({
    dialogContent: {
        padding: 15,
    },
    text: {
        marginBottom: 15,
    },
});

const Form = props => {
    const classes = useStyles();
    const [folder, setFolder] = useState(props.folders[0].id);
    const {
        values,
        handleChange,
        handleClose,
        submit,
    } = props;

    const handleSubmit = () => {
        submit({name: values.name ,username: values.username, password: values.password, folder:folder})
        handleClose()
    }
    const handleSelect = event => {
        setFolder(event.target.value);
    }

    return (
        <form>
            <DialogContent className={classes.dialogContent}>
                <TextField variant="outlined" label="Name" fullWidth className={classes.text}
                    name="name" value={values.name} onChange={handleChange}
                />
                <TextField variant="outlined" label="Username" fullWidth className={classes.text}
                    name="username" value={values.username} onChange={handleChange}
                />
                <TextField variant="outlined" label="Password" fullWidth className={classes.text}
                    type="password" name="password" value={values.password} onChange={handleChange}
                />
                <TextField variant="outlined" label="Folder" fullWidth className={classes.text}
                    select name="folder" value={folder} onChange={handleSelect}>
                    {props.folders.map(folder => (
                        <MenuItem key={folder.id} value={folder.id}>{folder.name}</MenuItem>
                    ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </form>
    )
}

const FormikForm = withFormik({
    mapPropsToValues: () => ({
        name: "",
        username: "",
        password: "",
    })
})(Form);

const VaultForm = props => {
    return (
        <Dialog onClose={props.onClose} open={props.open}>
            <FormikForm handleClose={props.onClose} folders={props.folders} submit={props.addVault} />
        </Dialog>
    )
}

const mapStateToProps = (state, ownProps) => {
    let vault = null;
    if (ownProps.vault) {
        vault = state.vaults.map(vault => vault.id === ownProps.vault)
    }
    return {
        vault,
        folders: state.folders,
    }
}

export default connect(mapStateToProps, { addVault })(VaultForm);