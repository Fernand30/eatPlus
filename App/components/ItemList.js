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
import {Images, Constants} from "../themes"
import {OrderList} from '../reducer/api'
export default class Counter extends Component {

  constructor(props){
    super(props)
    this.state=({
      data: [],
      visible: false
    })
  }

  componentDidMount(){
    OrderList().then((response)=>response.json()).then((data)=>{
     alert(JSON.stringify(data))
    }).catch(function(err){
      alert(err)
    }).done();
  }

  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.centerText}>Tuesday, March 18</Text>
        <View style={styles.firstRowView}>
          <View style={{flex:0.5}}>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.leftText}>Mohammed</Text>
            <Text style={styles.leftmarginText}>debit card</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.leftText}>647-996-6671</Text>
            <Text style={styles.leftmarginText}>delivery</Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.sizeView}>
            <Text style={styles.sizeText}>size</Text>
            <Text style={styles.sizeText}>large</Text>
            <Text style={styles.sizeText}>+.23</Text>
          </View>
          <View style={styles.sizeView}>
            <Text style={styles.sizeText}>size</Text>
            <Text style={styles.sizeText}>large</Text>
            <Text style={styles.sizeText}>+.23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.comboView}>
            <Text style={styles.chickText}>Combo for two people</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.rowView}>
            <Text style={styles.chickText}>Chick Shawarma Platter</Text>
            <Text style={styles.chickText}>x4</Text>
            <Text style={styles.chickText}>$23</Text>
          </View>
          <View style={styles.buttonRowView}>
            <View style={styles.subView}>
              <Text style={styles.leftText}>Sub total</Text>
              <Text style={styles.leftText}>Total</Text>
            </View>
            <View style={styles.subView1}>
              <Text style={styles.leftText}>$23</Text>
              <Text style={styles.leftText}>$24</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Take</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.firstRowView}>
          <View style={{flex:0.5}}>
            <Text style={styles.plus1}>+</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.leftText}>Mohammed</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.leftText}>647-996-6671</Text>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={{flexDirection:'row',marginTop:Constants.Marin*40}}>
            <Text style={styles.leftplus}>+</Text>
            <View>
              <View style={styles.rowView}>
                <Text style={styles.chickText1}>Chick Shawarma Platter</Text>
                <Text style={styles.chickText}>x4</Text>
                <Text style={styles.chickText}>$23</Text>
              </View>
              <View style={styles.rowView}>
                <Text style={styles.chickText1}>Chick Shawarma Platter</Text>
                <Text style={styles.chickText}>x4</Text>
                <Text style={styles.chickText}>$23</Text>
              </View>
            </View>  
          </View> 
          <View style={styles.buttonRowView}>
            <View style={styles.subView}>
              <Text style={styles.leftText}>Sub total</Text>
              <Text style={styles.leftText}>Total</Text>
            </View>
            <View style={styles.subView1}>
              <Text style={styles.leftText}>$23</Text>
              <Text style={styles.leftText}>$24</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Take</Text>
            </TouchableOpacity>
          </View> 
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
  leftplus:{
    fontSize:Constants.Font*17,
    marginLeft:Constants.Marin*80,
    marginTop:Constants.Marin*50
  },
  sizeView:{
    flexDirection:'row',
    marginTop: Constants.Marin*20,
    paddingHorizontal:Constants.Marin*100
  },
  buttonRowView:{
    flexDirection:'row',
    marginTop: Constants.Marin*30,
    justifyContent:'space-between'
  },
  buttonText:{
    color:'white',
    fontSize:Constants.Font*16
  },
  button:{
    backgroundColor:'#f7941d',
    height:Constants.Marin*100,
    width: Constants.Marin*400,
    alignItems:'center',
    justifyContent: 'center',
    borderBottomRightRadius:Constants.Marin*10,
  },
  subView:{
    marginLeft:Constants.Marin*30
  },
  subView1:{
    marginLeft:Constants.Marin*120
  },
  comboView:{
    marginTop: Constants.Marin*20,
  },
  rowView:{
    flexDirection:'row',
    marginTop: Constants.Marin*20
  },
  lastrowView:{
    flexDirection:'row',
    marginTop: Constants.Marin*30
  },
  chickText:{
    fontSize:Constants.Font*17,
    marginLeft:Constants.Marin*80,
  },
  chickText1:{
    fontSize:Constants.Font*17,
    marginLeft:Constants.Marin*20,
  },
  sizeText:{
    fontSize:Constants.Font*16,
    marginLeft:Constants.Marin*50,
  },
  plus1:{
    fontSize: Constants.Font*16,
  },
  plus:{
    fontSize: Constants.Font*16,
    marginTop:Constants.Marin*20
  },
  centerText:{
    fontSize:Constants.Font*16,
    textAlign: 'center',
    marginTop:Constants.Marin*90
  },
  leftText:{
    fontSize:Constants.Font*16,
  },
  leftmarginText:{
    fontSize:Constants.Font*16,
    marginTop:Constants.Marin*30
  },
  body:{
    backgroundColor:'#ebebeb',
    paddingVertical: Constants.Marin*10,
    paddingHorizontal: Constants.Marin*10,
    marginHorizontal:Constants.Marin*10
  },
  mainView:{
    backgroundColor:'#fbfbfb',
    marginHorizontal:Constants.Marin*60,
  },
  firstRowView:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#ebebeb',
    borderTopLeftRadius: Constants.Marin*10,
    borderTopRightRadius: Constants.Marin*20,
    marginHorizontal:Constants.Marin*60,
    paddingVertical:Constants.Marin*30,
    paddingHorizontal:Constants.Marin*30,
    marginTop:Constants.Marin*45
  },
});