const UseMovieDatabaseImg = (posterPath: string | undefined) => {
	return `https://image.tmdb.org/t/p/original${posterPath}`;
};

export default UseMovieDatabaseImg;
