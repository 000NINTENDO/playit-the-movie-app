import React from "react";
import "./Poster.css";

const Poster = ({ movie }) => {
	const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	return (
		<>
			<div className="movie_page_poster">
				<div className="movie_page_poster__poster_image">
					<img
						src={poster_url}
						className="movie_page_poster__poster_image_image"
						alt="poster"
					/>
				</div>
			</div>
		</>
	);
};

export default Poster;
