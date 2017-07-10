import React , { Component } from 'react';
import { Button, Container, Content, Card, CardItem, Text, Icon, Right, Left, List, ListItem, Item, InputGroup } from 'native-base';
import Lightbox from 'react-native-lightbox';
import {Alert, Image,StyleSheet,View,Dimensions, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class RepairConcierge39 extends React.Component {
  render() {
    // const { width, height } = Dimensions.get('window');
    var width = Dimensions.get('window').width;

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <List style={{ width: width * .7 }}>
            <Item style={{borderColor:'#D5D8E1', borderBottomWidth: 0.5,}}>
              <Text style={{color:'#1E2023', fontSize:13,margin:14,}}>Please let me know where you are:</Text>
            </Item>

             <Item>
               <Button transparent style={{marginLeft: -1, backgroundColor:'#40BEC4', borderTopLeftRadius:0, borderTopRightRadius:0, flex:1, borderBottomWidth:0,}} onPress={() => {
                  this.props.onShareLocation();
                }}>
                  <Text style={{  textAlign: 'center', flex:1,  marginTop: -5, color:'#FFFFFF', fontSize:14, }}>Share My Location.</Text>
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
  onShareLocation: () => {
  },
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
