import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { LogoutButton } from "../../../components/buttons/logoutButton/logoutButton";
import { RouteButton } from "../../../components/buttons/routeButton/routeButton";
import { AbsoluteBottomRight } from "../../../wrappers/absoluteBottomRight";

interface IHomepageLoggedIn {
	user: {
		username: string;
	} | null;
}

export const HomepageLoggedIn = (props: IHomepageLoggedIn) => {
	return (
		<div>
			{props.user && props.user.username}
			<LogoutButton />
			<AbsoluteBottomRight>
				<RouteButton link="/addToList" icon={faPlus} />
			</AbsoluteBottomRight>
		</div>
	);
};
