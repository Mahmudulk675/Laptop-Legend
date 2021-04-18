import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserPlus, faHome, faPen, faAtlas } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('https://boiling-brushlands-55118.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.customerEmail })
        })
            .then(res => res.json())
            .then(data => setAdmin(data));
    }, [])
    return (

        <div className="sidebar">

            { isAdmin ?
                <div>
                    <Link className="Link" to="/dashboard/addService"><FontAwesomeIcon icon={faAtlas} /> Add Service</Link>

                    <Link className="Link" to="/dashboard/addAdmin"><FontAwesomeIcon icon={faUserPlus} /> Add Admin</Link>

                    <Link className="Link" to="/dashboard/allBookings"><FontAwesomeIcon icon={faCalendar} /> AllBookings</Link>

                    <Link className="Link" to="/dashboard/manageService"> <FontAwesomeIcon icon={faPen} /> Manage Services</Link>
                </div>

                :
                <div>
                    <Link className="active Link" to="/dashboard/bookings"><FontAwesomeIcon icon={faCalendar} /> Bookings</Link>

                    <Link className="Link" to="/dashboard/review"><FontAwesomeIcon icon={faPen} /> Add Review</Link>
                </div>
            }
{/* 
            <Link className="active Link" to="/dashboard/bookings">Bookings</Link>

            <Link className="Link" to="/dashboard/review">Add Review</Link>

            <Link className="Link" to="/dashboard/addService">Add Service</Link>

            <Link className="Link" to="/dashboard/addAdmin">Add Admin</Link>

            <Link className="Link" to="/dashboard/allBookings">AllBookings</Link>

            <Link className="Link" to="/dashboard/manageService">Manage Services</Link>

            <Link className="Link" to="/">Home</Link> */}


        </div>
    );
};

export default Sidebar;