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

    renderBluetoothDevices(error, device) {
        const { devices } = this.state;
        if (error) {
            console.log(error);
            return
        }
        console.log(devices.length);
        const deviceName = device.name;
        console.log(deviceName);
        if (devices.find(x => x.name === deviceName) === undefined)
            this.setState({
                devices: [...devices, device]
            }, () => console.log('setstate'));
    }
    
    scanDevices() {
        //this.manager.startDeviceScan(null, { allowDuplicates: false }, (error, device) => this.renderBluetoothDevices());
    }

    stopScanDevies() {
        alert('stopped')
        this.manager.stopDeviceScan();
    }

    componentDidMount() { 
        const subscription = this.manager.onStateChange((state) => {
            if (state === 'PoweredOn') {
                this.scanDevices();
                setTimeout(this.stopScanDevies.bind(this), 300);
                subscription.remove();
            }
        }, true);
    }

    render() {
        return(
            <Container>
                    <StatusBar
                      hidden={true}
                    />
                    <FlatList data={this.state.devices} renderItem={(device) => (<View>{device.name}</View>)} />
            </Container>
        );
    }
}