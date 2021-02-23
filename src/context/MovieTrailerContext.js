import React, { useReducer } from "react";

const movie_trailer = {
	isOpen: false,
	movie: "",
};

const MovieTrailerContext = React.createContext();

const movieTrailerReducer = (state, action) => {
	switch (action.type) {
		case "playTrailer":
			return {
				...state,
				isOpen: true,
				movie: action.payload,
			};
		case "closePlayer":
			return {
				...state,
				isOpen: false,
				movie: "",
			};
		default:
			return state;
	}
};

const MovieTrailerProvider = (props) => {
	const [movieTrailer, setMovieTrailer] = useReducer(
		movieTrailerReducer,
		movie_trailer
	);

	console.log("Movie Trailer Context", movieTrailer);

	return (
		<MovieTrailerContext.Provider value={{ movieTrailer, setMovieTrailer }}>
			{props.children}
		</MovieTrailerContext.Provider>
	);
};

export {
	movie_trailer,
	MovieTrailerContext,
	movieTrailerReducer,
	MovieTrailerProvider,
};
