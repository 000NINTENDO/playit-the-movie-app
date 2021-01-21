import React, {
	useState,
	useRef,
	useEffect,
	useContext,
	useReducer,
} from "react";
import { MovieTrailerContext } from "../../context/MovieTrailerContext";
import PlayTrailer from "../TrailerPlayer/TrailerPlayer";
import "./TrailerPlayer.css";

const TrailerPlayer = () => {
	const { movieTrailer } = useContext(MovieTrailerContext);

	if (movieTrailer.isOpen) {
		return <PlayTrailer movie={movieTrailer} />;
	} else {
		return "";
	}
};

export default TrailerPlayer;
