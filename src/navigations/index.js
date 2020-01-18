import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./auth-navigator";
import HomeNavigator from "./home-navigator";
import Paranyama from "./app-navigator";

const RootNavigator = createSwitchNavigator(
    {
        Auth: AuthNavigator,
        Home: HomeNavigator,
        Paranyama: Paranyama
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(RootNavigator);