import React from "react";
import CourseForm from "../src/components/courses/CourseForm";
import { shallow } from "enzyme";


function renderCourseForm(args) {
	const defaultProps = {
		authors: [],
		course: {},
		saving: false,
		errors: {},
		onSave: () => {},
		onChange: () => {}
	};

	const props = {...defaultProps, ...args};
	return shallow(<CourseForm {...props}/>)
}

it('renders form and header', () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find('form').length).toBe(1);
	expect(wrapper.find('h2').text()).toEqual("Add Course");
});

it('label save button as "Save" when not saving', () => {
	const wrapper = renderCourseForm();
	expect(wrapper.find('button').text()).toEqual("Save");
});

it('label save button as "Saving" when saving', () => {
	const wrapper = renderCourseForm({saving: true});
	expect(wrapper.find('button').text()).toEqual("Saving...");
});