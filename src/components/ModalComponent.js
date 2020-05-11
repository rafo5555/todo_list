import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import{ Modal, TextField, Button, ButtonGroup } from '@material-ui/core';


const styles = (theme) => {
	return {
		modal: {
			display: 'flex',
			padding: theme.spacing(1),
			alignItems: 'center',
			justifyContent: 'center',
		},
		paper: {
			width: 400,
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
		heading: {
			textAlign: 'center'
        },
        wrapper: {
            padding: theme.spacing(2, 3),
            boxShadow: 'none'
        }
	}
};

class ModalComponent extends React.Component{

    render(){
        const {classes, isOpen, closeModal, editValue, handleChange, editTodo} = this.props;
        return (
            <Modal open={isOpen} className={classes.modal} >
                <div className={classes.paper}>
                    <h3 className={classes.heading}>Edit Todo</h3>
                    <div className={classes.wrapper}>
                        <TextField 
                            variant="outlined" 
                            fullWidth 
                            value={editValue.todo}  
                            onChange={handleChange}
                            error={!!editValue.error}
                            helperText={editValue.error}
                        />
                    </div> 
                    <ButtonGroup variant="contained" color="primary" className={classes.wrapper} >
                        <Button onClick={editTodo}>Edit</Button>
                        <Button color="secondary" onClick={closeModal}>Cancel</Button>
                    </ButtonGroup>
                </div>
            </Modal>
        );
    }

}

export default withStyles(styles)(ModalComponent);