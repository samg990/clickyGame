import React from "react";

function Score(props) {
	return (
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-3 offset-5">Score</h1>
				<p class="lead" />
				<p>Score: {props.score}</p>
				<p>Top Score: {props.topScore}</p>
			</div>
		</div>
	);
}

export default Score;
