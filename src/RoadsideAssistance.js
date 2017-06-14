import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class TypeOfProblem extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text style={{color:'black', fontSize:14,margin:13,}}>What type of problem do you have?</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:22, height:22, marginRight: 15}} source={require('../../../img/mechanicalProblem.png')}  />
              <Text style={{color:'black', fontSize:14,}}>Mechanical Problem</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:22, height:21, marginRight: 15}} source={require('../../../img/vehicleStuck.png')}  />
              <Text style={{color:'black', fontSize:14,}}>Vehicle Stuck</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width: 16, height:27, marginRight: 15}} source={require('../../../img/batteryIcon.png')}  />
              <Text style={{color:'black', fontSize:14, marginLeft:5,}}>Battery</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:21, height:21, marginRight: 15, marginLeft:2,}} source={require('../../../img/flatTire.png')}  />
              <Text style={{color:'black', fontSize:14,}}>Flat Tire</Text>
               </Button>
             </Item>

             <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
               <Image style={{width:20, height:20, marginRight: 15, marginLeft:2}} source={require('../../../img/locksmithIcon.png')}  />
               <Text style={{color:'black', fontSize:14,}}>Lockout/Locksmith</Text>
                </Button>
              </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, marginBottom:10,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:21, height:20, marginRight: 15, marginLeft:2}} source={require('../../../img/outOfFuel.png')}  />
              <Text style={{color:'black', fontSize:14,}}>Out of Fuel</Text>
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

TypeOfProblem.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

TypeOfProblem.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};