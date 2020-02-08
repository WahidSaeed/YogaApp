import React, { Component } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectContainer, SelectItemContainer } from "../../layout/index";
import { colors } from "../../../styles";

class SelectItem extends Component {

    state = {toggle: false};

    render() {
        const {item: {title}, isModal} = this.props;
        return (
            <TouchableOpacity
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    })
                }}
            >
                <SelectItemContainer isModal={isModal}>
                    <Text
                        style={{
                            color: (isModal ? colors.white: colors.darkText)
                        }}
                    >
                        {title}
                    </Text>
                    {this.state.toggle && <Icon style={{ alignSelf: 'center' }} size={16} color={(isModal ? colors.white : colors.primaryColor)} name="checkcircle" />}
                </SelectItemContainer>
            </TouchableOpacity>
        );
    }
}

export class SelectDefault extends Component {

    render() {
        const { data, isModal } = this.props;
        return (
            <SelectContainer isModal={isModal}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => {
                        return <SelectItem item={item} {...this.props} />
                    }}
                    keyExtractor={item => item.Id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </SelectContainer>
        )
    }
}