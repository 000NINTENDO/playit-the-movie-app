import React from "react";

let movie = {};
const RandomMovieContext = React.createContext(movie);

const randomMovieReducer = (state, action) => {
	switch (action.type) {
		case "addRandomMovie":
			return (state = action.payload);
	}
};

export { movie, RandomMovieContext, randomMovieReducer };
