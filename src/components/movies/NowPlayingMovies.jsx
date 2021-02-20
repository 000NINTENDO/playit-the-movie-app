import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNowPlayingMovies } from "../../thunk_functions/fetchMovies";
import MovieSection from "../MovieSection/MovieSection";
import MovieCard from "../MovieSection/MovieCard";

const NowPlayingMovies = () => {
	const dispatch = useDispatch();
	const movies_status = useSelector((state) => {
		return state.now_playing_movies.status;
	});
	const allIds = useSelector((state) => state.now_playing_movies.movies.allIds);
	const moviesByIds = useSelector(
		(state) => state.now_playing_movies.movies.byIds
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
		dispatch(fetchNowPlayingMovies(1));
	}, [fetchNowPlayingMovies]);

	return (
		<>
			<div className="now_playing">
				<MovieSection
					title={"Now Playing"}
					movies={movieList}
					class_name={"now_playing"}
					movies_status={movies_status}
				/>
			</div>
		</>
	);
};

export default NowPlayingMovies;
