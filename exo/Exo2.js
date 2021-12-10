import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesExo2 from './styles/styles.exo2';
const Flex = () => {
  return (
    <SafeAreaView style={[stylesExo2.container]}>
      <View style={[stylesExo2.div, {flex: 1}]}>
        <Text style={{fontWeight: 'bold'}}>Inscription</Text>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png',
          }}
          style={[stylesExo2.image]}
          resizeMode="cover"
        />
      </View>
      <View
        style={[stylesExo2.div, {flex: 3, justifyContent: 'space-around'}]}
        keyboardType="numeric">
        <TextInput
          style={[stylesExo2.inputText]}
          placeholder={'Prénom'}
          keyboardType="numeric"
        />
        <TextInput
          style={[stylesExo2.inputText]}
          placeholder={'Nom'}
          keyboardType="numeric"
        />
        <TextInput
          style={[stylesExo2.inputText]}
          placeholder={'Mot de passe'}
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <TextInput
          style={[stylesExo2.inputText]}
          placeholder={'Confirmation du mot de passe'}
          keyboardType="numeric"
          secureTextEntry={true}
        />
      </View>
      <View style={[stylesExo2.div, {flex: 1}]}>
        <TouchableOpacity
          style={[stylesExo2.button]}
          onPress={() => openAlert()}>
          {<Text>Envoyer</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const openAlert = () => {
  Alert.alert('Hey There!', 'Inscription enregistrée');
};

export default Flex;
