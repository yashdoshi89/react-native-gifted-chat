import React , { Component } from 'react';
import { Button, Header, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class PriceCheckout extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
       <List style={{marginLeft: -20, width:171,}}>

        <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
          <Button disabled transparent  onPress={ () => console.log('Info', 'Text touched')}>
          <Text style={{color:'#FFC004',textAlign: 'center', fontWeight: '500', fontSize:17, marginLeft: 20, marginTop:-10,}}>Dealer's Cost</Text>
           </Button>
         </Item>

          <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
            <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
            <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/timeIcon.png')}  />
            <Text style={{color:'#1E2023', fontSize:13, marginLeft: 60, paddingRight:10, marginRight:10, }}> Hrs</Text>
             </Button>
           </Item>

           <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
             <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
             <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/moneyIcon.png')}  />
             <Text style={{color:'#1E2023', fontSize:13, marginLeft: 70, paddingRight:10,}}> $</Text>
              </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/partsIcon.png')}  />
              <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13, marginLeft: 20, width:100, paddingRight:10,}}>hi</Text>
               </Button>
             </Item>

             <Item style={{ borderBottomWidth: 0,}}>
               <Text ellipsizeMode='tail' numberOfLines={1} style={{ margin: 20, marginLeft:5,  color:'#8DC63F', fontSize:25, width:150,  textAlign: 'center'}}>$ 25 </Text>
              </Item>

           <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0,}}>
             <Button transparent style={{ width:130, height:45, marginLeft: 20, borderColor:'#40BEC4', borderWidth: 1, borderRadius: 5,}} >
             <Text style={{   paddingLeft: 10, paddingTop: 5, marginBottom:10,color:'#40BEC4', fontSize:13, }}>BUY NOW </Text>
              </Button>
            </Item>
       </List>
       
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

PriceCheckout.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

PriceCheckout.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};
