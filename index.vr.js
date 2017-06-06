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
  VrButton
} from 'react-vr';

export default class InverseGlobe extends React.Component {
  state = {
    pano: 'linelessmap.jpg',
    images: [
      'linelessmap.jpg',
      'map.jpg',
      'tissot.png',
      'nightlights.jpg',
      'blackland.png',
      'colormap.jpg',
      'neon.png',
      'google.jpg',
      'linelessmapflipped.jpg',
      'nightlightsflipped.jpg'
    ],
    i: 0
  }

  cyclePano=()=> {
      if (this.state.i == this.state.images.length - 1) {
        this.setState({i: 0})
      } else {
        this.setState({i: this.state.i + 1})
      }
      this.setState({pano: this.state.images[this.state.i]})
  }


  render() {
    return (
      <View>
        <Pano source={asset(this.state.pano)}/>
        <VrButton
          style={{
            width: 0.1,
            height: 0.1,
            opacity: 1.0,
            backgroundColor: 'red'
          }}
          onClick={this.cyclePano}>

        </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('InverseGlobe', () => InverseGlobe);
