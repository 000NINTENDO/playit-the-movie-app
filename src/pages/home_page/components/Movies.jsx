import React from "react";
import BottomBorder from "./BottomBorder";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import "./Movies.css";

const Movies = () => {
	return (
		<>
			<div className="movies">
				<PopularMovies />
				<BottomBorder />
				<TopRatedMovies />
				<BottomBorder />
				<UpcomingMovies />
				<BottomBorder />
				<NowPlayingMovies />
			</div>
		</>
	);
};

export default Movies;
