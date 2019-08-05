import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native';
import { ImageBackground } from 'react-native';

import { MonoText } from '../components/StyledText';

const styles = StyleSheet.create({
  pins: {
    width: 250,
    height: 250

  },
  screen: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'

  }
})

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={{uri: 'https://media.istockphoto.com/photos/ten-pin-bowling-lane-picture-id182512565?k=6&m=182512565&s=612x612&w=0&h=lxi59-nN4Ggm8h8IWDQNx7Cq-Yp9AgqgAhfsxz0B5hM='}}
      style={styles.screen}>
      <Text>Lets bowl!</Text>
      <Image 
        style={styles.pins}
        source={{uri: 'https://pics.clipartpng.com/Bowling_Pins_PNG_Clipart-847.png'}} />
      
      <Button
        title="Bowl"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
  </ImageBackground>
  )
}
//