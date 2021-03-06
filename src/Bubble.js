import React from 'react';
import {
  Text,
  Clipboard,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import MessageText from './MessageText';
import MessageImage from './MessageImage';
import MessageHelpOptions from './MessageHelpOptions';
import RepairPriceCheck from './RepairPriceCheck';
import RepairConcierge39 from './RepairConcierge39';
import RepairConcierge99 from './RepairConcierge99';
import PriceCheckout from './PriceCheckout';
import TypeOfProblem from './RoadsideAssistance';
import ShareLocation from './ShareLocation';
import Time from './Time';

var width = Dimensions.get('window').width;
var newWidth = width * 0.7;
console.log(width);
import { isSameUser, isSameDay, warnDeprecated } from './utils';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.onLongPress = this.onLongPress.bind(this);
  }

  handleBubbleToNext() {
    if (isSameUser(this.props.currentMessage, this.props.nextMessage) && isSameDay(this.props.currentMessage, this.props.nextMessage)) {
      return StyleSheet.flatten([styles[this.props.position].containerToNext, this.props.containerToNextStyle[this.props.position]]);
    }
    return null;
  }

  handleBubbleToPrevious() {
    if (isSameUser(this.props.currentMessage, this.props.previousMessage) && isSameDay(this.props.currentMessage, this.props.previousMessage)) {
      return StyleSheet.flatten([styles[this.props.position].containerToPrevious, this.props.containerToPreviousStyle[this.props.position]]);
    }
    return null;
  }

  renderMessageText() {
    if (this.props.currentMessage.text) {
      const {containerStyle, wrapperStyle, ...messageTextProps} = this.props;
      if (this.props.renderMessageText) {
        return this.props.renderMessageText(messageTextProps);
      }
      return <MessageText {...messageTextProps}/>;
    }
    return null;
  }

  renderShareLocation() {
    if (this.props.currentMessage.shareLocation) {
      const {containerStyle, wrapperStyle, ...shareLocationProps} = this.props;
      if (this.props.renderShareLocation) {
        return this.props.renderShareLocation(shareLocationProps);
      }
      return <ShareLocation {...shareLocationProps}/>;
    }
    return null;
  }

  renderMessageHelp() {
    if (this.props.currentMessage.help) {
      const {containerStyle, wrapperStyle, ...messageHelpProps} = this.props;
      return <MessageHelpOptions {...messageHelpProps}/>;
    }
    return null;
  }

  renderMessageRepairPriceCheck() {
    if (this.props.currentMessage.repairPriceCheck) {
      const {containerStyle, wrapperStyle, ...repairPriceCheckProps} = this.props;
      return <RepairPriceCheck {...repairPriceCheckProps}/>;
    }
    return null;
  }

  renderMessageRepairConcierge39() {
    if (this.props.currentMessage.repairConcierge39) {
      const {containerStyle, wrapperStyle, ...repairConcierge39Props} = this.props;
      return <RepairConcierge39 {...repairConcierge39Props}/>;
    }
    return null;
  }

  renderMessageRepairConcierge99() {
    if (this.props.currentMessage.repairConcierge99) {
      const {containerStyle, wrapperStyle, ...repairConcierge99Props} = this.props;
      return <RepairConcierge99 {...repairConcierge99Props}/>;
    }
    return null;
  }

  renderMessagePriceCheckout() {
    if (this.props.currentMessage.PriceCheckout) {
      const {containerStyle, wrapperStyle, ...priceCheckoutProps} = this.props;
      return <PriceCheckout {...priceCheckoutProps}/>;
    }
    return null;
  }

  renderMessageTypeOfProblem() {
    if (this.props.currentMessage.roadsideAssistance) {
      const {containerStyle, wrapperStyle, ...typeOfProblemProps} = this.props;
      return <TypeOfProblem {...typeOfProblemProps}/>;
    }
    return null;
  }

  renderMessageImage() {
    if (this.props.currentMessage.image) {
      const {containerStyle, wrapperStyle, ...messageImageProps} = this.props;
      if (this.props.renderMessageImage) {
        return this.props.renderMessageImage(messageImageProps);
      }
      return <MessageImage {...messageImageProps}/>;
    }
    return null;
  }

  renderTicks() {
    const {currentMessage} = this.props;
    if (this.props.renderTicks) {
        return this.props.renderTicks(currentMessage);
    }
    if (currentMessage.user._id !== this.props.user._id) {
        return;
    }
    if (currentMessage.sent || currentMessage.received) {
      return (
        <View style={styles.tickView}>
          {currentMessage.sent && <Text style={[styles.tick, this.props.tickStyle]}>✓</Text>}
          {currentMessage.received && <Text style={[styles.tick, this.props.tickStyle]}>✓</Text>}
        </View>
      )
    }
  }

  renderTime() {
    if (this.props.currentMessage.createdAt) {
      const {containerStyle, wrapperStyle, ...timeProps} = this.props;
      if (this.props.renderTime) {
        return this.props.renderTime(timeProps);
      }
      return <Time {...timeProps}/>;
    }
    return null;
  }

  renderCustomView() {
    if (this.props.renderCustomView) {
      return this.props.renderCustomView(this.props);
    }
    return null;
  }

  onLongPress() {
    if (this.props.onLongPress) {
      this.props.onLongPress(this.context);
    } else {
      if (this.props.currentMessage.text) {
        const options = [
          'Copy Text',
          'Cancel',
        ];
        const cancelButtonIndex = options.length - 1;
        this.context.actionSheet().showActionSheetWithOptions({
          options,
          cancelButtonIndex,
        },
        (buttonIndex) => {
          switch (buttonIndex) {
            case 0:
              Clipboard.setString(this.props.currentMessage.text);
              break;
          }
        });
      }
    }
  }

  render() {
    if (this.props.currentMessage.PriceCheckout) {
      return (
        <View style={{backgroundColor: 'rgba(0,0,0,0)',}}>
          {this.renderMessagePriceCheckout()}
        </View>
      );
    } else {
      return (
        <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>

        <View style={[styles[this.props.position].wrapper, this.props.wrapperStyle[this.props.position], this.handleBubbleToNext(), this.handleBubbleToPrevious()]}>
        <TouchableWithoutFeedback
        onLongPress={this.onLongPress}
        accessibilityTraits="text"
        {...this.props.touchableProps}
        >

        <View>
        {this.renderShareLocation()}
        {this.renderMessageHelp()}
        {this.renderMessageRepairConcierge39()}
        {this.renderMessageRepairConcierge99()}
        {this.renderMessageTypeOfProblem()}
        {this.renderCustomView()}
        {this.renderMessageRepairPriceCheck()}
        {this.renderMessageImage()}
        {this.renderMessageText()}

        </View>
        </TouchableWithoutFeedback>
        </View>
        </View>
      );
    }
  }
}

