import React from 'react';
import {
	ScrollView, FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';


class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	keyExtractor = (item) => item.id.toString();

	render() {
		const { todos } = this.props;
		return (
			<ScrollView>
				<FlatList
					data={todos}
					renderItem={({ item }) => <TodoListItem todo={item} />}
					keyExtractor={this.keyExtractor}
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => ({
	todos: state,
});

TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TodoList);
