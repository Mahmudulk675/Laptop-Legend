import React from 'react';
import { Form, FormControl, Nav , Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
    return (
        // <div>
            
        // <nav className="navbar navbar-expand-lg navbar-light">

        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul className="navbar-nav ms-auto">
        //             <li className="nav-item active">
        //                 <Link className="nav-link mr-5" to="/">Home</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5" to="/login">Login</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 " to="/dashboard">Dashboard</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 " to="/dashboard/addAdmin">Admin</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-success" to="/appointment">Add Appointment</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link mr-5 text-success" to="#">Contact Us</Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        
  
        // </div>


        <div>
        <Navbar bg="dark" variant="dark">
<Navbar.Brand href="#home">Laptop Legend</Navbar.Brand>
<Nav className="ms-auto">
<Link className="nav-link mr-5" to="/">Home</Link>
<Link className="nav-link mr-5" to="/login">Login</Link>
<Link className="nav-link mr-5 " to="/dashboard">Dashboard</Link>
<Link className="nav-link mr-5 " to="/dashboard/addAdmin">Admin</Link>

</Nav>
</Navbar>
        </div>
    );
};

export default NavbarHome;