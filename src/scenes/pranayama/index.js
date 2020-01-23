import React, { Component } from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { List, ListItem, Body, Left, Right, Thumbnail, Icon, Button } from "native-base";

export class ParanyamaScreen extends Component {

    static navigationOptions = {
        title: 'Paranyama',
      }

    render() {

        return(
            <View style={styles.safeArea}>
                <View style={styles.container}>
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                            justifyContent: "center",
                            backgroundColor: '#A155B9',
                        }}
                    >
                        <TouchableOpacity style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: '#165BAA',
                                overflow: 'hidden',
                                borderTopStartRadius: 16,
                                borderBottomStartRadius: 16,
                                marginVertical: 16,
                                marginLeft: 16,
                                elevation: 5

                            }}
                            onPress={() => {
                                this.props.navigation.navigate('StateOfMind');
                            }}
                            >
                            <Image 
                                source={require('../../statics/images/Wallpaper_5_Half.jpg')}
                                style={{
                                    position: 'absolute',
                                    opacity: 0.5
                                }}
                            />
                            <View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 32,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    >State Of Mind Wanted</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: '#A155B9',
                                overflow: 'hidden',
                                borderTopEndRadius: 16,
                                borderBottomEndRadius: 16,
                                marginVertical: 16,
                                marginRight: 16,
                                elevation: 5
                            }}
                            onPress={() => {
                                this.props.navigation.navigate('Course');
                            }}
                            >
                            <Image 
                                source={require('../../statics/images/Wallpaper_4_Half.jpg')}
                                style={{
                                    position: 'absolute',
                                    opacity: 0.5
                                }}
                            />
                            <View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 32,
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}
                                    >Course <Text /> Offered</Text>
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