const styles = {
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
    wrapper: {
      borderRadius: 10,
      backgroundColor: '#f0f0f0',
      marginRight: 10,
      minHeight: 20,
      justifyContent: 'flex-end',
      borderColor:'#D5D8E1',
      borderWidth:0.3,
      shadowColor: '#AAA',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 5,
      shadowOpacity: 0.2
    },
    containerToNext: {
      borderBottomLeftRadius: 10,
    },
    containerToPrevious: {
      borderTopLeftRadius: 10,
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      margin:10,
    },
    wrapper: {
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      marginLeft: 10,
      minHeight: 30,
      padding:5,
      maxWidth: newWidth,
      justifyContent: 'flex-end',
      shadowColor: '#AAA',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowRadius: 5,
      shadowOpacity: 0.2
    },
    containerToNext: {
      borderBottomRightRadius: 10,
    },
    containerToPrevious: {
      borderTopRightRadius: 10,
    },
  }),
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tick: {
    fontSize: 10,
    backgroundColor: 'transparent',
    color: 'white',
  },
  tickView: {
    flexDirection: 'row',
    marginRight: 10,
  }
};

Bubble.contextTypes = {
  actionSheet: React.PropTypes.func,
};

Bubble.defaultProps = {
  touchableProps: {},
  onLongPress: null,
  renderMessageImage: null,
  renderMessageText: null,
  renderCustomView: null,
  renderTime: null,
  position: 'left',
  currentMessage: {
    text: null,
    createdAt: null,
    image: null,
  },
  nextMessage: {},
  previousMessage: {},
  containerStyle: {},
  wrapperStyle: {},
  tickStyle: {},
  containerToNextStyle: {},
  containerToPreviousStyle: {},
  //TODO: remove in next major release
  isSameDay: warnDeprecated(isSameDay),
  isSameUser: warnDeprecated(isSameUser),
};

Bubble.propTypes = {
  touchableProps: React.PropTypes.object,
  onLongPress: React.PropTypes.func,
  renderMessageImage: React.PropTypes.func,
  renderMessageText: React.PropTypes.func,
  renderCustomView: React.PropTypes.func,
  renderTime: React.PropTypes.func,
  position: React.PropTypes.oneOf(['left', 'right']),
  currentMessage: React.PropTypes.object,
  nextMessage: React.PropTypes.object,
  previousMessage: React.PropTypes.object,
  containerStyle: React.PropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
  wrapperStyle: React.PropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
  tickStyle: Text.propTypes.style,
  containerToNextStyle: React.PropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
  containerToPreviousStyle: React.PropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
  //TODO: remove in next major release
  isSameDay: React.PropTypes.func,
  isSameUser: React.PropTypes.func,
};
