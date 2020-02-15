import React, {Component} from "react";
import { View, TouchableOpacity } from "react-native";
import { Item, Input, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { SelectDefault } from "../common/inputs/Select";
import { H2, P } from "../../components/common/inputs/heading";
import { colors } from "../../styles/index";
import Modal from "react-native-modal";
import { metrics } from "../../styles/index";

export class SliderFormMain extends Component {
    
    onGenderSelect(gender) {
        const { setGender, setModalVisible } = this.props;
        setGender(gender.Id);
        setModalVisible(false);
    }

    render() {

        const genderOptions = [
            {
                Id: 0,
                title: 'Men'
            },
            {
                Id: 1,
                title: 'Women'
            },
            {
                Id: 2,
                title: 'Others'
            }
        ];
        const { name, age, gender, weight, height, modalVisible } = this.props
        const { setName, setAge, setWeight, setHeight, setModalVisible } = this.props

        return (
            <View>
                <H2 
                    style={{
                        color: colors.white,
                        textAlign: 'center', 
                        marginVertical: 16
                    }}
                >
                    Tell Us a Bit About YOU
                </H2>
                <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input 
                        placeholder="Name" 
                        value={name} 
                        ref={Input => this.nameInputRef = Input}
                        onChangeText={value => { setName(value) }} />
                </Item>
                <Item
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input 
                        placeholder="Age" 
                        value={age} 
                        keyboardType='numeric'
                        ref={Input => this.nameInputRef = Input}
                        onChangeText={value => { setAge(value) }} />
                </Item>
                <Item 
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input 
                        placeholder="Gender" 
                        value={genderOptions[gender].title}
                        onTouchStart={() => setModalVisible(true)} />
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
                    <Input 
                        placeholder="Weight" 
                        value={weight} 
                        keyboardType='numeric'
                        ref={Input => this.nameInputRef = Input}
                        onChangeText={value => { setWeight(value) }} />
                </Item>
                <Item 
                    style={{
                        backgroundColor: '#fff',
                        marginBottom: 8,
                        borderRadius: 24,
                        paddingHorizontal: 16
                    }}
                >
                    <Input 
                        placeholder="Height" 
                        value={height} 
                        keyboardType='numeric'
                        ref={Input => this.nameInputRef = Input}
                        onChangeText={value => { setHeight(value) }} />
                </Item>
                <P
                    style={{
                        color: colors.white,
                        marginVertical: 8,
                        textAlign: 'center'
                    }}
                >
                    Why do we ask? Becoming pranic helps you find the best breathing 
                    exercise. These information will help you enjoy the breathing exercise more.
                </P>
                <Modal isVisible={modalVisible} 
                    swipeDirection={['down']}
                    onSwipeComplete={() => setModalVisible(false)}
                    style={{
                        margin: 0,
                        justifyContent: 'flex-end'
                    }}
                    >
                        <View
                            style={{
                                minHeight: metrics.getHeightFromDP(30),
                                maxHeight: metrics.getHeightFromDP(70),
                                backgroundColor: colors.white,
                                padding: 24,
                                justifyContent: 'center',
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 16
                            }}
                        >
                            <View
                                style={{
                                    height: 5,
                                    width: 30,
                                    backgroundColor: colors.gray,
                                    borderRadius: 16,
                                    alignSelf: 'center',
                                    marginBottom: 18
                                }}
                            ></View>
                            <SelectDefault
                                isModal={true}
                                data={genderOptions}
                                onItemSelect={ this.onGenderSelect.bind(this) }
                            />
                        </View>
                </Modal>
            </View>
        );
    }
}


const PersonalityDATAFixed = [
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

export class SliderFormBehaviour extends Component {
    
    onBehaviourSelect(Personality) {
        const { setPersonalityData } = this.props;
        setPersonalityData(Personality.Id);
    }

    render() {
        const { personalityData } = this.props;
        return(
            <View>
                <H2 
                    style={{
                        color: colors.white,
                        textAlign: 'center', 
                        marginVertical: 16
                    }}
                >
                    How Would You Define Yourself
                </H2>
                <SelectDefault 
                    data={PersonalityDATAFixed}
                    selectedData={personalityData}
                    onItemSelect={ this.onBehaviourSelect.bind(this) } />
            </View>
        );
    }
}

export class SliderFormToWorkOn extends Component {

    onExerciseSelect(Exercise) {
        const { setExerciseData } = this.props;
        setExerciseData(Exercise.Id);
    }
        
    render(){
        const { exerciseData } = this.props;
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
        return(
            <View>
                <H2 
                    style={{
                        color: colors.white,
                        textAlign: 'center', 
                        marginVertical: 16
                    }}
                >
                    What Whould You life to Work on More
                </H2>
                <SelectDefault 
                    data={workOnData}
                    selectedData={exerciseData}
                    onItemSelect={this.onExerciseSelect.bind(this)} />
            </View>
                
        );
    }
}


export class SliderFormSubmit extends Component {
    
    render(){
        return(
            <View>
                <H2 
                    style={{
                        color: colors.white,
                        textAlign: 'center', 
                        marginVertical: 16
                    }}
                >
                    Change your life
                </H2>
                <TouchableOpacity
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
                </TouchableOpacity>
            </View>
        );
    }
}