import React from "react";
import bannerImage from "../../images/bd-1.jpg";
import MovieDetailsContainer from "./MovieDetailsContainer";
import BottomEllipse from "./BottomEllipse";
import "./Banner.css";

const Banner = () => {
	return (
		<>
			<div className="banner_container">
				<div className="banner_image">
					<img
						src={bannerImage}
						className="banner_image_img"
						alt="banner image"
					/>
				</div>
				<div className="banner_shadow_layer_1"></div>
				<div className="banner_shadow_layer_2"></div>
				<div className="banner_movie_details_container"></div>
			</div>
			<MovieDetailsContainer />
			<BottomEllipse />
		</>
	);
};

export default Banner;
