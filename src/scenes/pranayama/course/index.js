import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles, { colors } from "../../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export default class CourseScreen extends Component {
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
                    <Text>Check Your Breath</Text>
                    <List>
                        <ListItem>
                            <Body>
                                <Text>21 Day Modi Shodhana</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>40 Day 3 Minute</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>40 Day 7 Minute</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>More Courses</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Upgrade to Intermediate Package</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Upgrade to Advance Package</Text>
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