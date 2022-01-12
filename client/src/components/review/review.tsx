import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import UseStarRating from "../../hooks/useStarRating";
import { Avatar } from "../avatar/avatar";
import { StarsRating } from "../starsRating/starsRating";
import "./review.scss";

interface IReview {
	avatar: string;
	author: string;
	rating: number;
	text: string;
	eventKey: number;
}

export const Review = (props: IReview) => {
	return (
		<Accordion defaultActiveKey={"0"} className="review-accordion">
			<Accordion.Item eventKey={props.eventKey.toString()}>
				<Accordion.Header>
					<Row className="align-items-center w-100">
						<Col lg={1}>
							<Avatar src={props.avatar} user={props.author} />
						</Col>
						<Col>
							<h4 className="mb-0">{props.author}</h4>
						</Col>
						<Col lg={"auto"} className="justify-item-end">
							<StarsRating count={UseStarRating(props.rating)} size="lg" />
						</Col>
					</Row>
				</Accordion.Header>
				<Accordion.Body>{props.text}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
};
