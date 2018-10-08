import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	titleContainer: {
		flex: 1,
		paddingTop: 80,
		alignItems: 'center',
		// backgroundColor: 'red',
	},
	todoListContainer: {
		flex: 10,
		// backgroundColor: 'blue',
	},
	buttonInputContainer: {
		flex: 2,
		alignItems: 'center',
	},
	titleText: {
		fontSize: 32,
	},
});

export default class TodoListScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>Todo List</Text>
				</View>
				<View style={styles.todoListContainer}>
					<TodoList />
				</View>
				<View style={styles.buttonInputContainer}>
					<CreateTodo />
				</View>
			</View>
		);
	}
}
