import React, {
	useState,
	useRef,
	useEffect,
	useContext,
	useReducer,
} from "react";
import { MovieTrailerContext } from "../../context/MovieTrailerContext";
import { ButtonBase } from "@material-ui/core";
import "./TrailerPlayer.css";

const TrailerPlayer = () => {
	const { movieTrailer, setMovieTrailer } = useContext(MovieTrailerContext);
	const [iframeBodyHeight, setIframeBodyHeight] = useState("0");
	const [trailer, setTrailer] = useState();
	const trailerPlayer_closeButton = useRef();
	const player_container = useRef();
	const iframe_container = useRef();
	const iframe_body = useRef();
	let trailerTitle;
	let trailerLink;
	if (trailer !== undefined) {
		trailerTitle = trailer.name;
		trailerLink = `https://www.youtube.com/embed/${trailer.key}`;
	}

	console.log("Movie in Play Player", movieTrailer);
	console.log("Heloo im Rendered");

	const filterTrailer = () => {
		let trailerVideo;
		movieTrailer.movie.videos.results.filter((video) => {
			if (video.type === "Trailer") {
				console.log(video.key);
				trailerVideo = video;
			}
		});
		return trailerVideo;
	};

	const openPlayer = () => {
		player_container.current.style.height = "100vh";
		player_container.current.style.opacity = "1";
		iframe_container.current.style.height = "506.25px";
		setIframeBodyHeight("506.25");
	};

	const closePlayer = () => {
		player_container.current.style.opacity = "0";
		iframe_container.current.style.height = "0";
		setIframeBodyHeight("0");
	};

	useEffect(() => {
		if (movieTrailer.movie !== "") {
			const video = filterTrailer();
			console.log(video);
			setTrailer(video);
		}
		if (movieTrailer.isOpen === true) {
			openPlayer();
		} else {
			closePlayer();
		}

		console.log(trailerPlayer_closeButton);

		const closeTrailerPlayer = () => {
			player_container.current.style.opacity = "0";
			setTimeout(() => {
				player_container.current.style.height = "0vh";
				setMovieTrailer({ type: "closePlayer" });
				setTrailer(undefined);
				iframe_container.current.style.height = "0";
			}, 500);
		};
		trailerPlayer_closeButton.current.addEventListener(
			"click",
			closeTrailerPlayer
		);
	}, [movieTrailer]);

	console.log(trailer);

	return (
		<div className="trailer_player" ref={player_container}>
			<div className="trailer_player__overlay"></div>
			<header className="trailer_player__header">
				<div className="trailer_player__header__title">
					<h2 className="trailer_player__header__title__content">
						{trailerTitle}
					</h2>
				</div>
				<div
					className="trailer_player__close_button"
					ref={trailerPlayer_closeButton}
				>
					<ButtonBase className="trailer_player__close_button__ripple_effect">
						<div className="trailer_player__close_button__lines">
							<span className="trailer_player__close_button__line_1 trailer_player__close_button_line"></span>
							<span className="trailer_player__close_button__line_2 trailer_player__close_button_line"></span>
						</div>
					</ButtonBase>
				</div>
			</header>

			<div className="trailer_player__iframe_container" ref={iframe_container}>
				<iframe
					className="trailer_player__iframe"
					width="900"
					height={iframeBodyHeight}
					src={trailerLink}
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default TrailerPlayer;
