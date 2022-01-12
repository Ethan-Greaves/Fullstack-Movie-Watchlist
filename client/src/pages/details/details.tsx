import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AddButton } from "../../components/addButton/addButton";
import { StarsRating } from "../../components/starsRating/starsRating";
import { UseFetch } from "../../hooks/useFetch";
import UseMovieDatabaseImg from "../../hooks/useMovieDatabaseImg";
import UseReleaseYear from "../../hooks/useReleaseYear";
import { PageAnimated } from "../../wrappers/pageAnimated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./details.scss";
import { Review } from "../../components/review/review";
import UseStarRating from "../../hooks/useStarRating";
import { DetailsSection } from "../../wrappers/detailsSection";
import { ExitButton } from "../../components/exitButton/exitButton";
import { InfoList } from "../../components/infoList/infoList";

interface IMediaInfo {
	title: string;
	poster_path: string;
	backdrop_path: string;
	overview: string;
	runtime: number;
	genres: {
		name: string;
	}[];
	release_date: string;
	vote_average: number;
	vote_count: number;
}

interface ICast {
	cast: {
		name: string;
		character: string;
	}[];
	crew: {
		name: string;
		job: string;
	}[];
}

interface IReviews {
	results: {
		author_details: {
			name: string;
			rating: number;
			avatar_path: string;
		};
		author: string;
		content: string;
	}[];
}

export const Details = () => {
	const { pathname } = useLocation();
	const id = pathname.split("/").at(-1);
	const media = UseFetch<IMediaInfo>(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`
	)[0];
	const credits = UseFetch<ICast>(
		`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US`
	)[0];
	const reviews = UseFetch<IReviews>(
		`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_DATABASE_API_KEY}&language=en-US&page=1`
	)[0];

	const vote = media?.vote_average;
	const director = credits?.crew.filter((obj) => {
		return obj.job === "Director";
	});
	let reviewsWithRating = null;
	if (reviews?.results !== null) {
		reviewsWithRating = reviews?.results.filter((obj) => {
			return obj.author_details.rating !== null;
		});
	}

	return (
		<PageAnimated>
			<div className="jumbotron jumbotron-primary text-white">
				<Container>
					<Row>
						<Col lg={3}>
							<img
								className="img-fluid details-img"
								src={UseMovieDatabaseImg(media?.poster_path)}
								alt={`${media?.title}`}
							/>
						</Col>
						<Col className="text-left position-relative">
							<Row className="align-items-center">
								<Col lg={10}>
									<h1
										style={{ fontWeight: "400" }}
										className="display-4 font-weight-bold"
									>
										{media?.title}
									</h1>
								</Col>
								<Col>
									<ExitButton />
								</Col>
							</Row>

							{vote && (
								<div className="d-flex">
									<StarsRating count={UseStarRating(vote)} size="2x" />
									<p className="mt-1 ml-3">({media.vote_count})</p>
								</div>
							)}
							<h5 className="pt-2">{UseReleaseYear(media?.release_date)}</h5>

							<InfoList title={"Genres"} arr={media?.genres} />
							<InfoList title="Cast" arr={credits?.cast} />
							<InfoList title="Director" arr={director} />

							<div className="position-absolute bottom-0">
								<AddButton link="/" />
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<DetailsSection title="Plot">
				<p>{media?.overview}</p>
			</DetailsSection>
			<DetailsSection title="Reviews">
				{reviewsWithRating ? (
					reviewsWithRating?.slice(0, 3).map((review, i) => {
						return (
							<Review
								avatar={review.author_details.avatar_path!}
								author={review.author!}
								rating={review.author_details.rating!}
								eventKey={i}
								key={i}
								text={review.content!}
							/>
						);
					})
				) : (
					<p>There are no reviews for this movie.</p>
				)}
			</DetailsSection>

			<DetailsSection title="Misc">
				<p>Runtime: {media?.runtime} minutes</p>
				<p>Released: {media?.release_date}</p>
				<p>Production: {}</p>
			</DetailsSection>
		</PageAnimated>
	);
};
