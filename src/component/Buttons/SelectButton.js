import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { theme } from '@/core/theme';

const SelectButton = ({ dataArr }) => {
  const [select, setSelect] = useState(dataArr);

  const handleOnPress = (item) => {
    const newItem = select.map((val) => {
      if (val.id === item.id) {
        return { ...val, selected: !val.selected }
      } else {
        return val
      }
    })
    setSelect(newItem)
  }

  return (
    <View className='flex-row flex-wrap'>
      {
        select.map((item) => {
          return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => handleOnPress(item)} style={{ ...styles.btn, backgroundColor: item.selected ? theme.colors.primary : 'transparent' }} key={item.id}>
              <View>
                <Text style={{ color: item.selected ? theme.colors.white : theme.colors.primary, fontSize: 15 }}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 6,
    marginRight: 10,
    marginTop: 10,
  },
  btnActive: {
    backgroundColor: theme.colors.primary
  }
})

export default SelectButton