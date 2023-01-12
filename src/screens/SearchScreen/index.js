import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { theme } from '@/core/theme';
import { useFilter } from '@/core';
import RangeSlider from '@/component/RangeSlider';
import Divider from '@/component/Divider';

// Icons
import BackArrowIcon from '@/assets/icons/back-arrow-icon.svg';
import SearchIconSVG from '@/assets/icons/search-sharp.svg';
import SelectButton from '@/component/Buttons/SelectButton';

export const SearchScreen = ({ navigation }) => {
	const { priceRange, setPriceRange } = useFilter();

	const typesOfPropertyData = [
		{
			id: 1,
			label: 'Apartment',
			selected: false
		},
		{
			id: 2,
			label: 'Studio Apartment',
			selected: false
		},
		{
			id: 3,
			label: 'House',
			selected: false
		},
		{
			id: 4,
			label: 'Flat',
			selected: false
		},
		{
			id: 5,
			label: 'Farm House',
			selected: false
		},
		{
			id: 6,
			label: 'House',
			selected: false
		},
	]

	const bedroomsData = [
		{
			id: 1,
			label: '1',
			selected: false
		},
		{
			id: 2,
			label: '2',
			selected: false
		},
		{
			id: 3,
			label: '3',
			selected: false
		},
		{
			id: 4,
			label: '4',
			selected: false
		},
		{
			id: 5,
			label: 'Any',
			selected: false
		},
	]

	const bathroomData = [
		{
			id: 1,
			label: '1',
			selected: false
		},
		{
			id: 2,
			label: '2',
			selected: false
		},
		{
			id: 3,
			label: '3',
			selected: false
		},
		{
			id: 4,
			label: '4',
			selected: false
		},
		{
			id: 5,
			label: 'Any',
			selected: false
		},
	]

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => { navigation.goBack() }}>
					<View>
						<Text style={{ color: theme.colors.textDark }}><BackArrowIcon width={28} height={28} color="#3C68D9" /></Text>
					</View>
				</TouchableOpacity>
			</View>

			{/* Search */}
			<View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
				<View style={styles.searchInputContainer}>
					<Text><SearchIconSVG width={20} height={20} fill="rgba(0, 0, 0, 0.55)" /></Text>
					<TextInput
						placeholder="Search property"
						placeholderTextColor='rgba(0, 0, 0, 0.42)'
						style={{
							marginHorizontal: 10,
							fontSize: 16,
							paddingRight: 10,
							flex: 1,
							fontWeight: '800',
							color: theme.colors.textDark
						}} />
				</View>
			</View>

			<Divider />

			<ScrollView>

				{/* Price Range */}
				<View style={{ padding: 20 }}>
					<Text style={styles.title}>Price Range</Text>
					<RangeSlider
						min={priceRange[0]}
						max={priceRange[1]}
						steps={10}
						onValueChange={range => {
							setPriceRange([range.min, range.max]);
						}}
					/>
				</View>

				<Divider />

				{/* Type of Property */}
				<View style={{ padding: 20 }}>
					<Text style={styles.title}>Type of Property</Text>

					<View>
						<SelectButton dataArr={typesOfPropertyData} />
					</View>
				</View>

				<Divider />

				{/* Bedrooms */}
				<View style={{ padding: 20 }}>
					<Text style={styles.title}>Bedrooms</Text>

					<View>
						<SelectButton dataArr={bedroomsData} />
					</View>
				</View>

				<Divider />

				{/* Bathroom */}
				<View style={{ padding: 20 }}>
					<Text style={styles.title}>Bathroom</Text>

					<View>
						<SelectButton dataArr={bathroomData} />
					</View>
				</View>
			</ScrollView>

			{/* Bottom Reset Block */}
			<View>
				<View style={styles.bottomNav} className="flex-row justify-between items-center">
					<TouchableOpacity onPress={() => { console.log('Reset all') }}>
						<Text style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.3)', borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.3)' }}>Reset all</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => { navigation.navigate('SearchResultScreen') }}>
						<View style={styles.searchBtn}>
							<Text style={{ color: theme.colors.white, fontSize: 18 }}>Search</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fcfcfc',
		flex: 1
	},
	header: {
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 10
	},
	title: {
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 10,
		color: theme.colors.textDark
	},
	searchInputContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F2F2F2",
		paddingHorizontal: 15,
		paddingVertical: 7,
		borderRadius: 12,
		marginTop: 15,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#E6E6E6",
	},
	bottomNav: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		borderTopWidth: 1,
		borderColor: '#e3e3e3',
	},
	searchBtn: {
		paddingHorizontal: 25,
		paddingVertical: 14,
		backgroundColor: theme.colors.primary,
		borderRadius: 10,
		fontWeight: '800'
	}
})
