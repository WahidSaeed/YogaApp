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
                    {item.title}
                </Text>
                <Icon name="rightcircle" color="#fff" size={16}/>
            </TouchableOpacity>
    );
}

const DATA = [
    {
        id: 0,
        title: '21 Day Modi Shodhana'
    },
    {
        id: 1,
        title: '40 Day 3 Minute'
    },
    {
        id: 2,
        title: '40 Day 7 Minute'
    },
    {
        id: 3,
        title: 'More Courses'
    },
    {
        id: 4,
        title: '40 Day 3 Minute'
    },
    {
        id: 5,
        title: '40 Day 3 Minute'
    },
    {
        id: 6,
        title: '40 Day 3 Minute'
    },
]

export default class CourseScreen extends Component {

    static navigationOptions = {
        title: 'Course Wanted',
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