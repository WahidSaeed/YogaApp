import React, { Component } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectContainer, SelectItemContainer } from "../../layout/index";

class SelectItem extends Component {

    state = {toggle: false};

    render() {
        const {item: {title}} = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    })
                }}
            >
                <SelectItemContainer>
                    <Text>
                        {title}
                    </Text>
                    {this.state.toggle && <Icon style={{ alignSelf: 'center' }} size={16} color={'#165BAA'} name="checkcircle" />}
                </SelectItemContainer>
            </TouchableOpacity>
        );
    }
}

export class SelectDefault extends Component {

    render() {
        const { data } = this.props;
        return (
            <SelectContainer>
                <FlatList 
                    data={data}
                    renderItem={({item}) => {
                        return <SelectItem item={item}/>
                    }}
                    keyExtractor={item => item.Id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SelectContainer>
        )
    }
}