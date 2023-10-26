import { StyleSheet, Dimensions } from 'react-native';
//get the dimensions of the screen
const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
	AuthScreenBackground: {
		flex: 1,
		backgroundColor: 'rgb(255, 138, 76)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	AuthScreenView: {
		backgroundColor: 'white',
		borderRadius: 15,
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowRadius: 3.5,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		elevation: 5,
		padding: 20,
		width: screen.width < 700 ? 300 : 400,
	},
	Header: {
		fontSize: 30,
		alignSelf: 'center',
		marginVertical: 10,
	},
	SafeArea: {
		backgroundColor: 'rgb(255, 138, 76)',
		flex: 1,
		alignItems: 'stretch',
	},
	tabBar: {
		shadowColor: 'black',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.5,
		elevation: 5,
		position: 'absolute',
		bottom: 25,
		left: screen.width / 2 - 100,
		elevation: 0,
		backgroundColor: 'white',
		borderRadius: 15,
		height: 70,
		width: 200,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		alignSelf: 'center',
	},
	container: {
		backgroundColor: '#fff',
		borderRadius: 15,
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		elevation: 5,
		marginHorizontal: screen.width < 700 ? 15 : 175,
		padding: 10,
		marginVertical: 15,
	},
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
		marginVertical: 2,
	},
	button: {
		width: 250,
		alignSelf: 'center',
		backgroundColor: 'black',
	},
	activityView: {
		//flex: 1,
		backgroundColor: 'white',
		alignSelf: 'center',
		borderRadius: 10,
		margin: 1,
		width: screen.width < 400 ? 350 : 400,
		padding: 10,
		marginTop: 10,
	},
	activityHeader: {
		alignSelf: 'center',
	},
});

export { styles, screen };
