import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Timeline from './Timeline'
import './App.scss';

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({

})

const App = ( props ) => (
    <Fragment>
        <Timeline />
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
