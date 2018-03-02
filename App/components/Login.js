import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Images, Constants} from "../themes"
import {Login} from '../reducer/api'
import Spinner from 'react-native-loading-spinner-overlay';
//sdvC#$SDA  // bird
export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state=({
      username: '',
      password : '',
      visible: false
    })
  }
  goList(){
    if(this.state.username==''||this.state.password==''){
      alert('please insert username and password')
      return;
    }
    //this.setState({visible: true})
    that =this
    Login('bird','sdvC#$SDA').then((response)=>response.json()).then((data)=>{
      if(data.token && data.token!=''){
        that.setState({data:data,visible: false})
        Actions.itemlist()
      } 
      else{
        that.setState({data:data,visible: false})
        setTimeout(function(){
          alert('username and password not matched. try again!')
        }, 1000);
      } 
    }).catch(function(err){
      that.setState({data:data,visible: false})
        setTimeout(function(){
          alert(err)
        }, 1000);
    }).done();
    
  }

  render() {
    return (
      <View style={styles.container}>
      <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        <Image source={Images.title} style={styles.title}/>
        <View style={styles.mainView}>
          <TextInput onChangeText={(text) => this.setState({username: text})} underlineColorAndroid = "transparent" placeholderTextColor = "#f6c7a1" style={styles.textinput} placeholder="USER NAME"/>
          <TextInput secureTextEntry={true} onChangeText={(text) => this.setState({password: text})} underlineColorAndroid = "transparent" placeholderTextColor = "#f6c7a1" style={styles.textinput} placeholder="PASSWORD   "/>
          <TouchableOpacity onPress={()=>this.goList()} style={styles.button}>
            <Text style={styles.login}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1
  },
  login:{
    color:'white',
    fontSize:Constants.Font*25,
    fontWeight: '900'
  },
  title:{
    width: Constants.Marin*550,
    height: Constants.Marin*550/694*188,
    alignSelf:'center',
    marginTop: Constants.Statusbar_Height
  },
  mainView:{
    backgroundColor:'#fbfbfb',
    marginHorizontal: Constants.Marin*100,
    marginTop: Constants.Marin*40,
    marginBottom: Constants.Marin*200,
    borderRadius: Constants.Marin*20,
    flex:1,
    paddingTop:Constants.Marin*170
  },
  textinput:{
    height:Constants.Marin*125,
    marginHorizontal:Constants.Marin*50,
    backgroundColor:'#f4f4f4',
    marginTop:Constants.Marin*45,
    borderRadius:Constants.Marin*20,
    paddingLeft: Constants.Marin*60,
    fontSize: Constants.Font*27,
    paddingTop: Constants.Marin*30 
  },
  button:{
    backgroundColor:'#f7941d',
    height:Constants.Marin*125,
    marginHorizontal:Constants.Marin*50,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:Constants.Marin*20,
    marginTop: Constants.Marin*680
  }
});