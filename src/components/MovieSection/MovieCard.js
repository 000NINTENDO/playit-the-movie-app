import React, { useEffect, useState, useRef, useContext } from "react";
import posterImg from "../../images/postr-3.jpg";
import RatingPercentages from "./RatingPercentages";
import { MovieTrailerContext } from "../../context/MovieTrailerContext";
import "./MovieCard.css";
import { MovieRounded } from "@material-ui/icons";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	// const movie = {
	// 	adult: false,
	// 	backdrop_path: "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
	// 	genre_ids: [10749, 35],
	// 	id: 761053,
	// 	original_language: "en",
	// 	original_title: "Gabriel's Inferno Part III",
	// 	overview:
	// 		"The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
	// 	popularity: 33.638,
	// 	poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
	// 	release_date: "2020-11-19",
	// 	title: "Gabriel's Inferno Part III",
	// 	video: false,
	// 	vote_average: 9.1,
	// 	vote_count: 609,
	// };
	const [sendRequest, setSendRequest] = useState(false);
	const [movieObject, setMovieObject] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const { setMovieTrailer } = useContext(MovieTrailerContext);
	const play_button = useRef();
	const rating = movie.vote_average;
	const title = movie.title;
	const movie_id = movie.id;
	const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1cccfd6a1490af361de2b3d2efe39861&append_to_response=videos`;
	const release_date = new Date(movie.release_date);
	const releaseDate = release_date.toDateString().slice(4);
	const posterImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

	useEffect(() => {
		const fetchMovieVideos = async () => {
			const response = await fetch(url);
			const result = await response.json();
			console.log(result);
			if (response.status === 200 && result) {
				setMovieObject(result);
			}
		};

		if (sendRequest) {
			fetchMovieVideos();
			console.log("request send");
		}
	}, [sendRequest, url]);

	useEffect(() => {
		if (sendRequest) {
			setIsLoading(false);
		}
		if (isLoading === false) {
			setMovieTrailer({ type: "playTrailer", payload: movieObject });
		}
	}, [movieObject, isLoading]);

	useEffect(() => {
		const playTrailer = () => {
			setSendRequest(true);
			console.log("send request true");
		};
		play_button.current.addEventListener("click", playTrailer);
	});

	console.log("send request", sendRequest);
	console.log("movie object", movieObject);

	return (
		<>
			<div className="movie_card">
				<div className="movie_card__movie_poster_and_ratings">
					<div className="movie_card__poster_image">
						<img
							src={posterImage}
							className="movie_card__poster_image__content"
							alt="movie poster"
						/>
					</div>
					<div className="movie_card__movie_rating">
						<RatingPercentages rating={rating} />
					</div>
					<div ref={play_button} className="movie_card__play_button">
						<div className="movie_card__play_button__background_layer"></div>
						<svg
							className="movie_card__play_button__play_arrow"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.51898 5.92224C8.85256 5.51762 8 5.99739 8 6.77702V20.223C8 21.0026 8.85256 21.4824 9.51898 21.0778L20.5921 14.3548C21.2335 13.9654 21.2335 13.0346 20.5921 12.6452L9.51898 5.92224Z"
								fill="#000000"
							/>
						</svg>
					</div>
				</div>
				<div className="movie_card__movie_details">
					<div className="movie_card__movie_details__title">
						<Link to="" className="movie_card__movie_details__link">
							<h4 className="movie_card__movie_details__title__content">
								{title}
							</h4>
						</Link>
					</div>
					<div className="movie_card__movie__details__release_date">
						<p className="movie_card__movie__details__release_date_content">
							{releaseDate}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieCard;
