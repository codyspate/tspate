import React from 'react';
import NavItem from './nav-item/nav-item.jsx';
import css from './nav.module.css';

const data = [
	{
		to: '/',
		text: 'Home'
	}
	// {
	// 	to: '/projects',
	// 	text: 'Projects'
	// }
];

const Nav = ({ ...props }) => {
	if (data || data.length < 2) return null;
	let items = [];
	data.forEach(({ text, ...props }, i) => {
		items.push(
			<NavItem key={text} {...props}>
				{text}
			</NavItem>
		);
		// if (i < data.length - 1) items.push('|');
	});
	return <nav className={css.nav}>{items}</nav>;
};

export default Nav;
