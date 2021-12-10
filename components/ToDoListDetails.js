import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import stylesTodoListDetails from './styles/styles.ToDoListDetails';
const ToDoListDetails = ({route, navigation}) => {
  const {back, data} = route.params;
  return (
    <SafeAreaView style={[stylesTodoListDetails.container]}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>{back}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 8}}>
        <Text>{'Ma Todo:'}</Text>
        <Text style={{fontWeight: 'bold'}}>{data}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ToDoListDetails;
