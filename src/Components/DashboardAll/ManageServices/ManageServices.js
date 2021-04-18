import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ManageService.css'
const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices()
    }, []);

    const getServices = () =>{
        fetch('https://boiling-brushlands-55118.herokuapp.com/services')
        .then(response => response.json())
        .then(data => setServices(data))
    }

    const handleDelete = (id)=>{
        fetch(`https://boiling-brushlands-55118.herokuapp.com/dashboard/manageService/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            console.warn(result)
            getServices()
        })
    }
    return (
        <div>
            <h1>hiiiiiiiiiiiiiii</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map(service => 
                     <tr key={service.price}>
                        <td>{service.name}</td>
                        <td>{service.brandName}</td>
                        <td>{service.price}</td>
                        <td> 
                            <div className="d-flex justify-content-center">
                            <div className="icon">
                            <FontAwesomeIcon icon={faTrashAlt}  onClick={()=>handleDelete(service._id)} />
                            </div>
                            <div className="icon">                 
                            <FontAwesomeIcon  icon={faEdit} />
                            </div>
                            </div>

                        </td>
                    </tr>
                        )
                }
               
               
            </tbody>
        </Table>
    </div>
    );
};

export default ManageServices;