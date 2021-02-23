import * as type from "../actions_types/actionTypes";

const initialState = {
	status: "loading",
	movies: {
		allIds: [],
		byIds: {},
	},
};

// const byId = (movies) => {
// 	const all_movies = movies.map((movie) => {
// 		return movie;
// 	});
// 	return {};
// };

// const byIds = (movies) => {
//     let moviesById =
// }

const movies = (state, action) => {
	// const allIds = allIds(action.payload.movies);
	// const allMovies = allMovies(action.payload.movies);

	const movies = action.payload;

	const allIds = movies.map((movie) => {
		return movie.id;
	});

	const allMovies = movies.map((movie) => {
		return movie;
	});

	let i = 0;
	let moviesById = {};

	for (const movie in allMovies) {
		moviesById[allIds[i]] = allMovies[movie];
		if (i < allIds.length) i++;
	}
	return {
		...state.movies,
		allIds: allIds,
		byIds: moviesById,
	};
};

const trendingMoviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.trending_movies_fetched:
			return {
				...state,
				status: "idle",
				movies: movies(state, action),
				// movies: {
				// 	...state.movies,
				// 	allIds: [...state.movies.allIds.concat(action.paload)],
				// },
			};
		default:
			return state;
	}
};

const popularMoviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.popular_movies_fetched:
			return {
				...state,
				status: "idle",
				movies: movies(state, action),
				// movies: {
				// 	...state.movies,
				// 	allIds: [...state.movies.allIds.concat(action.paload)],
				// },
			};
		default:
			return state;
	}
};

const upcomingMoviesReudcer = (state = initialState, action) => {
	switch (action.type) {
		case type.upcoming_movies_fetched:
			return {
				...state,
				status: "idle",
				movies: movies(state, action),
				// movies: {
				// 	...state.movies,
				// 	allIds: [...state.movies.allIds.concat(action.paload)],
				// },
			};
		default:
			return state;
	}
};

const nowPlayingMoviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.now_playing_movies_fetched:
			return {
				...state,
				status: "idle",
				movies: movies(state, action),
				// movies: {
				// 	...state.movies,
				// 	allIds: [...state.movies.allIds.concat(action.paload)],
				// },
			};
		default:
			return state;
	}
};

export {
	trendingMoviesReducer,
	popularMoviesReducer,
	upcomingMoviesReudcer,
	nowPlayingMoviesReducer,
};
