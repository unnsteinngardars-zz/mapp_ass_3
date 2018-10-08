import React from 'react';
import {
	View, Text, ScrollView, FlatList, StyleSheet, TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clearList } from '../redux/todoActions';
import TodoListItem from './TodoListItem';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignContent: 'stretch',
	},
	listContainer: {
		flex: 12,
	},
	clearButtonContainer: {
		flex: 0.5,
		alignItems: 'center',
	},
});

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	keyExtractor = (item) => `${item.title}${item.date}`;

	clear = () => {
		this.props.clearList();
	}

	render() {
		const { todos } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.listContainer}>
					<ScrollView>
						<FlatList
							data={todos}
							renderItem={({ item }) => <TodoListItem todo={item} />}
							keyExtractor={this.keyExtractor}
						/>
					</ScrollView>
				</View>
				<View style={styles.clearButtonContainer}>
					<TouchableHighlight onPress={this.clear}>
						<Text>Clear List!</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos,
});

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	clearList: PropTypes.func,
};

TodoList.defaultProps = {
	clearList: () => {},
};

export default connect(mapStateToProps, { clearList })(TodoList);
