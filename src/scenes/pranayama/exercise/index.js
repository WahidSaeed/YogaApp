import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, Button } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";

export default class ExerciseScreen extends Component {

    static navigationOptions = {
        title: 'Exercise',
      }

    render() {

        return(
            <View style={style.Layout.safeArea}>
                <StatusBar
                    hidden={true}
                />
                <View style={[style.Layout.container, {
                    padding: 16,
                }]}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 32,
                                fontWeight: 'bold'
                            }}
                        >
                            Exercise Begins
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Paranyama')
                            }}
                        >
                            <View
                                style={{
                                    height: 100,
                                    width: 100,
                                    backgroundColor: '#165BAA',
                                    borderRadius: 48,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    elevation: 10
                                }}
                            >
                            <Icon name="caretright" size={32} color="#fff"/>   
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}