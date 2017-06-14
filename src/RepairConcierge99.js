import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
export default class RepairConcierge99 extends React.Component {
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
              <Text style={{color:'#1E2023', fontSize:13,}}>2 year waranty on repairs</Text>
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

            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, }}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:20, height:20, marginRight: 15}} source={require('../../../img/roadsideAssistance.png')}  />
              <Text style={{color:'#1E2023', fontSize:13,}}>Help with unlimited {"\n"}repairs </Text>
               </Button>
             </Item>


            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5, marginTop:20,height:70,}}>
              <Button disabled transparent onPress={ () => console.log('Info', 'Text touched')}>
              <Image style={{width:23, height:20, marginRight: 15}} source={require('../../../img/localMechanic.png')}  />
              <Text style={{color:'#1E2023', fontSize:13, marginLeft:-2,}}>We work with the local{"\n"}mechanic on your behalf to{"\n"}ensure right diagnostic at the{"\n"}right price.</Text>
               </Button>
             </Item>


             <Item>
               <Button transparent style={{marginLeft: -1, backgroundColor:'#40BEC4', borderTopLeftRadius:0, borderTopRightRadius:0, flex:1,}} onPress={ () => console.log('Info', 'Text touched')}>
               <Text style={{  paddingLeft:20, marginTop: -5, color:'#FFFFFF', fontSize:13, }}>Only $99 - Tap here to enroll</Text>
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

RepairConcierge99.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

RepairConcierge99.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: React.PropTypes.object,
  lightboxProps: React.PropTypes.object,
};