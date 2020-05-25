import React from 'react';
import { List } from '@material-ui/core';
import Item from './Item';

function TodoList({items, handleItemCheck, openConfirmation, editTodo}){
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

export default TodoList;