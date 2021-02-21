import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { rootSaga } from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(
	compose(applyMiddleware(ReduxThunk, sagaMiddleware))
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
