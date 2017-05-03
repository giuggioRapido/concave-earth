import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
} from 'react-vr';

export default class InverseGlobe extends React.Component {
  state = {
    pano: 'linelessmap.jpg',
    images: [
      'linelessmap.jpg',
      'map.jpg',
      'tissot.png',
      'nightlights.jpg'
    ],
    i: 0
  }

  cyclePano(event) {
    if (event.nativeEvent.inputEvent.eventType == "click" || event.nativeEvent.inputEvent.eventType == "touchstart") {
      if (this.state.i == this.state.images.length - 1) {
        this.setState({i: 0})
      } else {
        this.setState({i: this.state.i + 1})
      }
      this.setState({pano: this.state.images[this.state.i]})
    }
  }

  render() {
    return (
      <View onInput={ event => this.cyclePano(event)}>
        <Pano source={asset(this.state.pano)}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('InverseGlobe', () => InverseGlobe);
