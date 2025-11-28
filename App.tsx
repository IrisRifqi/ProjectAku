import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';

export default () => (
  <Video
    source={require('./Jojo.mp4')}
    style={{ width: '100%', aspectRatio: 16 / 9 }}
    controls
  />
);
