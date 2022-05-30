import React, {useEffect} from 'react';
import HomeScreen from './views/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modules from './views/Modules';
import SearchInput from './component/SearchInput';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import BiometricPopup from './fingerPrintScanner';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" n>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Modules"
            component={Modules}
            options={{
              headerStyle: {
                backgroundColor: '#DF8F8F',
              },
              headerTintColor: '#fff',
              headerTitle: () => <SearchInput />,

              // header: () =>null
            }}
          />
          <Stack.Screen name="BiometricPopup" component={BiometricPopup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
