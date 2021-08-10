import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { HOUSES } from '../shared/houses';
import { NEWTON } from '../shared/newton';
import { VENDORS } from '../shared/vendors';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/house1.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES,
            newton: NEWTON,
            vendors: VENDORS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.houses.filter(house => house.featured)[0]}
                />
                <RenderItem 
                    item={this.state.newton.filter(newt => newt.featured)[0]}
                />
                <RenderItem 
                    item={this.state.vendors.filter(vendor => vendor.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;