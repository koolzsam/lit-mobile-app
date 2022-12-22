import React, { useCallback, useEffect, useState } from "react";
import { View ,Image,Text, FlatList, TouchableOpacity, ScrollView} from "react-native";
import CustomTextInput from "../../Component/CustomTextInput";
import Line from "../../Component/Line";
import Space from '../../Component/Space'
import { Images } from "../../Utils/Image";
import { styles } from "./style";
import Slider from '@react-native-community/slider';

const Property = [
    {
      id: 1,
      property_name:'Apartment'
    },
    {
        id: 2,
        property_name:'Studio Apartment'
      },
      {
        id: 3,
        property_name:'House'
      },  
      {
        id: 4,
        property_name:'Flat'
      },
      {
        id: 5,
        property_name:'Farm House'
      },
      {
        id: 6,
        property_name:'Multistudio'
      },
      
  
  ]
  const Bedroom = [
    {
      id: 1,
      property_name:'1'
    },
    {
        id: 2,
        property_name:'2'
      },
      {
        id: 3,
        property_name:'3'
      },  
      {
        id: 4,
        property_name:'4'
      },
      {
        id: 5,
        property_name:'Any'
      },
     
      
  
  ]

  const Bathrooms = [
    {
      id: 1,
      property_name:'1'
    },
    {
        id: 2,
        property_name:'2'
      },
      {
        id: 3,
        property_name:'3'
      },  
      {
        id: 4,
        property_name:'4'
      },
      {
        id: 5,
        property_name:'Any'
      },
     
      
  
  ]

  const Area = [
    {
      id: 1,
      name:'Rajwada'
    },
    {
        id: 2,
        name:'Vijay nagar'
      },
      {
        id: 3,
        name:'Mhownaka'
      },  
      {
        id: 4,
        name:'Bhawarkua'
      },
      {
        id: 5,
        name:'Rajmohalla'
      },
      {
        id: 6,
        name:'Gopur'
      },
      
  
  ]

