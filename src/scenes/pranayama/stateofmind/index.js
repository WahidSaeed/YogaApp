import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";

const ListItem = ({item, navigation}) => {
    return (
        <TouchableOpacity
                style={{
                    backgroundColor: '#165BAA',
                    padding: 16,
                    paddingHorizontal: 24,
                    marginVertical: 8,
                    borderRadius: 32,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
                onPress={() => {
                    navigation.navigate('Exercise')
                }}
            >
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    {item.value}
                </Text>
                <Icon name="rightcircle" color="#fff" size={16}/>
            </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        value: 'Relax'
    },
    {
        id: 1,
        value: 'Get Firery'
    },
    {
        id: 2,
        value: 'Find Balance'
    },
    {
        id: 3,
        value: 'Build Resource'
    }
]

export default class StateOfMindScreen extends Component {

    static navigationOptions = {
        title: 'State of Mind',
      }

    render() {

        return(
            <View style={style.Layout.safeArea}>
                <View style={[style.Layout.container, {
                    padding: 16
                }]}>
                    <FlatList 
                            data={DATA}
                            renderItem={({item}) => {
                                return <ListItem item={item} {...this.props}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={true}
                        />
                </View>
            </View>
        );
    }
}