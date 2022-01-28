import React, { useContext, useEffect, useState } from "react";
import { IconButton } from "../components/buttons/addButton/iconButton";
import { Button, Container } from "react-bootstrap";
import { AbsoluteBottomRight } from "../wrappers/absoluteBottomRight";
import { PageAnimated } from "../wrappers/pageAnimated";
import { pageAnimationContext } from "../contexts/pageAnimationContext";
import testTransition from "./animations/testTransition";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StarsRating } from "../components/starsRating/starsRating";
import { RouteButton } from "../components/buttons/routeButton/routeButton";
import axios from "axios";
import { LogoutButton } from "../components/buttons/logoutButton/logoutButton";

export const RecentlyAdded = () => {
	const { changeAnimation } = useContext(pageAnimationContext);
	const [data, setData] = useState<any>();

	const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		//FIXME changing the state in the context causes component to re-render but not display anything
		// if (changeAnimation) changeAnimation(testTransition);
	};

	useEffect(() => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:3001/api/users",
		}).then((res) => {
			setData(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<PageAnimated>
			<Container>
				<h1>Homepage</h1>
				{data ? <h1>Welcome Back {data.username}</h1> : null}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fuga iure.
					Iure, ea? Optio atque, nostrum accusantium alias deleniti eius? Iusto recusandae
					aliquam, facere unde labore repellendus dignissimos commodi sit?
				</p>
				<LogoutButton />

				<AbsoluteBottomRight>
					<RouteButton link="/addToList" icon={faPlus} />
				</AbsoluteBottomRight>
			</Container>
		</PageAnimated>
	);
};
