import React from "react";
import { Container } from "react-bootstrap";
interface IDetailsSection {
	children: React.ReactNode;
	title: string;
}

export const DetailsSection = (props: IDetailsSection) => {
	return (
		<Container>
			<div className="jumbotron jumbotron-dark">
				<h3 className="font-weight-bold">{props.title}</h3>
				{props.children}
			</div>
		</Container>
	);
};
