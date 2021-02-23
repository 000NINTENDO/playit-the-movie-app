import React, { useState, useEffect } from "react";
import MovieDetailsContainer from "./MovieDetailsContainer";
import "./Banner.css";

// READ ME if stuck !!!
// The firt task is to fetch movies from TMDB server in minimul renders
// then select random page and random array item from response array
// the select random movie from response
// pass random movie object to the children to gethere required details from it
// so, its all done for banner component

const Banner = () => {
	const [topRatedMovies, setTopRatedMovies] = useState([]);
	const [isMoviesReceived, setIsMoviesReceived] = useState(false);
	const [randomMovie, setRandomMovie] = useState({});
	const [randomMovieId, setRandomMovieId] = useState();
	// const [isMovieIdReceived, setIsMovieIdReceived] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	let backDropImage;
	let backDropImage_url;

	const randomPagePicker = (maxPageNumber) => {
		let random;
		let randomPage;
		for (randomPage = 0; ; randomPage++) {
			random = parseInt(Math.random() * 10);
			if (random > 0 && random <= maxPageNumber) {
				return random;
			}
		}
	};

	const randomMoviePicker = () => {
		let randomIndex;
		for (randomIndex = 0; ; randomIndex++) {
			randomIndex = parseInt(Math.random() * 100);
			if (randomIndex > 0 && randomIndex < topRatedMovies.length) {
				break;
			}
		}
		let randomMovieId = topRatedMovies[randomIndex].id;
		return randomMovieId;
	};

	if (Object.keys(randomMovie).length !== 0) {
		console.log("Top Rated Movies", topRatedMovies);
		backDropImage = randomMovie.backdrop_path;
		backDropImage_url = `https://image.tmdb.org/t/p/original/${backDropImage}`;
	}

	console.log("is movies received", isMoviesReceived);
	console.log("Movie Id", randomMovieId);
	console.log("random movie", randomMovie);
	console.log("isLoading", isLoading);

	useEffect(() => {
		const randomPageNumber = randomPagePicker(10);
		console.log("randomPageNumber", randomPageNumber);

		const fetchTopTatedMovies = async () => {
			const topRatedMoviesRequest = await fetch(
				`https://api.themoviedb.org/3/movie/popular?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=${randomPageNumber}`
			);
			const topRatedMoviesResponse = await topRatedMoviesRequest.json();
			console.log("topRatedMoviesResponse", topRatedMoviesResponse);

			const result = await topRatedMoviesResponse.results;
			if (topRatedMoviesRequest.status === 200 && result) {
				console.log("movies are fetched");
				setTopRatedMovies(result);
				setIsMoviesReceived(true);
				console.log("Movies receceived successfully");
			}

			// console.log("result", result);
			// console.log("movies", topRatedMovies[0]);
		};
		fetchTopTatedMovies();
	}, []);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			const movieDetailsRequest = await fetch(
				`https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=1cccfd6a1490af361de2b3d2efe39861&append_to_response=videos,images`
			);
			const movieDetailsResponse = await movieDetailsRequest.json();
			console.log("Random Movie details", movieDetailsResponse);

			if (movieDetailsRequest.status === 200) {
				setRandomMovie(movieDetailsResponse);
				setIsLoading(false);
			}
		};

		if (
			isMoviesReceived === true &&
			topRatedMovies.length !== 0 &&
			randomMovieId === undefined
		) {
			const randomMovieId = randomMoviePicker();
			setRandomMovieId(randomMovieId);
			console.log("random Movie Id", randomMovieId);
			// setIsMovieIdReceived(true);
			console.log("im executed");
		}

		if (randomMovieId !== undefined) {
			fetchMovieDetails();
		}
	}, [topRatedMovies, isMoviesReceived, randomMovieId]);

	return (
		<>
			<div className="banner_container">
				<div className="banner_movie_details">
					{isLoading === false ? (
						<MovieDetailsContainer randomMovie={randomMovie} />
					) : (
						"Loading.."
					)}
				</div>
				{isLoading === false ? (
					<div className="banner_image">
						<img
							src={backDropImage_url}
							className="banner_image_img"
							alt="banner image"
						/>
					</div>
				) : (
					"Loading..."
				)}
				{/* <div className="banner_image">
					<img
						src={backDropImage_url}
						className="banner_image_img"
						alt="banner image"
					/>
				</div> */}
				<div className="banner_shadow_layer_1"></div>
				<div className="banner_shadow_layer_2"></div>
			</div>

			{isLoading === false ? (
				<MovieDetailsContainer randomMovie={randomMovie} />
			) : (
				"Loading.."
			)}

			{/* <BottomEllipse /> */}
		</>
	);
};

export default Banner;
