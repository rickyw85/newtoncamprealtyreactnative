import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { HOUSES } from '../shared/houses';

class Listings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES
        };
    }

    static navigationOptions = {
        title: 'Listings'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderListingsItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('HouseInfo', { houseId: item.id })}
                    leftAvatar={{ source: require('./images/house1.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.houses}
                renderItem={renderListingsItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Listings;