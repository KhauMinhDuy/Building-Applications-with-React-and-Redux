import React, { useEffect, useState } from "react";
import { loadCourses, saveCourse } from "../../redux/actions/courseAction";
import { loadAuthors } from "../../redux/actions/authorAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";

const CourseDetail = ({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Loading courses fail: " + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Loading authors fail: " + error);
      });
    }
  }, [props.course]);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setCourse((preCourse) => ({
      ...preCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handlerSave = (event) => {
    event.preventDefault();
    saveCourse(course).then(() => {
      history.push("/courses");
    });
  };

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handlerChange}
      onSave={handlerSave}
    />
  );
};

CourseDetail.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0 ? getCourseBySlug(state.courses, slug) : newCourse;
  return {
    course,
    authors: state.authors,
    courses: state.courses,
  };
}

const mapDispatchToProps = {
  loadCourses,
  saveCourse,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
