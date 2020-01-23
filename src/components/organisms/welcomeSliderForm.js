import React, {Component} from "react";
import { View, Button, ScrollView, FlatList, TouchableWithoutFeedback } from "react-native";
import { Item, Input, Thumbnail, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export class SliderFormMain extends Component {
    
    render(){
        return (
            <View>
                <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Name"/>
                </Item>
                <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Age"/>
                </Item>
                <Item 
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Gender" value="Male" disabled/>
                    <Icon name="caretdown" />
                </Item>
                <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Weight"/>
                </Item>
                <Item 
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input placeholder="Height"/>
                </Item>
            </View>
        );
    }
}


const PersonalityDATA = [
    {
        Id: 1,
        title: 'The Sage'
    },
    {
        Id: 2,
        title: 'The Brave'
    },
    {
        Id: 3,
        title: 'The Hero'
    },
    {
        Id: 4,
        title: 'The Killer'
    },
    {
        Id: 5,
        title: 'The Innocent'
    },
    {
        Id: 6,
        title: 'The Idiot'
    },
    {
        Id: 7,
        title: 'The Artist'
    },
    {
        Id: 8,
        title: 'The Rockstar'
    },
    {
        Id: 9,
        title: 'The Saviour'
    },
    {
        Id: 10,
        title: 'The Wicked'
    },
];

class ListItem extends Component {

    state = {toggle: false};

    render() {
        const {item: {title}} = this.props;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    })
                }}
            >
                <View 
                    style={{
                        backgroundColor: '#fff',
                        padding: 16,
                        paddingHorizontal: 24,
                        marginVertical: 8,
                        borderRadius: 32,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text>
                        {title}
                    </Text>
                    {this.state.toggle && <Icon style={{ alignSelf: 'center' }} size={16} color={'#165BAA'} name="checkcircle" />}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export class SliderFormBehaviour extends Component {
    
    render(){
        return(
                <View
                    style={{
                        maxHeight:400,
                        paddingHorizontal: 16,
                        borderTopColor: '#fff',
                        borderTopWidth: 4,
                        borderBottomWidth: 4,
                        borderBottomColor: '#fff'
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <FlatList 
                                data={PersonalityDATA}
                                renderItem={({item}) => {
                                    return <ListItem item={item}/>
                                }}
                                keyExtractor={item => item.Id.toString()}
                            />
                    </ScrollView>
                </View>
        );
    }
}

const workOnData = [
    {
        Id: 1,
        title: 'Mind'
    },
    {
        Id: 2,
        title: 'Body'
    },
    {
        Id: 3,
        title: 'Emotions'
    },
    {
        Id: 4,
        title: 'Ethic Body'
    },
];

export class SliderFormToWorkOn extends Component {
    
    render(){
        return(
                <View
                    style={{
                        maxHeight:400,
                        paddingHorizontal: 16,
                        borderTopColor: '#fff',
                        borderTopWidth: 4,
                        borderBottomWidth: 4,
                        borderBottomColor: '#fff'
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <FlatList 
                                data={workOnData}
                                renderItem={({item}) => {
                                    return <ListItem item={item}/>
                                }}
                                keyExtractor={item => item.Id.toString()}
                            />
                    </ScrollView>
                </View>
        );
    }
}


export class SliderFormSubmit extends Component {
    
    render(){
        return(
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.onclick()
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: '#165BAA',
                        padding: 16,
                        alignItems: 'center',
                        borderRadius: 32
                    }}
                >
                    <Text
                        style={{
                            color: '#fff'
                        }}
                    >
                        Continue
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}