import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import { styles, screen } from '../styles';
import ChatLog from '../Screens/ChatLog';
import HomeScreen from '../Screens/HomeScreen';
import NewActivityScreen from '../Screens/NewActivityScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';

//create home scren stack to navigate to create new activity screen
function MainStackScreen() {
	return (
		<MainStack.Navigator screenOptions={{ presentation: 'modal' }}>
			<MainStack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<MainStack.Screen
				name="CreateNew"
				component={NewActivityScreen}
				options={{
					headerTintColor: 'black',
					headerTitle: 'Create New Activity',
				}}
			/>
		</MainStack.Navigator>
	);
}
//create bottomTabs for Home Screen navigator
export function HomeNavigator() {
	return (
		<Tabs.Navigator
			initialRouteName="Main"
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: styles.tabBar,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="Chat"
				component={ChatLog}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ top: 15 }}>
							<Entypo name="message" size={25} color={'gray'} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="Main"
				component={MainStackScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ top: 15 }}>
							<Entypo name="home" size={25} color={'gray'} />
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ top: 15 }}>
							<Entypo name="user" size={25} color={'gray'} />
						</View>
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

//create navigator variables for switching in between screens
const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

export { RootStack, Tabs, MainStack };
