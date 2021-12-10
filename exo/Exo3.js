import React from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import stylesExo3 from './styles/styles.exo3';

const Flex = () => {
  return (
    <SafeAreaView style={[stylesExo3.container]}>
      <FlatList
        data={tab}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[stylesExo3.button]}
              onLongPress={() => openAlert(item.name)}>
              <Text style={{textAlign: 'center'}}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const openAlert = name => {
  Alert.alert('Hey There! ' + name);
};

const tab = [
  {name: 'flo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
  {name: 'jo'},
];

export default Flex;
