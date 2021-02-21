import React from "react";
import Poster from "./Poster";
import MovieDetailes from "../components/MovieDetailes";
import "./Details.css";

const Details = ({ movie }) => {
	return (
		<>
			<div className="movie_page_movie_details">
				<div className="movie_page_movie_details__movie_poster_and_details">
					<div className="movie_page_movie_details__movie_poster_and_details__poster">
						<Poster movie={movie} />
					</div>
					<div className="movie_page_movie_details__movie_poster_and_details__details">
						<MovieDetailes movie={movie} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Details;
