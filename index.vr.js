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
      'nightlights.jpg',
      'blackland.png',
      'colormap.jpg',
      'neon.png',
      'google.jpg',
      'linelessmapflipped.jpg',
      'nightlightsflipped.jpg',
      '4096_earth.jpg'
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
        <AmbientLight intensity={ 2.6 }  />
        <Model
		      style={{
            transform: [
              {translate: [-25, 0, -70]},
              {scale: 0.05 },
              {rotateY: -130},
              {rotateX: 20},
              {rotateZ: -10}
            ],
          }}
          source={{obj:asset('earth.obj'), mtl:asset('earth.mtl')}}
		      lit={true}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('InverseGlobe', () => InverseGlobe);
