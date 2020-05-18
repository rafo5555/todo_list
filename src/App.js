import React from "react";
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

class App extends React.Component {

	state = {
		items: [],
		isOpen: false,
		deleteValue: null
	}

	handleItemCheck = (id) => {
		this.setState({
			items: this.state.items.map((el) => {
				if(el.id === id){
					el.checked = !el.checked
				}
				return el;
			})
		});
	}

	deleteTodo = (id) => {
		this.setState({
			items: this.state.items.filter(el => el.id !== id),
			isOpen: false
		});
	}

	addTodo = (item) => {
		this.setState({
			items: [item, ...this.state.items]
		});
	}

	closeModal = () => {
		this.setState({isOpen: false});
	}

	openConfirmation = (item) => {
		this.setState({
			isOpen: true,
			deleteValue: item
		});
	}

	editTodo = (editValue) => {
		let {items} = this.state;
		items = items.map(item => {
			if(item.id === editValue.id){
				return {
					...item,
					todo: editValue.todo
				}
			}
			return item;
		});
		

		this.setState({
			items: items,
		});
	}
  
	render() {
		const {classes} = this.props;    
		const {deleteValue, items} = this.state;    
		return (
			<Container className={classes.container}>
				<AddTodo addTodo={this.addTodo}/>
				<TodoList 
					items={items} 
					handleItemCheck={this.handleItemCheck}
					openConfirmation={this.openConfirmation}
					editTodo={this.editTodo}
				/>
				<ConfirmationModal 
					isOpen={this.state.isOpen} 
					closeModal={this.closeModal} 
					item={deleteValue}
					deleteTodo={this.deleteTodo}
				/>
			</Container>
		);
	}
}

export default withStyles(styles)(App);
