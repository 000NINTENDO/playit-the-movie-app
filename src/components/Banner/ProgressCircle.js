import React, { useEffect, useRef } from "react";

const ProgressCircle = ({ currentProgress, maxValue, currentValue }) => {
	const progressCircle = useRef();
	let stroke;
	const progressColor = (currentProgress) => {
		if (currentProgress <= 35) {
			stroke = "#EA3B3B";
			return;
		} else if (currentProgress > 35 && currentProgress <= 60) {
			stroke = "#FF9900";
			return;
		} else {
			stroke = "#20A435";
			return;
		}
	};

	const showProgress = (maxValue, currentValue, circumeferrence) => {
		const progress =
			circumeferrence - (circumeferrence * currentValue) / maxValue;
		console.log("progress: ", progress);
		progressCircle.current.style.strokeDashoffset = progress;
	};

	useEffect(() => {
		progressCircle.current.style.transform = "rotate(-90deg)";
		const radius = progressCircle.current.r.baseVal.value;
		const circumeferrence = (2 * Math.PI * radius).toPrecision(5);
		progressCircle.current.style.strokeDasharray = circumeferrence;
		showProgress(maxValue, currentValue, circumeferrence);
	}, [currentProgress]);

	progressColor(currentProgress);

	return (
		<svg className="progress_bar__circle" width="54" height="54">
			<circle
				ref={progressCircle}
				className="progress_bar__progress_circle"
				stroke={stroke}
				strokeWidth="3"
				r="25.5"
				cx="27"
				cy="27"
				fill="transparent"
			/>
			<circle
				className="progress_bar__progress_circle__clone"
				stroke={stroke}
				strokeWidth="3"
				r="25.5"
				cx="27"
				cy="27"
				fill="transparent"
			/>
		</svg>
	);
};

export default ProgressCircle;
