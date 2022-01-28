import React from "react";
import { IconButton } from "../addButton/iconButton";
import { faSignOutAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export const LogoutButton = () => {
	const handleClick = () => {
		axios({
			method: "POST",
			withCredentials: true,
			url: "http://localhost:3001/api/users/logout",
		});
	};

	return (
		<div onClick={handleClick}>
			<IconButton icon={faSignOutAlt} />
		</div>
	);
};
