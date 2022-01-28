import axios from "axios";
import React, { createContext, FC, useEffect, useState } from "react";

interface IUserCreateContext {
	isLoggedIn: boolean;
	userData: {
		username: string;
	} | null;
}

const defaultState: IUserCreateContext = {
	isLoggedIn: false,
	userData: null,
};

export const userContext = createContext<IUserCreateContext>(defaultState);

export const UserContextProvider: FC = ({ children }) => {
	const [isLoggedIn, setisLoggedIn] = useState(defaultState.isLoggedIn);
	const [userData, setUserData] = useState(defaultState.userData);

	useEffect(() => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:3001/api/users",
		}).then((res) => {
			if (res.status === 200) {
				setUserData(res.data);
				setisLoggedIn(true);
			}
		});
	}, []);

	return (
		<userContext.Provider
			value={{
				isLoggedIn,
				userData,
			}}
		>
			{children}
		</userContext.Provider>
	);
};
