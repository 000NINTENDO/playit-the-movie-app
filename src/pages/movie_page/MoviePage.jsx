import React from "react";
import Header from "../../components/header/Header";
import Banner from "./components/banner/Banner";
import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

const browser_history = createBrowserHistory();

const MoviePage = () => {
	const history = useHistory();
	browser_history.push(history.location.pathname);

	console.log("History in Movie Page", history.location.pathname);
	// props.history.push(history.location.pathname);

	return (
		<>
			<Header />
			<Banner />
		</>
	);
};

export default MoviePage;
