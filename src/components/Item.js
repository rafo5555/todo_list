import React from 'react';
import { ListItem, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { red, yellow, green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
	return {
		deleteIcon: {
            color: red[400],
            cursor: 'pointer'
        },
        editIcon: {
            color: yellow[400],
            cursor: 'pointer'
        },
        saveIcon: {
            color: green[400],
            cursor: 'pointer'
        },
        listItem: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0
        }
	}
};

class Item extends React.Component{

    state = {
        isEditable: false,
        inputValue: this.props.item.todo,
        error: ''
    };

    handleCheck = () => {
        this.props.handleItemCheck(this.props.item.id);
    }

    hanleOnChange = (e) => {
        this.setState({inputValue: e.target.value });
    }

    handleOnClick = () => {
        const {isEditable, inputValue} = this.state;
        const {editTodo, item} = this.props;
        let editable = true
        let error = '';
        if(isEditable){
            if(inputValue.length < 6){
                error = 'There should be at least 6 characters';
            }else{
                editable = false;
                editTodo({...item, todo: inputValue});
            }
        }
        this.setState({
            isEditable: editable,
            error: error
        });
    }
 
    render(){
        const { item, classes, openConfirmation } = this.props;
        const {isEditable, inputValue, error} = this.state;
        const Icon = isEditable ? DoneIcon : EditIcon;
        const iconName =  isEditable ? 'saveIcon' : 'editIcon';
        return (
            <ListItem className={classes.listItem}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={item.checked} onChange={this.handleCheck}/>}
                    label={isEditable ?
                         <TextField value={inputValue} onChange={this.hanleOnChange} error={!!error} helperText={error} /> 
                        : item.todo}
                />
                <span>
                    <DeleteIcon 
                        className={classes.deleteIcon} 
                        onClick={() => {openConfirmation(item)}}
                    />
                <Icon className={classes[iconName]} onClick={this.handleOnClick}/>    
                </span>
            </ListItem>
        );
    }
}

export default withStyles(styles)(Item);