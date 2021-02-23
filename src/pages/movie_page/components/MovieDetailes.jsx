import React, { useState, useEffect, useReducer, useContext } from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import * as type from "../../../actions_types/actionTypes";
import {
	MovieTrailerContext,
	movie_trailer,
	movieTrailerReducer,
} from "../../../context/MovieTrailerContext";
import { Link, useHistory } from "react-router-dom";
import "../../home_page/components/MovieDetailsContainer.css";
import "./MovieDetailes.css";
import MovieRatingIndicator from "../../home_page/components/MovieRatingIndicators";
import { useDispatch } from "react-redux";

const MovieDetailes = ({ movie }) => {
	const {
		title,
		overview,
		videos,
		id,
		vote_average,
		runtime,
		release_date,
	} = movie;
	const movie_link = `/movie/${id}`;
	const dispatch = useDispatch();
	let video_key;
	videos.results.map((video) => {
		if (video.type === "Trailer") {
			return (video_key = video.key);
		}
		return;
	});

	console.log("movie key", video_key);

	// const [trailerLink, setTrailerLink] = useState("");
	const history = useHistory();
	const trailerLink = `/#play?${id}`;
	console.log("history object", history);
	console.log("im added");

	// console.log("movie details container im rendered");

	const hours_mins = (totalMinutes) => {
		let hours = parseInt(totalMinutes / 60);
		let min = hours * 60;
		let minutes = totalMinutes - min;
		return { hours, minutes };
	};
	const hoursMinutes = hours_mins(runtime);
	const releadeDate = new Date(release_date);
	const releaseYear = releadeDate.getFullYear();

	console.log("trailer link", trailerLink);
	return (
		<>
			<div className="banner_movie_details_container movie_page_banner_movie_details_container">
				<Link to={movie_link} className="movie_details__movie_link">
					{/* <h1 className="movie_details__movie_title movie_page_movie_details_container__title">
						X MEN: The Appocalips Last Attack
					</h1> */}
					<h1 className="movie_details__movie_title">{title}</h1>
				</Link>
				<div className="movie_page_banner_movie_details_container__movie_rating_year_duration">
					<div className="movie_page_banner_movie_details_container__movie_rating_year_duration__rating">
						<MovieRatingIndicator rating={vote_average} />
					</div>
					<div className="movie_details__duration_year movie_page_banner_movie_details_container__movie_rating_year_duration__duration_year">
						<div className="movie_details__duration">
							<p>
								{hoursMinutes.hours}h {hoursMinutes.minutes}m
							</p>
						</div>
						<div className="movie_details__seperator"></div>
						<div className="movie_details__year">
							<p>{releaseYear}</p>
						</div>
					</div>
				</div>

				<div className="movie_details__overview_container">
					<h3 className="overview__title">Overview</h3>
					<p className="overview__content movie_page_banner_movie_details_container_overview__content">
						{overview}
					</p>
					{/* <p className="overview__content">
						When Tony Stark's world is torn apart by a formidable terrorist
						called the Mandarin, he starts an odyssey of rebuilding and
						retribution.
					</p> */}
				</div>
				<div
					className="movie_details__trailer_link"
					onClick={() => {
						dispatch({
							type: type.video_player_opened,
							payload: { title, video_key },
						});
					}}
				>
					<ButtonBase className="movie_details__trailer_link__button_ripple">
						<svg
							className="movie_details__trailer_play_icon"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.51898 5.92224C8.85256 5.51762 8 5.99739 8 6.77702V20.223C8 21.0026 8.85256 21.4824 9.51898 21.0778L20.5921 14.3548C21.2335 13.9654 21.2335 13.0346 20.5921 12.6452L9.51898 5.92224Z"
								fill="#FFFFFF"
							/>
						</svg>

						<span className="movie_details__trailer_text">Trailer</span>
					</ButtonBase>
				</div>
			</div>
		</>
	);
};

export default MovieDetailes;
