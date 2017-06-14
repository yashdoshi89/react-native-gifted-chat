import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class RepairPriceCheck extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text style={{color:'#1E2023', fontSize:13,margin:15,}}>Ok great. Happy to help! Please provide me the following details:</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:15, marginRight: 15}} source={require('../../../img/whichCar.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Tell us about your car</Text>
               <Right style={{marginLeft:40,}}><Image style={{width:35, height:35,}} source={require('../../../img/forwardClickButton.png')}  /></Right>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/searchIcon.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>What type of service {"\n"}are you looking for?</Text>
              <Right style={{marginLeft:41,}}><Image style={{width:35, height:35,}} source={require('../../../img/forwardClickButton.png')}  /></Right>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, }}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:18, height:23, marginRight: 15}} source={require('../../../img/locationImage.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, marginLeft:4,}}>Where is your vehicle {"\n"}located?</Text>
               <Right style={{marginLeft:35,}}><Image style={{width:35, height:35,}} source={require('../../../img/forwardClickButton.png')}  /></Right>
               </Button>
             </Item>
         </List>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    resizeMode: 'contain',
  },
  listTitle: {
    color:'black',
    fontSize: 15,
  },
});

RepairPriceCheck.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

RepairPriceCheck.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};
