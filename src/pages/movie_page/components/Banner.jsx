import React from "react";
import "./Banner.css";

const Banner = ({ movie }) => {
	const url = ` https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
	return (
		<>
			<div className="movie_page_banner">
				<div className="movie_page_banner__background_image">
					<img
						src={url}
						className="movie_page_banner__background_image__image"
						alt="backdrop"
					/>
					<div className="banner_shadow_layer_1 movie_page_banner_shadow_layer_1"></div>
					<div className="banner_shadow_layer_2 movie_page_banner_shadow_layer_2"></div>
				</div>
			</div>
		</>
	);
};

export default Banner;
