import React, { useContext } from "react";
import { IconButton } from "../iconButton/iconButton";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { userContext } from "../../../contexts/userContext";

import axios from "axios";

export const LogoutButton = () => {
	const { setIsLoggedIn } = useContext(userContext);
	const handleClick = () => {
		axios({
			method: "POST",
			withCredentials: true,
			url: "http://localhost:3001/api/users/logout",
		}).then((res) => {
			setIsLoggedIn(false);
			console.log(res.data);
		});
	};

	return (
		<div onClick={handleClick}>
			<IconButton icon={faSignOutAlt} />
		</div>
	);
};
