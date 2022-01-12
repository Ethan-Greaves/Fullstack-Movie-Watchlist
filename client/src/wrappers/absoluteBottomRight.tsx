import React from "react";

interface i_abr {
	children: React.ReactNode;
}

/**
 * Positions children absolutely and bottom right, also gives a margin
 * @param children - The child elements inside this component
 * @returns
 */
export const AbsoluteBottomRight = (props: i_abr) => {
	return (
		<div className="position-absolute d-flex justify-content-end pb-5 px-5 fixed-bottom">
			{props.children}
		</div>
	);
};
