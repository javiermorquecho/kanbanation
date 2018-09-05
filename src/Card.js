import React, { Component } from 'react';
import CheckList from './CheckList';

class Card extends Component {
    constructor(){
	super(...arguments);
	this.state = {
	    showDetails: false
	};
    }

    render(){
	let cardDetails;
	if ( this.state.showDetails ){
	    cardDetails = (
		<div classNames="card__details">
		    {this.props.description}
		    <CheckList cardId={this.props.id} tasks={this.props.taks} />
		</div>
	    );
	};	

	return (
	    <div className="card">
		<div className="card__title">{this.props.title}</div>
		{cardDetails}
	    </div>
	);
    }
}

export default Card;
