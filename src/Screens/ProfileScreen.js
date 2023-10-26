import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../Data Management/AuthContext';
import { styles } from '../styles';

const ProfileScreen = () => {
	const { state, signout } = useContext(AuthContext);

	return (
		<SafeAreaView style={styles.SafeArea}>
			<TouchableOpacity onPress={signout}>
				<Text style={{ fontSize: 25, alignSelf: 'center' }}>Sign Out</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default ProfileScreen;
