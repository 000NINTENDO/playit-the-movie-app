import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import TrailerPlayer from "./components/TrailerPlayer/TrailerPlayer";
import MovieSection from "./components/MovieSection/MovieSection";
import {
	MovieTrailerContext,
	movie_trailer,
	MovieTrailerProvider,
} from "./context/MovieTrailerContext";
import { Route, useHistory } from "react-router-dom";

function App() {
	console.log("App component History ", useHistory());
	return (
		<div className="App">
			<MovieTrailerProvider>
				<Header />
				<Banner />
				<MovieSection />
				<TrailerPlayer />
			</MovieTrailerProvider>
		</div>
	);
}

export default App;
