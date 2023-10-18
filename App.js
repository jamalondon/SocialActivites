//import modules
import * as React from 'react';
import { useEffect } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import local files
import { Provider as AuthProvider } from './src/Data Management/AuthContext';
import { Provider as ActivityProvider } from './src/Data Management/ActivityContext';
import { navigationRef } from './src/Navigation/navigationRef';
import styles from './src/styles.js';
import { RootStack as RootStack } from './src/Navigation/NavigationComponent';
import { HomeNavigator as HomeNavigator } from './src/Navigation/NavigationComponent';

//import Screens

import LoadingScreen from './src/Screens/LoadingScreen';
import SignIn from './src/Screens/SignInScreen';
import SignUp from './src/Screens/SignUpScreen';

//get the dimensions of the screen
const screen = Dimensions.get('screen');

function App() {
	return (
		<AuthProvider>
			<ActivityProvider>
				<NavigationContainer ref={navigationRef}>
					<RootStack.Navigator
						screenOptions={{
							headerShown: false,
							headerTintColor: 'rgb(255, 138, 76)',
						}}
						initialRouteName={'Home Navigator'}
					>
						<>
							<RootStack.Screen
								name="LoadingScreen"
								component={LoadingScreen}
							/>
							<RootStack.Screen name="SignIn" component={SignIn} />
							<RootStack.Screen name="SignUp" component={SignUp} />

							<RootStack.Screen
								name="Home Navigator"
								component={HomeNavigator}
								options={{ headerShown: false }}
							/>
						</>
					</RootStack.Navigator>
				</NavigationContainer>
			</ActivityProvider>
		</AuthProvider>
	);
}

export default App;
