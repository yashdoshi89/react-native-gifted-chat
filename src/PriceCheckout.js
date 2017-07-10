import React , { Component } from 'react';
import { Button, Header, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

export default class PriceCheckout extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View transparent style={[styles.container], {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0)',
        marginLeft:-1,
      }}>
        <View style={{
          width: width / 2.58,
          borderRadius: 10,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop:10,
          paddingBottom:10,
          marginLeft:0,
          shadowColor: '#AAA',
          shadowRadius: 5,
          shadowOpacity: 0.3,
          backgroundColor: '#FFF',
          margin: 10,
          marginLeft:0,
        }} >
          <List>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text ellipsizeMode='tail' style={{padding:0, color:'#FFC004',textAlign: 'center', fontWeight: '500', fontSize:16, flex: 1,
  justifyContent: 'center', marginBottom: 10}}>Dealers {'\n'} Estimate</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
                <Button disabled transparent onPress={ () => console.log('Hi')}>
                  <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/timeIcon.png')}  />
                  <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13, padding:10, textAlign: 'center' }}>{this.props.currentMessage.HourTotal} HOUR</Text>
                </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/discountsIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, textAlign: 'center' }}>$ {this.props.currentMessage.HourRateDealer} / HOUR</Text>
               </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/moneyIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, }}>$ {this.props.currentMessage.HourRateDealer * this.props.currentMessage.HourTotal}</Text>
               </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/partsIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, textAlign: 'center' }}>$ {this.props.currentMessage.PartsPriceTotal}</Text>
               </Button>
            </Item>

            <Item style={{ borderBottomWidth: 0,}}>
               <Text ellipsizeMode='tail' numberOfLines={1} style={{ padding:10,  color:'#8DC63F', fontSize:25, textAlign: 'center' }}>
                $ {this.props.currentMessage.HourRateDealer * this.props.currentMessage.HourTotal + this.props.currentMessage.PartsPriceTotal}
               </Text>
            </Item>
          </List>
        </View>

        <View style={{
          width: width / 2.58,
          borderRadius: 10,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop:10,
          paddingBottom:10,
          marginLeft:12,
          marginRight:6,
          shadowColor: '#AAA',
          backgroundColor: '#FFF',
          shadowRadius: 5,
          shadowOpacity: 0.3,
          margin: 10,
          marginLeft:0,
        }} >
          <List>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
                <Text ellipsizeMode='tail' style={{color:'#40BEC4',textAlign: 'center', fontWeight: '500', fontSize:16, flex: 1,
  justifyContent: 'center', marginBottom: 10}}>Shops {'\n'} Estimate</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
                <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                  <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/timeIcon.png')}  />
                  <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13, padding:10, }}>{this.props.currentMessage.HourTotal} HOUR</Text>
                </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/discountsIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, }}>$ {this.props.currentMessage.HourRateShop} / HOUR</Text>
               </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/moneyIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, }}>$ {this.props.currentMessage.HourRateShop * this.props.currentMessage.HourTotal}</Text>
               </Button>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
               <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
                 <Image style={{width:20, height:20, padding: 10}} source={require('../../../img/partsIcon.png')}  />
                 <Text ellipsizeMode='tail' numberOfLines={1} style={{color:'#1E2023', fontSize:13,  padding:10, textAlign: 'center' }}>$ {this.props.currentMessage.PartsPriceTotal ? this.props.currentMessage.PartsPriceTotal : '0'}</Text>
               </Button>
            </Item>

            <Item style={{ borderBottomWidth: 0,}}>
               <Text ellipsizeMode='tail' numberOfLines={1} style={{ padding:10,  color:'#8DC63F', fontSize:25, textAlign: 'center' }}>
                 $ {this.props.currentMessage.HourRateShop * this.props.currentMessage.HourTotal + this.props.currentMessage.PartsPriceTotal}
               </Text>
            </Item>
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  image: {
    // width: 150,
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
