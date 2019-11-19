import React, { Component } from 'react';
import { Container, Content, Footer, Thumbnail, Text, Button } from 'native-base';

import BottomNavBar from '../../organisms/BottomNavBar';


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Thumbnail source={{ uri: "https://upload.wikimedia.org/wikipedia/en/9/9e/Mobilelegends.png" }}
                        style={{ height: 160, width: '70%', alignSelf: 'center', marginTop: 100, marginBottom: 10 }} />
                    <Text style={nbStyles.subtitle}>
                        Welcome to Mobile Legend
                    </Text>
                    <Text style={nbStyles.subtitle}>
                        Heroes Dictionary
                    </Text>
                    <Text style={nbStyles.subtitle}>
                        Start Exploring/Creating Your Favorites Heroes
                    </Text>
                    <Button block style={nbStyles.btnStart} onPress={() => this.props.navigation.navigate('Heroes')} >
                        <Text>Start</Text>
                    </Button>
                </Content>
                <Footer>
                    <BottomNavBar active="home" />
                </Footer>
            </Container>
        )

    }
}

const nbStyles = {
    subtitle: {
        textAlign: 'center',
        color: '#ACD2FA'
    },
    btnStart: {
        width: '70%',
        alignSelf: 'center',
        marginTop: 20
    }
}