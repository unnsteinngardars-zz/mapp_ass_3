import React from 'react';
import {
	View, ScrollView, FlatList, StyleSheet,
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
	keyExtractor = (item) => `${item.title}${item.date}`;

	renderSeperator = () => (
		<View style={[{
			marginLeft: 5, marginRight: 5, height: 2, backgroundColor: Color.hotpink,
		}]}
		/>
	)

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
							// ItemSeparatorComponent={this.renderSeperator}
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
