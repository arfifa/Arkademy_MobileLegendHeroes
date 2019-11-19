import Axios from "axios";

export function fetchHeroes() {
    return {
        type: 'FETCH_HEROES',
        payload: Axios.get('http://10.0.3.2:3004/heroes')
    }
}

export function getHero(id) {
    return {
        type: 'GET_HERO',
        payload: Axios.get(`http://10.0.3.2:3004/heroes/${id}`)
    }
}