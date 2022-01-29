import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoginButton } from "../../../components/buttons/loginButton/loginButton";
import { RouteButton } from "../../../components/buttons/routeButton/routeButton";
import { PageAnimated } from "../../../wrappers/pageAnimated";

export const HomepageLoggedOut = () => {
	return (
		<PageAnimated>
			<Container style={{ height: "100vh" }}>
				<div className="row justify-content-center align-items-center h-100">
					<div className="col">
						<div className="text-center">
							<h1 className="display-1 mb-0">{"the watchlist".toUpperCase()}</h1>
							<p className="mt-0">
								Explore thousands of films or TV shows and keep a list of the ones you want to
								watch!
							</p>
						</div>

						<div className="row justify-content-center mt-5">
							<div className="col col-lg-1">
								<RouteButton icon={faUserPlus} link={"/register"} />
							</div>
							<div className="col col-lg-1">
								<LoginButton />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</PageAnimated>
	);
};
