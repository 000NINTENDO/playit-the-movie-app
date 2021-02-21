import React, { useEffect, useState } from "react";
import Header from "../home_page/components/Header";
import Banner from "../movie_page/components/Banner";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import Details from "../movie_page/components/Details";
import VideoPlayer from "./components/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../actions_types/actionTypes";
import Loader from "./components/Loader";

const MoviePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();
	const movie_id = params.movie_id;
	const dispatch = useDispatch();
	let movie;
	const movie_status = useSelector((state) => {
		return state.movie_page.movie_status;
	});
	const allIds = useSelector((state) => state.movie_page.movies.allIds);
	console.log("all Ids", allIds);

	// allIds.map((id) => {
	// 	if(id === movie_id) {
	// 		setIsLoaded
	// 	}
	// })

	movie = useSelector((state) => state.movie_page.movies.byIds[movie_id]);

	console.log("movie from state", movie);

	useEffect(() => {
		dispatch({ type: type.movie_requested, payload: movie_id });
	}, []);

	useEffect(() => {
		for (let id of allIds) {
			if (id == movie_id) {
				setIsLoading(false);
				console.log("id", id);
			}
		}
	}, [allIds]);

	const onLoaded = (
		<>
			<Banner movie={movie} />
			<Details movie={movie} />
			<VideoPlayer />
		</>
	);
	// const Loader = <Loader />;

	return (
		<>
			<Header />
			{isLoading === false ? onLoaded : <Loader />}
		</>
	);
};

export default MoviePage;
