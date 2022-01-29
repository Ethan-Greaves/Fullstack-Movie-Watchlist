import axios from "axios";
import React, { createContext, FC, useEffect, useState } from "react";

interface IUserCreateContext {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	userData: {
		username: string;
	} | null;
}

const defaultState: IUserCreateContext = {
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	userData: null,
};

export const userContext = createContext<IUserCreateContext>(defaultState);

export const UserContextProvider: FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(defaultState.isLoggedIn);
	const [userData, setUserData] = useState(defaultState.userData);

	useEffect(() => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:3001/api/users",
		}).then((res) => {
			if (res.status === 200) {
				setUserData(res.data);
				setIsLoggedIn(true);
			}
		});
	}, []);

	console.log(isLoggedIn);

	return (
		<userContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				userData,
			}}
		>
			{children}
		</userContext.Provider>
	);
};
