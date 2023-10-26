import React, { useState, useEffect, useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TextInput,
	Switch,
} from 'react-native';
import { Button } from 'react-native-elements';
import {} from '@rneui/themed';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles, screen } from '../styles';
import HorizontalLineSeperator from '../Components/HorizontalLineSeperator';
import { Context as ActivityContext } from '../Data Management/ActivityContext';

const NewActivityScreen = ({ navigation, route }) => {
	const { state, createActivity } = useContext(ActivityContext);

	//helper variables to calculate time and location
	let currentDate = new Date();
	const [useCurrentLocation, setUseCurrentLocation] = useState(false);

	//variables to create an event
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [location, setLocation] = useState(null);
	const [street, setStreet] = useState(null);
	const [zipcode, setZipCode] = useState(null);
	const [region, setRegion] = useState(null);
	const [city, setCity] = useState(null);

	const [errorMessage, setErrorMessage] = useState();

	useEffect(() => {
		endDate.setHours(startDate.getHours() + 1);

		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMessage('Permission to access location was denied');
				return;
			}
			const location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	//change function for useCurrentLocation
	provideCurrentLocation = (e) => {};

	//toggle switch for use current location
	const toggleSwitch = async () => {
		setStreet(null);
		setZipCode(null);
		setRegion(null);
		setCity(null);
		setUseCurrentLocation(!useCurrentLocation);
	};

	//function for getting correct date
	const getCorrectDate = (date) => {
		if (!date) {
			return;
		}
		date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
		return date;
	};

	const setDate = (event, date, option) => {
		if (option == 'start') {
			setStartDate(date);
		} else {
			setEndDate(date);
		}
	};

	return (
		<View style={styles.SafeArea}>
			<View style={[styles.container]}>
				<TextInput
					style={styles.input}
					placeholder={'Title'}
					value={title}
					onChangeText={(e) => {
						setTitle(e);
					}}
				></TextInput>
				<TextInput
					placeholder="Small gathering (10-15 people). PG-13 content. Will be outside, dress accordingly"
					style={styles.input}
					multiline
					numberOfLines={2}
					maxLength={250}
					value={description}
					onChangeText={(e) => {
						setDescription(e);
						descriptionLength =
							description == undefined ? 0 : description.length;
					}}
				></TextInput>
				<Text style={localStyles.descriptionFooter}>
					{`${description == undefined ? 0 : description.length}/250`}
				</Text>

				<HorizontalLineSeperator text={'When'} />

				<View style={localStyles.timeView}>
					<Text
						style={{
							marginLeft: 10,
							fontSize: 24,
							alignSelf: 'center',
							fontWeight: 'bold',
						}}
					>
						Starts
					</Text>
					<DateTimePicker
						value={startDate}
						mode={'datetime'}
						onChange={(event, date) => setDate(event, date, 'start')}
						display={'default'}
						minimumDate={new Date()}
						accentColor="black"
					/>
				</View>

				<View style={localStyles.timeView}>
					<Text
						style={{
							marginLeft: 10,
							fontSize: 24,
							alignSelf: 'center',
							fontWeight: 'bold',
						}}
					>
						Ends
					</Text>
					<DateTimePicker
						value={endDate}
						mode={'datetime'}
						onChange={(event, date) => setDate(event, date)}
						display={'default'}
						minimumDate={startDate}
					/>
				</View>

				<HorizontalLineSeperator text={'Where'} />

				<TextInput
					style={[styles.input, { marginHorizontal: 10 }]}
					placeholder={'Address'}
					value={street}
					onChangeText={(e) => {
						setStreet(e);
					}}
					editable={!useCurrentLocation}
				></TextInput>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginHorizontal: 10,
						marginTop: 5,
					}}
				>
					<TextInput
						style={[styles.input, { width: 150 }]}
						placeholder={'City'}
						value={city}
						onChangeText={(e) => {
							setCity(e);
						}}
						editable={!useCurrentLocation}
					/>
					<TextInput
						style={[styles.input, { width: 100 }]}
						placeholder={'State'}
						value={region}
						onChangeText={(e) => {
							setRegion(e);
						}}
						editable={!useCurrentLocation}
					/>
					<TextInput
						style={[styles.input, { width: 75 }]}
						placeholder={'ZIP'}
						value={zipcode}
						onChangeText={(e) => {
							setZipCode(e);
						}}
						maxLength={6}
						keyboardType="phone-pad"
						editable={!useCurrentLocation}
					/>
				</View>

				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center',
						marginHorizontal: 10,
						marginTop: 5,
					}}
				>
					<Text style={{ marginHorizontal: 10 }}>Use Current Location</Text>
					<Switch
						onValueChange={toggleSwitch}
						value={useCurrentLocation}
						trackColor={{ false: '#767577', true: 'rgb(255, 138, 76)' }}
						thumbColor={useCurrentLocation ? 'black' : 'black'}
					/>
				</View>
				<Button
					title={'Submit'}
					buttonStyle={localStyles.button}
					onPress={async () => {
						if (useCurrentLocation) {
							//helper variable to combine create full address
							let address = `(${location.coords.latitude}, ${location.coords.longitude})`;
							//send data to data management provider
							createActivity({
								title,
								description,
								startDate,
								endDate,
								address,
								navigation,
							});
						} else {
							//helper variable to combine create full address
							let address = `${street}, ${city}, ${region}, ${zipcode}`;
							//send data to data management provider
							createActivity({
								title,
								description,
								startDate,
								endDate,
								address,
								navigation,
							});
						}
					}}
				/>
			</View>
		</View>
	);
};

const localStyles = StyleSheet.create({
	button: {
		height: 50,
		width: '75%',
		borderRadius: 10,
		marginTop: 5,
		marginHorizontal: 10,
		backgroundColor: 'black',
		alignSelf: 'center',
	},
	timeView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	descriptionFooter: {
		alignSelf: 'flex-end',
		marginRight: 10,
		fontSize: 10,
	},
});

export default NewActivityScreen;
