import React, { Component } from 'react';
import { Container, Content, Footer, Right, Header, Body, Icon, Left, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

import BottomNavBar from '../../organisms/BottomNavBar';
import ListHeroes from '../../organisms/ListHeroes';


export default class Heroes extends Component {
    constructor() {
        super()
        this.state = {
            heroes: []
        }
    }

    componentDidMount() {
        this.props.fetchHeroes()
    }

    renderHeader() {
        return (
            <Header>
                <Left />
                <Body>
                    <Text style={{ color: '#fff' }}>Heroes</Text>
                </Body>
                <Right style={{ paddingRight: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HeroesAdd')}>
                        <Icon name="add" style={{ color: '#E48394' }} />
                    </TouchableOpacity>
                </Right>
            </Header>
        )
    }

    render() {
        if (this.props.data.fetching) {
            return (
                <Content>
                    <Text>Loading...</Text>
                </Content>
            )
        }
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    {this.props.data.heroes.map((hero) =>
                        <ListHeroes hero={hero} key={hero.id} />
                    )}
                </Content>
                <Footer>
                    <BottomNavBar active="heroes" />
                </Footer>
            </Container>
        )
    }
}