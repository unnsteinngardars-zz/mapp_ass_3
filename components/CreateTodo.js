import React from 'react';
import {
	View, Text, StyleSheet, TouchableHighlight, TextInput, Button,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createTodo } from '../redux/todoActions';
import Color from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Color.hotpink,
		marginLeft: 20,
		marginRight: 20,

	},
	inputFieldContainer: {
		flex: 2,
	},
	button: {
		backgroundColor: Color.white,
	},
	buttonContainer: {
		flex: 1,
		backgroundColor: Color.white,
	},
	buttonFont: {
		fontSize: 28,
		color: Color.white,
	},
	submitButton: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	submitButtonFont: {
		color: Color.hotpink,
		fontSize: 18,
	},
	inputField: {
		// borderRadius: 4,
		borderWidth: 1,
		borderColor: Color.white,
		height: 40,
		padding: 5,
		fontSize: 18,
		color: Color.white,
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
		if (title === '') {
			alert('You cant do nothing! Please enter something to do ...');
			return;
		}
		const todo = { title, completed: false, date: new Date() };
		this.setState({ title: '', button: !button });
		this.props.createTodo(todo);
	}

	renderButton = () => (
		<View style={styles.container}>
			<TouchableHighlight onPress={this.toggle}>
				<Text style={styles.buttonFont}>What to do?</Text>
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
					autoCorrect={false}
					underlineColorAndroid="transparent"
				/>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableHighlight
					style={styles.submitButton}
					onPress={this.createTodo}
				>
					<Text style={styles.submitButtonFont}>Submit</Text>
				</TouchableHighlight>
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
