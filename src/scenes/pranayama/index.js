import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export class ParanyamaScreen extends Component {

    render() {

        return(
            <View style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "center"
                        }}
                    >
                        <TouchableOpacity style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: '#165BAA',

                            }}
                            onPress={() => {
                                this.props.navigation.navigate('StateOfMind');
                            }}
                            >
                            <View>
                                <View>
                                    <Text>State Of Mind Wanted</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: '#A155B9',
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('Course');
                            }}
                            >
                            <View>
                                <View>
                                    <Text>Course Offered</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* <List>
                        <ListItem
                                onPress={() => {
                                    this.props.navigation.navigate('StateOfMind');
                                }}
                            >
                            <Body>
                                <Text>State Of Mind Wanted</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                        
                        <ListItem
                                onPress={() => {
                                    this.props.navigation.navigate('Course');
                                }}
                            >
                            <Body>
                                <Text>Course Offered</Text>
                            </Body>
                            <Right>
                                <Text>></Text>
                            </Right>
                        </ListItem>
                    </List> */}
                </View>
            </View>
        );
    }
}