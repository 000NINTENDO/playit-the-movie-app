import React, { useRef } from "react";

const PlayTrailer = ({ movie }) => {
	const trailerPlayer_closeButton = useRef();
	const player = useRef();
	let trailerId = "";

	console.log("Movie in Play Player", movie);
	console.log("Heloo im Rendered");

	// if (videos.results.length !== 0) {
	// 	videos.results.filter((video) => {
	// 		if (video.type === "Trailer") {
	// 			trailerId = video.key;
	// 		}
	// 	});
	// }

	useEffect(() => {
		console.log(trailerPlayer_closeButton);
		const closeTrailerPlayer = () => {
			player.current.style.visibility = "hidden";
		};
		trailerPlayer_closeButton.current.addEventListener(
			"click",
			closeTrailerPlayer
		);
	});

	return (
		<div className="trailer_player" ref={player}>
			<div className="trailer_player__overlay"></div>
			<div className="trailer_player__iframe_container">
				<iframe
					className="trailer_player__iframe"
					width="900"
					height="506.25"
					src="https://www.youtube.com/embed/"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<div
				className="trailer_player__close_button"
				ref={trailerPlayer_closeButton}
			>
				<span className="trailer_player__close_button__line_1 trailer_player__close_button_line"></span>
				<span className="trailer_player__close_button__line_2 trailer_player__close_button_line"></span>
			</div>
		</div>
	);
};

export default PlayTrailer;
