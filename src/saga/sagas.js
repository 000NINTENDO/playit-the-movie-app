import { instance } from "../axios_config/axiox_config";
import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../actions_types/actionTypes";

const fetchMovie = async (movie_id) => {
	const response = await instance.get(
		`/${movie_id}?api_key=1cccfd6a1490af361de2b3d2efe39861&append_to_response=videos,images,credits`
	);
	return response.data;
};

function* fetchMovieSaga(action) {
	const movie_id = action.payload;
	try {
		const movie = yield call(fetchMovie, movie_id);
		console.log(movie);
		yield put({ type: type.movie_fetched, payload: movie });
	} catch (err) {
		yield put({ type: type.movie_fetching_error, error: err });
	}
}

function* rootSaga() {
	yield takeEvery(type.movie_requested, fetchMovieSaga);
}

export { rootSaga };
