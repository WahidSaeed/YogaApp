import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { Header } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

const ListItem = ({item}) => {
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
            >
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    {item.title}
                </Text>
                <Icon name="rightcircle" color="#fff" size={16}/>
            </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        title: 'Paranyama Practiced'
    },
    {
        id: 1,
        title: 'Average Breath Per Minute'
    },
    {
        id: 2,
        title: 'Volume of Air Per Minute'
    },
    {
        id: 3,
        title: 'Total Volume of Air'
    }
]

export default class HistoryScreen extends Component {
    render() {

        return(
            <View style={styles.safeArea}>
                <StatusBar
                      translucent={false}
                      backgroundColor={'rgba(0, 0, 0, 0.0)'}
                      barStyle={'dark-content'}
                    />
                    <Header
                        style={{
                            backgroundColor: '#165BAA'
                        }}
                    />
                <View style={[styles.container, {
                    padding: 16
                }]}>
                    
                    <FlatList 
                            data={DATA}
                            renderItem={({item}) => {
                                return <ListItem item={item}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={true}
                        />
                </View>
            </View>
        );
    }
}