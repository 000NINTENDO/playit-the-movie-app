import React from "react";
import BannerImage from "../../../../images/bd-2.jpg";
import "./Banner.css";

const Banner = () => {
	return (
		<>
			<div className="movie_page_banner">
				<div className="movie_page_banner__background_image">
					<img
						src={BannerImage}
						className="movie_page_banner__background_image__image"
						alt="backdrop"
					/>
				</div>
				<div className="banner_shadow_layer_1"></div>
				<div className="banner_shadow_layer_2"></div>
			</div>
		</>
	);
};

export default Banner;
