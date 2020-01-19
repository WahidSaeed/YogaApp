import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles, { colors } from "../../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export default class StateOfMindScreen extends Component {
    render() {

        return(
            <View style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    <List>
                        <ListItem>
                            <Body>
                                <Text>Relax</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Get Firery</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Find Balance</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Build Resources</Text>
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