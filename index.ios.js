'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  Button,
  Image,
  Switch,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Rocket from './Rocket'

var launchState = false;
const TestProject = React.createClass({
  getInitialState() {
    return {
      launch: launchState
    }
  },
  changeLaunchState(){
    launchState = !launchState;
    this.setState({launch: launchState})
  },

  fire(){
    console.log('test')
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Launch Control
        </Text>
        <Switch value={this.state.launch} onValueChange={this.changeLaunchState}>
        </Switch>
        <Button disabled={!launchState} title='Fire!' onPress={this.fire}>
        </Button>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    marginTop: 10,
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('TestProject', () => TestProject);
