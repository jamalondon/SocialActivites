import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles';

const ChatLogs = () => {
	return (
		<SafeAreaView style={styles.SafeArea}>
			<Text>ChatLogs</Text>
		</SafeAreaView>
	);
};

export default ChatLogs;
