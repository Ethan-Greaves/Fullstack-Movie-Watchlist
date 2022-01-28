import React from "react";
import { LogoutButton } from "../../../components/buttons/logoutButton/logoutButton";

interface IHomepageLoggedIn {
	user: {
		username: string;
	} | null;
}

export const HomepageLoggedIn = (props: IHomepageLoggedIn) => {
	return (
		<div>
			{props.user!.username}
			<LogoutButton />
		</div>
	);
};
