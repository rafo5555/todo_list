import React from 'react';
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

class AddTodo extends React.Component{

    state = {
        inputValue: '',
        error: false,
        errorText: ''
    }

    handleChange = (e) => {
		this.setState({
			inputValue: e.target.value
		});
    }
    
    handleClick = (e) => {
        let error = false;
        let errorText = '';
        let inputValue = '';
        if(this.state.inputValue.length < 6){
            error = true;
            errorText = 'At least 6 characters';
            inputValue = this.state.inputValue;
        }else{
            const item = {id: uuid(), todo: this.state.inputValue, checked: false};
            this.props.addTodo(item);
        }
        this.setState({
            error: error,
            errorText: errorText,
            inputValue: inputValue
        });
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                <TextField 
                    error={this.state.error}
                    helperText={this.state.errorText}
                    type="text"
                    placeholder="Add Todo"
                    margin="normal"
                    variant="outlined"
                    className={classes.textInput}
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                />
                <Button className={classes.button} onClick={this.handleClick}>
                    Add Todo
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(AddTodo);