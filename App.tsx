
// // // import React from 'react';
// // // // import type {PropsWithChildren} from 'react';
// // // import {
// // //   SafeAreaView,
// // //   ScrollView,
// // //   StatusBar,
// // //   StyleSheet,
// // //   Text,
// // //   Button,
// // //   View,
// // // } from 'react-native';

// // // function App() {
// // //   return (
// // //     <ScrollView>
// // //       <View>
// // //         <Text>HI AM SIYA</Text>
// // //         <Text>follow the instructions</Text>
// // //         <Button title="press me" />
// // //       </View>
// // //     </ScrollView>
// // //   );
// // // }

// // // export default App;
// // // In App.js in a new project

// // /* stack navigation */

// // // import * as React from 'react';
// // // import { View, Text, Button, TextInput } from 'react-native';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // import Home from './components/Home'
// // // import Login from './components/Login'


// // // const Header = ()=>{
// // //   return(
// // //     <TextInput placeholder='name'/>
// // //   )
// // // }
// // // const Stack = createNativeStackNavigator();

// // // function App() {
// // //   const Buttonaction =()=>{
// // //     console.warn('button pressed')
// // //   }
// // //   return (
// // //     <NavigationContainer>
// // //       <Stack.Navigator 
// // //       screenOptions={{
        
// // //           headerStyle:{
// // //             backgroundColor:'blue',
// // //           },
// // //           headerTitleStyle:{
// // //             fontSize: 30
// // //           },
// // //           headerTintColor:'orange'
// // //           }}>
// // //         <Stack.Screen name="Login" component={Login} options={{
// // //           headerTitle:()=><Button onPress={Buttonaction} title='left'/>,
// // //           headerRight:()=><Header/>,
// // //           title:"User Login",
// // //           headerStyle:{
// // //             backgroundColor:'blue',
// // //           },
// // //           headerTitleStyle:{
// // //             fontSize: 30
// // //           },
// // //           headerTintColor:'purple'
// // //           }}/>
// // //         <Stack.Screen name="Home" component={Home} />

// // //       </Stack.Navigator>
// // //     </NavigationContainer>
// // //   );
// // // }

// // // export default App;

// // /* tab navigation */

// // import React from 'react';
// // import { Text, View, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// // function HomeScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Home!</Text>
// //       <Button
// //         title="Go to Settings"
// //         onPress={() => navigation.navigate('Settings')}
// //       />
// //     </View>
// //   );
// // }

// // function SettingsScreen({ navigation }) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Settings!</Text>
// //       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
// //     </View>
// //   );
// // }

// // // const Tab = createBottomTabNavigator();
// // const Tab = createMaterialTopTabNavigator();
// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator >
// //         <Tab.Screen name="Home" component={HomeScreen} />
// //         <Tab.Screen name="Settings" component={SettingsScreen} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }



// import * as React from 'react';
// import { Button, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// const HomeStack = createNativeStackNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//       <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//   );
// }

// const SettingsStack = createNativeStackNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//       <SettingsStack.Screen name="Details" component={DetailsScreen} />
//     </SettingsStack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }}>
//         <Tab.Screen name="Home" component={HomeStackScreen} />
//         <Tab.Screen name="Settings" component={SettingsStackScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }



/* Drawer navigation */
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}