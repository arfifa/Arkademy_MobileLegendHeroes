import React, { Component } from 'react';
import { List, ListItem, Body, Thumbnail, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class ListHeroes extends Component {
    render() {
        return (
            <List>
                <ListItem onPress={() => {
                    this.props.navigation.navigate('HeroesView', {
                        heroID: this.props.hero.id
                    })
                }} key={this.props.key}>
                    <Thumbnail
                        square size={80}
                        source={{ uri: this.props.hero.imageUri }} />
                    <Body>
                        <Text>{this.props.hero.name}</Text>
                        <Text>{this.props.hero.title}</Text>
                    </Body>
                </ListItem>
            </List>
        )
    }
}

export default withNavigation(ListHeroes);
