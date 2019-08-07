import React from "react";
import "./style.css";

const Cards = props => (
	<div
		className="card"
		value={props.id}
		onClick={() => props.handleClick(props.id)}
	>
		<div className="img-container">
			<img alt="" src={props.image} />
		</div>
	</div>
);

export default Cards;
