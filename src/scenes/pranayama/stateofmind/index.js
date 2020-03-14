import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import style from "../../../styles/index";
import Icon from "react-native-vector-icons/AntDesign";
import { Container } from "../../../components/layout/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PranayamaCourseCreators } from "../../../statemanagement/creators/PranayamaCourse";
import { DefaultLoading } from "../../../components/common/loader";

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

class StateOfMindScreen extends Component {

    static navigationOptions = {
        title: 'State of Mind',
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
                    {!isLoading && !error && (<FlatList 
                            data={payload}
                            renderItem={({item}) => {
                                return <ListItem item={item} {...this.props}/>
                            }}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={true}
                        />)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { pranayamaCourse: state.pranayamaCourse }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(PranayamaCourseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StateOfMindScreen)