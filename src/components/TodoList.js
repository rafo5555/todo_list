import React from 'react';
import { List } from '@material-ui/core';
import Item from './Item';

class TodoList extends React.Component{

    render(){
        const { items, handleItemCheck, openConfirmation, editTodo } = this.props;
        return (
            <List>
				{items && items.map((item) => {
                    return (
                        <Item 
                            item={item}
                            key={item.id} 
                            handleItemCheck={handleItemCheck}
                            openConfirmation={openConfirmation}
                            editTodo={editTodo}
                        /> 
                    );
                })}
			</List>
            
        );
    }
}

export default TodoList;