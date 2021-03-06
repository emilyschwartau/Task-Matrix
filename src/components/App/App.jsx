import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ListViewPage from '../ListViewPage/ListViewPage';
//import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import TaskDetails from '../TaskDetails/TaskDetails';
import GraphPage from '../GraphPage/GraphPage';
import EditPage from '../EditPage/EditPage';
import OverdueTaskArchive from '../OverdueTaskArchive/OverdueTaskArchive';
import CompletedTasksArchive from '../CompletedTasksArchive/CompletedTasksArchive';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* UNPROTECTED ROUTE */}
          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* PROTECTED ROUTES */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ListViewPage else shows LoginPage
            exact
            path="/list-view"
          >
            <ListViewPage />
          </ProtectedRoute>

          <ProtectedRoute
            //graph view page
            exact
            path="/graph-view"
          >
            <GraphPage />
          </ProtectedRoute>

          <ProtectedRoute
            //add task form
            exact
            path="/add-task-form"
          >
            <AddTaskForm />
          </ProtectedRoute>

          <ProtectedRoute
            //details page
            exact
            path="/details/:id"
          >
            <TaskDetails />
          </ProtectedRoute>

          <ProtectedRoute
            //edit task form
            exact
            path="/edit/:id"
          >
            <EditPage />
          </ProtectedRoute>

          <ProtectedRoute
            //overdue tasks page
            exact
            path="/overdue-tasks"
          >
            <OverdueTaskArchive />
          </ProtectedRoute>

          <ProtectedRoute
            //completed tasks page
            exact
            path="/completed-tasks"
          >
            <CompletedTasksArchive />
          </ProtectedRoute>

          <Route
          //login page
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            //register page
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            //home page (defunct/ need to delete)
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Login page
              <LoginPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
