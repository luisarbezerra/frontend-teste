import { connect } from 'react-redux'
import Timeline from './Timeline'
import {
    fetchEvents
} from '../../actions/Events'

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


export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
