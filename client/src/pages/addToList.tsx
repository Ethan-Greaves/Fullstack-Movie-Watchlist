import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { SearchBar } from "../components/searchBar/searchBar";
import { SearchCard } from "../components/searchCard/searchCard";
import { PageAnimated } from "../wrappers/pageAnimated";

interface IMovieResults {
	results: {
		title: string;
		release_date: string;
		poster_path: string;
		id: number;
	}[];
}

export const AddToList = () => {
	const [hasSearched, setHasSearched] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>(
		localStorage.getItem("inputValue") as string
	);
	const [movieResults, setMovieResults] = useState<null | IMovieResults>(null);

	useEffect(() => {
		if (localStorage.getItem("inputValue") !== null) fetchData();
	}, []);

	const searchMovies = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		localStorage.setItem("inputValue", inputValue);
		fetchData();
	};

	const fetchData = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${
				process.env.REACT_APP_MOVIE_DATABASE_API_KEY
			}&language=en-US&query=${localStorage.getItem("inputValue")}&page=1&include_adult=false`
		);

		const json = await data.json();
		setMovieResults(json);
		setHasSearched(true);
	};

	console.log(movieResults);
	return (
		<PageAnimated>
			<SearchBar
				handleSubmit={searchMovies}
				placeholderText="Search for movies..."
				value={inputValue}
				setInputValue={setInputValue}
			/>
			<Container
				className={
					!hasSearched
						? `d-flex align-items-center text-center justify-content-center`
						: ``
				}
				style={{ height: "60vh" }}
			>
				{!hasSearched ? (
					<p>Results will appear when after you search</p>
				) : (
					movieResults?.results.map((movie) => {
						return (
							<SearchCard
								title={movie.title}
								date={movie.release_date}
								img={movie.poster_path}
								id={movie.id}
								key={movie.id}
							/>
						);
					})
				)}
			</Container>
		</PageAnimated>
	);
};
