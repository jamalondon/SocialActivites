import React, { useContext } from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { styles, screen } from '../styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context as ActivityContext } from '../Data Management/ActivityContext';

const formatDate = (x) => {
	var date = new Date(x);

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var AmPm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	var timeStr = hours + ':' + minutes + ':' + AmPm;

	return (
		date.getMonth() +
		1 +
		'/' +
		date.getDate() +
		'/' +
		date.getFullYear() +
		' @ ' +
		timeStr
	);
};

const Activity = (props) => {
	//console.log(props);

	const { deleteActivity } = useContext(ActivityContext);
	const activityID = props.item._id;

	return (
		<TouchableOpacity
			style={styles.activityView}
			onPress={() => {
				console.log(activityID);
			}}
		>
			<Text style={styles.activityHeader}>{props.item.title}</Text>
			<Text>{props.item.description}</Text>
			<View style={style.dateView}>
				<MaterialCommunityIcons name={'calendar-start'} size={25} />
				<Text>{formatDate(props.item.startDate)}</Text>
			</View>
			<View style={style.dateView}>
				<MaterialCommunityIcons name={'calendar-end'} size={25} />
				<Text>{formatDate(props.item.endDate)}</Text>
			</View>
			<TouchableOpacity
				style={{ alignSelf: 'flex-end' }}
				onPress={() => {
					deleteActivity({ activityID, callback: props.callback });
					//props.callback();
				}}
			>
				<MaterialCommunityIcons name={'trash-can'} size={25} />
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	dateView: {
		flexDirection: 'row',
		paddingTop: 10,
		alignItems: 'center',
	},
});

export default Activity;
