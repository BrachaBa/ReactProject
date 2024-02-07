import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import { observer } from 'mobx-react';
import businessStore from '../../store/BusinessStore.js'
import { EditDetails } from '../../store/server.js';

const EditBusinessData = (observer((props) => {

    const [open, setOpen] = useState(false);
    const { business, updateBusinessDetailsInView, handleUpdateBusiness } = props;
    const [editedBusiness, setEditedBusiness] = useState({
        name: businessStore.details.name,
        address: businessStore.details.address,
        phone: businessStore.details.phone,
        owner: businessStore.details.owner,
        description: businessStore.details.description,
    });

    useEffect(() => {
        setEditedBusiness({
            name: business.name,
            address: business.address,
            phone: business.phone,
            owner: business.owner,
            description: business.description,
        });
    }, [business]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedBusiness((prevBusiness) => ({
            ...prevBusiness,
            [name]: value,
        }));
    };

    const handleUpdate = () => {
        EditDetails(editedBusiness)
            .then((result) => {
                if (result === 'success') {
                    handleUpdateBusiness(editedBusiness);
                    updateBusinessDetailsInView(editedBusiness);
                    handleClose();
                } else {
                    alert('Failed to update details');
                }
            });
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <Button variant="contained" onClick={handleClickOpen}>
                        Edit details
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Edit details</DialogTitle>
                        <DialogContent>
                            <TextField margin="dense" id="name" name="name" label="Name" type="text" variant="standard" value={editedBusiness.name} onChange={handleChange}/>
                            <TextField margin="dense" id="address" name="address" label="address" type="text" variant="standard" value={editedBusiness.address} onChange={handleChange}/>
                            <TextField margin="dense" id="phone" name="phone" label="phone" type="text" variant="standard" value={editedBusiness.phone} onChange={handleChange}/>
                            <TextField margin="dense" id="owner" name="owner" label="owner" type="text" variant="standard" value={editedBusiness.owner} onChange={handleChange}/>
                            <TextField margin="dense" id="description" name="description" label="description" type="text" variant="standard" value={editedBusiness.description} onChange={handleChange}/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleUpdate}>Edit</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </ThemeProvider>
        </>
    );
}))

export default EditBusinessData;
