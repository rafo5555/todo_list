import React, {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import uuid from 'react-uuid';

const styles = (theme) => {
	return {
		button : {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
        },
        textInput: {
            margin: 0
        }
	}
};

function AddTodo(props){
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    
    function handleChange(e){
		setInputValue(e.target.value);
    }
    
    function handleClick(e){
        let errorPresent = false;
        let text = '';
        let value = '';
        if(inputValue.length < 6){
            errorPresent = true;
            text = 'At least 6 characters';
            value = inputValue;
        }else{
            const item = {id: uuid(), todo: inputValue, checked: false};
            props.addTodo(item);
        }
        setError(errorPresent);
        setErrorText(text);
        setInputValue(value);
    }

    return (
        <div>
            <TextField 
                error={error}
                helperText={errorText}
                type="text"
                placeholder="Add Todo"
                margin="normal"
                variant="outlined"
                className={props.classes.textInput}
                onChange={handleChange}
                value={inputValue}
            />
            <Button className={props.classes.button} onClick={handleClick}>
                Add Todo
            </Button>
        </div>
    );
}

export default withStyles(styles)(AddTodo);