import React from "react";
import { IconButton } from "../addButton/iconButton";
import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IRouteButton {
	icon: IconDefinition;
	link: string;
}

/**
 * A button that will take the user to anew route on the page
 * @param props 
 * @returns 
 */
export const RouteButton = (props: IRouteButton) => {
	return (
		<div>
			<Link to={props.link}>
				<IconButton icon={props.icon} />
			</Link>
		</div>
	);
};
