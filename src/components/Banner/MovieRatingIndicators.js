import React from "react";
import RatingPercentages from "./RatingPercentages";
import "./MovieRatingIndicators.css";

const MovieRatingIndicator = () => {
	return (
		<>
			<div className="banner_movie_ratings">
				<RatingPercentages />
				<div className="banner_movie_rating__text">
					<p>USER</p>
					<p>SCORE</p>
				</div>
			</div>
		</>
	);
};

export default MovieRatingIndicator;
