import React from 'react';
import { ListItem, FormControlLabel, Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => {
	return {
		deleteIcon: {
            color: red[400],
            cursor: 'pointer'
        }
	}
};

class Item extends React.Component{

    hanleOnChange = () => {
        this.props.handleItemCheck(this.props.item.id);
    }

    render(){
        const { item, classes } = this.props;
        return (
            <ListItem>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={item.checked} onChange={this.hanleOnChange} label={item.todo}/>}
                    label={item.todo}
                />
                <DeleteIcon 
                    className={classes.deleteIcon} 
                    onClick={() => {this.props.deleteTodo(item.id)}}
                />
			</ListItem>
        );
    }
}

export default withStyles(styles)(Item);