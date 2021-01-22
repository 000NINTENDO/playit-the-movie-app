import React, { useContext } from "react";
import { MovieTrailerContext } from "./context/MovieTrailerContext";

const ContextConsumer = () => {
	const { movieTrailer } = useContext(MovieTrailerContext);
	console.log("context consumer", movieTrailer);

	return (
		<>
			<h2>Helloo im rendered</h2>
		</>
	);
};

export default ContextConsumer;
