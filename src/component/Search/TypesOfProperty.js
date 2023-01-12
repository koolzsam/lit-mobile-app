import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { theme } from '@/core/theme';

const TypesOfProperty = () => {
  const [value, setValue] = React.useState('first');

  const propertyTypesData = [
    {
      id: 'apartment',
      name: 'Apartment'
    },
    {
      id: 'studio-Apartment',
      name: 'Studio Apartment'
    },
    {
      id: 'house',
      name: 'House'
    },
    {
      id: 'flat',
      name: 'Flat'
    },
    {
      id: 'farm-house',
      name: 'Farm House'
    },
    {
      id: 'multistudio',
      name: 'Multistudio'
    }
  ]

  return (
    <View style={styles.conatiner}>
      <View>
        <Text style={styles.title}>Type of Property</Text>
      </View>
      <View className='flex-row flex-wrap'>
        {
          propertyTypesData.map((item) => {
            return (
              <Button
                title="Press me"
                onPress={() => Alert.alert('Simple Button pressed')}
                color={theme.colors.textDark}
                style={{ backgroundColor: 'transparent', borderWidth: 2, borderRadius: 5 }}
                className="mt-3 mr-3 bg-transparent border border-solid border-black rounded-md"
              />
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: theme.colors.textDark
  }
})

export default TypesOfProperty