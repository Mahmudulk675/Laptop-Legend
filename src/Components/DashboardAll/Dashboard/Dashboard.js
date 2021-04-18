import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import AddAdmin from '../AddAdmin/AddAdmin';
import AddService from '../AddService/AddService';
import Bookings from '../Bookings/Bookings';
import ManageServices from '../ManageServices/ManageServices';
import AllBookings from '../AllBookings/AllBookings';
import Review from '../Review/Review';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            
            

            <Router>
            <Sidebar></Sidebar>
            <div className="content">
              
            <Switch>
          <Route path="/dashboard/bookings">
            <Bookings></Bookings>
          </Route>
          <Route path="/dashboard/addService">
            <AddService></AddService>
          </Route>
          <Route path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/dashboard/review">
            <Review></Review>
          </Route>
          <Route path="/dashboard/manageService">
             <ManageServices></ManageServices>
          </Route>
          <Route path="/dashboard/allBookings">
             <AllBookings></AllBookings>
          </Route>
        </Switch>

      </div>
    </Router>
              
            </div>
        // </div>
    );
};

export default Dashboard;