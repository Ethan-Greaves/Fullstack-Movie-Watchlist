import React from "react";
import { Star } from "../star/star";

type Rating = 1 | 2 | 3 | 4 | 5;
export type SizeProp =
	| "xs"
	| "lg"
	| "sm"
	| "1x"
	| "2x"
	| "3x"
	| "4x"
	| "5x"
	| "6x"
	| "7x"
	| "8x"
	| "9x"
	| "10x";
interface IStarsRating {
	count: Rating;
	size?: SizeProp;
}
export const StarsRating = (props: IStarsRating) => {
	const starRating = [];

	for (let i = 1; i <= 5; i++) {
		i <= props.count ? starRating.push(true) : starRating.push(false);
	}

	return (
		<div className="d-flex">
			{starRating.map((star, i) => {
				return star === true ? (
					<Star key={i} isGold={true} size={props.size} />
				) : (
					<Star key={i} isGold={false} size={props.size} />
				);
			})}
		</div>
	);
};
