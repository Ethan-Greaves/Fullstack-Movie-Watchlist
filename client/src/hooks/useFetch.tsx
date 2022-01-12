import { useState, useEffect } from "react";

/**
 * A React hook designed to fetch data from an api and return it
 * @param {string} url - The url to fetch data from
 * @returns {any[]}
 */
export function UseFetch<T>(url: string): [T | null] {
	const [data, setData] = useState<T | null>(null);

	useEffect(() => {
		if (!url) return;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);

	return [data];
}

// export default UseFetch;
