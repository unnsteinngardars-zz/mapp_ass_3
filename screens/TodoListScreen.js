import React from 'react';
import {
	Text, View, StyleSheet, TouchableHighlight, Alert,
} from 'react-native';
import KeyBoardSpacer from 'react-native-keyboard-spacer';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import CreateTodo from '../components/CreateTodo';
import Color from '../constants/colors';
import { clearList } from '../redux/todoActions';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		// justifyContent: 'center',
		justifyContent: 'space-around',
		paddingTop: 30,
		paddingBottom: 0,
		backgroundColor: Color.hotpink,
		borderBottomWidth: 1,
		borderColor: Color.white,
	},
	todoListContainer: {
		flex: 10,
		backgroundColor: Color.white,
	},
	buttonInputContainer: {
		flex: 1.5,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: Color.hotpink,
	},
	titleTextContainer: {
		flex: 6,
		marginLeft: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	clearButtonContainer: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: 10,
		marginTop: 10,
	},
	titleText: {
		fontSize: 32,
		color: Color.white,
	},
	clearButtonFont: {
		fontSize: 14,
		color: Color.red,
	},
});

class TodoListScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	clear = () => {
		Alert.alert('WARNING', 'Are you sure you want to clear all todos ?', [{ text: 'Cancel', onPress: () => {} }, { text: 'OK', onPress: () => { this.props.clearList(); } }], { cancelable: false });
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<View style={styles.titleTextContainer}>
						<Text style={styles.titleText}>T O D O    L I S T </Text>
					</View>
					<View style={styles.clearButtonContainer}>
						<TouchableHighlight onPress={this.clear} underlayColor={Color.lightpink}>
							<Icon name="trash-o" size={30} color={Color.white} />
							{/* <Text style={styles.clearButtonFont}>Clear List!</Text> */}
						</TouchableHighlight>

					</View>
				</View>
				<View style={styles.todoListContainer}>
					<TodoList />
				</View>
				<View style={styles.buttonInputContainer}>
					<CreateTodo />
				</View>
				<KeyBoardSpacer />
			</View>
		);
	}
}

TodoListScreen.propTypes = {
	clearList: PropTypes.func,
};

TodoListScreen.defaultProps = {
	clearList: () => {},
};

export default connect(null, { clearList })(TodoListScreen);
