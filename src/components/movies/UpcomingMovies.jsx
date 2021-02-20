import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../../thunk_functions/fetchMovies";
import MovieSection from "../MovieSection/MovieSection";
import MovieCard from "../MovieSection/MovieCard";

const UpcomingMovies = () => {
	const dispatch = useDispatch();
	const movies_status = useSelector((state) => {
		return state.upcoming_movies.status;
	});
	const allIds = useSelector((state) => state.upcoming_movies.movies.allIds);
	const moviesByIds = useSelector(
		(state) => state.upcoming_movies.movies.byIds
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

	useEffect(() => {
		dispatch(fetchUpcomingMovies(1));
	}, [fetchUpcomingMovies]);

	return (
		<>
			<div className="upcoming_movies">
				<MovieSection
					title={"Upcoming Movies"}
					movies={movieList}
					class_name={"upcoming_movies"}
					movies_status={movies_status}
				/>
			</div>
		</>
	);
};

export default UpcomingMovies;
