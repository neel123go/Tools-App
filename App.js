import Home from './src/Pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProductPage from './src/Pages/AddProductPage/AddProductPage';
import Products from './src/Pages/Products/Products';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: 'Tools',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 35,
            marginLeft: 20,
            color: '#fff',
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="AddProduct" component={AddProductPage} options={{
          headerTitle: 'Add Product'
        }} />

        <Stack.Screen name="Products" component={Products} options={{
          headerTitle: 'Products'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};