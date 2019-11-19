import React, { Component } from 'react';
import { Container, Content, Text, Footer } from 'native-base';

import BottomNavBar from '../../organisms/BottomNavBar';


export default class Setting extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text style={nbStyle.subtitle}>Setting</Text>
                </Content>
                <Footer>
                    <BottomNavBar active="setting" />
                </Footer>
            </Container>
        )
    }
}

const nbStyle = {
    subtitle: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
}