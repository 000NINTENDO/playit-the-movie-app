import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import "./Header.css";

const Header = () => {
	return (
		<div className="header_navbar">
			<div className="header_navbar__container">
				<div className="header_navbar__left">
					<div className="header_navbar__logo">
						<Link className="logo__link" to="/">
							Playit
						</Link>
					</div>
					<div className="header_navbar__navlinks">
						<ul className="navlinks">
							<li className="navlinks__link">
								<Link to="" className="navlink">
									Movies
								</Link>
							</li>
							<li className="navlinks__link">
								<Link to="" className="navlink">
									TV shows
								</Link>
							</li>
							<li className="navlinks__link">
								<Link to="" className="navlink">
									People
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="header_navbar__right">
					<SearchInput />
					<div className="header_navbar__login">Log In</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
