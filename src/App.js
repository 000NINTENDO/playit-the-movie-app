import React from "react";
import HomePage from "./pages/home_page/HomePage";
import MoviePage from "./pages/movie_page/MoviePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MovieTrailerProvider } from "./context/MovieTrailerContext";
import "./fonts/fonts.css";

function App() {
  return (
    <div className="App">
      <MovieTrailerProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movie/:movie_id">
              <MoviePage />
            </Route>
          </Switch>
        </BrowserRouter>
      </MovieTrailerProvider>
    </div>
  );
}

export default App;
