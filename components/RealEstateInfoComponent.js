import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderHouse({house}) {
    if (house) {
        return (
            <Card 
                featuredTitle={house.name}
                image={require('./images/house1.jpg')}
            >
                <Text style={{margin: 10}}>
                    {house.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RealEstateInfo(props) {
    return <RenderHouse house={props.house} />;
}

export default RealEstateInfo;