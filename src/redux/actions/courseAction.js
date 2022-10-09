import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
	return { type: types.CREATE_COURSE, course };
}

export function loadCourseSucess(courses) {
	return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
	return function (dispatch) {
		return courseApi.getCourses()
			.then(courses => {
				dispatch(loadCourseSucess(courses));
			})
			.catch(error => {
				throw error;
			})
	}
}