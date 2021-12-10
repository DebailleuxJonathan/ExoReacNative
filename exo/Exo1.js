import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import stylesExo1 from './styles/styles.exo1';

const Exo1 = () => {
  return (
    <SafeAreaView style={[stylesExo1.container]}>
      <View style={[stylesExo1.rowRed]} />
      <View style={[stylesExo1.rowGreen]}>
        <View style={[stylesExo1.containerBox]}>
          <View style={[stylesExo1.box]} />
          <View style={[stylesExo1.box]} />
          <View style={[stylesExo1.box]} />
        </View>
      </View>
      <View style={[stylesExo1.rowBlue]} />
    </SafeAreaView>
  );
};

export default Exo1;
