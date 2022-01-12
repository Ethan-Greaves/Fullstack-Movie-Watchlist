import React from "react";
import { Row, Col } from "react-bootstrap";
import UseMovieDatabaseImg from "../../hooks/useMovieDatabaseImg";
interface IProps {
	title: string;
	poster_path: string;
	overview: string; 
	runtime: number;
	genres: {
		name: string;
	}[];
	release_date: string;
	vote_average: number;
}

export const DetailsHeader = (props: IProps) => {
	return (
		<>
			<Row>
				<Col lg={5}>
					<img
						className="img-fluid"
						style={{ objectFit: "contain", width: "20px" }}
						src={UseMovieDatabaseImg(props.poster_path)}
						alt={`${props?.title}`}
					/>
				</Col>
				<Col></Col>
			</Row>
		</>
	);
};
