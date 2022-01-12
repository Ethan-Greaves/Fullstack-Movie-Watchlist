import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./star.scss";
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

interface IStar {
	size?: SizeProp;
	isGold: boolean;
}

export const Star = (props: IStar) => {
	return (
		<div>
			<FontAwesomeIcon
				className={props.isGold ? "gold-star" : "no-star"}
				icon={faStar}
				size={props.size}
			/>
		</div>
	);
};
