import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import * as authorActions from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const CoursesPage = ({ courses, authors, actions, loading }) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses fail: " + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors fial: " + error);
      });
    }
  }, []);

  const handlerDeleteCourse = async (course) => {
    toast.success("Course Deleted.");
    try {
      await actions.deleteCourse(course);
    } catch (error) {
      toast.error("Deleted fail. " + error.message, { autoClose: false });
    }
    // actions.deleteCourse(course)
    // 	.catch(error => {
    // 		toast.error("Deleted fail. " + error.message, {autoClose : false});
    // 	});
  };

  return (
    <>
      {redirectToAddCoursePage && <Redirect to={"/course"} />}

      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>Courses</h2>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddCoursePage(true)}
          >
            Add Course
          </button>
          <CourseList onDeleteClick={handlerDeleteCourse} courses={courses} />
        </>
      )}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    authors: state.authors,
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((author) => author.id === course.authorId).name,
            };
          }),
    loading: state.apiStatus > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
