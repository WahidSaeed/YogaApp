import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../scenes/welcome";

const AuthNavigatorConfig = {
    initialRouteName: 'Welcome',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Welcome: WelcomeScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;