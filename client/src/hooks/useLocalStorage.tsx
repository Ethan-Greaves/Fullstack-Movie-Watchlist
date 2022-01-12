import React from "react";

// interface IUseLocalStorage {
// 	key: string;
// 	initialValue: string;
// }

export const UseLocalStorage = (key: string, initialValue: string) => {
	const [value, setValue] = React.useState(() => {
		try {
			const savedItem = localStorage.getItem(key);
			if (savedItem === null) {
				localStorage.setItem(key, JSON.parse(initialValue));
			}
			return savedItem;
		} catch (error) {}
	});

	React.useEffect(() => {
		const rawValue = JSON.stringify(value);
		localStorage.setItem(key, rawValue);
	}, [key, value]);

	return [value, setValue];
};
