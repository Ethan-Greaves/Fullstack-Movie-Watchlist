const UseReleaseYear = (releaseDate: string | undefined) => {
	return releaseDate?.split("-")[0];
};

export default UseReleaseYear;
