import {StyleSheet} from 'react-native';

const stylesExo1 = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  containerBox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowRed: {
    flex: 1,
    backgroundColor: 'red',
  },
  rowGreen: {
    flex: 1,
    backgroundColor: 'green',
  },
  rowBlue: {
    flex: 3,
    backgroundColor: 'blue',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderStyle: 'solid',
    borderWidth: 3,
  },
});

export default stylesExo1;
