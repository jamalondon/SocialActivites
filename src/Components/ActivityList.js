import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Activity from './Activity';
import styles from '../styles';

const ActivityList = (props) => {
	return (
		<FlatList
			data={props.props}
			renderItem={({ item }) => <Activity item={item} />}
			keyExtractor={(item) => item._id}
		/>
	);
};

export default ActivityList;
