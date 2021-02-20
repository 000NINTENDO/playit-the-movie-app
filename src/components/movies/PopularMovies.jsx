import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../../thunk_functions/fetchMovies";
import MovieSection from "../MovieSection/MovieSection";
import MovieCard from "../MovieSection/MovieCard";

const PopularMovies = () => {
	const dispatch = useDispatch();
	const movies_status = useSelector((state) => {
		return state.popular_movies.status;
	});
	const allIds = useSelector((state) => state.popular_movies.movies.allIds);
	const moviesByIds = useSelector((state) => state.popular_movies.movies.byIds);
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
		dispatch(fetchPopularMovies(1));
	}, [fetchPopularMovies]);

	return (
		<>
			<div className="popular_movies">
				<MovieSection
					title={"Popular Movies"}
					movies={movieList}
					class_name={"popular_movies"}
					movies_status={movies_status}
				/>
			</div>
		</>
	);
};

export default PopularMovies;
