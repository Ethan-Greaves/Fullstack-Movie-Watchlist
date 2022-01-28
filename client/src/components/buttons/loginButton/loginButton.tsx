import React from "react";
import { RouteButton } from "../routeButton/routeButton";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export const LoginButton = () => {
	return <RouteButton icon={faSignInAlt} link={"/login"} />;
};
