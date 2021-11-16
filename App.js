import React from 'react';
import { StyleSheet, Text, View,LogBox } from 'react-native';
// import MerchantOrders from './App/Components/MerchantOrders';
import BottomTabNavigation from './App/Components/BottomTabNavigation';
import MerchantLogin from './App/Components/MerchantLogin';
import MerchantRegister from './App/Components/MerchantRegister';
import MechantGrocery from './App/Components/MechantGrocery';
import MerchantProducts from './App/Components/MerchantProducts';
import MerchantAcceptedOrder from './App/Components/MerchantAcceptedOrder';
import MerchantRejectedOrder from './App/Components/MerchantRejectedOrder';
import MerchantOrderDetails from './App/Components/MerchantOrderDetails';
import AddNewProduct from './App/Components/AddNewProduct';
import MerchantOrederTopTab from './App/Components/MerchantOrederTopTab';
import MerchantProfile from './App/Components/MerchantProfile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName={MerchantLogin}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='MerchantLogin' component={MerchantLogin} />
      <Stack.Screen name='MerchantRegister' component={MerchantRegister} />
      <Stack.Screen name='MechantGrocery' component={MechantGrocery} />
      <Stack.Screen name='MerchantProducts' component={MerchantProducts} />
      <Stack.Screen name='MerchantAcceptedOrder' component={MerchantAcceptedOrder} />
      <Stack.Screen name='MerchantRejectedOrder' component={MerchantRejectedOrder} />
      <Stack.Screen name='MerchantOrderDetails' component={MerchantOrderDetails} />
      <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
      <Stack.Screen name='AddNewProduct' component={AddNewProduct} />
      <Stack.Screen name='MerchantOrederTopTab' component={MerchantOrederTopTab} />
      <Stack.Screen name='MerchantProfile' component={MerchantProfile} />

    
      </Stack.Navigator>
      </NavigationContainer>
  );
}



// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MerchantProfile from './App/Components/MerchantProfile';
// export default function App() {
//   return (
//     <View>
//      <MerchantProfile/>
//     </View>
//   );
// }

