import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./addButton.scss";

interface i_addButton {
	link: string;
	
}

export const AddButton = (props: i_addButton) => {
	return (
		<motion.div whileHover={{ scale: 0.9 }}>
			<Link to={props.link}>
				<Button variant="primary" className="add-button">
					<FontAwesomeIcon icon={faPlus} size="lg"></FontAwesomeIcon>
				</Button>
			</Link>
		</motion.div>
	);
};
