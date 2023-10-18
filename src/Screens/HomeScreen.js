import React, { useEffect, useContext } from 'react';
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';
import { Context as ActivityContext } from '../Data Management/ActivityContext';

const HomeScreen = ({ navigation, route }) => {
	const { state } = useContext(ActivityContext);

	useEffect(() => {
		console.log(state);
	});

	return (
		<SafeAreaView style={styles.SafeArea}>
			<Text style={{ fontSize: 25, alignSelf: 'center' }}>Activities</Text>
			<Button
				title="Press me"
				onPress={() => {
					navigation.navigate('CreateNew');
				}}
			>
				{' '}
			</Button>
		</SafeAreaView>
	);
};

export default HomeScreen;
