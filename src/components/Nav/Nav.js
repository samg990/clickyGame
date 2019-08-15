import React from "react";

function Nav(props) {
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper red accent-2">
					<ul>
						<li id="title">Clicky Game</li>

						<li> Score: {props.score}</li>
						<li> Top Score: {props.topScore}</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
