import React from 'react';
import css from './projects.module.css';
import sog from '../../shared/static/img/71stsog.png';
import e2 from '../../shared/static/img/e2.webp';
import dv from '../../shared/static/img/dv.svg';
import ls from '../../shared/static/img/learnskin-logo.png';
import ProjectItem from './project-item/project-item.jsx';

class Projects extends React.Component {
	data = [
		{
			title: 'Dermveda',
			image: {
				src: dv,
				alt: 'Dermveda logo'
			},
			url: 'https://www.dermveda.com',
			description:
				'Dermveda is a skin care education company startup in Sacramento, CA. This site was created using isomorphic rendering, react, and a microservice architecture backend.'
		},
		{
			title: 'LearnSkin',
			image: {
				src: ls,
				alt: 'LearnSkin logo'
			},
			url: 'https://www.learnskin.com',
			description:
				'LearnSkin is a sub brand of Dermveda that focuses on teaching medical professionals. This is a full stack microservice application, also using microservices on the back end.'
		},
		{
			title: 'ePic Events',
			image: {
				src: e2,
				alt: 'ePic Events logo'
			},
			url: 'https://play.google.com/store/apps/details?id=com.epicevents&hl=en_US',
			description:
				'ePic Events is a mobile app made for hosting and shared images from events. This app is built on React Native and integrates with a real time database on the backend.'
		},
		{
			title: '71st SOG Milsim Gaming Community',
			image: {
				src: sog,
				alt: 'Seventy-First SOG logo'
			},
			url: 'https://71stsog.com',
			description:
				'The 71st SOG has a website for handling member applications, event announcements, and group image sharing. This site was built using python and Django.'
		}
	];
	renderData = () => {
		if (!Array.isArray(this.data) || !this.data.length) return null;
		return this.data.map(item => <ProjectItem key={`proj-item-${item.title}`} {...item} />);
	};
	render() {
		return (
			<div className={`contentContainer ${css.projectsWrapper}`}>
				<h2>Projects</h2>
				{this.renderData()}
			</div>
		);
	}
}

export default Projects;
