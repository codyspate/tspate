import React from 'react';
import { Button } from '../../../shared/components';
import css from './project-item.module.css';

const ProjectItem = ({ title, description, image, url }) => {
	return (
		<div className={css.itemWrapper}>
			<div className={css.item}>
				<div className={css.image}>
					<img src={image.src} alt={image.alt} />
				</div>
				<div className={css.content}>
					<h4 className="serif-font">{title}</h4>
					<p className="sans-font">{description}</p>
				</div>
			</div>
			<div className={css.buttonWrapper}>
				<Button className={css.button} to={url} external>
					Visit Site
				</Button>
			</div>
		</div>
	);
};

export default ProjectItem;
