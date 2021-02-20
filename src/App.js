import React from "react";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/movie_page/MoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/movies/:movie_id">
						<MoviePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
