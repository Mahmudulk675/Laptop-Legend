import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);

    const handleChange = (e, id) => {
        const newStatus = e.target.value;
        // console.log('value', newStatus, id);
        fetch(`https://boiling-brushlands-55118.herokuapp.com/updateStatus/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({status: newStatus})
        })
        .then(response => response.json())
        .then(data =>console.log(data))
        
    }
        

    useEffect(() => {
        fetch('https://boiling-brushlands-55118.herokuapp.com/dashboard/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])
    console.log(allBookings);
    return (
        <div className="container">
            <h1>AllBookings</h1>
            <Table striped bordered hover size="md" className="mt-5">
                <thead>
                    <tr>

                        <th>Service Name</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Payment id</th>
                        <th>booking Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allBookings.map(booking =>
                            <tr key={booking._id} >
                                <td>{booking.name}</td>
                                <td>{booking.shipment.name}</td>
                                <td>{booking.shipment.email}</td>
                                <td>{booking.paymentId}</td>
                                <td>
                                    <select value={booking.status} onChange={(e)=> handleChange(e,booking._id)} class="form-select" aria-label="Default select example">
                                        <option  selected>Set Status</option>
                                        <option  value="Pending">Pending</option>
                                        <option  value="On Going">On Going</option>
                                        <option value="Done">Done</option>
                                        <option value="Cancel">Canceled</option>
                                    </select>
                                  
                                </td>
                            </tr>

                        )
                    }
                    {/* 

<tr>
  <td>3</td>
  <td colSpan="2">Larry the Bird</td>
  <td>@twitter</td>
</tr> */}
                </tbody>
            </Table>



                                {/* <h2>You have {allBookings.length}</h2>
        {
            allBookings.map((booking) => <li>
                {booking.customerName} 
                 {booking.name} 
                 {booking.price}
                 {booking.bookingTime}
                </li>)
        } */}
        </div>
                        );
};

export default AllBookings;