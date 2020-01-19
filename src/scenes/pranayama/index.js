import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export default class ParanyamaScreen extends Component {
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
                                <Text>State Of Mind Wanted</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text>Course Offered</Text>
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