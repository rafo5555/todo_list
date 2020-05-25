import React, {useState} from 'react';
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

function Item({item, handleItemCheck, editTodo, classes, openConfirmation}){
    const [isEditable, setIsEditable] = useState(false);
    const [inputValue, setInputValue] = useState(item.todo);
    const [error, setError] = useState('');

    function handleCheck(){
        handleItemCheck(item.id);
    }

    function hanleOnChange(e){
        setInputValue(e.target.value);
    }

    function handleOnClick(){
        let editable = true
        let text = '';
        if(isEditable){
            if(inputValue.length < 6){
                text = 'There should be at least 6 characters';
            }else{
                editable = false;
                editTodo({...item, todo: inputValue});
            }
        }
        setIsEditable(editable);
        setError(text);
    }
    
    const Icon = isEditable ? DoneIcon : EditIcon;
    const iconName =  isEditable ? 'saveIcon' : 'editIcon';
    return (
        <ListItem className={classes.listItem}>
            <FormControlLabel 
                control={<Checkbox color="primary" checked={item.checked} onChange={handleCheck}/>}
                label={isEditable ?
                        <TextField value={inputValue} onChange={hanleOnChange} error={!!error} helperText={error} /> 
                    : item.todo}
            />
            <span>
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    onClick={() => {openConfirmation(item)}}
                />
            <Icon className={classes[iconName]} onClick={handleOnClick}/>    
            </span>
        </ListItem>
    );
    
}

export default withStyles(styles)(Item);