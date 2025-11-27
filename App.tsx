import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={this.onPress}>
          <Text>Click Me </Text>
        </TouchableOpacity>
        <Text>Your count = {this.state.count} times</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
