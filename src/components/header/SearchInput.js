import React, { useEffect, useRef } from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = () => {
	const searchInput = useRef();
	const placeHolder = useRef();
	const placeHolder_1 = useRef();
	const inputContainer = useRef();

	useEffect(() => {
		console.log(placeHolder);
		console.log(searchInput.current.value);
		console.log(inputContainer);
		console.log(placeHolder_1);
		let spaceHolder_visibility_timeLag;
		const animateSpaceHolder = () => {
			placeHolder_1.current.classList.add(
				"search_input__placeholder_1_onfocus"
			);
		};
		const hideSpaceHolder = () => {
			searchInput.current.focus();
			placeHolder.current.style.display = "none";
			inputContainer.current.classList.add("input_onfocus");
			spaceHolder_visibility_timeLag = setTimeout(animateSpaceHolder, 500);
		};
		const showSpaceHolder = () => {
			searchInput.current.value = "";
			placeHolder.current.style.display = "block";
			inputContainer.current.classList.remove("input_onfocus");
			placeHolder_1.current.classList.remove(
				"search_input__placeholder_1_onfocus"
			);
			clearInterval(spaceHolder_visibility_timeLag);
		};
		searchInput.current.addEventListener("focus", hideSpaceHolder);
		placeHolder.current.addEventListener("click", hideSpaceHolder);
		searchInput.current.addEventListener("blur", showSpaceHolder);
	});

	const hideSpaceHolder1 = () => {
		placeHolder_1.current.classList.remove(
			"search_input__placeholder_1_onfocus"
		);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			ref={inputContainer}
			className="search_input_container"
			onSubmit={handleSubmit}
		>
			<div className="input_container"></div>
			<input
				type="text"
				onChange={hideSpaceHolder1}
				ref={searchInput}
				className="search_input"
			/>
			<div className="search_input__placeholder" ref={placeHolder}>
				Search
			</div>
			<div className="search_input__placeholder_1" ref={placeHolder_1}>
				Search Movies, TV Shows and Celebrities....
			</div>
			<SearchIcon className="search_icon" />
		</form>
	);
};

export default SearchInput;
