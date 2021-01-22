import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import TrailerPlayer from "./components/TrailerPlayer/TrailerPlayer";
import {
	MovieTrailerContext,
	movie_trailer,
	MovieTrailerProvider,
} from "./context/MovieTrailerContext";
import MovieDetailsContainer from "./components/Banner/MovieDetailsContainer";
import { Route, useHistory } from "react-router-dom";
import ContextConsumer from "./ContextConsumer";

function App() {
	console.log("App component History ", useHistory());
	return (
		<div className="App">
			<MovieTrailerProvider>
				<Header />
				<Banner />
				<TrailerPlayer />
			</MovieTrailerProvider>
		</div>
	);
}

export default App;
