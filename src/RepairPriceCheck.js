import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class RepairPriceCheck extends React.Component {
  render() {
    // const { width, height } = Dimensions.get('window');
    var width = Dimensions.get('window').width;
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List style={{ width: width * .7 }}>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5 }}>
              <Text style={{color:'#1E2023', fontSize:13,margin:15,}}>Ok great. Happy to help! Please provide me the following details:</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={ () => Actions.carYear()}>
              <Image style={{width:15, height:15,resizeMode: 'contain', marginRight: 15, marginLeft: 10, flex: 1}} source={require('../../../img/whichCar.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, flex: 6}}>{ this.props.currentMessage.selectedCar ? this.props.currentMessage.selectedCar : "Tell us about your car" }</Text>
              <Image style={{width:35, height:35, flex: 1 }} source={require('../../../img/forwardClickButton.png')}  />
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, flex: 1, maxWidth: width * .7, flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={ () => Actions.carServiceList()}>
              <Image style={{width:15, height:15,resizeMode: 'contain', marginRight: 15, marginLeft: 10, flex: 1}} source={require('../../../img/searchIcon.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, flex: 6  }} numberOfLines={2}>{ this.props.currentMessage.selectedJob ? this.props.currentMessage.selectedJob : "What type of service" } </Text>
              <Image style={{width:35, height:35, flex: 1}} source={require('../../../img/forwardClickButton.png')}  />
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0, flex: 1, flexDirection: 'row', padding: 5}}>
              <Image style={{width:15, height:15,resizeMode: 'contain', marginRight: 15, marginLeft: 10, flex: 1}} source={require('../../../img/locationImage.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, flex: 6}}>{ this.props.currentMessage.userLocation ? this.props.currentMessage.userLocation : "Where is your vehicle located?" }</Text>
              <Image style={{width:35, height:35, justifyContent: 'flex-end', flex: 1}} source={require('../../../img/forwardClickButton.png')}  />
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
