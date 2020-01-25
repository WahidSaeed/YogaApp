import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import AuthNavigator from "./auth-navigator";
import HomeNavigator from "./home-navigator";
import Paranyama from "./app-navigator";
import Exercise from '../scenes/pranayama/exercise';


const RootNavigator = createAnimatedSwitchNavigator(
    {
        Auth: AuthNavigator,
        Home: HomeNavigator,
        Paranyama: Paranyama,
        Exercise: Exercise
    },
    {
        initialRouteName: 'Home',
        transition: (
            <Transition.Together>
              <Transition.Out
                type="slide-left"
                durationMs={400}
                interpolation="linear"
              />
              <Transition.In type="slide-right" durationMs={500} />
            </Transition.Together>
          ),
    }
);

export default createAppContainer(RootNavigator);