import * as type from "../actions_types/actionTypes";

const initialState = {
	movie_status: "idle",
	movies: {
		allIds: [],
		byIds: {},
	},
};

const movie = (state, action) => {
	const movie = action.payload;
	const id = movie.id;
	const byId = {
		[id]: movie,
	};

	return {
		...state,
		movie_status: "success",
		movies: {
			...state.movies,
			allIds: [...state.movies.allIds, id],
			byIds: {
				...state.movies.byIds,
				...byId,
			},
		},
	};
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.movie_fetched:
			return movie(state, action);
		case type.movie_fetching_error:
			return {
				...state,
				movie_status: "error",
			};
		case type.movie_requested:
			return {
				...state,
				movie_status: "pending",
			};
		default:
			return state;
	}
};

export { movieReducer };
