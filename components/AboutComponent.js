import React, { Component } from "react";
import { ScrollView, FlatList, Text } from "react-native";
import { VENDORS } from "../shared/vendors";
import { Card, ListItem } from "react-native-elements";

function Mission() {
  return (
    <Card title="Our Mission">
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}

class About extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        vendors: VENDORS
    };
  }

  static navigationOptions = {
    title: "About Newton Camp Realty",
  };

  render() {
    const renderVendor = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{source: require('./images/hands.jpg')}}
        />
      );
    };

    return (
      <ScrollView>
        <Mission />
        <Card title="Become a Vendor">
          <FlatList
            data={this.state.vendors}
            renderItem={renderVendor}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;