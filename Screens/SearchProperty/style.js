import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    mainContainer:{
        flex:1,
        backgroundColor:'#FCFCFC',
       },
    container:{
     marginTop:64,
     marginLeft:20,
     marginRight:20
    },
    textinputview:{
        height:259,
        borderRadius:20,
        borderColor:'black',
        borderWidth:1,margin:10,
       },
       textinput:{
        margin:10,
        fontSize:16,
        color:'black'
       },
       priceRange:{
        color:'#252525',
        fontSize:18
       },
       priceRangeValueOne:{
        color:'#000000',
        fontSize:24
       },
       bottomView: {
        width: '100%',
        height: 108,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
        flexDirection:'row',
        padding:20
      },
      textStyle: {
        color: 'rgba(0, 0, 0, 0.3)',
        fontSize: 18,
        textDecorationLine: 'underline'
      },
    
  
   
   
   })