import {StyleSheet} from 'react-native';

const stylesExo4 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  div: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    width: '100%',
    padding: 20,
    backgroundColor: '#A8A8A8',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  button: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  error: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
});

export default stylesExo4;
