import { func } from "prop-types";
import React from "react";
import Digits from "./Digits";

const Card = ({ secondsArr }) => {
	for (let i = secondsArr.length; i < 5; i++) {
		secondsArr.unshift(0);
	}
	console.log(secondsArr);

	return (
		<div className="row pt-2 mt-5 g-2">
			<Digits
				content={<i className="bi bi-hourglass-split"></i>}
				fontSize={"11vw"}
				paddingTop={"8vw"}
				backgroundColor={"red"}
			/>
			<Digits
				content={secondsArr[0]}
				fontSize={"20vw"}
				paddingTop={"0"}
				backgroundColor={"#212529"}
			/>
			<Digits
				content={secondsArr[1]}
				fontSize={"20vw"}
				paddingTop={"0"}
				backgroundColor={"#212529"}
			/>
			<Digits
				content={secondsArr[2]}
				fontSize={"20vw"}
				paddingTop={"0"}
				backgroundColor={"#212529"}
			/>
			<Digits
				content={secondsArr[3]}
				fontSize={"20vw"}
				paddingTop={"0"}
				backgroundColor={"#212529"}
			/>
			<Digits
				content={secondsArr[4]}
				fontSize={"20vw"}
				paddingTop={"0"}
				backgroundColor={"#212529"}
			/>
		</div>
	);
};

export default Card;
