import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, Button } from "react-native";
import style, {colors} from "../../../styles/index";
import { ExersicePlayButton } from "../../../components/common/inputs/button";
import { Container } from "../../../components/layout/index";
import Icon from "react-native-vector-icons/AntDesign";

export default class ExerciseScreen extends Component {

    static navigationOptions = {
        title: 'Exercise',
      }


    switchToParanyama() {
        this.props.navigation.navigate('Paranyama')
    }

    render() {

        return(
            <Container>
                <StatusBar
                    hidden={true}
                />
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            marginBottom: 32,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 40,
                                fontWeight: 'bold'
                            }}
                        >
                            Find Balance
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    justifyContent: 'center',
                                    marginRight: 52
                                }}
                            >
                                <TouchableOpacity>
                                    <Icon name="banckward" size={32}  />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center'
                                }}
                            >
                                <ExersicePlayButton onButtonPress={this.switchToParanyama.bind(this)} />

                                <Text
                                    style={{
                                        color: colors.darkText,
                                        marginTop: 16
                                    }}
                                >-0:4</Text>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    marginLeft: 52,
                                }}
                            >
                                <TouchableOpacity>
                                    <Icon name="forward" size={32}  />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginTop: 32,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold'
                            }}
                        >
                            Balance Music Name
                        </Text>
                        <Text
                            style={[colors.subText, {
                                textAlign: 'center',
                                marginHorizontal: 32
                            }]}
                        >
                            This is exercise description about how to do this exercise. This is exercise description about how to do this exercise. This is exercise description about how to do this exercise. This is exercise description about how to do this exercise.
                        </Text>
                    </View>
            </Container>
        );
    }
}