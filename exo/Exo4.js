import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesExo4 from './styles/styles.exo4';

const Flex = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setpasswordConfirm] = useState('');
  const [error, setError] = useState(false);

  const isSamePassword = useMemo(() => {
    return passwordConfirm !== password;
  }, [password, passwordConfirm]);

  const confirmLogin = useCallback(() => {
    Alert.alert(
      'Hey There!',
      'Inscription enregistrée ' +
        lastName +
        ' ' +
        firstName +
        ' votre mot de passe est:  ' +
        password,
    );
  }, [firstName, lastName, password]);

  useEffect(() => {
    if (!password) {
      return;
    }
    password.length < 3 ? setError(true) : setError(false);
  }, [password]);

  return (
    <SafeAreaView style={[stylesExo4.container]}>
      <View style={[stylesExo4.div, {flex: 1}]}>
        <Text style={{fontWeight: 'bold'}}>Inscription</Text>
        <Image
          source={{
            uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png',
          }}
          style={[stylesExo4.image]}
          resizeMode="cover"
        />
      </View>
      <View
        style={[stylesExo4.div, {flex: 3, justifyContent: 'space-around'}]}
        keyboardType="numeric">
        <TextInput
          style={[stylesExo4.inputText]}
          placeholder={'Prénom'}
          keyboardType="default"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[stylesExo4.inputText]}
          placeholder={'Nom'}
          keyboardType="default"
          value={lastName}
          onChangeText={setlastName}
        />
        <TextInput
          style={[stylesExo4.inputText, error && stylesExo4.error]}
          placeholder={'Mot de passe'}
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={[stylesExo4.inputText, isSamePassword && stylesExo4.error]}
          placeholder={'Confirmation du mot de passe'}
          keyboardType="default"
          secureTextEntry={true}
          value={passwordConfirm}
          onChangeText={setpasswordConfirm}
        />
      </View>
      <View style={[stylesExo4.div, {flex: 1}]}>
        <TouchableOpacity
          style={[stylesExo4.button]}
          onPress={() => confirmLogin()}>
          {<Text>Envoyer</Text>}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Flex;
