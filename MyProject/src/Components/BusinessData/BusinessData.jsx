import * as React from 'react';
import { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import EditBusinessData from './EditBusinessData';
import { GetDetails } from '../../store/server';
import businessStore from '../../store/BusinessStore.js';

const BusinessData = (observer(({ isAdmin }) => {

    const [business, setBusiness] = useState({
        name: "SHOSHI WIGS",
        address: "Rashi 60 Bnei Brak",
        phone: "03-7552512",
        owner: "Shoshi Katz",
        description: "Dream wig design",
    });

    const handleUpdateBusiness = (editedBusiness) => {
        console.log("BusinessData", editedBusiness)
        setBusiness(editedBusiness);
    };

    const updateBusinessDetailsInView = (newDetails) => {
        setBusiness(newDetails);
    };

    useEffect(() => {
        GetDetails();
    }, [])

    return (
        <>
            {isAdmin && <EditBusinessData business={business} handleUpdateBusiness={handleUpdateBusiness} updateBusinessDetailsInView={updateBusinessDetailsInView} />}
            <br />
            <div>
                <h1>{businessStore.details.name}</h1>
                <p><strong>Address:</strong> {businessStore.details.address}</p>
                <p><strong>Phone:</strong> {businessStore.details.phone}</p>
                <p><strong>Owner:</strong> {businessStore.details.owner}</p>
                <p><strong>Description:</strong> {businessStore.details.description}</p>
            </div>

        </>
    )
}))

export default BusinessData
