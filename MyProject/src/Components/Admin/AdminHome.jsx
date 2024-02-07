import React, { useState } from 'react';
import { Button, colors } from '@mui/material'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
import BusinessData from '../BusinessData/BusinessData';

function AdminHome() {

    return (
        <div>
            <BusinessData isAdmin={true} />
            <br />
            <br />
            {<Button variant="contained">
                <Link to="./meetings">Meetings</Link>
            </Button>}
            &nbsp;&nbsp;&nbsp;&nbsp;
            {<Button variant="contained">
                <Link to="./services">Services</Link>
            </Button>}
            {/* <Outlet /> */}
        </div>
    )
}

export default AdminHome
