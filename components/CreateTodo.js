import React from 'react';
import {
	View, Text, StyleSheet, TouchableHighlight, TextInput, Button,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTodo } from '../redux/todoActions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	inputFieldContainer: {
		flex: 2,
	},
	buttonContainer: {
		flex: 1,
	},
	inputField: {
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#225455',
		height: 40,
		padding: 5,
		fontSize: 18,
	},

});

class CreateTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			button: true,
			title: '',
		};
	}

	toggle = () => {
		const { button } = this.state;
		this.setState({ button: !button });
	}

	updateState = value => {
		this.setState({ title: value });
	}

	createTodo = () => {
		const { button, title } = this.state;
		const todo = { title, completed: false, date: new Date() };
		this.setState({ title: '', button: !button });
		this.props.createTodo(todo);
	}

	renderButton = () => (
		<View style={styles.container}>
			<TouchableHighlight onPress={this.toggle}>
				<Text>Click to create todo!</Text>
			</TouchableHighlight>
		</View>
	);

	renderInput = () => (
		<View style={[styles.container, { marginLeft: 20 }]}>
			<View style={styles.inputFieldContainer}>
				<TextInput
					style={styles.inputField}
					placeholder="Title of todo"
					onChangeText={value => this.updateState(value)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<Button
					title="Submit"
					onPress={this.createTodo}
				/>
			</View>
		</View>
	)

	render() {
		const { button } = this.state;
		return (
			button ? this.renderButton() : this.renderInput()
		);
	}
}

CreateTodo.propTypes = {
	createTodo: PropTypes.func,
};

CreateTodo.defaultProps = {
	createTodo: () => {},
};

export default connect(null, { createTodo })(CreateTodo);
