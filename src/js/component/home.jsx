import React from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";

//create your first component
const Home = (props) => {
	let secondsToString = props.seconds.toString();
	let secondsArr = secondsToString.split("");
	console.log(secondsArr);

	return (
		<div>
			<Navbar />
			<div className="container overflow-hidden">
				<Jumbotron />
				<Card secondsArr={secondsArr} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;

//
