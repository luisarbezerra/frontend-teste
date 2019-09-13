import { connect } from 'react-redux'
import Content from './Content'
import {
    fetchEvents
} from '../../actions/Eventos'


const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchEvents: () => {
            dispatch(fetchEvents());
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Content);
