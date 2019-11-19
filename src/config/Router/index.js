import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Home, Heroes, Setting, HeroesAdd, HeroesView, HeroesEdit } from '../../containers/pages';
import { createStackNavigator } from 'react-navigation-stack';

const HeroesStack = createStackNavigator(
    {
        Heroes,
        HeroesAdd,
        HeroesView,
        HeroesEdit
    },
    {
        initialRouteName: 'Heroes',
        headerMode: 'none'
    }
)


const Router = createSwitchNavigator(
    {
        Home,
        HeroesStack,
        Setting,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

export default createAppContainer(Router);