import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "../scenes/welcome";

const AuthNavigatorConfig = {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Login: WelcomeScreen
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;