import React from 'react';
import { List } from '@material-ui/core';
import Item from './Item';

class TodoList extends React.Component{

    render(){
        const { items } = this.props;
        return (
            <List>
				{items && items.map((item) => {
                    return (
                        <Item 
                            item={item}
                            key={item.id} 
                            handleItemCheck={this.props.handleItemCheck}
                            deleteTodo={this.props.deleteTodo}
                        /> 
                    );
                })}
			</List>
            
        );
    }

}

export default TodoList;