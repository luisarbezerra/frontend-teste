import React from 'react';
import './Timeline.scss';

export default class Timeline extends React.Component {
    componentDidMount () {
        this.props.fetchEvents();
    }
    
    render() {
        return (
            <div className="timeline" id="timeline">
            Content
            </div>
        );
    }
}   

