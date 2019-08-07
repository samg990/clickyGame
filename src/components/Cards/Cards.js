import React from "react";

const Cards = props => (
	<div
		className="card"
		value={props.id}
		onClick={() => props.handleClick(props.id)}
	>
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);

export default Cards;
