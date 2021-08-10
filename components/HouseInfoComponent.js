import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { HOUSES } from '../shared/houses';
import { REVIEWS } from '../shared/reviews';

function RenderHouse({props}) {

    const {house} = props;

    if (house) {
        return (
            <Card
                featuredTitle={house.name}
                image={require('./images/house1.jpg')}>
                <Text style={{margin: 10}}>
                    {house.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class HouseInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES,
            reviews: REVIEWS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Real Estate Listings'
    }

    render() {
        const houseId = this.props.navigation.getParam('houseId');
        const house = this.state.houses.filter(house => house.id === houseId)[0];
        const reviews = this.state.reviews.filter(review => review.houseId === houseId);
        return (
            <ScrollView>
                <RenderHouse house={house}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}

export default HouseInfo;