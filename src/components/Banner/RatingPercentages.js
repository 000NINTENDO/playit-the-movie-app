import React from "react";
import ProgressCircle from "./ProgressCircle";
import "./RatingPercentages.css";

const RatingPercentages = ({ rating }) => {
	const maxValue = 10;
	const currentValue = rating;
	const currentProgress = Math.round((currentValue * 100) / maxValue);

	return (
		<div className="progress_bar">
			<div className="progress_bar__outer_circle"></div>
			<div className="progress_bar__currentProgress">
				<h4 className="currentProgress__text">
					{currentProgress}
					<span className="current_progress__percent_sign">%</span>
				</h4>
			</div>
			<ProgressCircle
				maxValue={maxValue}
				currentValue={currentValue}
				currentProgress={currentProgress}
			/>
		</div>
	);
};

export default RatingPercentages;
