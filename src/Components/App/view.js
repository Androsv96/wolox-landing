import styles from './style.module.scss';
import Home from '../Home/view';
import Header from '../Header';
import Signup from '../SignupForm/view';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from '../../Utils/Constants';

function App() {
  return (
    <div className={styles.main_container}>

      <Router>
        <Header />
        <Switch>
          <Route path={ROUTES.home} exact component={Home} />
          <Route pah={ROUTES.signup} exact component={Signup} />

          <Redirect to={ROUTES.home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
