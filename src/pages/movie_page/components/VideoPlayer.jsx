import React, { useRef, useEffect, useState } from "react";
import * as type from "../../../actions_types/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import "./VideoPlayer.css";

const VideoPlayer = () => {
	const [iframeHeight, setIframeHeight] = useState("0");
	const close_player = useRef();
	const video_player_container = useRef();
	const i_frame_container = useRef();
	const i_frame = useRef();
	const player_header = useRef();
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => {
		return state.video_player.isOpen;
	});
	const video_key = useSelector((state) => {
		return state.video_player.video_key;
	});
	const title = useSelector((state) => {
		return state.video_player.title;
	});
	const video_link = `https://www.youtube.com/embed/${video_key}`;
	console.log(isOpen);
	console.log(video_key);

	useEffect(() => {
		let timeout_1;
		close_player.current.addEventListener("click", () => {
			video_player_container.current.style.transition = "all 0.5s ease";
			video_player_container.current.style.opacity = "0";
			i_frame_container.current.style.opacity = "0";
			timeout_1 = setTimeout(() => {
				video_player_container.current.style.height = "0";
				i_frame_container.current.style.height = "0";
				i_frame_container.current.style.opacity = "0";
				player_header.current.style.height = "0";
				setIframeHeight("0");
			}, 600);
		});

		if (isOpen === true) {
			video_player_container.current.style.height = "100vh";
			i_frame_container.current.style.height = "506.25px";

			i_frame_container.current.style.opacity = "1";
			video_player_container.current.style.transition = "all 0.5s ease";
			video_player_container.current.style.opacity = "1";
			setIframeHeight("507.25");
		}

		return () => clearTimeout(timeout_1);
	});

	return (
		<>
			<div ref={video_player_container} className="movie_page_video_player">
				<div className="trailer_player__overlay movie_page_video_player__background_layer"></div>
				<header
					ref={player_header}
					className="trailer_player__header movie_page_video_player__header"
				>
					<div className="trailer_player__header__title">
						<h2 className="trailer_player__header__title__content">{title}</h2>
					</div>
					<div
						ref={close_player}
						className="trailer_player__close_button"
						onClick={() => {
							dispatch({ type: type.video_player_closed });
						}}
					>
						<div className="trailer_player__close_button__lines">
							<span className="trailer_player__close_button__line_1 trailer_player__close_button_line"></span>
							<span className="trailer_player__close_button__line_2 trailer_player__close_button_line"></span>
						</div>
					</div>
				</header>

				<div
					ref={i_frame_container}
					className="trailer_player__iframe_container movie_page_video_player__iframe_container"
					// ref={iframe_container}
				>
					<iframe
						ref={i_frame}
						className="trailer_player__iframe movie_page_video_player__iframe"
						width="900"
						height={iframeHeight}
						src={video_link}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default VideoPlayer;
