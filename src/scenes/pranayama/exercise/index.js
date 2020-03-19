import React, { Component } from "react";
import { View, Text, StatusBar, FlatList, TouchableOpacity, Button } from "react-native";
import style, {colors} from "../../../styles/index";
import { ExersicePlayButton } from "../../../components/common/inputs/button";
import { Container } from "../../../components/layout/index";
import { H1, H2, P } from "../../../components/common/inputs/heading";
import { DefaultLoading } from "../../../components/common/loader";
import Icon from "react-native-vector-icons/AntDesign";
import { Player as AudioPlayer } from "@react-native-community/audio-toolkit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ExerciseCreators } from "../../../statemanagement/creators/Exercise";
import BleManagerInstance from "../../../utils/blueToothManager/BleManager";

const HeadingWrapper = (prop) =>  <View style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        marginBottom: 32,
                                }}>{prop.children}</View>

const PlayerWrapper = (prop) => <View style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                            }}>{prop.children}</View>

const PlayerInnerWrapper = (prop) => <View style={{
                                        flex: 1,
                                        flexDirection: 'row'
                                    }}>{prop.children}</View>

const PlayerInnerWrapperLeft = (prop) => <View style={{
                                            flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            marginRight: 52                                        
                                        }}>{prop.children}</View>

const PlayerInnerWrapperCenter = (prop) => <View style={{
                                            flex: 1,
                                            alignItems: 'center'
                                        }}>{prop.children}</View>

const PlayerInnerWrapperRight = (prop) => <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            marginLeft: 52,
                                        }}>{prop.children}</View>

const PlayerExerciseDetail = (prop) => <View style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        marginTop: 32,
                                    }}>{prop.children}</View>

const PlayerAsideButton = (prop) => <TouchableOpacity onPress={prop.onPress}>
                                        <Icon name={prop.name} size={32}  />
                                    </TouchableOpacity>

                        
class ExerciseScreen extends Component {

    static navigationOptions = {
        title: 'Exercise',
      }
    
    state = {
        Play: false,
        Perpare: false,
        Duration: 0,
        CurrentExercise: 0,
        Player: null
    }

    bleManagerInstance = null;

    constructor(props) {
        super(props);
        this.bleManagerInstance = BleManagerInstance.getInstance();
        let device = this.bleManagerInstance.getDevice();
        if(device)
            device.writeCharacteristicWithResponseForService('4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8', 'QUJDMTIzMTIz');
    }

    componentDidMount() {
        const { requestExerciseData, navigation } = this.props;
        const { pranayama } = navigation.state.params;
        requestExerciseData(pranayama.Id);
    }

    componentDidUpdate(prevProp, prevState) {
        const prevCurrentExercise = prevState.CurrentExercise;
        const nextCurrentExercise = this.state.CurrentExercise;
        const { songURL } = this.props.exercise.payload[nextCurrentExercise];
        if(nextCurrentExercise == 0 || (prevCurrentExercise !== nextCurrentExercise)) {
            this.initPlayer(songURL);
            // this.preparePlayer();
            // this.exerciseStopPlay();
        }
    }

    nextExercise() {
        const { payload } = this.props.exercise;
        const { CurrentExercise } = this.state;

        if (payload[CurrentExercise + 1])
            this.setState({
                CurrentExercise: CurrentExercise + 1
            })
    }

    prevExercise() {
        const { payload } = this.props.exercise;
        const { CurrentExercise } = this.state;
        
        if (payload[CurrentExercise - 1])
            this.setState({
                CurrentExercise: CurrentExercise - 1
            })
    }

    switchToParanyama() {
        this.setState({
            Play: !this.state.Play
        })
    }

    initPlayer(songURL) {
        /*if(songURL) {
            var PlayerAudio = new AudioPlayer(songURL, { autoDestroy : false })//.play();
            .prepare((err) => {
                    this.setState({
                        Duration: (PlayerAudio.duration * 0.001 * 0.0166667).toFixed(2),
                        Perpare: PlayerAudio.isPrepared,
                        //Play: true,
                        Player: PlayerAudio
                    })
                });
        }*/

        new AudioPlayer('close_nostril.mp3')
        .play();
        
    }

    exerciseStopPlay() {
        const { Player, Perpare, Play } = this.state;

        if (Perpare) {
            if (Play) {
                Player.play();
            }
            else {
                Player.stop();
            }
        }
    }
//pranayama
    render() {
        const { CurrentExercise } = this.state;
        const { payload, isLoading, error } = this.props.exercise;
        const { exersiceName, songURL, description } = payload[CurrentExercise];
        const { pranayama } = this.props.navigation.state.params;
        //const { pranayama } = this.props.route;
        // this.initPlayer(songURL);
        this.exerciseStopPlay();
        return(
            <Container>
                <StatusBar
                    hidden={true}
                />
                    {error && (<View><Text>Error</Text></View>)}
                    {isLoading && (<DefaultLoading />)}
                    {!isLoading && !error && (
                    <Container>
                        <HeadingWrapper>
                            <H1 style={{ textAlign: "center" }}>{pranayama.title}</H1>
                        </HeadingWrapper>
                        <PlayerWrapper>
                            <PlayerInnerWrapper>
                                <PlayerInnerWrapperLeft>
                                    <PlayerAsideButton onPress={this.prevExercise.bind(this)} name="banckward" />
                                </PlayerInnerWrapperLeft>
                                <PlayerInnerWrapperCenter>
                                    <ExersicePlayButton isOnPlay={this.state.Play} onButtonPress={this.switchToParanyama.bind(this)} />
                                    <Text
                                        style={{
                                            color: colors.darkText,
                                            marginTop: 16
                                        }}
                                    >{this.state.Duration}</Text>
                                </PlayerInnerWrapperCenter>
                                <PlayerInnerWrapperRight>
                                    <PlayerAsideButton onPress={this.nextExercise.bind(this)} name="forward" />
                                </PlayerInnerWrapperRight>
                            </PlayerInnerWrapper>
                        </PlayerWrapper>
                        <PlayerExerciseDetail>
                            <H2>{ exersiceName }</H2>
                            <P
                                style={{
                                    textAlign: 'center',
                                    marginHorizontal: 32
                                }}
                            >{ description }</P>
                        </PlayerExerciseDetail>
                    </Container>)}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { exercise: state.exercise }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(ExerciseCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseScreen)