import React from "react";
import Header from '../src/components/common/HeaderPage';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from "react-router-dom";

it('contains 3 NavLinks via shallow', () => {
	const numLinks = shallow(<Header />).find('NavLink').length;
	expect(numLinks).toEqual(3);
});

it('contains 3 NavLinks via mount', () => {
	const numAnchors = mount(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	).find('a').length;
	expect(numAnchors).toEqual(3);
});