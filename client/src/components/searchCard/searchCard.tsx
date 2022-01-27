import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./searchCard.scss";
import UseMovieDatabaseImg from "../../hooks/useMovieDatabaseImg";
import UseReleaseYear from "../../hooks/useReleaseYear";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconButton } from "../addButton/iconButton";

interface ISearchCard {
	title: string | undefined;
	date: string | undefined;
	img: string | undefined;
	id: number | undefined;
}

export const SearchCard = (props: ISearchCard) => {
	return (
		<Link to={`/details/${props.id}`}>
			<Card className="card my-2">
				<Row className="align-items-center">
					<Col lg={1} className="px-0">
						<Card.Img
							className="card-img img-fluid"
							src={UseMovieDatabaseImg(props.img)}
						/>
					</Col>
					<Col>
						<Card.Body className="card-body">
							<Card.Title>{props.title}</Card.Title>
							<Card.Text>{UseReleaseYear(props.date)}</Card.Text>
						</Card.Body>
					</Col>
					<Col lg={1}>
						<IconButton icon={faPlus} />
					</Col>
				</Row>
			</Card>
		</Link>
	);
};
