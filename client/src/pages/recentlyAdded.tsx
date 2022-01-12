import React, { useContext } from "react";
import { AddButton } from "../components/addButton/addButton";
import { Button, Container } from "react-bootstrap";
import { AbsoluteBottomRight } from "../wrappers/absoluteBottomRight";
import { PageAnimated } from "../wrappers/pageAnimated";
import { pageAnimationContext } from "../contexts/pageAnimationContext";
import testTransition from "./animations/testTransition";
import { StarsRating } from "../components/starsRating/starsRating";

export const RecentlyAdded = () => {
	const { changeAnimation } = useContext(pageAnimationContext);

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		//FIXME changing the state in the context causes component to re-render but not display anything
		// if (changeAnimation) changeAnimation(testTransition);
	};

	return (
		<PageAnimated>
			<Container>
				<h1>Homepage</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fuga iure.
					Iure, ea? Optio atque, nostrum accusantium alias deleniti eius? Iusto recusandae
					aliquam, facere unde labore repellendus dignissimos commodi sit?
				</p>


				<AbsoluteBottomRight>
					<AddButton link="/addToList" />
				</AbsoluteBottomRight>
			</Container>
		</PageAnimated>
	);
};
