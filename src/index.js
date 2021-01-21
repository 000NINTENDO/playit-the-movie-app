import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
	<Router>
		<Route exact path="/">
			<App />
		</Route>
	</Router>,
	document.getElementById("root")
);
