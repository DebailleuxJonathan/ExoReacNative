import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ToDoListScreen from '../components/ToDoListScreen';
import ToDoListDetails from '../components/ToDoListDetails';
import Exo1 from '../exo/Exo1';
import Exo4 from '../exo/Exo4';
import Icon from 'react-native-vector-icons/FontAwesome';
import Exo3 from '../exo/Exo3';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ToDoList = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={ToDoListScreen} />
    <Stack.Screen name="Details" component={ToDoListDetails} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: '#694fad',
      }}>
      <Tab.Screen
        name="ToDoList"
        component={ToDoList}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="list" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Login"
        component={Exo4}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="FlexBox"
        component={Exo1}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="th" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="List"
        component={Exo3}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Icon name="bars" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
