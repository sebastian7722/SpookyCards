import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Game from './screens/game';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Game />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
