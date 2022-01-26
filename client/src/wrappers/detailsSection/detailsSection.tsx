import React from "react";
import { Container } from "react-bootstrap";
import './detailsSection.scss';

interface IDetailsSection {
	children: React.ReactNode;
	title: string;
}

export const DetailsSection = (props: IDetailsSection) => {
	return (
		<Container>
			<div className="jumbotron jumbotron-primary text-white">
				<h3 className="font-weight-bold">{props.title}</h3>
				{props.children}
			</div>
		</Container>
	);
};
