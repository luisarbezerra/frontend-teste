import React from 'react';
import './Content.scss';

export default class Content extends React.Component {
    componentWillMount () {
        this.props.fetchEvents();
    }
    render() {
        return (
            <div className="content" id="content">
            Content
            </div>
        );
    }
}   

