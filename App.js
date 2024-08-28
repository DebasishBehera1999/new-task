import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';




const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown:false}}  />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 

























// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import HomeScreen from './HomeScreen';
// import Landing from './Landing';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// // Stack Navigator component
// function MainStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       {/* Add more stack screens here if needed */}
//     </Stack.Navigator>
//   );
// }

// // Drawer Navigator component
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomePage" component={MainStackNavigator} />
//       <Drawer.Screen name="Landing" component={Landing} />
//       {/* Add more drawer screens here if needed */}
//     </Drawer.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

