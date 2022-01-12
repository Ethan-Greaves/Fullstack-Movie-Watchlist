type Rating = 1 | 2 | 3 | 4 | 5;

const UseStarRating = (rating: number) => {
	return Math.round(rating / 1.8) as Rating;
};

export default UseStarRating;
