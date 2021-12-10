import {StyleSheet} from 'react-native';

const stylesExo2 = StyleSheet.create({
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
    backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  button: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default stylesExo2;
