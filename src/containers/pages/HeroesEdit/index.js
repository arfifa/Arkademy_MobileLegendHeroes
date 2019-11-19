import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import Axios from 'axios';

import { getHero } from '../../../config/redux/actions/heroes';
import { fetchHeroes } from '../../../config/redux/actions/heroes';

const Form = t.form.Form
const FormSchema = t.struct({
    name: t.String,
    imageUri: t.String,
    title: t.String,
    role: t.String,
    speciality: t.maybe(t.String)
})

class HeroesEdit extends Component {

    componentDidMount() {
        const id = this.props.navigation.getParam('heroID', 'id')
        this.props.dispatch(getHero(id))
    }

    _handleEdit() {
        const id = this.props.navigation.getParam('heroID', 'id')
        const value = this.refs.form.getValue();
        if (value) {
            Axios.put(`http://10.0.3.2:3004/heroes/${id}`, value)
                .then(() => {
                    this.props.dispatch(fetchHeroes())
                    this.props.dispatch(getHero(id))
                    this.props.navigation.navigate('HeroesView')
                })
        }
    }

    render() {
        const { fetching, hero } = this.props.data;
        if (fetching) {
            return (
                <Container>
                    <Content>
                        <Text>Loading...</Text>
                    </Content>
                </Container>
            )
        }

        return (
            <Container style={nbStyle.container}>
                <Content>
                    <Form
                        ref="form"
                        type={FormSchema}
                        value={hero}
                    />
                </Content>
                <Button full primary onPress={() => this._handleEdit()}>
                    <Text>Edit</Text>
                </Button>
            </Container>
        )
    }
}

const nbStyle = {
    container: {
        flex: 1,
        padding: 20
    }
}

const mapStateToProps = (state) => ({
    data: state
})


export default connect(mapStateToProps)(HeroesEdit);