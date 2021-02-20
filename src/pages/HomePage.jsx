import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Movies from "../components/movies/Movies";
import TrailerPlayer from "../components/TrailerPlayer/TrailerPlayer";
import {
	MovieTrailerContext,
	movie_trailer,
	MovieTrailerProvider,
} from "../context/MovieTrailerContext";

export const HomePage = () => {
	return (
		<>
			<MovieTrailerProvider>
				<Header />
				<Banner />
				<Movies />
				<TrailerPlayer />
			</MovieTrailerProvider>
		</>
	);
};

export default HomePage;
