import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import TrailerPlayer from "./components/TrailerPlayer";
// import {
// 	MovieTrailerContext,
// 	movie_trailer,
// 	MovieTrailerProvider,
// } from "../context/MovieTrailerContext";

export const HomePage = () => {
	return (
		<>
			<Header />
			<Banner />
			<Movies />
			<TrailerPlayer />
		</>
	);
};

export default HomePage;
