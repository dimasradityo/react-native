/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TestProject extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        <Text style={styles.standard}>
          Try this:
        </Text>
        <Image style={styles.image} source={require('./img/mind-blown.gif')} />
        <View style={styles.row}>
          <Text style={[styles.standard, styles.left]}>
            I'm on the <Text style={{color: 'skyblue'}}>left</Text>
          </Text>
          <Text style={[styles.standard, styles.right]}>
            I'm on the <Text style={{color: 'red'}}>right</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414347',
  },
  row: {
    flexDirection: 'row',
  },
  standard: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  left: {
    fontSize: 20,
    marginRight: 35
  },
  right: {
    fontSize: 20,
    marginLeft: 35
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 250,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    marginBottom: 40,
    width: 250,
    borderColor: 'black',
    shadowColor: 'grey',
    borderWidth: 2,
    borderRadius: 120
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
