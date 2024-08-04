import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoaderModal} from './components';
import {RootNavigation} from './navigation';
import {persistor, store} from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoaderModal modal />} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
