import React from "react";
import "./App.css";
import { withStyles } from '@material-ui/core/styles';
import{ Container } from '@material-ui/core';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

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
		items: []
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
  
	render() {
		const {classes} = this.props;    
		return (
			<Container className={classes.container}>
				<AddTodo addTodo={this.addTodo}/>
				<TodoList 
					items={this.state.items} 
					handleItemCheck={this.handleItemCheck}
					deleteTodo={this.deleteTodo}
				/>
			</Container>
			
		);
	}
}

export default withStyles(styles)(App);
