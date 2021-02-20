import { combineReducers } from "redux";
import {
	trendingMoviesReducer,
	popularMoviesReducer,
	upcomingMoviesReudcer,
	nowPlayingMoviesReducer,
} from "./trendingMoviesReducer";

const rootReducer = combineReducers({
	trending_movies: trendingMoviesReducer,
	popular_movies: popularMoviesReducer,
	upcoming_movies: upcomingMoviesReudcer,
	now_playing_movies: nowPlayingMoviesReducer,
});

export default rootReducer;
