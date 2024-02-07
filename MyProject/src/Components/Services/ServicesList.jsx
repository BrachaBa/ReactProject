import { observer } from 'mobx-react';
import { useEffect } from 'react';
import dataStore from '../../store/store.js';
import Meeting from '../Meeting/Meeting.jsx';
import Service from './Service.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getServices } from '../../store/server.js';

const ServiceList = (observer(({ isAdmin }) => {

    console.log(isAdmin)

    useEffect(() => {
        if (!dataStore.services.length) {
            getServices();
        }
    }, []);

    return (
        <>
            <br />
            <br />
            {dataStore.services.map((service, index) => {
                return <><Card key={index} sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Type of service:  {service.name}</Typography>
                        <br />
                        <Typography variant="h6">
                            {service.description}</Typography>
                        <br />
                        <Typography variant="h6">
                            Price:  {service.price} </Typography>
                        <br />
                        {isAdmin ? null : <><br /> <br /><Meeting /></>}
                    </CardContent>
                </Card>
                </>
            })}
            {isAdmin ? <Service /> : null}
        </>
    )
}))

export default ServiceList