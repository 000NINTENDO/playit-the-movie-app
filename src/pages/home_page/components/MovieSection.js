// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
// import { fetchTopRatedMovies } from "../../thunk_functions/fetchTopRatedMovies";
import "./MovieSection.css";
// import { instance } from "../../axios_config/axiox_config";
import { useDispatch, useSelector } from "react-redux";
import LoadingSection from "./LoadingSection";

const MovieSection = ({ title, movies_status, movies, class_name }) => {
	const [isLoading, setIsLoading] = useState(true);
	const movies_list = useRef();
	const forward_layer = useRef();
	const backward_layer = useRef();

	// useEffect(() => {
	// 	let remove_eventListener_timeout;
	// 	let remove_backward_layer_timeout;
	// 	const moviesList = document.querySelector(".movie_section__movies_list");

	// 	let current_scrolledPosition = 0;
	// 	let total_scroll_required = moviesList.scrollWidth - moviesList.offsetWidth;
	// 	// console.log("total_scroll_required", total_scroll_required);

	// 	const scroll_event = (event) => {
	// 		forward_layer.current.style.transition = "all 1s";
	// 		forward_layer.current.style.opacity = "0";
	// 		forward_layer.current.style.width = "0";

	// 		remove_backward_layer_timeout = setTimeout(() => {
	// 			backward_layer.current.style.transition = "all 1s";
	// 			backward_layer.current.style.width = "88px";
	// 			backward_layer.current.style.opacity = "1";
	// 		}, 1000);

	// 		// current_scrolledPosition +=
	// 		// 	(event.deltaY / 40) *
	// 		// 	Math.abs(event.deltaY / 60) *
	// 		// 	Math.abs(event.deltaY / 10) *
	// 		// 	Math.abs(event.deltaY / 70) *
	// 		// 	Math.abs(event.deltaY / 70);

	// 		// if (current_scrolledPosition >= total_scroll_required) {
	// 		// 	// current_scrolledPosition = total_scroll_required;
	// 		// 	// moviesList.scrollTo({
	// 		// 	// 	top: 0,
	// 		// 	// 	left: current_scrolledPosition,
	// 		// 	// 	behavior: "smooth",
	// 		// 	// });
	// 		// 	movies_list.current.removeEventListener("wheel", wheel_event);
	// 		// 	remove_eventListener_timeout = setTimeout(() => {
	// 		// 		movies_list.current.addEventListener("wheel", wheel_event);
	// 		// 	}, 1000);
	// 		// }

	// 		if (current_scrolledPosition <= 0) {
	// 			current_scrolledPosition = 0;
	// 			forward_layer.current.style.width = "88px";
	// 			forward_layer.current.style.opacity = "1";
	// 			clearInterval(remove_backward_layer_timeout);
	// 			backward_layer.current.style.opacity = "0";
	// 			backward_layer.current.style.width = "0";
	// 		}

	// 		if (current_scrolledPosition < 50) {
	// 			clearInterval(remove_backward_layer_timeout);
	// 			backward_layer.current.style.opacity = "0";
	// 			backward_layer.current.style.width = "0";
	// 		}

	// 		// if (current_scrolledPosition < total_scroll_required) {
	// 		// 	setTimeout(() => {
	// 		// 		moviesList.scrollTo({
	// 		// 			top: 0,
	// 		// 			left: current_scrolledPosition,
	// 		// 			behavior: "smooth",
	// 		// 		});
	// 		// 	}, 25);
	// 		// }

	// 		// console.log("current scrolled position", current_scrolledPosition);
	// 	};

	// moviesList.addEventListener("scroll", () => {
	// 	const scrolled_position = moviesList.scrollLeft;
	// 	console.log(moviesList.scrollLeft);
	// });

	// console.log(
	// 	"total scrolled width",
	// 	movies_list.current.scrollWidth - moviesList.offsetWidth
	// );
	// console.log("scrolled lef", moviesList.scrollLeft);
	// });

	useEffect(() => {
		if (movies_status === "idle") {
			const movies_list = document.querySelector(
				`.${class_name} .movie_section .movie_section__movies_list`
			);
			const forward_layer = document.querySelector(
				`.${class_name} .movie_section .movie_section__scroll_navigating_layers .movie_section__scroll_navigating_layers_forward`
			);
			const backward_layer = document.querySelector(
				`.${class_name} .movie_section .movie_section__scroll_navigating_layers .movie_section__scroll_navigating_layers_backward`
			);

			movies_list.addEventListener("scroll", () => {
				let timeout_1;
				const current_scrolled = movies_list.scrollLeft;

				if (current_scrolled < 200 || current_scrolled === 0) {
					forward_layer.style.transition = "all 1s ease";
					forward_layer.style.opacity = "";
					forward_layer.style.width = "";
					backward_layer.style.transition = "all 1s";
					backward_layer.style.width = "0px";
					backward_layer.style.opacity = "0";
				}

				if (current_scrolled > 200) {
					forward_layer.style.transition = "all 1s ease";
					forward_layer.style.opacity = "0";
					forward_layer.style.width = "0";

					backward_layer.style.transition = "all 1s";
					backward_layer.style.width = "88px";
					backward_layer.style.opacity = "1";
				}

				// console.log("total scroll width", total_scrolled_width);
				// console.log("scroll left", movies_list.scrollLeft);
			});
		}
	});

	const loader = <LoadingSection />;
	const moviesList = (
		<>
			<div ref={movies_list} className="movie_section__movies_list">
				{movies}
			</div>
			<div className="movie_section__scroll_navigating_layers">
				<div
					ref={forward_layer}
					className="movie_section__scroll_navigating_layers_forward"
				></div>
				<div
					ref={backward_layer}
					className="movie_section__scroll_navigating_layers_backward"
				></div>
			</div>
		</>
	);

	return (
		<>
			<div className="movie_section">
				<div className="movie_seciton__title">
					<h2 className="movie_section__title__content">{title}</h2>
					{/* <div className="movie_section__title__movies_filter_bar">
						<div className="movie_section__title__movies_filter_bar__active">
							<span className="movie_section__title__movies_filter_bar__active__content">
								Today
							</span>
						</div>
						<div className="movie_section__title__movies_filter_bar__other_link">
							<span className="movie_section__title__movies_filter_bar__other_link__content">
								This Week
							</span>
						</div>
					</div> */}
				</div>
				{movies_status === "idle" ? moviesList : loader}
				{/* <div ref={movies_list} className="movie_section__movies_list">
					{movies}
				</div>
				<div className="movie_section__scroll_navigating_layers">
					<div
						ref={forward_layer}
						className="movie_section__scroll_navigating_layers_forward"
					></div>
					<div
						ref={backward_layer}
						className="movie_section__scroll_navigating_layers_backward"
					></div>
				</div> */}
			</div>
		</>
	);
};

export default MovieSection;
