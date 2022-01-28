import React, { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { HomepageLoggedIn } from "./homepageLoggedIn/homepageLoggedIn";
import { HomepageLoggedOut } from "./homepageLoggedOut/homepageLoggedOut";

export const Homepage = () => {
	const { isLoggedIn, userData } = useContext(userContext);

	return (
		<div>
			{isLoggedIn ? (
				<HomepageLoggedIn user={userData} />
			) : (
				<HomepageLoggedOut />
			)}
		</div>
	);
};
