import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoListScreen from './screens/TodoListScreen';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<TodoListScreen />
				</View>
			</Provider>
		);
	}
}
