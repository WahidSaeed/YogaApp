import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { StackedAreaChart } from "react-native-svg-charts";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";
import * as shape from "d3-shape";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          toggle: true
        };
      }
    
    toggle() {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    switchToParanyamaScreen() {
        this.props.navigation.navigate('Paranyama')
    }

    returnData() {
        if (this.state.toggle) {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 500,
                    left: 500
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 500,
                    left: 500
                }
            ]
        } else {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 3356,
                    left: 7954
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 1234,
                    left: 4563
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2834,
                    left: 2378
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2343,
                    left: 1238
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 7894,
                    left: 2344
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 234,
                    left: 123
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 3453,
                    left: 1211
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 34,
                    left: 645
                },
            ]
        }
    }

    render() {
        const _colors = [colors.background1, colors.background2];
        const keys = ['right', 'left'];
        const svgs = [
            { onPress: () => console.log('right') },
            { onPress: () => console.log('left') }
        ]

        return(
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    {/* { this.gradient } */}
                    <Text>Check Your Breath</Text>
                    <StackedAreaChart 
                        style={ { height: 500, paddingVertical: 16 } }
                        data={ this.returnData() }
                        keys={ keys }
                        colors={ _colors }
                        curve={ shape.curveNatural }
                        showGrid={ true }
                        svgs={ svgs }
                        animate={true}
                        animationDuration={300}
                    />
                    <List>
                        <ListItem>
                            <Body>
                                <Text>Average Breath Per Minutes</Text>
                            </Body>
                            <Right>
                                <Text>12 b/m</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Volume Breath Right Nostril Per Minutes</Text>
                            </Body>
                            <Right>
                                <Text>43 b/m</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Volume Breath Left Nostril Per Minutes</Text>
                            </Body>
                            <Right>
                                <Text>78 b/m</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Volume Total Inhale Per Minutes</Text>
                            </Body>
                            <Right>
                                <Text>23 b/m</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <Button onPress={() => { this.toggle() }}><Text>Play Button</Text></Button>
                    <Text>View Suggested Exercise</Text>
                    <Button onPress={() => { this.switchToParanyamaScreen() }}><Text>Good To Go</Text></Button>
                </View>
            </SafeAreaView>
        );
    }
}