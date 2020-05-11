import React from 'react';
import { ListItem, FormControlLabel, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { red, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
	return {
		deleteIcon: {
            color: red[400],
            cursor: 'pointer'
        },
        editIcon: {
            color: blue[400],
            cursor: 'pointer'
        }
	}
};

class Item extends React.Component{

    hanleOnChange = () => {
        this.props.handleItemCheck(this.props.item.id);
    }

    render(){
        const { item, classes, deleteTodo, openModal } = this.props;
        return (
            <ListItem>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={item.checked} onChange={this.hanleOnChange} label={item.todo}/>}
                    label={item.todo}
                />
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    onClick={() => {deleteTodo(item.id)}}
                />
                <EditIcon className={classes.editIcon} onClick={() => {openModal(item)}}/>
            </ListItem>
            
        );
    }
}

export default withStyles(styles)(Item);