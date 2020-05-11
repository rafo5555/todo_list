import React from "react";
import "./App.css";
import { withStyles } from '@material-ui/core/styles';
import{ Container } from '@material-ui/core';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ModalComponent from './components/ModalComponent';

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
		editValue: {
			id: null,
			todo: '',
			checked: false,
			error: ''
		}
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
			items: this.state.items.filter(el => el.id !== id)
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

	openModal = (item) => {
		this.setState({
			isOpen: true,
			editValue: item
		});
	}

	editTodo = () => {
		let error = ''
		let {items, editValue, isOpen} = this.state;

		if(editValue.todo.length < 6){
			error = 'There should be at least 6 characters';
		}else{
			items = items.map(item => {
				if(item.id === editValue.id){
					return {
						...item,
						todo: editValue.todo
					}
				}
				return item;
			});
			isOpen = false;
		}

		this.setState({
			editValue: {...editValue, error: error},
			items: items,
			isOpen: isOpen
		});
	}

	handleChange = (e) => {
		this.setState({
			editValue: {...this.state.editValue, todo: e.target.value}
		});
	}
  
	render() {
		const {classes} = this.props;    
		return (
			<Container className={classes.container}>
				<AddTodo addTodo={this.addTodo}/>
				<TodoList 
					items={this.state.items} 
					handleItemCheck={this.handleItemCheck}
					deleteTodo={this.deleteTodo}
					openModal={this.openModal}
				/>
				<ModalComponent 
					isOpen={this.state.isOpen} 
					closeModal={this.closeModal} 
					editValue={this.state.editValue}
					handleChange={this.handleChange}
					editTodo={this.editTodo}
				/>
			</Container>
		);
	}
}

export default withStyles(styles)(App);
