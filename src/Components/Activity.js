import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles, screen } from '../styles';

const Activity = (item) => {
	return (
		<View style={styles.activityView}>
			<Text>{item.item.title}</Text>
			<Text>{item.item.description}</Text>
			<Text>{item.item.startDate}</Text>
		</View>
	);
};

export default Activity;
