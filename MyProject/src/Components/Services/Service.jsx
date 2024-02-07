import * as React from 'react';
import { useState } from "react";
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import AddService from './AddService.jsx';

const Service = (observer(() => {

    const [buttonOpen, setButtonOpen] = useState(false);

    const handleClickOpen = () => {
        setButtonOpen(true);
    };

    return (
        <>
            < Button variant="contained" onClick={handleClickOpen} > Add Service </Button >
            <AddService buttonOpen={buttonOpen} setButtonOpen={setButtonOpen} />
        </>
    )
}
))

export default Service