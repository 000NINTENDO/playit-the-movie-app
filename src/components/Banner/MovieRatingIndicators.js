import React from "react";
import RatingPercentages from "./RatingPercentages";
import "./MovieRatingIndicators.css";

const MovieRatingIndicator = ({ rating }) => {
	return (
		<>
			<div className="banner_movie_ratings">
				<RatingPercentages rating={rating} />
				<div className="banner_movie_rating__text">
					<p>USER</p>
					<p>SCORE</p>
				</div>
			</div>
		</>
	);
};

export default MovieRatingIndicator;
