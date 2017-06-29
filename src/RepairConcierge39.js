import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class RepairConcierge39 extends React.Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text style={{color:'#1E2023', fontSize:13,margin:14,}}>Your ultimate VIP Repair Concierge  includes the following benefits:</Text>
            </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:23, height:20, marginRight: 15}} source={require('../../../img/warrantyIcon.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>2 year waranty on repair</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:22, height:22, marginRight: 15}} source={require('../../../img/discountsIcon.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>20% discount on parts</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/uberCredits.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>10$ Uber credits</Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/roadsideAssistance.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>We take over the repair process{"\n"}for you. </Text>
               </Button>
             </Item>

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, marginTop:20,height:70,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:23, height:21, marginRight: 15}} source={require('../../../img/localMechanic.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, marginLeft:-2,}}>We work with the local mechanic{"\n"}on your behalf to ensure right{"\n"}diagnostic at the right price.</Text>
               </Button>
             </Item>

             <Item>
               <Button transparent style={{marginLeft: -1, backgroundColor:'#40BEC4', borderTopLeftRadius:0, borderTopRightRadius:0, flex:1,}} onPress={ () => console.log('Info', 'Text touched')}>
               <Text style={{  textAlign: 'center', flex:1,  marginTop: -5, color:'#FFFFFF', fontSize:14, }}>Only $39 - Tap here to enroll</Text>
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

RepairConcierge39.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

RepairConcierge39.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};
