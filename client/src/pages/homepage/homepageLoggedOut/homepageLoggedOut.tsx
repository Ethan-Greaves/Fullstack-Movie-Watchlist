import React from "react";
import { LoginButton } from "../../../components/buttons/loginButton/loginButton";

export const HomepageLoggedOut = () => {
	return (
		<div>
			No user
			<LoginButton />
		</div>
	);
};
