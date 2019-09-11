import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Content from './Content'
import './App.scss';

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => {
    return {
    }
}

const App = ( props ) => (
    <Fragment>
        <Content />
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
