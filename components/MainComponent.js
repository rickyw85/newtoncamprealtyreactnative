import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { HOUSES } from '../shared/houses';
import RealEstateInfo from './RealEstateInfoComponent';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES,
            selectedHouse: null
        };
    }

    onHouseSelect(houseId) {
        this.setState({selectedHouse: houseId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Directory
                    houses={this.state.houses}
                    onPress={houseId => this.onHouseSelect(houseId)}
                />
                <RealEstateInfo
                    house={this.state.houses.filter(
                        house => house.id === this.state.selectedHouse)[0]}
                />
            </View>
        );
    }        
}

export default Main;