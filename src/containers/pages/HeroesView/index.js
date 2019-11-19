import React, { Component } from 'react';
import { Container, Content, Text, Header, Left, Body, Right, Icon, ListItem, List, Thumbnail, Button } from 'native-base';
import Axios from 'axios';
import { connect } from 'react-redux';

import { getHero } from '../../../config/redux/actions/heroes';
import { fetchHeroes } from '../../../config/redux/actions/heroes';



class HeroesView extends Component {

    handleDelete = (id) => {
        Axios.delete(`http://10.0.3.2:3004/heroes/${id}`)
            .then(() => {
                this.props.dispatch(fetchHeroes())
                this.props.navigation.navigate('Heroes')
            })
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('heroID', undefined)
        this.props.dispatch(getHero(id))
    }

    renderHeader() {
        return (
            <Header>
                <Left style={{ paddingRight: 10 }}>
                    <Icon name="arrow-back" style={{ color: '#E48394', paddingLeft: 7 }} onPress={() => this.props.navigation.navigate('Heroes')} />
                </Left>
                <Body>
                    <Text style={{ color: '#fff' }}>
                        Heroes Detail
                    </Text>
                </Body>
                <Right />
            </Header>
        )
    }

    render() {
        const { hero, fetching } = this.props.data
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
            <Container>
                {this.renderHeader()}
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail
                                square size={80}
                                source={{ uri: hero.imageUri }}
                            />
                            <Body>
                                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{hero.name}</Text>
                                <Text>{hero.title}</Text>

                                <Text
                                    style={{ color: 'blue', fontSize: 20, marginTop: 10 }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HeroesEdit', {
                                            heroID: hero.id
                                        })
                                    }} >Edit
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>- Role -</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{hero.role}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>- Speciality -</Text>
                        </ListItem>
                        <ListItem>
                            <Text>{hero.speciality}</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>- Skill -</Text>
                        </ListItem>
                        <ListItem>
                            <Text>...</Text>
                        </ListItem>
                    </List>
                    <Button full danger onPress={() => this.handleDelete(hero.id)}>
                        <Text>
                            Delete
                    </Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state
})

export default connect(mapStateToProps)(HeroesView);