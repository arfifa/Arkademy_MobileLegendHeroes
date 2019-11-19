import React, { Component } from 'react';
import { Container, Content, Text, Icon, Right, Left, Body, Header, Label, Input, Item, Form } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Axios from 'axios';
import { connect } from 'react-redux';

import { fetchHeroes } from '../../../config/redux/actions/heroes';



class HeroesAdd extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            imageUri: "",
            title: "",
            role: "",
            speciality: "",
            id: 1,
            isValid: false
        }
    }

    _handleDone() {
        const self = this
        Axios({
            method: 'post',
            url: 'http://10.0.3.2:3004/heroes',
            data: this.state
        }).then(() => {
            self.props.dispatch(fetchHeroes())
            self.props.navigation.navigate('Heroes')
        })
    }

    _checkIsValid() {
        const self = this
        setTimeout(() => {
            const { name, title, role, speciality, imageUri } = this.state
            if (name != "" && imageUri != "" && title != "" && role != "" && speciality != "") {
                let timeStamp = new Date().getTime()
                self.setState({ isValid: true, id: timeStamp })
            } else {
                self.setState({ isValid: false })
            }
        }, 500);

    }


    renderHeader() {
        const { isValid } = this.state
        return (
            <Header>
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Heroes')}>
                        <Icon name="arrow-back" style={{ color: 'pink', paddingLeft: 5 }} />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text>New Hero</Text>
                </Body>
                <Right>
                    {
                        isValid ?
                            (
                                <TouchableOpacity onPress={() => this._handleDone()}>
                                    <Text style={{ color: 'pink', paddingRight: 5 }}>Done</Text>
                                </TouchableOpacity>
                            ) :
                            (
                                <Text style={{ color: 'white', paddingRight: 5 }}>Done</Text>
                            )
                    }

                </Right>
            </Header>
        )
    }

    render() {
        return (
            <Container>
                {this.renderHeader()}
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                onChangeText={(name) => {
                                    this.setState({ name })
                                    this._checkIsValid()
                                }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Image Uri</Label>
                            <Input
                                onChangeText={(imageUri) => {
                                    this.setState({ imageUri })
                                    this._checkIsValid()
                                }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Title</Label>
                            <Input
                                onChangeText={(title) => {
                                    this.setState({ title })
                                    this._checkIsValid()
                                }} />
                        </Item>
                        <Item floatingLabel>
                            <Label>Role</Label>
                            <Input
                                onChangeText={(role) => {
                                    this.setState({ role })
                                    this._checkIsValid()
                                }} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Speciality</Label>
                            <Input
                                onChangeText={(speciality) => {
                                    this.setState({ speciality })
                                    this._checkIsValid()
                                }} />
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(HeroesAdd);