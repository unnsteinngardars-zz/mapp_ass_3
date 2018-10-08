import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
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
				{/* <View style={styles.container}> */}
				<PersistGate loading={null} persistor={persistor}>
					<TodoListScreen />
				</PersistGate>
				{/* </View> */}
			</Provider>
		);
	}
}
