import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

interface IUserCreateContext {
	isLoggedIn: boolean;
	userData: object | null;
}

interface IUserContext {
	children: React.ReactNode;
}

const userCreateContext = createContext<IUserCreateContext | null>(null);

export const UserContextProvider = (props: IUserContext) => {
	const [isLoggedIn, setisLoggedIn] = useState(false);
	const [userData, setUserData] = useState(null);

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
		<userCreateContext.Provider
			value={{
				isLoggedIn,
				userData,
			}}
		>
			{props.children}
		</userCreateContext.Provider>
	);
};
