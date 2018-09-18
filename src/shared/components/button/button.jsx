import React from 'react';
import { Link } from 'react-router-dom';
import css from './button.module.css';

const Button = ({ external, to, children, className, ...props }) => {
	if (external)
		return (
			<a className={`${css.exploreLink} ${className}`} href={to} target="_blank" noreferrer noopener {...props}>
				{children}
			</a>
		);

	return (
		<Link className={`${css.exploreLink} ${className}`} to={to} {...props}>
			{children}
		</Link>
	);
};

export default Button;
