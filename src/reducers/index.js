import { combineReducers } from "redux";
import {
	trendingMoviesReducer,
	popularMoviesReducer,
	upcomingMoviesReudcer,
	nowPlayingMoviesReducer,
} from "./trendingMoviesReducer";
import { videoPlayerReducer } from "./videoPlayerReducer";
import { movieReducer } from "./movieReducer";

const rootReducer = combineReducers({
	trending_movies: trendingMoviesReducer,
	popular_movies: popularMoviesReducer,
	upcoming_movies: upcomingMoviesReudcer,
	now_playing_movies: nowPlayingMoviesReducer,
	video_player: videoPlayerReducer,
	movie_page: movieReducer,
});

export default rootReducer;
