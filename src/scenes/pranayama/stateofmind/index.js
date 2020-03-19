import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectDefault } from "../../../components/common/inputs/Select";
import { Container } from "../../../components/layout/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PranayamaCourseCreators } from "../../../statemanagement/creators/PranayamaCourse";
import { DefaultLoading } from "../../../components/common/loader";

class StateOfMindScreen extends Component {

    static navigationOptions = {
        title: 'State of Mind',
    }

    onPranayamaSelect(pranayama) {
        console.log(pranayama);
        const { navigation } = this.props;
        navigation.navigate('Exercise', { pranayama: pranayama });
    }

    componentDidMount() {
        const { requestExerciseData } = this.props;
        requestExerciseData(1);
    }

    render() {
        const { payload, isLoading, error } = this.props.pranayamaCourse;
        console.log(this.props.pranayamaCourse)
        return(
            <Container>
                    {error && (<View><Text>Error</Text></View>)}
                    {isLoading && (<DefaultLoading />)}
                    {!isLoading && !error && (
                        <SelectDefault 
                            data={payload}
                            isModal={true}
                            isMultiSelect={false}
                            onItemSelect={this.onPranayamaSelect.bind(this)}
                        />
                    )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { pranayamaCourse: state.pranayamaCourse }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(PranayamaCourseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StateOfMindScreen)