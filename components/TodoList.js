import React from 'react';
import {
	View, Text, ScrollView, FlatList, StyleSheet, TouchableHighlight, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import Color from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignContent: 'stretch',
	},
	listContainer: {
		flex: 12,
	},

});

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	keyExtractor = (item) => `${item.title}${item.date}`;

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
			</View>
		);
	}
}

const mapStateToProps = state => ({
	todos: state.todos,
});

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TodoList);
