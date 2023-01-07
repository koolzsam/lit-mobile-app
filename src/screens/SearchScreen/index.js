import { View, Text, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '@/App';
import BackArrowIcon from '@/assets/icons/back-arrow-icon';


export const SearchScreen = ({ navigation }) => {
	return (
		<View>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => { navigation.goBack() }}>
					<View>
						<Text style={{ color: theme.colors.textDark }}> <BackArrowIcon /> </Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		padding: 20,
	}
})
