import { connect } from 'react-redux';
import Heroes from './pages/Heroes';
import { fetchHeroes } from '../config/redux/actions/heroes';

const mapStateToProps = (state) => ({
    data: state
})

const mapDispatchToProps = (dispatch) => ({
    fetchHeroes: () => {
        dispatch(fetchHeroes())
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Heroes);