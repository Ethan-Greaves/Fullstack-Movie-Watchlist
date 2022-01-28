import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Archive } from "./pages/archive";
import { Details } from "./pages/details/details";
import { RecentlyAdded } from "./pages/recentlyAdded";
import { Login } from "./pages/login";
import { Movies } from "./pages/movies";
import { Register } from "./pages/register";
import { Series } from "./pages/series";
import { Settings } from "./pages/settings";
import { AddToList } from "./pages/addToList";
import { PageAnimationProvider } from "./contexts/pageAnimationContext";
import { UserContextProvider } from "./contexts/userContext";

function App() {
	const location = useLocation();

	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<PageAnimationProvider>
					<UserContextProvider>
						<Route path="/" exact component={RecentlyAdded} />
						<Route path="/addToList" exact component={AddToList} />
						<Route path="/archive" exact component={Archive} />
						<Route path="/details/:id" exact component={Details} />
						<Route path="/login" exact component={Login} />
						<Route path="/movies" exact component={Movies} />
						<Route path="/register" exact component={Register} />
						<Route path="/series" exact component={Series} />
						<Route path="/settings" exact component={Settings} />
					</UserContextProvider>
				</PageAnimationProvider>
			</Switch>
		</AnimatePresence>
	);
}

export default App;
