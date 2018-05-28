import React from 'react';

const data = [
	{
		title: 'Senior Engineer',
		company: 'Dermveda',
		url: 'https://www.dermveda.com',
		message:
			'Front end work using mostly React with other popular frontend frameworks (boostrap, postCSS, etc). Worked on the back end with graphql, a custom CMS, some express, running on AWS EC2 and Lambdas. Used a serverless/micro-service architecture approach.'
	},
	{
		title: 'Web Developer',
		company: 'Califonia Department of Technology',
		url: 'https://caweb.ca.gov',
		message:
			'Worked on developing a WordPress implementation of the California state website template. Implmented as a child theme of a popular page-builder type theme for WordPress. Also did research, developmemnt, and testing for server setups to decrease TTR/TTI for the WordPress sites.'
	},
	{
		title: 'Senior Engineer',
		company: 'Erudite Entertainment',
		message:
			'Build a event based photo sharing mobile app in React Native for Android and iOS. Interfaced with braintree for transactions. Built a custom image resizing service running on AWS Lambda. Developed the core functionality of the app while training team members to use React Native.'
	}
];

const Body = () => {
	const items = data.map(item => (
		<div className="body-item">
			<h2>{item.title}</h2>
			<a href={item.url || '#'}>{item.company}</a>
			<p>{item.message}</p>
		</div>
	));

	return <div className="app-body">{items}</div>;
};

export default Body;
