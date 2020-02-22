import React, { Component } from "react";
import { View, Text, StatusBar, FlatList } from "react-native";
import { colors } from "../../styles/index";
import { Container } from "../../components/layout/index";
import { BleManager } from "react-native-ble-plx";
import { SelectDefault } from "../../components/common/inputs/Select";

export default class ConnectBluetoothScreen extends Component {
    manager = new BleManager();
    state = {
        devices: []
    }
    //'4fafc201-1fb5-459e-8fcc-c5c9c331914b'
    //'beb5483e-36e1-4688-b7f5-ea07361b26a8'
    onDeviceSelect(device) {
        device.device.connect()
        .then((device) => {
            return device.discoverAllServicesAndCharacteristics()
        })
        .then((device) => {
            device.writeCharacteristicWithResponseForService('4fafc201-1fb5-459e-8fcc-c5c9c331914b', 'beb5483e-36e1-4688-b7f5-ea07361b26a8', 'QUJDMTIzMTIz')
        })
        .catch((error) => {
            // Handle errors
        });
    }

    renderBluetoothDevices(error, device) {
        const { devices } = this.state;
        if (error) {
            console.log(error);
            return
        }
        const title = device.name;
        const Id = device.id;
        if (devices.find(x => x.title === title) === undefined)
            this.setState({
                devices: [...devices, {
                    Id,
                    title,
                    device
                }]
            });
    }
    
    scanDevices() {
        this.manager.startDeviceScan(null, { allowDuplicates: false }, (error, device) => this.renderBluetoothDevices(error, device));
    }

    stopScanDevies() {
        this.manager.stopDeviceScan();
    }

    componentDidMount() { 
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanDevices();
                setTimeout(this.stopScanDevies.bind(this), 3000);
                subscription.remove();
            }
        }, true);
    }

    render() {
        const { devices } = this.state;
        return(
            <Container>
                    <StatusBar
                      hidden={true}
                    />
                    {/* <FlatList data={devices} renderItem={({item}) => {
                        console.log('render: ' + item);
                        return <View><Text>{item.title}</Text></View>
                    }} /> */}
                    <SelectDefault 
                        data={devices}
                        isModal={true}
                        isMultiSelect={false}
                        onItemSelect={this.onDeviceSelect.bind(this)}
                    />
            </Container>
        );
    }
}