import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../../thunk_functions/fetchMovies";
import MovieSection from "../MovieSection/MovieSection";
import MovieCard from "../MovieSection/MovieCard";

const TopRatedMovies = () => {
	const dispatch = useDispatch();
	const movies_status = useSelector((state) => {
		return state.trending_movies.status;
	});
	const allIds = useSelector((state) => state.trending_movies.movies.allIds);
	const moviesByIds = useSelector(
		(state) => state.trending_movies.movies.byIds
	);
	let all_movies;
	let movieList;

	if (movies_status === "idle") {
		all_movies = allIds.map((id) => {
			return moviesByIds[id];
		});

		movieList = all_movies.map((movie) => {
			return <MovieCard movie={movie} key={movie.id} />;
		});
	}

	console.log("trending movies", all_movies);

	useEffect(() => {
		dispatch(fetchTopRatedMovies(1));
	}, [fetchTopRatedMovies]);

	return (
		<>
			<div className="top_rated_movies">
				<MovieSection
					title={"Trending Now"}
					movies={movieList}
					class_name={"top_rated_movies"}
					movies_status={movies_status}
				/>
			</div>
		</>
	);
};

export default TopRatedMovies;
