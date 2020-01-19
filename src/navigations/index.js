import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import AuthNavigator from "./auth-navigator";
import HomeNavigator from "./home-navigator";
import Paranyama from "./app-navigator";

const RootNavigator = createAnimatedSwitchNavigator(
    {
        Auth: AuthNavigator,
        Home: HomeNavigator,
        Paranyama: Paranyama
    },
    {
        initialRouteName: 'Auth',
        transition: (
            <Transition.Together>
              <Transition.Out
                type="slide-bottom"
                durationMs={400}
                interpolation="easeIn"
              />
              <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
          ),
    }
);

export default createAppContainer(RootNavigator);