import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index";
import Nav from "./components/Nav/Nav";
// import Score from "./components/Score/Score";
import Cards from "./components/Cards/Cards";
import nba from "./nba.json";

function shuffleCards(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

class App extends Component {
	state = {
		nba,
		currentScore: 0,
		topScore: 0,
		clicked: [],
	};

	handleShuffle = () => {
		let carshuf = shuffleCards(nba);
		this.setState({ cards: carshuf });
	};

	handleClick = id => {
		if (this.state.clicked.indexOf(id) === -1) {
			this.handleIncrement();
			this.setState({ clicked: this.state.clicked.concat(id) });
		} else {
			this.handleReset();
		}
	};

	handleIncrement = () => {
		const newScore = this.state.currentScore + 1;
		this.setState({
			currentScore: newScore,
		});
		if (newScore >= this.state.topScore) {
			this.setState({ topScore: newScore });
		} else if (newScore === 8) {
			alert("You Win!");
		}
		this.handleShuffle();
	};

	handleReset = () => {
		this.setState({
			currentScore: 0,
			topScore: this.state.topScore,
			clicked: [],
		});
		this.handleShuffle();
	};
	render() {
		return (
			<Wrapper>
				<Nav />
				{this.state.nba.map(cards => (
					<Cards id={cards.id} key={cards.id} image={cards.image} />
				))}
			</Wrapper>
		);
	}
}

export default App;
