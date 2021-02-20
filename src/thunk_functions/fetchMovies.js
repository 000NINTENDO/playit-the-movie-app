import { instance } from "../axios_config/axiox_config";
import * as type from "../actions_types/actionTypes";

export const fetchTopRatedMovies = (page) => {
	return async (dispatch, getState) => {
		const response = await instance.get(
			`/top_rated?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=${page}`
		);
		if (response.status === 200 || response.statusText === "ok") {
			const movies = response.data.results;
			dispatch({ type: type.trending_movies_fetched, payload: movies });
		}
	};
};

export const fetchPopularMovies = (page) => {
	return async (dispatch, getState) => {
		const response = await instance.get(
			`/popular?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=${page}`
		);
		if (response.status === 200 || response.statusText === "ok") {
			const movies = response.data.results;
			dispatch({ type: type.popular_movies_fetched, payload: movies });
		}
	};
};

export const fetchNowPlayingMovies = (page) => {
	return async (dispatch, getState) => {
		const response = await instance.get(
			`/now_playing?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=1${page}`
		);
		if (response.status === 200 || response.statusText === "ok") {
			const movies = response.data.results;
			dispatch({ type: type.now_playing_movies_fetched, payload: movies });
		}
	};
};

export const fetchUpcomingMovies = (page) => {
	return async (dispatch, getState) => {
		const response = await instance.get(
			`/upcoming?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=${page}`
		);
		if (response.status === 200 || response.statusText === "ok") {
			const movies = response.data.results;
			dispatch({ type: type.upcoming_movies_fetched, payload: movies });
		}
	};
};
