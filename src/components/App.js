import React from "react";
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import HeaderPage from './common/HeaderPage';
import PageNotFound from './common/PageNotFound';
import CoursesPage from './courses/CoursesPage';

const App = () => {
	return (
		<div className="container">
			<HeaderPage />
			<Switch>
				<Route exact path={"/"} component={HomePage} />
				<Route path={"/about"} component={AboutPage} />
				<Route path={"/courses"} component={CoursesPage}/>	
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;