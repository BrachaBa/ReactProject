import * as React from 'react';
import { observer } from 'mobx-react';
import { useState } from "react";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import AddMeeting from './AddMeeting.jsx';

const Meeting = (observer((props) => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Button variant="contained" onClick={handleClickOpen} color='primary'>Add meeting</Button>
                <AddMeeting open={open} failed={true} setOpen={setOpen} />
                <br />
            </ThemeProvider >
        </>
    );
}))

export default Meeting;