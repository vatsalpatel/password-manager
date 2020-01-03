import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, TextField, IconButton, Dialog, DialogActions, DialogContent, MenuItem, InputAdornment } from '@material-ui/core';
import { withFormik } from 'formik';
import { makeStyles } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { addVault, editVault } from '../../_actions/actions';

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
    const {
        open,
        onClose,
        values,
        errors,
        handleSubmit,
        handleClose,
        handleChange,
    } = props;

    const [showPass, setShowPass] = useState(false)
    const togglePass = () => setShowPass(!showPass)

    return (
        <Dialog onClose={onClose} open={open} maxWidth="xs" fullWidth>
            <form>
                <DialogContent className={classes.dialogContent}>
                    <TextField variant="outlined" label="Name" fullWidth className={classes.text}
                        name="name" value={values.name} onChange={handleChange}
                    />
                    <TextField variant="outlined" label="Username" fullWidth className={classes.text}
                        name="username" value={values.username} onChange={handleChange}
                    />
                    <TextField variant="outlined" label="Password" fullWidth className={classes.text}
                        type={showPass ? "text" : "password"} name="password" value={values.password} onChange={handleChange}
                        InputProps={{ endAdornment: <InputAdornment><IconButton onClick={togglePass}>{showPass ? <Visibility /> : <VisibilityOff />}</IconButton></InputAdornment> }}
                    />
                    <TextField variant="outlined" label="Folder" fullWidth className={classes.text}
                        select name="folder" value={values.folder} onChange={handleChange}>
                        {props.folders.map(folder => (
                            <MenuItem key={folder.id} value={folder.id}>{folder.name}</MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

const VaultForm = withFormik({
    mapPropsToValues: (props) => ({
        name: props.vault.name,
        username: props.vault.username,
        password: props.vault.password,
        folder: props.vault.folder || props.folders[0].id,
    }),
    enableReinitialize: true,
    handleSubmit: (values, { props }) => {
        console.log(values)
    }
})(Form)

const mapStateToProps = (state, ownProps) => {
    let vault = { id: 0, name: "", username: "", password: "", folder: 0 };
    if (ownProps.vault) {
        vault = state.vaults.filter(vault => vault.id === ownProps.vault)[0]
    }
    return {
        vault,
        folders: state.folders,
    }
}

export default connect(mapStateToProps, { addVault, editVault })(VaultForm);