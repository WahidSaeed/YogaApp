import React, { Component } from "react";
import { View, Text, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity } from "react-native";
import styles, { colors } from "../../styles/index.style";
import { StackedAreaChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Icon from "react-native-vector-icons/AntDesign";

const ListItem = ({item}) => {
    return (
        <View 
                style={{
                    backgroundColor: '#165BAA',
                    padding: 16,
                    paddingHorizontal: 24,
                    marginVertical: 8,
                    borderRadius: 32,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    elevation: 5
                }}
            >
                <Text
                    style={{
                        color: '#fff'
                    }}
                >
                    {item.title}
                </Text>
                <Text style={{ alignSelf: 'center', color: '#fff' }}>{item.value} b/m</Text>
            </View>
    );
}

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          toggle: true
        };
      }
    
    toggle() {
        if(this.state.toggle){
            this.setState({
                toggle: !this.state.toggle
            });
        }
        else {
            this.switchToParanyamaScreen();
        }
    }

    switchToParanyamaScreen() {
        this.props.navigation.navigate('Paranyama')
    }

    returnData() {
        if (this.state.toggle) {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 0,
                    left: 100
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 200,
                    left: 200
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 600,
                    left: 400
                }
            ]
        } else {
            return [
                {
                    month: new Date(2015, 0, 1),
                    right: 3356,
                    left: 7954
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 1234,
                    left: 4563
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2834,
                    left: 2378
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 2343,
                    left: 1238
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 7894,
                    left: 2344
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 234,
                    left: 123
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 3453,
                    left: 1211
                },
                {
                    month: new Date(2015, 0, 1),
                    right: 34,
                    left: 645
                },
            ]
        }
    }

    render() {
        const _colors = [colors.white, colors.background2];
        const keys = ['right', 'left'];
        const svgs = [
            { onPress: () => console.log('right') },
            { onPress: () => console.log('left') }
        ]
        const DATA = [
            {
                id: 0,
                title: 'Average Breath Per Minutes',
                value: 12
            },
            {
                id: 1,
                title: 'Volume Breath Right Nostril Per Minutes',
                value: 12
            },
            {
                id: 2,
                title: 'Volume Breath Left Nostril Per Minutes',
                value: 12
            },
            {
                id: 3,
                title: 'Volume Total Inhale Per Minutes',
                value: 12
            }
        ];

        return(
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                      hidden={true}
                    />
                    <StackedAreaChart 
                        style={ { height: 500, backgroundColor: '#165BAA' } }
                        data={ this.returnData() }
                        keys={ keys }
                        colors={ _colors }
                        curve={ shape.curveNatural }
                        showGrid={ true }
                        animate={true}
                    >
                        <Grid
                            belowChart={true}
                        />
                    </StackedAreaChart>

                    <View
                        style={{
                            flex:1,
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignItems: 'flex-end',
                            position: 'absolute',
                            height: 500,
                            paddingBottom: 16
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                this.toggle()
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#870002',
                                    height: 100,
                                    width: 100,
                                    borderRadius: 48,
                                    elevation: 10
                                }}
                            >
                                <Icon name="caretright" size={42} color='#fff'
                                    style={{
                                        alignSelf: 'center',
                                        marginTop: 24
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#fff',
                            paddingHorizontal: 16,
                            paddingVertical: 24
                        }}
                    >
                        <FlatList 
                            data={DATA}
                            renderItem={({item}) => {
                                return <ListItem item={item}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                        />
                        <Text
                            style={{
                                alignSelf: 'center'
                            }}
                        >View Suggested Exercise</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}