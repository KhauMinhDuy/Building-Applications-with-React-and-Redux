import React from "react";

import { NavLink } from 'react-router-dom';

const HeaderPage = () => {

	const activeStyle = {color : "#f15B2A"}

	return (
		<nav>
			<NavLink to={"/"} activeStyle={activeStyle} exact>Home</NavLink> { " | "}
			<NavLink to={"/about"} activeStyle={activeStyle}>About</NavLink> { " | "}
			<NavLink to={"/courses"} activeStyle={activeStyle}>Courses</NavLink>
		</nav>
	);
}

export default HeaderPage;