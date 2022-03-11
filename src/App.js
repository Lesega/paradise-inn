import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import BookingSteps from './components/BookingSteps/index';
import Confirmation from './components/Confirmation/index';
import NotFound from './components/NotFound/index';
import DefaultLayout from './layouts/default/index';
import BookingRoutes from './routes/booking-routes';
import Signup from "./components/Signup/SignUp";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <BookingRoutes path="/" exact component={BookingSteps} />
        <Route exact path="/Signup">
            <Signup />

        <Route path="/confirmation">
          <DefaultLayout>
            <Confirmation />
          </DefaultLayout>
          <Route exact path="/login">
             <Login />
          </Route>
        </Route>
        <Route>
          <DefaultLayout>
            <NotFound />
          </DefaultLayout>
        </Route>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
