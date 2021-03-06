import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./style.module.scss";
import HeaderContainer from "../Header/";
import TechContainer from "../Tech";
import Terms from "../Terms/view";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "../../Utils/Constants";
import { getToken } from "../../Utils/Functions";
import { SIGNUP_USER_SUCCESS } from "../../Redux/Actions";

const Home = React.lazy(() => import("../Home/view"));
const SignUpFormContainer = React.lazy(() => import("../SignupForm"));

App.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	actionDispatcher: PropTypes.func.isRequired
};


function App({ isLogged, actionDispatcher }) {

	useEffect(() => {
		const token = getToken();
		if (token) actionDispatcher(SIGNUP_USER_SUCCESS);
	}, [actionDispatcher]);

	return (
		<div className={styles.main_container}>

			<Router>
				<HeaderContainer />
				<Switch>
					<Route path={ROUTES.home} exact component={Home} />
					<Route path={ROUTES.signup} exact render={() => (isLogged ? <Redirect to={ROUTES.techs} /> : <SignUpFormContainer />)} />
					<Route path={ROUTES.terms} exact component={Terms} />

					{(isLogged || getToken()) && <Route path={ROUTES.techs} component={TechContainer} />}

					<Redirect to={ROUTES.home} />
				</Switch>
			</Router>

		</div>
	);
}

export default App;
