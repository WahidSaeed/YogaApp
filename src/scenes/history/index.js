import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export default class HistoryScreen extends Component {
    render() {

        return(
            <View style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    {/* { this.gradient } */}
                    <Text>History</Text>
                    <List>
                        <ListItem>
                            <Body>
                                <Text>Paranyama Practiced</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Average Breath Per Minute</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Volume of Air Per Minute</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Total Volume of Air</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                    </List>
                </View>
            </View>
        );
    }
}