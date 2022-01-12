import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import "./exitButton.scss";

export const ExitButton = () => {
	const history = useHistory();

	const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		history.goBack();
	};

	return (
		<Button onClick={handleOnClick} className="exit-button">
			<FontAwesomeIcon icon={faTimes} size="2x" color="white" />
		</Button>
	);
};
