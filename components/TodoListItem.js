import React from 'react';
import {
	View, Text, StyleSheet, Switch, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Swipeable from 'react-native-swipeable';
import { toggleStatus, deleteTodo } from '../redux/todoActions';
import Color from '../constants/colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		marginBottom: 10,
	},
	titleContainer: {
		flex: 5,
		alignItems: 'flex-start',
	},
	switchContainer: {
		flex: 1,
		alignItems: 'flex-start',
		// marginRight: 10,
		// backgroundColor: 'white',
	},
	titleText: {
		fontSize: 18,
		color: Color.hotpink,
		fontWeight: 'bold',
	},
	rightSwipeItem: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingLeft: 10,
		backgroundColor: Color.hotpink,
		borderBottomWidth: 1,
		borderColor: Color.white,
	},
	swipeFont: {
		color: Color.white,
		fontSize: 16,
	},
});


class TodoListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			swipeable: null,
			rightActionActivated: false,
		};
	}

	toggleStatus = () => {
		const { todo } = this.props;
		this.props.toggleStatus(todo);
	};

	rightButtons = (item) => [
		<View style={styles.rightSwipeItem}>
			<TouchableHighlight onPress={() => {
				this.props.deleteTodo(item);
				this.swipeable.recenter();
			}}
			>
				<Text style={styles.swipeFont}>Delete</Text>
			</TouchableHighlight>
		</View>,
	]

	render() {
		const { todo } = this.props;
		return (
			<View>
				<Swipeable
					onRef={ref => (this.swipeable = ref)}
					rightButtons={this.rightButtons(todo)}
					rightButtonWidth={80}
					rightActionActivationDistance={150}
					onRightActionActivate={() => {
						this.setState({ rightActionActivated: true });
					}}
					onRightActionDeactivate={() => {
						this.setState({ rightActionActivated: false });
					}}
				>
					<View style={styles.container}>

						<View style={styles.switchContainer}>
							<Switch
								style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
								value={todo.completed}
								onValueChange={this.toggleStatus}
							/>
						</View>
						<View style={styles.titleContainer}>
							<Text style={styles.titleText}>{todo.title}</Text>
						</View>
					</View>
				</Swipeable>
			</View>
		);
	}
}

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	toggleStatus: PropTypes.func,
	deleteTodo: PropTypes.func,
};

TodoListItem.defaultProps = {
	toggleStatus: () => {},
	deleteTodo: () => {},
};


export default connect(null, { toggleStatus, deleteTodo })(TodoListItem);
