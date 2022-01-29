import React, { useContext, useState } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";
import { PageAnimated } from "../wrappers/pageAnimated";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { userContext } from "../contexts/userContext";

export const Login = () => {
	const { isLoggedIn } = useContext(userContext);
	const [usernameInputValue, setUsernameInputValue] = useState<string>("");
	const [passwordInputValue, setPasswordInputValue] = useState<string>("");
	const [flashMessage, setFlashMessage] = useState<string>("");

	const spaceBetween = "mt-4";
	let history = useHistory();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios({
			method: "POST",
			data: {
				username: usernameInputValue,
				password: passwordInputValue,
			},
			withCredentials: true,
			url: "http://localhost:3001/api/users/login",
		}).then((res) => {
			console.log(res.data.success);
			if (res.data.success) history.push("/");
			else {
				setFlashMessage(res.data.failedMsg);
				setUsernameInputValue("");
				setPasswordInputValue("");
			}
		});
	};

	return (
		<PageAnimated>
			<Container style={{ height: "100vh" }}>
				<Row className="h-100 justify-content-center align-items-center">
					<Col lg={6}>
						<h1 className="text-center mb-4">
							{"Login to your account".toUpperCase()}
						</h1>
						<Card style={{ width: "32rem", height: "" }} className="py-3 px-5 shadow">
							<p className="text-center mt-3" style={{ color: "red" }}>
								{flashMessage}
							</p>
							<Form className={`h-100 ${spaceBetween}`} onSubmit={handleSubmit}>
								<Form.Group>
									<Form.Label className="font-weight-bold">Username:</Form.Label>
									<Form.Control
										type="text"
										required
										value={usernameInputValue}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											setUsernameInputValue(e.target.value)
										}
									/>
								</Form.Group>
								<Form.Group className={`${spaceBetween}`}>
									<Row className="justify-space-between">
										<Col lg={6}>
											<Form.Label className="font-weight-bold">
												Password:
											</Form.Label>
										</Col>
										<Col lg={6} className="justify-item-end">
											<a
												href="https://www.google.com"
												// alt="Forgot password?"
												style={{ textDecoration: "none" }}
											>
												Forgot your password?
											</a>
										</Col>
									</Row>
									<Form.Control
										type="password"
										required
										value={passwordInputValue}
										onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
											setPasswordInputValue(e.target.value)
										}
									/>
								</Form.Group>
								<Form.Group
									className={`mb-3 ${spaceBetween} font-weight-bold`}
									controlId="formBasicCheckbox"
								>
									<Form.Check type="checkbox" label="Stay signed in?" />
								</Form.Group>
								<Button
									variant="primary"
									type="submit"
									className={`d-block w-100 ${spaceBetween}`}
								>
									Sign in
								</Button>

								<div className={`text-center ${spaceBetween}`}>
									<a
										href="https://www.google.com"
										// alt="Google homepage"
										style={{ textDecoration: "none" }}
									>
										Use single-sign-on (Google) instead
									</a>
								</div>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</PageAnimated>
	);
};
