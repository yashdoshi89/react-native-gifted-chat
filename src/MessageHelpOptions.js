import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class MessageHelpOptions extends React.Component {
  render() {
    // const { width, height } = Dimensions.get('window');
    var width = Dimensions.get('window').width;

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List style={{ width: width * .7 }}>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text style={{color:'#1E2023', fontSize:13,margin:15,}}>I can help you with any of the following requests:</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:17, height:25, marginRight: 15}} source={require('../../../img/repairPriceCheck.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Repair Price Check</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:22, height:22, marginRight: 15}} source={require('../../../img/repairGuidance.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Repair Guidance</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:22, height:22, marginRight: 15}} source={require('../../../img/repairConceirge.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Repair Concierge</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/roadsideAssistance.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Roadside Assistance</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, }}>
              <Button transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/otherQuestions.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Other Questions</Text>
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
    marginRight:-3,
    marginLeft:0,
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

MessageHelpOptions.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageHelpOptions.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};