const SearchProperty = ({navigation}) => {
    const [Search, setSearch] = useState('')
    const [arrayProperty, setarrayProperty] = useState([])

    const [arrayBedroom, setarrayBedroom] = useState([])
    const [arrayBathroom, setarrayBathroom] = useState([])
    const [arrayArea, setarrayArea] = useState([])
    const [Propertydata, setPropertydata] = useState([])
    const [Bedroomdata, setBedroomdata] = useState([])
    const [Bathroomdata, setBathroomdata] = useState([])
    const [Searchdata, setSearchdata] = useState([])
    const [data, setdata] = useState([])
    const [Selectedcity, setSelectedcity] = useState([])
     const [SelectedSearch ,setSelectedSearch] = useState(false)
    const onchangeMessage = text => {
        SearchLocation(text)
    }
    const inputRef = React.useRef()
   
    useEffect(() => {
        (async () => {
            try {
                setarrayProperty(Property)
                setarrayBedroom(Bedroom)
                setarrayBathroom(Bathrooms)
                setdata(Area)
                setarrayArea(Area)
                setSearchdata(Area)
            } catch (err) {
                console.log(err)
            }
        })();
    
    }, [])

      const addProperty =(id) =>{
        let renderData=[...arrayProperty];
        for(let data of renderData){
          if(data.id==id){
            data.selected=(data.selected==null)?true:!data.selected;
            break;
          }
        }
        setPropertydata(renderData)
      }

      const addBedroom =(id) =>{
        let renderData=[...arrayBedroom];
        for(let data of renderData){
          if(data.id==id){
            data.selected=(data.selected==null)?true:!data.selected;
            break;
          }
        }
        setBedroomdata(renderData)
      }

      const addBathroom =(id) =>{
        let renderData=[...arrayBathroom];
        for(let data of renderData){
          if(data.id==id){
            data.selected=(data.selected==null)?true:!data.selected;
            break;
          }
        }
        setBathroomdata(renderData)
      }


  const SearchLocation = (text) => {
    if (text !== "") {
      const newData = data.filter(

        function (item) {
          const itemData = item.name
        
          const textData = text.toUpperCase();

          return itemData.toUpperCase().indexOf(textData) > -1;
        });
      let produce = [...newData];
      
      setSearchdata(produce);
      setSearch(text)
   
    } else {
      setSearchdata(arrayArea);
      setSearch(text)

    }
  }

  const sendMessage = useCallback((item) => {
    //let renderData=[...Searchdata];
//   for(let data of renderData){
//     if(data.id==id){
//         setSelectedcity(data)
//        console.log(data) 
//       //data.selected=(data.selected==null)?true:!data.selected;
//       break;
//     }
//   }
 // setdata(renderData)

    let newChatData = [item];
    
    setSelectedcity(newChatData)
    setSelectedSearch(true)
    
    }, [Selectedcity])

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{marginBottom:100}}>
         <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Image source={Images.backArrow} style={{height:20,width:20}}/>
            </TouchableOpacity>
            <Space height={43}/>
            <CustomTextInput
             //Ref={inputRef}
            textInputValue={Search}
            onChangeText={(text)=>onchangeMessage(text)}
            placeholder={'Enter City/Landmark/locality....'}
            multiline={false}
            styleView={styles.textinputview}
            TextinputStyle={styles.textinput}
            placeholderTextColor={'rgba(0, 0, 0, 0.42)'}
            titleshow/>

     {Selectedcity.length > 0 && SelectedSearch === true &&
     <FlatList
     keyExtractor={(item, index) => 'key' + index}
     data={Selectedcity}
     numColumns={3}
     style={{marginTop:10}}
     renderItem={({ item }) => {
       return (
         <TouchableOpacity onPress={()=>
           {addBedroom(item.id)}
           } >
             <View style={{borderColor:'#025A63',borderWidth:1,margin:5,height:30,
             justifyContent:'center',borderRadius:5,flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginLeft:5,marginRight:5}}>{item.name}</Text> 
            <Image source={Images.close} style={{height:15,width:15,marginRight:10}}/>
           </View> 
              
         
         </TouchableOpacity>
       )
     }} />}
     

         {Search != '' &&
         <View style={{width:'100%',backgroundColor:'#FCFCFC',flex:1}}>
         <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={Searchdata}
          
          renderItem={({ item }) => {
            
            return (
              <TouchableOpacity onPress={()=>{
                
                sendMessage(item)
                
            }
                } >
                  <View style={{height:50,justifyContent:'center'}}>
                  <Text>{item.name}</Text>
                  <Space height={10}/> 
                 <Line
                   height={1}
                   backgroundColor={'#EEEEEE'}
                   width={'100%'}/>
                  </View>
             </TouchableOpacity>
            )
          }} />
         </View>}
         
         

        </View>
        <Space height={16}/>
        <Line
         height={1}
         backgroundColor={'#EEEEEE'}
         width={'100%'}/>
         <View style={{margin:20}}>
            <Text style={styles.priceRange}>
               Price Range
            </Text>
            <Space height={20}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.priceRangeValueOne}>
            ₹ 0
            </Text>
            <Text style={styles.priceRangeValueOne}>
            ₹ 20000
            </Text>
            </View>
            <Space height={20}/>
            <Slider
              style={{width: '100%', height: 40}}
               minimumValue={0}
               maximumValue={1}
               minimumTrackTintColor="red"
               maximumTrackTintColor="#000000"
            />
           
         </View>
         <Line
         height={1}
         backgroundColor={'#EEEEEE'}
         width={'100%'}/>

        <View style={{margin:20}}>
         <Text style={styles.priceRange}>
            Type of Property
        </Text>
        <Space height={20}/>
        <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={arrayProperty}
          numColumns={3}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>
                {addProperty(item.id)}
                } >
                    {item.selected==true ?
                    <View style={{margin:5,height:30,
                    justifyContent:'center',borderRadius:5,backgroundColor:"#025A63"}}>
                   <Text style={{marginLeft:10,marginRight:10,color:'white'}}>{item.property_name}</Text> 
                  </View> :
                  <View style={{borderColor:'black',borderWidth:1,margin:5,height:30,
                  justifyContent:'center',borderRadius:5}}>
                 <Text style={{marginLeft:10,marginRight:10}}>{item.property_name}</Text> 
                </View> }
                   
                   
              
              </TouchableOpacity>
            )
          }} />

         </View>
         
         <Line
         height={1}
         backgroundColor={'#EEEEEE'}
         width={'100%'}/>

         <View style={{margin:20}}>
         <Text style={styles.priceRange}>
            Bedrooms
        </Text>
        <Space height={20}/>
        <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={arrayBedroom}
          horizontal
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>
                {addBedroom(item.id)}
                } >
                   {item.selected==true ?
                    <View style={{margin:5,height:30,
                    justifyContent:'center',borderRadius:5,backgroundColor:"#025A63"}}>
                   <Text style={{marginLeft:15,marginRight:15,color:'white'}}>{item.property_name}</Text> 
                  </View> :
                  <View style={{borderColor:'black',borderWidth:1,margin:5,height:30,
                  justifyContent:'center',borderRadius:5}}>
                 <Text style={{marginLeft:15,marginRight:15}}>{item.property_name}</Text> 
                </View> }
                   
              
              </TouchableOpacity>
            )
          }} />

         </View>

         <Line
         height={1}
         backgroundColor={'#EEEEEE'}
         width={'100%'}/>

         <View style={{margin:20}}>
         <Text style={styles.priceRange}>
            Bathrooms
        </Text>
        <Space height={20}/>
        <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={arrayBathroom}
          horizontal
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>
                {addBathroom(item.id)}
                } >
                  {item.selected==true ?
                    <View style={{margin:5,height:30,
                    justifyContent:'center',borderRadius:5,backgroundColor:"#025A63"}}>
                   <Text style={{marginLeft:15,marginRight:15,color:'white'}}>{item.property_name}</Text> 
                  </View> :
                  <View style={{borderColor:'black',borderWidth:1,margin:5,height:30,
                  justifyContent:'center',borderRadius:5}}>
                 <Text style={{marginLeft:15,marginRight:15}}>{item.property_name}</Text> 
                </View> }
                   
              
              </TouchableOpacity>
            )
          }} />

         </View>

         <Line
         height={1}
         backgroundColor={'#EEEEEE'}
         width={'100%'}/>
         </ScrollView>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Reset all</Text>
          <View style={{backgroundColor:'#A5A5A5',height:40,justifyContent:"center",
          width:70,alignItems:'center',borderRadius:12}}>
          <Text style={{color:'white'}}>Search</Text>
          </View>
        </View>
        
        </View>
        
    );
};

export default SearchProperty;
