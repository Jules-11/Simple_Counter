import React from "react";

const Jumbotron = () => {
	let jumboStyle = {
		fontFamily: "monospace",
	};
	let title = {
		color: "red",
	};
	return (
		<div
			className="rounded-3 bg-light text-dark border mb-5 mt-5 p-3"
			style={jumboStyle}>
			<h1>
				The <span style={title}>"Simple"</span> Counter
			</h1>
			<figure>
				<blockquote className="blockquote">
					<p>Better three hours too soon than a minute too late.</p>
				</blockquote>
				<figcaption className="blockquote-footer text-dark">
					William Shakespeare.
				</figcaption>
			</figure>
		</div>
	);
};

export default Jumbotron;
