import { View, Text,Image,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import { styles } from './style';
import { Images } from '../../Utils/Image';


const CustomTextInput = props => {
  const {
    viewStyle,
    TextinputStyle,
    textInputValue,
    onChangeText,
    placeholder,
    keyboardType,
    placeholderTextColor,
    multiline,
    onSubmitEditing,
   // Ref
   } = props || {};
  return (
    <View style={[styles.viewStyle,viewStyle]}>
      <Image source={Images.Search} style={{height:20,width:20,marginLeft:10,alignSelf:'center'}}/>
      <TextInput
        // ref={Ref}
        style={[styles.TextInputStyle, TextinputStyle]}
        value={textInputValue}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        onSubmitEditing={onSubmitEditing}
        returnKeyType='done'
      />
   </View>
  )
}

export default CustomTextInput