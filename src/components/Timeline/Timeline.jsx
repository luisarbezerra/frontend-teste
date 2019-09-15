import React from 'react';
import './Timeline.scss';

import Card from '../Card'

export default class Timeline extends React.Component {
    componentDidMount () {
        this.props.fetchEvents();
    }


    renderCard = (event) => {
        return <Card  key={event[0]} event={event[1]}/>
    }


    renderCards = () => {
        const { events } = this.props;
        return events.map(this.renderCard);
    }
    

    render() {
        return (
            <div className="timeline" id="timeline">
                { this.props.events !== null && this.renderCards() }
            </div>
        );
    }
}   

