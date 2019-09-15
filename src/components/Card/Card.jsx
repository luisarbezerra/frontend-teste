import React from 'react';

import './Card.scss';
import  { ReactComponent as Check }    from '../../assets/images/check.svg'
import  { ReactComponent as Calendar } from '../../assets/images/calendar.svg'
import  { ReactComponent as Clock }    from '../../assets/images/clock.svg'
import  { ReactComponent as Money }    from '../../assets/images/money.svg'
import  { ReactComponent as Place }    from  '../../assets/images/place.svg'

export default class Card extends React.Component {

    formattedDate = (d) => {
        d = new Date(d)
        return [d.getDate(), d.getMonth()+1, d.getFullYear()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
    }

    formattedTime = (d) => {
        d = new Date(d)
        return [d.getHours(), d.getMinutes()]
            .map(n => n < 10 ? `0${n}` : `${n}`).join(':');
    }


    renderRow = (product) => {
        return (
            <div key={product.product_name} className="product-row">
                <span className="product">{product.product_name}</span>
                <span>R${product.product_price},00</span>
            </div>
        )
    }


    renderRows = () => {
        return this.props.event.products.map(product => this.renderRow(product));
    }

    render() {
        return (
            <div className="card">
                <Check className="check-icon"/>
                
                <div className="card-content">
                    <div className="card-header">
                        <div>
                            <Calendar className="header-icon"/>
                            <span className="header-span"> {this.formattedDate(this.props.event.timestamp)}</span>
                        </div>
                        <div>
                            <Clock className="header-icon"/>
                            <span className="header-span"> {this.formattedTime(this.props.event.timestamp)}</span>
                        </div>
                        <div>
                            <Place className="header-icon"/>
                            <span className="header-span"> {this.props.event.store_name}</span>
                        </div>
                        <div>
                            <Money className="header-icon"/>
                            <span className="header-span"> R${this.props.event.revenue},00</span>
                        </div>
                    </div>

                    <div className= "card-body">
                        <div className="card-produto">
                            <span className="tag">
                                Produto
                            </span>
                        </div>
                        <div className="card-preco">
                            <span className="tag">
                                Preço
                            </span>
                        </div>
                    </div>

                    <div className= "card-products">
                        { this.renderRows() }
                    </div>
                </div>
            </div>
        );
    }
}   

