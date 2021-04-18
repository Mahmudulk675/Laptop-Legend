import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from "./Components/DashboardAll/Dashboard/Dashboard";
import Home from './Components/HomeAll/Home/Home';
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivteRoute/PrivateRoute";
import ConfirmOrder from "./Components/OedersAll/ConfirmOrder/ConfirmOrder";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>  */}
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/order/:id">
          <ConfirmOrder></ConfirmOrder>
        </PrivateRoute>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
