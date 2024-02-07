import React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { addService } from '../../store/server.js';

const AddService = observer((props) => {
  const [service, setService] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleClose = () => {
    props.setButtonOpen(false);
  };

  const handleServiceChange = (event) => {
    const newService = { ...service, [event.target.name]: event.target.value };
    setService(newService);
  };

  const validateForm = () => {
    const requiredFields = ['id', 'name', 'description', 'price'];
    const isValid = requiredFields.every(field => service[field] !== undefined && service[field] !== '');
    setIsFormValid(isValid);
  };

  const handleSaveClick = () => {
    addService(service);
    setService({});
    handleClose();
  };

  return (
    <>
      <Dialog open={props.buttonOpen} onClose={handleClose}>
        <DialogTitle>ADD SERVICE</DialogTitle>
        <DialogContent>
          <TextField margin="dense" id="id" name="id" label="id" type="number" fullWidth variant="standard" value={service.id || ''} onChange={handleServiceChange} onBlur={validateForm} />
          <TextField margin="dense" id="name" name="name" label="name" type="text" fullWidth variant="standard" value={service.name || ''} onChange={handleServiceChange} onBlur={validateForm} />
          <TextField margin="dense" id="description" name="description" label="description" type="text" fullWidth variant="standard" value={service.description || ''} onChange={handleServiceChange} onBlur={validateForm} />
          <TextField margin="dense" id="price" name="price" label="price" type="text" fullWidth variant="standard" value={service.price || ''} onChange={handleServiceChange} onBlur={validateForm} />
          <TextField margin="dense" id="duration" name="duration" label="duration" type="text" fullWidth variant="standard" value={service.duration || ''} onChange={handleServiceChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClick} disabled={!isFormValid}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
});

export default AddService;
