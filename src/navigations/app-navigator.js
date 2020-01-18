import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ParanyamaScreen from "../scenes/pranayama";
import HistoryScreen from "../scenes/history";
import ParameterScreen from "../scenes/parameter";
import { View, Text } from "native-base";

const AuthNavigatorConfig = {
    initialRouteName: 'Paranyama',
    header: null,
    headerMode: 'none'
};

const RouteConfigs = {
    Paranyama: ParanyamaScreen,
    History: HistoryScreen,
    Parameter: ParameterScreen
};

const ParanyamaNavigator = createBottomTabNavigator(RouteConfigs, AuthNavigatorConfig);

export default ParanyamaNavigator;