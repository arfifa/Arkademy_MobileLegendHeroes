import React, { Component } from 'react';
import { FooterTab, Button, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';


class BottomNavBar extends Component {
    render() {
        return (
            <FooterTab>
                <Button vertical active={this.props.active == "home" ? true : false} onPress={() => this.props.navigation.navigate('Home')}>
                    <Icon name="home" />
                    <Text>Home</Text>
                </Button>
                <Button vertical active={this.props.active == "heroes" ? true : false} onPress={() => this.props.navigation.navigate('HeroesStack')}>
                    <Icon name="people" />
                    <Text>Heroes</Text>
                </Button>
                <Button vertical active={this.props.active == "setting" ? true : false} onPress={() => this.props.navigation.navigate('Setting')}>
                    <Icon name="settings" />
                    <Text>Setting</Text>
                </Button>
            </FooterTab>
        )
    }
}

export default withNavigation(BottomNavBar);