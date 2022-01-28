import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./addButton.scss";

interface IIconButton {
	icon: IconDefinition;
	isDisabled?: boolean;
}

export const IconButton = (props: IIconButton) => {
	return (
		<motion.div whileHover={{ scale: 0.9 }}>
			<Button variant="primary" className="add-button" disabled={props.isDisabled || false}>
				<FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
			</Button>
		</motion.div>
	);
};
