import React, {useState} from "react";
import "./App.css";
import { withStyles } from '@material-ui/core/styles';
import{ Container } from '@material-ui/core';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ConfirmationModal from './components/ConfirmationModal';

const styles = (theme) => {
	return {
		container: {
			width: 'fit-content',
			marginTop: theme.spacing(5),
		}
	}
};

function App(props){

	let [items, setItems] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [deleteValue, setDeleteValue] = useState(null);

	function handleItemCheck(id){
		setItems(
			items.map((el) => {
				if(el.id === id){
					el.checked = !el.checked
				}
				return el;
			})
		);
	}

	function deleteTodo(id){
		setItems(items.filter(el => el.id !== id));
		setIsOpen(false);
	}

	function addTodo(item){
		setItems([item, ...items]);
	}

	function closeModal(){
		setIsOpen(false);
	}

	function openConfirmation(item){
		setIsOpen(true);
		setDeleteValue(item);
	}

	function editTodo(editValue){
		items = items.map(item => {
			if(item.id === editValue.id){
				return {
					...item,
					todo: editValue.todo
				}
			}
			return item;
		});
		setItems(items);
	}

	return (
		<Container className={props.classes.container}>
			<AddTodo addTodo={addTodo}/>
			<TodoList 
				items={items} 
				handleItemCheck={handleItemCheck}
				openConfirmation={openConfirmation}
				editTodo={editTodo}
			/>
			<ConfirmationModal 
				isOpen={isOpen} 
				closeModal={closeModal} 
				item={deleteValue}
				deleteTodo={deleteTodo}
			/>
		</Container>
	);
}

export default withStyles(styles)(App);