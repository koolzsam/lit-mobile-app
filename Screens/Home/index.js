import React from "react";
import { View,Text, ScrollView,Image, TouchableOpacity } from "react-native";
import PropertiesList from "../../Component/PropertiesList";
import Space from "../../Component/Space";
import { Images } from "../../Utils/Image";
import { styles } from "./style";

const data_property = [
    {
      id: 1,
      name:'https://source.unsplash.com/user/c_v_r/1900x800',
      title:'Independent house'
    },
    {
        id: 2,
        name:'https://source.unsplash.com/user/c_v_r/1900x800',
        title:'Independent house'
      },
      {
        id: 3,
        name:'https://source.unsplash.com/user/c_v_r/1900x800',
        title:'Independent house'
      },
      {
        id: 4,
        name:'https://source.unsplash.com/user/c_v_r/1900x800',
        title:'Independent house'
      }, 
   
      
  
  ]
const Home = ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.subcontainer}>
            <Text>Hi Lavkush</Text>
            <Space height={20}/>
            <View style={{flexDirection:'row',flex:1}}>
              
              <View style={{flex:1,flexDirection:'row'}}>
              <Image source={Images.Location} style={{height:20,width:20}}/>
              <Text>Vijay nagar,Indore</Text>
              <Image source={Images.downArrow} style={{height:10,width:10,alignSelf:'center',marginLeft:5,marginRight:5}}/>
              </View>
              <Image source={Images.Notification} style={{height:20,width:20,}}/>
            </View>
            <Space height={20}/>
            <TouchableOpacity style={styles.viewStyle} onPress={()=>navigation.navigate('SearchProperty')}>
               <Image source={Images.Search} style={{height:20,width:20,marginLeft:10,alignSelf:'center'}}/>
               <Space width={10}/>
               <Text style={{color:'rgba(0, 0, 0, 0.42)'}}>Search property</Text>
              </TouchableOpacity>
              <Space height={20}/>
              <PropertiesList
               title={'Select properties'}
               dataProperty={data_property}
               />
            </View>

        </ScrollView>
    );
};

export default Home;
