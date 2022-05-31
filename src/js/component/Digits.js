import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const Digits = (props) => {
	let digitStyle = {
		textAlign: "center",
		fontFamily: "monospace",
		fontSize: props.fontSize,
	};
	let backgroundStyle = {
		color: "white",
		borderRadius: "5px",
		paddingTop: props.paddingTop,
		backgroundColor: props.backgroundColor,
	};
	return (
		<div className="col-2 mb-5" style={digitStyle}>
			<div className="h-100" style={backgroundStyle}>
				{props.content}
			</div>
		</div>
	);
};

export default Digits;
