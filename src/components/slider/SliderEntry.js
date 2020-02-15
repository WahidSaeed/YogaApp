import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../styles/SliderEntry.style';
import { SliderFormSubmit, SliderFormBehaviour, SliderFormMain, SliderFormToWorkOn } from "./welcomeSliderForm";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { SignUpCreators } from "../../statemanagement/creators/SignUp";

class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };


    state = {
        name: '',
        age: 0,
        gender: 0,
        weight: 0,
        height: 0,
        notification_Id: 1,
        subscription_Id: 1,
        modalVisible: false,
        personalityData: [],
        exerciseData: []
    };

    setName = (name) => this.setState({ name })

    setAge = (age) => this.setState({ age })

    setGender = (gender) => this.setState({ gender })

    setWeight = (weight) => this.setState({ weight })

    setHeight = (height) => this.setState({ height })

    setModalVisible = (modalVisible) => this.setState({ modalVisible })

    setPersonalityData = (personality) => {
        let { personalityData } = this.state;
        const dataExistingPostion = personalityData.indexOf(personality);
        let updatedPersonalityData = [];
        if (dataExistingPostion > -1) {
            personalityData.splice(dataExistingPostion, dataExistingPostion);
            updatedPersonalityData = personalityData;
        }
        else {
            updatedPersonalityData = [...personalityData, personality];  
        }
        console.log(updatedPersonalityData);
        this.setState({ exerciseData: updatedPersonalityData });
    }

    setExerciseData = (exercise) => {
        let { exerciseData } = this.state;
        const dataExistingPostion = exerciseData.indexOf(exercise);
        let updatedExerciseData = [];
        if (dataExistingPostion > -1) {
            exerciseData.splice(dataExistingPostion, dataExistingPostion);
            updatedExerciseData = exerciseData;
        }
        else {
            updatedExerciseData = [...exerciseData, exercise];  
        }
        console.log(updatedExerciseData);
        this.setState({ exerciseData: updatedExerciseData });
    }

    

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={illustration}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    switchToHomeScreen(){
        this.props.navigation.navigate('Home');
    }

    render () {
        const { even, screenNumber, data: { overlayColor } } = this.props;
        const { signUp: { payload: { name, age, gender, weight, height, modalVisible, personalityData, exerciseData } } } = this.props;
        
        const FormViews = () => {
            if (screenNumber === 0) {

                return <SliderFormMain 
                            name={name} 
                            age={age} 
                            gender={gender} 
                            weight={weight} 
                            height={height} 
                            modalVisible={modalVisible}  
                            setName={this.setName.bind(this)}
                            setAge={this.setAge.bind(this)}
                            setGender={this.setGender.bind(this)}
                            setWeight={this.setWeight.bind(this)}
                            setHeight={this.setHeight.bind(this)}
                            setModalVisible={this.setModalVisible.bind(this)} />

            } else if (screenNumber === 1) {
                return <SliderFormBehaviour 
                            personalityData={personalityData}
                            setPersonalityData={this.setPersonalityData}
                        />
            }
            else if (screenNumber === 2) {
                return <SliderFormToWorkOn 
                            exerciseData={exerciseData}
                            setExerciseData={this.setExerciseData.bind(this)}
                        />
            }
            else if (screenNumber === 3) {
                return <SliderFormSubmit onclick={() => this.switchToHomeScreen() } />
            }
        }

        return (
            <View
              style={styles.slideInnerContainer}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                </View>
                <View style={[styles.shadow, { backgroundColor: overlayColor }]} />
                <View style={[styles.textContainer]}>
                    <FormViews  />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { signUp: state.signUp }
}
const mapDispatchToProps = (dispatch) => bindActionCreators(SignUpCreators, dispatch)


export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(SliderEntry));