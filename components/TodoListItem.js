import React from 'react';
import {
	View, Text, StyleSheet, Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleStatus } from '../redux/todoActions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5,
		marginBottom: 5,
	},
	titleContainer: {
		flex: 3,
	},
	switchContainer: {
		flex: 1,
	},
});


class TodoListItem extends React.Component {
	toggleStatus = () => {
		const { todo } = this.props;
		this.props.toggleStatus(todo.id);
	};

	render() {
		const { todo } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.switchContainer}>
					<Switch value={todo.completed} onValueChange={this.toggleStatus} />
				</View>
				<View style={styles.titleContainer}>
					<Text>{todo.title}</Text>
				</View>
			</View>
		);
	}
}

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleStatus: PropTypes.func,
};

TodoListItem.defaultProps = {
	toggleStatus: () => {},
};


export default connect(null, { toggleStatus })(TodoListItem);
