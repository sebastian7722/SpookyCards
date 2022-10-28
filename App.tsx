import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Game from './components/Game';
import RadialBackground from './components/RadialBackground';

const App = () => {
  return (
    <SafeAreaView>
      <RadialBackground>
        <ScrollView>
          <Game />
        </ScrollView>
      </RadialBackground>
    </SafeAreaView>
  );
};

export default App;
