import React, { useEffect, useContext, useState } from 'react';
import {
	Text,
	Button,
	View,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles, screen } from '../styles';
import { Context as ActivityContext } from '../Data Management/ActivityContext';
import ActivityList from '../Components/ActivityList';

const HomeScreen = ({ navigation, route }) => {
	const { state, fetchActivities } = useContext(ActivityContext);
	const [render, setRender] = useState('false');

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// do something
			fetchActivities();
		});

		return unsubscribe;
	}, [state]);

	const updateScreen = () => {
		setRender(!render);
	};

	return state ? (
		<SafeAreaView style={styles.SafeArea}>
			<View style={localStyles.container}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('CreateNew');
					}}
					style={localStyles.leftTextContainer}
				>
					<Text style={{ fontSize: 25 }}>+</Text>
				</TouchableOpacity>
				<View style={localStyles.centeredTextContainer}>
					<Text style={{ fontSize: 25 }}>Activities</Text>
				</View>
			</View>
			<ActivityList data={state} callback={updateScreen} />
		</SafeAreaView>
	) : (
		<View></View>
	);
};

const localStyles = StyleSheet.create({
	container: {
		flexDirection: 'row', // To align them horizontally
		justifyContent: 'center', // To create space between the components
		alignItems: 'center', // To vertically center the content
	},
	leftTextContainer: {
		//flex: 1, // This component won't take up extra space
		//marginLeft: 5,
	},
	centeredTextContainer: {
		flex: 1, // This component will take up the remaining space and center its content
		alignItems: 'center', // To horizontally center the content
	},
});

export default HomeScreen;
