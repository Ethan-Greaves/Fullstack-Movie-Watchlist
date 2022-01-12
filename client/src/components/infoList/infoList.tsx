import React from "react";
import { Row, Col } from "react-bootstrap";

interface IInfoList {
	title: string;
	arr:
		| {
				name: string;
		  }[]
		| undefined;
}

export const InfoList = (props: IInfoList) => {
	return (
		<Row className="align-items-start">
			<Col lg={2}>
				<h5>{props.title}:</h5>
			</Col>
			<Col>
				{props.arr?.slice(0, 6).map((item, i, row) => {
					return i + 1 === row.length ? (
						<p className="pr-1 mb-0 d-inline" key={i}>{`${item.name} `}</p>
					) : (
						<p className="pr-1 mb-0 d-inline" key={i}>{`${item.name}, `}</p>
					);
				})}
			</Col>
		</Row>
	);
};
