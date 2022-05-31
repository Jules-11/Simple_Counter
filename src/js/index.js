//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let setCount = 0;
setInterval(() => {
	setCount = setCount + 1;
	ReactDOM.render(
		<Home seconds={setCount} />,
		document.querySelector("#app")
	);
}, 1000);
