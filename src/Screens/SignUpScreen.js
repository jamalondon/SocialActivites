import React, { useState, useContext, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../Data Management/AuthContext';
import styles from '../styles';

//get the dimensions of the screen
const screen = Dimensions.get('screen');

const SignUpScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	//create a state variable for email and password
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaView style={styles.AuthScreenBackground}>
			<View style={styles.AuthScreenView}>
				<Input
					placeholder="Michael"
					label="First Name"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Input
					placeholder="Jordan"
					label="Last Name"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Input
					placeholder="email@address.com"
					leftIcon={<Feather name="mail" size={24} color="black" />}
					label="Email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
					autoCorrect={false}
				/>

				<Input
					placeholder="*************"
					leftIcon={<Feather name="lock" size={24} color="black" />}
					label="Password"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>

				<Button
					title="Sign Up"
					onPress={() => {
						signup({ email, password });
					}}
					buttonStyle={{
						width: 250,
						alignSelf: 'center',
						backgroundColor: 'black',
					}}
				/>

				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Text> Already have an account? </Text>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('SignIn');
						}}
					>
						<Text style={{ fontFamily: 'Helvetica', color: 'blue' }}>
							Sign In
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignUpScreen;
