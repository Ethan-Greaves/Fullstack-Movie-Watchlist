import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, FormGroup, Button, Row, Col } from "react-bootstrap";
import "./searchBar.scss";
interface ISearchBar {
	placeholderText?: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	value: string;
	setInputValue: (val: string) => void;
}

export const SearchBar = (props: ISearchBar) => {
	return (
		<div className="p-5 bg-primary">
			<Form onSubmit={props.handleSubmit}>
				<FormGroup>
					<Row className="align-items-center">
						<Col lg={11}>
							<Form.Control
								type="text"
								className="search-form"
								placeholder={props.placeholderText}
								value={props.value}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									props.setInputValue(e.target.value)
								}
								required
							/>
						</Col>
						<Col>
							<motion.div whileHover={{ scale: 1.2 }}>
								<Button variant="primary" className="search-btn" type="submit">
									<FontAwesomeIcon icon={faSearch} size="2x" />
								</Button>
							</motion.div>
						</Col>
					</Row>
				</FormGroup>
			</Form>
		</div>
	);
};
