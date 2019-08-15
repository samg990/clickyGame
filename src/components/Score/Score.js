import React from "react";
import "./Score.css";

function Score(props) {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-3 offset-5">Score</h1>
				<p className="lead" />
				<p className="score">Score: {props.currentScore}</p>
				<p className="topscore">Top Score: {props.topScore}</p>
			</div>
		</div>
	);
}

export default Score;
