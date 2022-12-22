import React from "react";
import { View ,Text, TouchableOpacity, FlatList,Image} from "react-native";

const PropertiesList = props => {
    const {
        title,
        onpress,
        dataProperty
       } = props || {};
    return (
        <View>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>{title}</Text>
            <TouchableOpacity onPress={()=>onpress}>
                <Text>{'See All'}</Text>
            </TouchableOpacity>
            </View> 
            <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={dataProperty}
          horizontal
          style={{marginTop:10}}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>
                {}
                } style={{margin:5,}}>
                <Image source={{uri:item.name}} 
                style={{height:100,width:200,borderRadius:10}}/>
                <Text style={{position:'absolute',marginTop:80,color:'white',marginLeft:10}}>{item.title}</Text>
              
              </TouchableOpacity>
            )
          }} />
            
        </View>
    );
};

export default PropertiesList;
