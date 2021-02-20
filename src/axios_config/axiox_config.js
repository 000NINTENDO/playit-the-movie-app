import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

export const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3/movie",
});
