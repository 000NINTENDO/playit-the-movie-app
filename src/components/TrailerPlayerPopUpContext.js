import React from "react";

const initialState = {
	isTrailerPlayerOpen: false,
};

const TrailerPlayerContext = React.createContext(initialState);

const openPlayer = () => {
	return {
		type: "openTrailerPlayer",
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case "openTrailerPlayer":
			return (initialState.isTrailerPlayerOpen = !initialState.isTrailerPlayerOpen);
	}
};

export { reducer, initialState, TrailerPlayerContext, openPlayer };
