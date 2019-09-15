import React from 'react';
import './Card.scss';
import  { ReactComponent as Check } from '../../assets/images/check.svg'
export { Check };

export default class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <img className="check-icon" alt="check-icon" src={Check}/>
                    <span className="circle"/>
                    <span className="tag">
                        asasa
                    </span>
                    <time>xxx</time>
                    <p>kkk</p>
                </div>
            </div>
        );
    }
}   

