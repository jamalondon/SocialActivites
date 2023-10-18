import React, { useState, useContext, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Context as AuthContext } from '../Data Management/AuthContext';
import styles from '../styles';

//get the dimensions of the screen
const screen = Dimensions.get('screen');

const SignInScreen = ({ navigation }) => {
	//create a state variable for email and password
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { state, signin, tryLocalSignIn } = useContext(AuthContext);

	useEffect(() => {
		tryLocalSignIn();
	});

	return (
		<SafeAreaView style={styles.AuthScreenBackground}>
			<View style={[styles.AuthScreenView]}>
				<Input
					placeholder="email@address.com"
					leftIcon={<Feather name="mail" size={24} color="black" />}
					label="Email"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
					autoCorrect={false}
					inputContainerStyle={(backgroundColor = 'black')}
				/>

				<Input
					placeholder="*************"
					leftIcon={<Feather name="lock" size={24} color="black" />}
					label="Password"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
				{state.errorMessage ? (
					<Text style={styles.errorMessage}>{state.errorMessage}</Text>
				) : null}
				<Button
					title="Sign In"
					onPress={() => {
						signin({ email, password });
					}}
					buttonStyle={styles.button}
				/>
				<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
					<Text> Dont have an account? </Text>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('SignUp');
						}}
					>
						<Text style={{ fontFamily: 'Helvetica', color: 'blue' }}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default SignInScreen;
