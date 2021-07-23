import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyle';

export function Buttons ({title, buttonColor, onPress}){
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={DefaultStyles.button} 
      backgroundColor={buttonColor ? buttonColor : DefaultStyles.button.backgroundColor}>
        <Text style={DefaultStyles.buttonText}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
};