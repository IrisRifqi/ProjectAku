import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import type { PropsWithChildren } from 'react';

const FlexDirectionBasics =() => {
  const [flexDirection, setflexDirection] =   useState('column');

return(
  <PreviewLayout
  label="flexDirection"
  values={['column', 'row', 'column-reverse', 'row-reverse']}
  selectedValue={flexDirection}
  setSelectedView={setflexDirection}>
    <View style={[styles.powderBlue]} />
    <View style={[styles.skyBlue]} />
    <View style={[styles.blue]} />
  </PreviewLayout>
  
);
};

const App = () => {
  return (
    <View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 20,
  },
  powderBlue: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  blue: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default App;
