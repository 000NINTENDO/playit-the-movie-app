import * as type from "../actions_types/actionTypes";

const initialState = {
	isOpen: false,
	video_key: "",
	title: "",
};

const videoPlayerReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.video_player_opened:
			return {
				...state,
				isOpen: true,
				video_key: action.payload.video_key,
				title: action.payload.title,
			};
		case type.video_player_closed:
			return {
				...state,
				isOpen: false,
				video_key: "",
				title: "",
			};
		default:
			return state;
	}
};

export { videoPlayerReducer };
