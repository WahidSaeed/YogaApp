import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import style, { colors } from "../../../styles";

export class PlayButton extends Component {

    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.onButtonPress()}
                style={this.props.style}
            >
                <View
                    style={style.Button.PlayButton}
                >
                    <Icon name="caretright" size={32} color={colors.white}
                        style={{
                            alignSelf: 'center',
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}


export class ExersicePlayButton extends Component {
    render() {
        return(
            <View style={style.Button.ExersicePlayButtonWrapper}>
                <PlayButton {...this.props} />
            </View>
            )
    }
}