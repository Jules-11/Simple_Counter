import React from "react";

const Footer = () => {
	let footStyle = {
		fontFamily: "monospace",
	};
	return (
		<div className="mt-3  bg-dark" style={footStyle}>
			<div className="p-2 bg-dark text-white text-center">
				<span>Made with ❤️ by </span>
				<a
					href="https://github.com/Jules-11"
					target="_blank"
					className="text-white">
					Julien Galeuzzi
				</a>
			</div>
		</div>
	);
};

export default Footer;
