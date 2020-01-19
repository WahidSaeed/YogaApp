import React, {Component} from "react";
import { View, Button, ScrollView } from "react-native";
import { Item, Input, Picker, Icon, List, ListItem, Left, Body, Right, Thumbnail, Text } from "native-base";

export class SliderFormMain extends Component {
    
    render(){
        return(
            <View>
                <Item>
                    <Input placeholder="Name"/>
                </Item>
                <Item>
                    <Input placeholder="Age"/>
                </Item>
                <Item picker>
                    <Picker
                        iosIcon={<Icon name="arrow-down" />}
                        placeholder="Select Gender"
                        selectedValue="M"
                    >
                        <Picker.Item label="Male" value="M" />
                        <Picker.Item label="Female" value="F" />
                    </Picker>
                </Item>
                <Item>
                    <Input placeholder="Weight"/>
                </Item>
                <Item last>
                    <Input placeholder="Height"/>
                </Item>
            </View>
        );
    }
}


export class SliderFormBehaviour extends Component {
    
    render(){
        return(
                <ScrollView>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                            </Left>
                            <Body>
                                <Text>The Sage</Text>
                                <Text note>This is Sage</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                            </Left>
                            <Body>
                                <Text>The Innocent</Text>
                                <Text note>This is Innocent</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                            </Left>
                            <Body>
                                <Text>The Explorer</Text>
                                <Text note>This is  Explorer</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                            </Left>
                            <Body>
                                <Text>The Creator</Text>
                                <Text note>This is Creator</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                            </Left>
                            <Body>
                                <Text>The Hero</Text>
                                <Text note>This is Hero</Text>
                            </Body>
                        </ListItem>
                    </List>
                </ScrollView>
        );
    }
}

export class SliderFormToWorkOn extends Component {
    
    render(){
        return(
            <ScrollView>
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                        </Left>
                        <Body>
                            <Text>Mind</Text>
                            <Text note>This is Mind</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                        </Left>
                        <Body>
                            <Text>Body</Text>
                            <Text note>This is Body</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                        </Left>
                        <Body>
                            <Text>Emotional</Text>
                            <Text note>This is Emotional</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4mPeZ9XEHROmPzfY6HwtalIOiNPqhuJlubZqm-q6JiYpAnne&s'}} />
                        </Left>
                        <Body>
                            <Text>Ethic Body</Text>
                            <Text note>This is Ethic Body</Text>
                        </Body>
                    </ListItem>
                </List>
            </ScrollView>
        );
    }
}


export class SliderFormSubmit extends Component {
    
    render(){
        return(
            <View>
                <Button onPress={() => {
                    this.props.onclick()
                }} title="Continue"/>
            </View>
        );
    }
}