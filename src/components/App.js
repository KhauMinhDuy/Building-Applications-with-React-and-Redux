import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import HeaderPage from "./common/HeaderPage";
import PageNotFound from "./common/PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import CourseDetail from "./courses/CourseDetail";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="container">
      <HeaderPage />
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/courses"} component={CoursesPage} />
        <Route path={"/course/:slug"} component={CourseDetail} />
        <Route path={"/course"} component={CourseDetail} />
        <Route component={PageNotFound} />
      </Switch>
			<ToastContainer autoClose={3000} hideProgressBar/>
    </div>
  );
};

export default App;
