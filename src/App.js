import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvides from './Context/AuthProvides';

import About from './Pages/About/About';
import Doctors from './Pages/Doctors/Doctors';
import LogIn from './Pages/LogIn/LogIn';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Shared/Home/Home';
import Visits from './Pages/Visit/Visits';


function App() {
  return (
    <div>
      <AuthProvides>

        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/visit/:serviceId">
              <Visits></Visits>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvides>

    </div>
  );
}

export default App;
